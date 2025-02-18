import { InitOptions } from 'i18next';

export type LanguageCode = string;

export type Locale = {
  md5sum?: string;
  file?: string;
  name?: string;
  description?: string;
  code?: LanguageCode;
};

export type I18nInitOptions = InitOptions;
