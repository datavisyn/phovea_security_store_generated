import * as loginFormT from 'html-loader!./_loginForm.html';

import * as DockerName from 'docker-names';
import {randomId} from 'phovea_core/src';

export const loginForm = String(loginFormT);

export default function initRandomUserProvider() {
  // generate random username
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)randomCredentials\s*=\s*([^;]*).*$)|^.*$/, '$1');

  let username = DockerName.getRandomName();
  let password = randomId(6);
  if (cookieValue) {
    // restore old value
    [username, password] = cookieValue.split('@');
  }
  // store for next time
  const maxAge = 2 * 7 * 24 * 60 * 60; // 2 weeks in seconds
  document.cookie = `randomCredentials=${username}@${password};max-age=${maxAge}`;

  (<HTMLInputElement>document.querySelector('input#login_username')).value = username;
  (<HTMLInputElement>document.querySelector('input#login_password')).value = password;
}
