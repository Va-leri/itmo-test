import { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Language } from '../../const';
import { setLanguage } from '../../store/action';
import { fetchNews } from '../../store/api-action';
import { getLanguage } from '../../store/selectors';
import styles from './language-select.module.scss';

type LanguageSelectPropsType = {
  className?: string,
}

export function LanguageSelect(props: LanguageSelectPropsType): JSX.Element {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const [isChecked, setIsChecked] = useState(false);

  const onToggleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleLangChange = (evt: MouseEvent<HTMLUListElement>) => {
    if (evt.target instanceof HTMLInputElement) {
      let lang;
      switch (evt.target.value) {
        case Language.Eng:
          lang = Language.Eng;
          break;
        case Language.Rus:
        default:
          lang = Language.Rus;
      }
      setIsChecked(false);
      dispatch(setLanguage(lang));
      dispatch(fetchNews(lang));
    }
  };

  return (
    <div className={`${props.className ?? ''}`}>
      <label className={`${styles.btn} ${language === Language.Rus ? styles.btn__rus : styles.btn__eng}`} htmlFor="language-checkbox">
        <span>{language === Language.Rus ? 'Рус' : 'Eng'}</span>
      </label>
      <input className={`visually-hidden ${styles.toggle}`} type="checkbox" id="language-checkbox" checked={isChecked} onChange={onToggleClick}/>
      <ul className={styles.options_list} onChange={handleLangChange}>
        <li>
          <input className="visually-hidden" id="language-rus-option" type="radio" name="language" value={Language.Rus} />
          <label className={`${styles.option} ${styles.option__rus}`} htmlFor="language-rus-option">
            <span>Рус</span>
          </label>
        </li>
        <li>
          <input className="visually-hidden" id="language-eng-option" type="radio" name="language" value={Language.Eng} />
          <label className={`${styles.option} ${styles.option__eng}`} htmlFor="language-eng-option">
            <span>Eng</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
