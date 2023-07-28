import React, { useRef } from 'react';
import { I18nextManager } from 'visyn_core/i18n';
import { useGenerateRandomUser } from '../hooks/useGenerateRandomUser';

export function LoginForm({ onLogin }: { onLogin: (username: string, password: string) => void }) {
  const { status, user } = useGenerateRandomUser();
  const formRef = useRef<HTMLFormElement>(null);

  return status === 'error' || status === 'success' ? (
    <form ref={formRef} className="form-signin">
      <div className="mb-3">
        <label className="form-label" htmlFor="login_username">
          {I18nextManager.getInstance().i18n.t('phovea:security_store_generated.username')}
        </label>
        <input
          type="text"
          className="form-control"
          id="login_username"
          name="username"
          defaultValue={status === 'success' ? user.username : ''}
          placeholder={I18nextManager.getInstance().i18n.t('phovea:security_store_generated.usernamePlaceholder')}
          required
          autoComplete="username"
          autoFocus
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="login_password">
          {I18nextManager.getInstance().i18n.t('phovea:security_store_generated.password')}
        </label>
        <input
          type="text"
          className="form-control"
          id="login_password"
          name="password"
          defaultValue={status === 'success' ? user.password : ''}
          placeholder={I18nextManager.getInstance().i18n.t('phovea:security_store_generated.passwordPlaceholder')}
          required
          autoComplete="current-password"
        />
      </div>
      <span className="form-text text-muted">
        {status === 'success'
          ? I18nextManager.getInstance().i18n.t('phovea:security_store_generated.loginInfo')
          : I18nextManager.getInstance().i18n.t('phovea:security_store_generated.loginInfoOnError')}
      </span>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary mt-2"
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            const formData = new FormData(formRef.current);
            onLogin(formData.get('username') as string, formData.get('password') as string);
          }}
        >
          {I18nextManager.getInstance().i18n.t('phovea:security_store_generated.login')}
        </button>
      </div>
    </form>
  ) : null;
}
