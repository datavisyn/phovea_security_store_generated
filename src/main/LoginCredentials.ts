import * as DockerName from 'docker-names';
import {BaseUtils} from 'phovea_core';

export class LoginCredentials {
  static create(_menu: HTMLElement, dialog: HTMLElement) {
    // generate random username
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)randomCredentials\s*=\s*([^;]*).*$)|^.*$/, '$1');

    let username = DockerName.getRandomName();
    let password = BaseUtils.randomId(6);
    if (cookieValue) {
      // restore old value
      [username, password] = cookieValue.split('@');
    }
    // store for next time
    const maxAge = 2 * 7 * 24 * 60 * 60; // 2 weeks in seconds
    document.cookie = `randomCredentials=${username}@${password};max-age=${maxAge}`;

    (<HTMLInputElement>dialog.querySelector('input#login_username')).value = username;
    (<HTMLInputElement>dialog.querySelector('input#login_password')).value = password;
  }
}
