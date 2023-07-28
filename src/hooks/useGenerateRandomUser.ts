import React from 'react';
import { BaseUtils } from 'tdp_core';
import { AppContext } from 'visyn_core/base';
import { useAsync } from 'visyn_core/hooks';

export function useGenerateRandomUser() {
  // generate random username
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)randomCredentials\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const getGeneratedUsername = (): Promise<string> => AppContext.getInstance().getAPIJSON('/tdp/security_store_generated/generated_username');
  const getUser = React.useMemo(
    () => async () => {
      let username: string;
      let password: string;
      if (cookieValue) {
        // restore old value
        [username, password] = cookieValue.split('@');
      } else {
        // request new username and generate new password
        username = await getGeneratedUsername();
        password = BaseUtils.randomId(6);
      }
      return { username, password };
    },
    [cookieValue],
  );

  const { status, value: user } = useAsync(getUser, []);

  React.useEffect(() => {
    if (status === 'success') {
      // store for next time
      const maxAge = 2 * 7 * 24 * 60 * 60; // 2 weeks in seconds
      document.cookie = `randomCredentials=${user.username}@${user.password};max-age=${maxAge};SameSite=Strict`;
    }
  }, [status, user]);
  return { status, user };
}
