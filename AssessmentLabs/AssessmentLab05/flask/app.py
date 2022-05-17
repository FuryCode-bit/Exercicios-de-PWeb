import requests
import string
from flask import Flask, render_template, request, redirect, flash

from templates.map import getMap

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'thisisasecret'

def get_weather_data(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=b21a2633ddaac750a77524f91fe104e7"
    r = requests.get(url).json()
    print(r)
    return r

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        
        return render_template('weather2.html')
    else:
        try:
            new_city = request.form.get('city')
            new_city = new_city.lower()
            new_city = string.capwords(new_city)
            data = get_weather_data(new_city)
            long = data["coord"]["lon"]
            lat = data["coord"]["lat"]

            getMap(lat=lat, lon=long)
            
            if new_city != "":
                flash('Success!', 'success')
                return render_template('results.html', data = data)
        except:
            flash('Something went wong!', 'error')
            return render_template('weather2.html')
@app.route('/map')
def map():
    return render_template('map.html')