from flask import Flask, request, jsonify, redirect
from app import Title_Model

app = Flask(__name__)

app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.gif']
app.config['UPLOAD_PATH'] = './public'

model = Title_Model()


@app.route('/')
def index():
    return jsonify(
        username="g.user.username",
        email="g.user.email",
        id="g.user.id"
    )


@app.route('/ml', methods=['POST'])
def index_ml():
    question = request.args.get("question")
    num = request.args.get("num")
    print("** our path", question, int(num))
    result = model.predict(question, num)
    print(result)
    return jsonify(result=result)


if __name__ == '__main__':
    app.run(debug=False)
