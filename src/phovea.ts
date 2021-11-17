/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
import {IRegistry} from 'tdp_core';

//register all extensions in the registry following the given pattern
export default function (registry: IRegistry) {
  //registry.push('extension-type', 'extension-id', function() { return import('./src/extension_impl'); }, {});
  // generator-phovea:begin

  registry.push('securityCustomizedLoginForm', 'generated', function() { return import('./main/LoginCredentials').then((l) => l.LoginCredentials); }, {
    template: require('./templates/_loginForm.html')
  });
  // generator-phovea:end
}
