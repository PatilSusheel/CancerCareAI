# Breast Cancer Prediction Web Application with MongoDB, React, Flask, and Deep Learning

## Introduction
Welcome to our comprehensive web application designed to assist users in predicting breast cancer outcomes using histopathology images of breasts. Our application seamlessly integrates MongoDB for data storage, React for the frontend user interface, Flask for the backend API, and a deep learning model for prediction.

## Installation
### 1. clone the repository:
``` bash
git clone https://github.com/PatilSusheel/CancerCareAI.git
cd CancerCareAI
```
### 2. commands to start frontend:
This will install all the node_modules into the folder
``` bash
npm i
npm start
```
### 3. commands to start backend:
```bash
cd Backend
pip install -r requirements.txt
python app.py
```

## Features
- **User Authentication:** Secure registration and login system to access the application's features.
- **Appointment Booking:** Schedule appointments for breast cancer screenings.
- **Histopathology Image Upload:** Upload histopathology images of breast tissue for analysis.
- **Prediction Model Integration:** Process uploaded images through a deep learning model to provide predictive outcomes.

## Technologies Used
- **MongoDB:** NoSQL database for storing user data, appointment details, and uploaded images.
- **React:** JavaScript library for building interactive user interfaces.
- **Flask:** Lightweight Python web framework for developing the backend API.
- **Deep Learning Model:** Trained on histopathology images of breasts to classify potential breast cancer cases.

## Project Structure
- **Frontend:** Contains React application files responsible for the user interface.
- **Backend:** Consists of Flask API endpoints for handling user authentication, appointment booking, image upload, and prediction.
- **Model:** Includes deep learning model files along with preprocessing or feature extraction scripts.

## Future Enhancements
- **Additional Features:** Integrate user notifications for appointment reminders.
- **Model Optimization:** Improve prediction model accuracy and performance through further training and optimization.
- **UI Enhancement:** Enhance user interface for a more intuitive and user-friendly experience.
- **Extended Support:** Add support for additional types of cancer prediction beyond breast cancer.

## Conclusion
Our Breast Cancer Prediction Web Application provides a valuable tool for users to schedule screenings, upload histopathology images, and receive predictive outcomes using advanced deep learning techniques. By leveraging MongoDB, React, Flask, and a predictive model, we aim to contribute to early detection and improved outcomes in breast cancer diagnosis.

## Note
You need histopathology images as input for the model
you can view it in [test_images folder](https://github.com/PatilSusheel/CancerCareAI/tree/main/test_images)

Feel free to contribute and make this project even better!
