import {BaseUtils} from 'tdp_core';
import {SecurityStoreGeneratedRest} from '../rest';

export class LoginCredentials {
  static async create(_menu: HTMLElement, dialog: HTMLElement) {
    // generate random username
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)randomCredentials\s*=\s*([^;]*).*$)|^.*$/, '$1');

    let username;
    let password;

    if (cookieValue) {
      // restore old value
      [username, password] = cookieValue.split('@');

    } else {
      // request new username and generate new password
      username = await SecurityStoreGeneratedRest.getGeneratedUsername();
      password = BaseUtils.randomId(6);
    }

    // store for next time
    const maxAge = 2 * 7 * 24 * 60 * 60; // 2 weeks in seconds
    document.cookie = `randomCredentials=${username}@${password};max-age=${maxAge};SameSite=Strict`;

    (<HTMLInputElement>dialog.querySelector('input#login_username')).value = username;
    (<HTMLInputElement>dialog.querySelector('input#login_password')).value = password;
  }
}
