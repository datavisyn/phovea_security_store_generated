import { AppContext } from 'tdp_core';

export class SecurityStoreGeneratedRest {
  static getGeneratedUsername(): Promise<string> {
    return AppContext.getInstance().getAPIJSON('/tdp/security_store_generated/generated_username');
  }
}
