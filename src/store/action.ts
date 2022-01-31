import { createAction } from '@reduxjs/toolkit';
import { Language } from '../const';
import { ActionType } from '../types/actions';
import { News } from '../types/news';

export const setDataLoaded = createAction<boolean>(ActionType.SetDataLoaded);

export const loadNews = createAction<News[]>(ActionType.LoadNews);

export const setLanguage = createAction<Language>(ActionType.SetLanguage);
