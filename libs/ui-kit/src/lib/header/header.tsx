import styles from './header.module.scss';
import { FC } from 'react';

export interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
};

