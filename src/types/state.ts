import { Language } from '../const';
import { News } from './news';

export type State = {
  news: News[];
  language: Language;
  isDataLoaded: boolean;
};
