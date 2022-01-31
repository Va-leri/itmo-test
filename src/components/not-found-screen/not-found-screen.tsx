import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Container } from '../container/container';
import { Header } from '../header/header';
import styles from './not-found-screen.module.scss';

export function NotFoundScreen(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Container className={styles.container}>
          <p className={styles.code}>404</p>
          <p className={styles.text}>Страница не найдена</p>
          <Link to={AppRoute.Main} className={styles.link}>
            Вернуться на Главную
          </Link>
        </Container>
      </main>
    </div>
  );
}
