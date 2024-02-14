from keras.models import load_model

def load_my_model():
    print("loading model....")
    model = load_model('YOUR_MODEL_PATH')
    print("model loaded")
    return model