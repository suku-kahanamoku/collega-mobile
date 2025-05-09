import { initializeLocales, initializeI18n } from "@/modules/Lang/module";
import { ILocale } from "@/modules/Lang/types/lang.interface";

import _en from "./locales/en.json";
import _cs from "./locales/cs.json";
import _sk from "./locales/sk.json";

import fEn from "@/modules/Form/locales/en.json";
import fCs from "@/modules/Form/locales/cs.json";
import fSk from "@/modules/Form/locales/sk.json";

import aEn from "@/modules/Auth/locales/en.json";
import aCs from "@/modules/Auth/locales/cs.json";
import aSk from "@/modules/Auth/locales/sk.json";

import cEn from "@/modules/Contract/locales/en.json";
import cCs from "@/modules/Contract/locales/cs.json";
import cSk from "@/modules/Contract/locales/cs.json";

import uEn from "@/modules/User/locales/en.json";
import uCs from "@/modules/User/locales/cs.json";
import uSk from "@/modules/User/locales/cs.json";

const en = initializeLocales([_en, fEn, aEn, cEn, uEn]);
const cs = initializeLocales([_cs, fCs, aCs, cCs, uCs]);
const sk = initializeLocales([_sk, fSk, aSk, cSk, uSk]);

export const locales: ILocale[] = [
  {
    code: "en",
    mark: "GB",
    iso: "en-GB",
  },
  {
    code: "cs",
    mark: "CZ",
    iso: "cs-CZ",
  },
  {
    code: "sk",
    mark: "SK",
    iso: "sk-SK",
  },
];

const i18n = initializeI18n({ en, cs, sk }, locales);

export default i18n;
