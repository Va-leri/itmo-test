import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Layout } from '../layout/layout';
import { Main } from '../main/main';
import { NewsItem } from '../news-item/news-item';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';


function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />} >
        <Route index element={<Main />} />
        <Route path={`${AppRoute.News}/:id`} element={<NewsItem />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
