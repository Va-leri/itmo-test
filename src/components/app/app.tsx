import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainScreen } from '../main-screen/main-screen';
import { NewsScreen } from '../news-screen/news-screen';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';


function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
      <Route path={`${AppRoute.News}/:id`} element={<NewsScreen />} />
      <Route path='*' element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
