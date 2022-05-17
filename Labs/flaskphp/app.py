from flask import Flask, redirect, session, render_template, request
from db import conexao, insertSQL
import random

app = Flask(__name__)

app.secret_key = 'Python > PHP'
app.config['SESSION_TYPE'] = 'filesystem'
app.config['MYSQL_UNIX_SOCKET'] = 'TCP'

class City:
    def __init__(self, nome, pais, continente):
        self.nome = nome
        self.pais = pais
        self.continente = continente

Shanghai = City("Shanghai", "China", "Asia")
Lagos = City("Lagos", "Nigeria", "Africa")
Delhi = City("Delhi", "India", "Asia")
Istanbul = City("Istanbul", "Turquia", "Europa")
Tokyo = City("Tokyo", "Japão", "Asia")
Mumbai = City("Mumbai", "India", "Asia")
Moscow = City("Moscow", "Russia", "Asia")
saoPaulo = City("São Paulo", "Brasil", "América do Sul")
Beijing = City("Beijing", "China", "Asia")
Shenzhen = City("Shenzhen", "China", "Asia")
Seoul = City("Seoul", "Coreia do Sul", "Asia")
newYork = City("New York City", "America", "America do Norte")
London = City("London", "England", "Europa")

array = [Shanghai, Lagos, Delhi, Istanbul, Tokyo, Mumbai, Moscow, saoPaulo, Beijing, Shenzhen, Seoul, newYork, London]

nums = random.sample(range(51), 50) 
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/oitoUm")
def oitoUm():
    return render_template("oitoum.html", cities = array)

@app.route("/oitoDois")
def oitoDois():
    return render_template("oitodois.html", cities = array)

@app.route("/oitoTres")
def oitoTres():
    print(nums)
    return render_template("oitotres.html", array = nums)

@app.route("/oitoTres2" , methods=['POST'])
def action():
    
    shuffled = random.sample(range(51), 50)

    print(shuffled)
    return render_template("oitotres.html", array = shuffled)

@app.route('/oitoQuatro')
def visits():
    if 'visits' in session:
        session['visits'] = session.get('visits') + 1  # reading and updating session data
    else:
        session['visits'] = 1 # setting session data
    return "Total visits: {}".format(session.get('visits'))

@app.route("/oitoCinco")
def oitoCinco():
    rows = conexao("SELECT * FROM info")

    return render_template("oitoQuatro.html", rows = rows)

@app.route('/login', methods=["GET", "POST"])
def login():
    global usuario

    if request.method == 'POST':

        nome = request.form.get('username')
        passe = request.form.get('password')

        print(nome)
        print(passe)
        
        insertSQL('pweb', f"INSERT INTO users (username, password) VALUES('{nome}','{passe}')")
        return "User: " + nome + " | Password: " + passe

    elif request.method == 'GET':
        return render_template("login.html")