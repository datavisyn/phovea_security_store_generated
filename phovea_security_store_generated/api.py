from phovea_server.ns import Namespace
from phovea_server.util import jsonify
import logging
import pydng

_log = logging.getLogger(__name__)

app = Namespace(__name__)


def username_exists(username):
  from phovea_server.security import manager
  try:
    user_id = manager()._load_user(username).get_id()
    return username == user_id
  except AttributeError:
    return False


@app.route('/generated_username')
def get_generated_username():
  from phovea_server.util import random_id

  new_username = f"{pydng.generate_name()}_{random_id(1)}"

  if(username_exists(new_username)):
      _log.info(F"Generated user {new_username} already exists. Retrying...")
      return get_generated_username()

  return jsonify(new_username)


def create():
  return app
