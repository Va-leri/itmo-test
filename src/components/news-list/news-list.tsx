import { useSelector } from 'react-redux';
import { getIsDataLoaded, getNews } from '../../store/selectors';
import { NewsCard } from '../news-card/news-card';
import styles from './news-list.module.scss';


export function NewsList(): JSX.Element {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const news = useSelector(getNews);

  return (
    <ul className={styles.list}>
      {
        isDataLoaded &&
        news.map((item) =>
          <NewsCard news={item} className={styles.card} key={item.id}/>)
      }

      {
        !isDataLoaded &&
        Array(10).fill(null).map((_item, i) =>
          // eslint-disable-next-line react/no-array-index-key
          <NewsCard className={styles.card} key={i}/>)
      }
    </ul>
  );
}
