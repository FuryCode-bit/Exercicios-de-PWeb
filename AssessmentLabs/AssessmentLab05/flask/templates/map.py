import folium


def getMap(lat, lon):
    m = folium.Map(location=[lat, lon])
    m.save("map.html")
