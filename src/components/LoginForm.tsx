import React, { useRef } from 'react';
import { useGenerateRandomUser } from '../hooks/useGenerateRandomUser';

export function LoginForm({ onLogin }: { onLogin: (username: string, password: string) => void }) {
  const { status, user } = useGenerateRandomUser();
  const formRef = useRef<HTMLFormElement>(null);

  return status === 'success' ? (
    <form ref={formRef} className="form-signin">
      <div className="mb-3">
        <label className="form-label" htmlFor="login_username">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="login_username"
          name="username"
          defaultValue={user.username}
          placeholder="User name"
          required
          autoComplete="username"
          autoFocus
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="login_password">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="login_password"
          name="password"
          defaultValue={user.password}
          placeholder="Password"
          required
          autoComplete="current-password"
        />
      </div>

      <span className="form-text text-muted">
        A random username and password is generated for you. However, you can use the same username and password next time to continue your work. Your previous
        username and password are stored as a cookie for your convenience.
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
          Login
        </button>
      </div>
    </form>
  ) : null;
}
