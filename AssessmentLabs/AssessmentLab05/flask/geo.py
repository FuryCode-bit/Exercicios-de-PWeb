from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="fury")
location = geolocator.geocode("lisboa")
print(location.address)
print((location.latitude, location.longitude))
print(location.raw)