import { createReducer } from '@reduxjs/toolkit';
import { Language } from '../const';
import { State } from '../types/state';
import { loadNews, setDataLoaded, setLanguage } from './action';

const InitialState: State = {
  isDataLoaded: false,
  news: [],
  language: Language.Rus,
};

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(setDataLoaded, (state) => {
      state.isDataLoaded = true;
    })
    .addCase(loadNews, (state, action) => {
      state.news = action.payload;
    })
    .addCase(setLanguage, (state, action) => {
      state.language = action.payload;
    });
});
