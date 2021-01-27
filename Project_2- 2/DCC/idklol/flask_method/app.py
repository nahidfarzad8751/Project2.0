from flask import Flask, render_template

# Create an instance of our Flask app.
app = Flask(__name__)

# Set route
@app.route('/')
def index():
    print('STARTING! '*20)

    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
