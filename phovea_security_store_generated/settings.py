from pydantic import BaseSettings, Extra
from tdp_core.settings.model import get_global_settings


class PhoveaSecurityStoreGeneratedSettings(BaseSettings):
    # TODO: Have a global datadir settings in tdp_core and extend it here.
    file: str = "/phovea/fakeUsers.db"

    class Config:
        extra = Extra.allow


def get_settings() -> PhoveaSecurityStoreGeneratedSettings:
    return get_global_settings().phovea_security_store_generated
