import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DATE_FORMAT } from '../../const';
import { getIsDataLoaded, getLanguage, getNews } from '../../store/selectors';
import { createMarkup, formatDate } from '../../utils/common';
import { Container } from '../container/container';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';
import styles from './news-item.module.scss';

export function NewsItem():JSX.Element {
  const language = useSelector(getLanguage);
  const {id} = useParams();
  const newsItem = useSelector(getNews).find((item) => item.id === Number(id));
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <main>
        <Container className={styles.container}>
          <p className={`${styles.title} ${styles.title__empty}`}></p>
          <p className={`${styles.date} ${styles.date__empty}`}></p>
          <p className={`${styles.lead} ${styles.lead__empty}`}></p>
          <p className={`${styles.image} ${styles.image__empty}`}></p>
        </Container>
      </main>
    );
  }

  if (!newsItem) {
    return (
      <NotFoundScreen />
    );
  }

  const {date, title, lead, imageBig} = newsItem;
  return (
    <main>
      <Container className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{formatDate(date, DATE_FORMAT, language)}</p>
        <p className={styles.lead} dangerouslySetInnerHTML={createMarkup(lead)}></p>
        <img className={styles.image} src={imageBig} alt={title} />
      </Container>
    </main>
  );
}
