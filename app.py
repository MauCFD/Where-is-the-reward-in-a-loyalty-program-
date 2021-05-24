from flask import Flask, json, request, jsonify, Response, render_template, redirect
from flask.helpers import url_for
from flask_pymongo import PyMongo
from bson import json_util
from bson.objectid import ObjectId
import pprint

app = Flask(__name__, static_url_path='/static')

#mongo connection
#local database
#app.config['MONGO_URI']='mongodb://localhost:27017/reward_program'

#public database
app.config['MONGO_URI']='mongodb+srv://project2_team8:iIW0lZjZsSoJgNk3@cluster0.rwzth.mongodb.net/reward_program?retryWrites=true&w=majority'
#project2_team8:iIW0lZjZsSoJgNk3
mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/maps.html")
def maps():
    return render_template('maps.html')

@app.route("/data.html")
def data_page():
    return render_template('data.html')
    
@app.route("/brief.html")
def brief():
    return render_template('brief.html')   

@app.route("/dashboard.html")
def dashboard():
    return render_template('dashboard.html')   

#app to get the all data from database  json style from mongo
@app.route('/data/get_all', methods=['GET'])
def get_all():
    print("received")
    # filter = request
    data = mongo.db.reward_sales.find({},{'_id':False})
    #extract data from mongo in json format
    response = json_util.dumps(data)
    return Response(response, mimetype='application/json')


#filter data from mongo using object id, using find_one is only the first data
@app.route('/data/category', methods=['GET'])
def get_category():
    name = request.args["filtered_cat"]
    print(name)
    data_registry = mongo.db.reward_sales.find({'Category': name.upper()},{'_id':False})
    response = json_util.dumps(data_registry)
    return Response(response, mimetype="application/json")

#error handlers
@app.errorhandler(404)
def not_found(error=None):
    response = jsonify({
        'message': 'Resource not found:' + request.url,
        'status': 404
    }   )
    response.status_code = 404
    return response

if __name__ == "__main__":
    app.run(debug=True)

