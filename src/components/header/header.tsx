import styles from './header.module.scss';
import { Container } from '../container/container';
import { LanguageSelect } from '../language-select/language-select';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Link className={styles.header_logo} to={AppRoute.Main}>
          <img src="/img/logo.svg" alt="Университет ИТМО" />
        </Link>
        <LanguageSelect />
      </Container>
    </header>
  );
}
