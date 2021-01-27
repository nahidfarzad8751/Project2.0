from flask import Flask, render_template
from flask import request, url_for, render_template, redirect

# Create an instance of our Flask app.
app = Flask(__name__)

# Set route
@app.route('/')
def index():
    print('STARTING! '*20)
    mapbox_access_token = "pk.eyJ1IjoiZGF2aWRjb3kiLCJhIjoiY2tqcHU1YzBzOHY4ZjJxcWpkNGI5b2h2MSJ9.CsPttIW0Q41kP2uOBN6n8g"
    return render_template('index.html',
        mapbox_access_token=mapbox_access_token)


if __name__ == "__main__":
    app.run(debug=True)
