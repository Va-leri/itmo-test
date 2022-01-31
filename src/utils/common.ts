import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Language } from '../const';

// dayjs.locale('ru');

const LanguageToLocale = {
  [Language.Eng]: 'en',
  [Language.Rus]: 'ru',
};

export const formatDate = (date: string | dayjs.Dayjs, formatString: string, language: Language): string =>
  dayjs(date)
    .locale(LanguageToLocale[language])
    .format(formatString);

export function createMarkup(prop: string) {
  return {__html: prop};
}
