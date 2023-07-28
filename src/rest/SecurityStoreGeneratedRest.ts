import { AppContext } from 'visyn_core/base';

export class SecurityStoreGeneratedRest {
  static getGeneratedUsername(): Promise<string> {
    return AppContext.getInstance().getAPIJSON('/tdp/security_store_generated/generated_username');
  }
}
