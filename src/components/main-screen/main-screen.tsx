import { Fragment } from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main';

export function MainScreen(): JSX.Element {
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
    </Fragment>
  );
}
