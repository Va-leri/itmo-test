import { useSelector } from 'react-redux';
import { DATE_FORMAT } from '../../const';
import { getLanguage } from '../../store/selectors';
import { News } from '../../types/news';
import { createMarkup, formatDate } from '../../utils/common';
import { Container } from '../container/container';
import styles from './news-item.module.scss';

type NewsPropsType = {
  newsItem?: News;
}

export function NewsItem(props: NewsPropsType):JSX.Element {
  const language = useSelector(getLanguage);

  if (!props.newsItem) {
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

  const {date, title, lead, imageBig} = props.newsItem;
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
