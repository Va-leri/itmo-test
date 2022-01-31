import { NewsFromServer } from './news';

export type DataFromServer = {
  'category': number,
  'total': number,
  'page': number,
  'per_page': number,
  'last_page': number,
  'news': NewsFromServer[],
};
