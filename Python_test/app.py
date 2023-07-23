from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def countdown():
    count = list(range(10, -1, -1))
    return render_template('countdown.html', count=count)

if __name__ == '__main__':
    app.run(debug=True)


