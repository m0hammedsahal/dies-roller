from flask import Flask, render_template, request
import random

app = Flask(__name__)



dice_image = [
    "dice1.png",
    "dice2.jpeg",
    "dice3.webp",
    "dice4.jpeg",
    "dice5.webp",
    "dice6.webp",
]



@app.route("/")
def dice_game():
    return render_template("index.html", dice_img = dice_image[0])

@app.route("/roll", methods=["POST"])
def roll():
    #genetate random number
    random_num = random.randint(0,5)
    return render_template("index.html", dice_img = dice_image[random_num])

if __name__ ==  "__main__":
    app.run(debug=True)