import { adaptNewsToClient } from '../adapter/adapter';
import { ApiRout, DEFAULT_API_PARAMS, Language, LanguageToId } from '../const';
import { ThunkActionResult } from '../types/actions';
import { DataFromServer } from '../types/data-from-server';
import { QueryParameters } from '../types/query-parameters';
import { loadNews, setDataLoaded } from './action';

export const fetchNews = (language = Language.Rus): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const queryParams: QueryParameters = {
      ...DEFAULT_API_PARAMS,
      'language_id': LanguageToId[language],
    };

    try {
      const {data} = await api.get<DataFromServer>(ApiRout.News, {
        params: queryParams,
      });

      const {news} = data;
      const formattedNews = news.map((item) => adaptNewsToClient(item));

      dispatch(setDataLoaded(true));
      dispatch(loadNews(formattedNews));

    } catch(error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
