import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { loadNews, setDataLoaded, setLanguage } from '../store/action';
import { State } from './state';

export enum ActionType {
  SetDataLoaded = 'data/setDataLoaded',
  LoadNews = 'data/loadNews',
  SetLanguage = 'service/setLanguage',
}

export type Actions =
  | ReturnType<typeof setDataLoaded>
  | ReturnType<typeof loadNews>
  | ReturnType<typeof setLanguage>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
