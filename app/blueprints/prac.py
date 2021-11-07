from flask import Blueprint, render_template

prac_bp = Blueprint('prac', __name__)

@prac_bp.route('/')
def home():

    return render_template('teams.html')