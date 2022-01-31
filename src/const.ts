export const DATE_FORMAT = 'D MMMM YYYY';

export enum Language {
  Rus = 'Rus',
  Eng = 'Eng',
}

export const LanguageToId = {
  [Language.Rus]: 1,
  [Language.Eng]: 2,
};

export const BASE_URL = 'https://news.itmo.ru/api/';

export const REQUEST_TIMEOUT = 5000;

export enum ApiRout {
  News = 'news/list/',
}

export const DEFAULT_API_PARAMS = {
  'ver': '2.0',
  'lead': false,
  'per_page': 9,
  'language_id': 1,
};

export enum AppRoute {
  Main = '/',
  News = '/news',
}
