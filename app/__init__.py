from flask import Flask
from app.blueprints.prac import prac_bp

def create_app():

    app = Flask(__name__)
    app.register_blueprint(prac_bp)

    return app 