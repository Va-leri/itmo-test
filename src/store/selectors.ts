import { State } from '../types/state';

export const getIsDataLoaded = (state: State) => state.isDataLoaded;

export const getNews = (state: State) => state.news;

export const getLanguage = (state: State) => state.language;
