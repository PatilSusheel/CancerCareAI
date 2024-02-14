from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from flask_pymongo import PyMongo
import jwt
from datetime import datetime, timedelta
from flask_bcrypt import generate_password_hash, check_password_hash
from model import load_my_model

app = Flask(__name__)
CORS(app)

MONGO_URI = "YOUR_MONGO_URI"
app.config['MONGO_URI'] = MONGO_URI
mongo = PyMongo(app)
app.config['SECRET_KEY'] = 'YOUR_SECRET_KEY'

if mongo.db is None:
    print("MongoDB connection failed")
else:
    model = load_my_model()
    print("MongoDB connection successful")

user_predictions = {}

def predict_image(model, image_array):
    try:
        img = image_array
        img = cv2.resize(img, (224, 224))
        img = np.expand_dims(img, axis=0)
        predictions = model.predict(img)
        threshold = 0.5
        print(predictions)
        if predictions[0, 0] > threshold:
            result = {'prediction': 'malignant'}
        else:
            result = {'prediction': 'benign'}

        return result
    except Exception as e:
        return {'error': str(e)}


@app.route("/", methods=['GET', 'POST'])
def welcome():
    return {"response": "Hello From Server"}, 200


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    firstname = data['firstname']
    surname = data['surname']
    email = data['email']
    password = data['password']
    gender = data['gender']
    phonenumber = data['PhoneNumber']
    hashed_password = generate_password_hash(password).decode('utf-8')
    mongo.db.users.insert_one(
        {"firstname": firstname, "surname": surname, "email": email, "password": hashed_password, "gender": gender,
         "PhoneNumber": phonenumber})
    return jsonify({"success": True})


@app.route('/appointment', methods=['POST'])
def appointment():
    data = request.get_json()
    patientname = data['patientname']
    docname = data['docname']
    hosname = data['hosname']
    slot = data['slot']
    phonenumber = data['PhoneNumber']
    s1, s2 = slot.split('T')
    slot = s1 + ", time: " + s2
    mongo.db.patients.insert_one(
        {"PatientName": patientname, "DoctorName": docname, "HospitalName": hosname, "slot": slot,
         "PhoneNumber": phonenumber})
    return jsonify({"success": True,"patientname":patientname})


@app.route('/login', methods=['POST', 'GET'])
def login():
    try:
        query = request.get_json()
        if 'email' in query and 'password' in query:
            email = query['email']
            password = query['password']
            user = mongo.db.users.find_one({"email": email})
            firstname = user['firstname']
            hashed_password = user['password']
            if user and check_password_hash(hashed_password, password):
                payload = {
                    'username': firstname,
                    'exp': datetime.utcnow() + timedelta(hours=1)
                }
                auth = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
                response_data = {"success": True, "firstname": firstname, "auth": auth}
                return jsonify(response_data), 200
            else:
                response_data = {'status': 'error', 'message': 'Invalid email or password'}
                return jsonify(response_data), 401
        else:
            response_data = {'status': 'error', 'message': 'Email and password are required'}
            return jsonify(response_data), 400

    except Exception as e:
        response_data = {'status': 'error', 'message': str(e)}
        return jsonify(response_data), 500


@app.route('/predict', methods=['POST'])
def upload_image():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400

        image_file = request.files['image']
        image_array = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), cv2.IMREAD_COLOR)

        if image_file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        result = predict_image(model, image_array)
        user_id = request.headers.get('Authorization')
        if user_id not in user_predictions:
            user_predictions[user_id] = []
        user_predictions[user_id].append(result)

        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/logout', methods=['POST'])
def logout_user():
    data = request.get_json()
    results = {}
    if 'firstname' in data:
        firstname = data['firstname']
        patientname = data['patientname']
        user_id = request.headers.get('Authorization')
        if user_id in user_predictions:
            predictions = user_predictions[user_id]
            i=1
            for pred in predictions:
                print(pred)
                results[f'Prediction {i}'] = pred['prediction']
                i=i+1
            mongo.db.results.insert_one({
            "Username": firstname,
            "Patient Name": patientname,
            "Test Results": results,
            "Appointment Taken on": datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            })

            del user_predictions[user_id]

    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)