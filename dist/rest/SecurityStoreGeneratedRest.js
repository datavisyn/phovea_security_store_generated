import { AppContext } from 'phovea_core';
export class SecurityStoreGeneratedRest {
    static getGeneratedUsername() {
        return AppContext.getInstance().getAPIJSON('/tdp/security_store_generated/generated_username');
    }
}
//# sourceMappingURL=SecurityStoreGeneratedRest.js.map