from pydantic import BaseModel
from visyn_core import manager


class PhoveaSecurityStoreGeneratedSettings(BaseModel):
    # TODO: Have a global datadir settings in visyn_core and extend it here.
    file: str = "./fakeUsers.db"


def get_settings() -> PhoveaSecurityStoreGeneratedSettings:
    return manager.settings.phovea_security_store_generated
