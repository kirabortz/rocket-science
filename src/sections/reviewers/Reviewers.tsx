import { Title } from '@/common/components/title/Title'
import { Slider } from '@/sections/reviewers/slider/Slider'

import s from './Reviewers.module.scss'
type Props = {}

export const Reviewers = ({}: Props) => {
  return (
    <div className={s.reviewers}>
      <Title title={'Отзывы о Барселоне'} />

      <Slider />

      <button className={s.moreReviewesBtn}>Все отзывы</button>
    </div>
  )
}
