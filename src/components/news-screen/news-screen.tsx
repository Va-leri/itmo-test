import { Fragment } from 'react';
import { Header } from '../header/header';
import { NewsItem } from '../news-item/news-item';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIsDataLoaded, getNews } from '../../store/selectors';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';

export function NewsScreen(): JSX.Element {
  const {id} = useParams();
  const newsItem = useSelector(getNews).find((item) => item.id === Number(id));
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <Fragment>
        <Header />
        <NewsItem />
      </Fragment>
    );
  }

  if (!newsItem) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <Fragment>
      <Header />
      <NewsItem newsItem={newsItem}/>
    </Fragment>
  );
}
