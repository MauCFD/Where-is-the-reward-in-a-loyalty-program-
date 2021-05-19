from flask import Flask
import time

@app.route('/time')
def get_current_time():
    return {'time':time.time()}
    