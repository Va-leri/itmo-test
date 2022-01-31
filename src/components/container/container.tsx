import styles from './container.module.scss';

type ContainerPropsType = {
  children: JSX.Element|JSX.Element[];
  className?: string,
}

export function Container(props: ContainerPropsType): JSX.Element {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
}
