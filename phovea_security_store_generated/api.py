from phovea_server.ns import Namespace
from phovea_server.util import jsonify
import logging
import pydng

_log = logging.getLogger(__name__)

app = Namespace(__name__)

def username_exists(username):
  from phovea_server.security import manager
  try:
    user_id = manager()._load_user('peaceful_jackson').get_id()
    return username == user_id
  except:
    return False

@app.route('/generated_username')
def getGeneratedUser():
  from phovea_server.util import random_id
  
  new_username = f"{pydng.generate_name()}_{random_id(1)}"

  if(username_exists(new_username)):
      _log.info(F"Genereted user {new_username} already exists. Retrying...")
      return getGeneratedUser()

  return jsonify(new_username)


def create():
  return app