import { useSelector } from 'react-redux';
import { Language } from '../../const';
import { getLanguage } from '../../store/selectors';
import { Container } from '../container/container';
import { NewsList } from '../news-list/news-list';
import styles from './main.module.scss';

const TitleToLanguage = {
  [Language.Rus]: 'Новости и события',
  [Language.Eng]: 'News and Events',
};

export function Main(): JSX.Element {
  const language = useSelector(getLanguage);

  return (
    <main>
      <Container>
        <h1 className={styles.title}>{TitleToLanguage[language]}</h1>
        <NewsList />
      </Container>
    </main>
  );
}
