import React, { useRef } from 'react';
import { I18nextManager } from 'tdp_core';
import { useGenerateRandomUser } from '../hooks/useGenerateRandomUser';
export function LoginForm({ onLogin }) {
    const { status, user } = useGenerateRandomUser();
    const formRef = useRef(null);
    return status === 'error' || status === 'success' ? (React.createElement("form", { ref: formRef, className: "form-signin" },
        React.createElement("div", { className: "mb-3" },
            React.createElement("label", { className: "form-label", htmlFor: "login_username" }, I18nextManager.getInstance().i18n.t('phovea:security_store_generated.username')),
            React.createElement("input", { type: "text", className: "form-control", id: "login_username", name: "username", defaultValue: status === 'success' ? user.username : '', placeholder: I18nextManager.getInstance().i18n.t('phovea:security_store_generated.usernamePlaceholder'), required: true, autoComplete: "username", autoFocus: true })),
        React.createElement("div", { className: "mb-3" },
            React.createElement("label", { className: "form-label", htmlFor: "login_password" }, I18nextManager.getInstance().i18n.t('phovea:security_store_generated.password')),
            React.createElement("input", { type: "text", className: "form-control", id: "login_password", name: "password", defaultValue: status === 'success' ? user.password : '', placeholder: I18nextManager.getInstance().i18n.t('phovea:security_store_generated.passwordPlaceholder'), required: true, autoComplete: "current-password" })),
        React.createElement("span", { className: "form-text text-muted" }, status === 'success'
            ? I18nextManager.getInstance().i18n.t('phovea:security_store_generated.loginInfo')
            : I18nextManager.getInstance().i18n.t('phovea:security_store_generated.loginInfoOnError')),
        React.createElement("div", { className: "d-grid gap-2" },
            React.createElement("button", { className: "btn btn-primary mt-2", type: "submit", onClick: (evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    const formData = new FormData(formRef.current);
                    onLogin(formData.get('username'), formData.get('password'));
                } }, I18nextManager.getInstance().i18n.t('phovea:security_store_generated.login'))))) : null;
}
//# sourceMappingURL=LoginForm.js.map