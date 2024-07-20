import { Title } from '@/common/components/title/Title'

import s from './Header.module.scss'

import headerImg from '../../common/assets/img/headerImg.jpg'

export const Header = () => {
  return (
    <header className={s.intro}>
      <div className={s.introImg}>
        <img alt={'header img'} src={headerImg} />
      </div>

      <div className={s.introContent}>
        <Title title={`Барселона \u2014 обзор города`} />
        <p className={s.introSubtitle}>
          Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными
          фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и
          стала местом, в котором...
        </p>
        <button className={s.introMoreBtn}>Читать дальше</button>
      </div>
    </header>
  )
}
