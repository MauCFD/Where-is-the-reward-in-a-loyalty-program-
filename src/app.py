from flask import Flask, json, request, jsonify, Response
from flask.helpers import url_for
from flask_pymongo import PyMongo
from bson import json_util
from bson.objectid import ObjectId

app = Flask(__name__)

#mongo connection
#local database
#app.config['MONGO_URI']='mongodb://localhost:27017/reward_program'

#public database
app.config['MONGO_URI']='mongodb+srv://project2_team8:iIW0lZjZsSoJgNk3@cluster0.rwzth.mongodb.net/reward_program?retryWrites=true&w=majority'

mongo = PyMongo(app)

#first app to post new data into mongo
@app.route('/insert', methods=['POST'])
def create_regisry ():
    print(request.json)

    #Test Receiving data
    #return {'message': 'received'}
    
    #Create variables to store data and use in mongo, here we can change all the columns
    client_id = request.json['Client ID']
    quarter = request.json['Quarter']
    category = request.json['Category']

    if client_id and quarter and category:
        
        #create and insert into a collection in mongo
        id = mongo.db.reward_sales.insert(
            {'Client ID': client_id, 'Quarter': quarter, 'Category': category}
        )
        response = {
            'id': str(id),
            'Client ID': client_id,
            'Quarter': quarter,
            'Category': category
        }
        return response
    else: 
        return not_found()
    
    return  {'message': 'received'}

#app to get the all data from database  json style from mongo
@app.route('/get_all', methods=['GET'])
def get_data():
    data = mongo.db.reward_sales.find()
    #extract data from mongo in json format
    response = json_util.dumps(data)
    return Response(response, mimetype='application/json')


#filter data from mongo using object id, using find_one is only the first data
@app.route('/get_id/<id>', methods=['GET'])
def get_data_id(id):
    data_registry = mongo.db.reward_sales.find_one({'_id': ObjectId(id)})
    response = json_util.dumps(data_registry)
    return Response(response, mimetype="application/json")

#app to delete registry by object id in mongo
@app.route('/delete_id/<id>', methods=['DELETE'])
def delete_registry(id):
    mongo.db.reward_sales.delete_one({'_id': ObjectId(id)})
    response = jsonify({'message': 'Data' + id + ' was Deletedsuccesfully'})
    return response 
    
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

