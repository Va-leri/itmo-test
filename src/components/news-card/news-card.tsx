import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, DATE_FORMAT } from '../../const';
import { getLanguage } from '../../store/selectors';
import { News } from '../../types/news';
import { formatDate } from '../../utils/common';
import styles from './news-card.module.scss';

type NewsCardPropsType = {
  className: string,
  news?: News,
}

export function NewsCard(props: NewsCardPropsType): JSX.Element {
  const {news} = props;
  const language = useSelector(getLanguage);

  return (
    <li className={`${styles.card} ${!news ? styles.card__empty : ''} ${props.className}`}>
      {
        news &&
        <Link className={styles.link} to={`${AppRoute.News}/${news.id}`}>
          <picture>
            <source media="(min-width: 800px)" srcSet={news.imageBig} />
            <source media="(min-width: 600px)" srcSet={news.imageSmall} />
            <img className={styles.image} src={news.imageBig} alt={news.title} />
          </picture>
          <div className={styles.text}>
            <p className={styles.date}>
              {formatDate(dayjs(news.date), DATE_FORMAT, language)}
            </p>
            <div className={styles.lead}>
              {news.title}
            </div>
          </div>
        </Link>
      }
    </li>
  );
}
