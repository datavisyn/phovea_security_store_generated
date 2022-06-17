/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
import { ILocaleEPDesc, IRegistry, EP_PHOVEA_CORE_LOCALE, PluginRegistry } from 'tdp_core';

// register all extensions in the registry following the given pattern
export default function (registry: IRegistry) {
  // registry.push('extension-type', 'extension-id', function() { return import('./src/extension_impl'); }, {});
  // generator-phovea:begin

  registry.push(
    'securityCustomizedLoginForm',
    'generated',
    function () {
      return import('./main/LoginCredentials').then((l) => l.LoginCredentials);
    },
    {
      // eslint-disable-next-line global-require
      template: require('./templates/_loginForm.html'),
    },
  );

  registry.push(
    EP_PHOVEA_CORE_LOCALE,
    'securityStoreGeneratedLocaleEN',
    function () {
      return import('./locales/en/phovea.json').then(PluginRegistry.getInstance().asResource);
    },
    <ILocaleEPDesc>{
      ns: 'phovea',
    },
  );
  // generator-phovea:end
}
