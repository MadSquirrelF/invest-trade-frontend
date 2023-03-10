import React from 'react';

import styles from './NotFoundBlock.module.scss';
import MissPageSticker from '../../../assets/images/misspage.png';
import Image from 'next/image';
import Heading from '../heading/Heading';
import Button from '../form-elements/Button';
import { useRouter } from 'next/router';


export const NotFoundBlock: React.FC = () => {
  const { push } = useRouter()
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Heading title='Ошибка 404 - Страница не найдена или находится в разработке...'></Heading>
          <p>В настоящий момент сайт находится в бета версии и будет дорабатываться. Некоторые страницы могут находится в разработке или же вы перешли по несуществующему URL.</p>
          <Button onClick={() => push('/')}> Вернуться на главную страницу</Button>

        </div>

        <div className={styles.image}>
          <Image src={MissPageSticker} alt="MissPageSticker" />
        </div>



      </div>
    </section>
  );
};
export default NotFoundBlock;
