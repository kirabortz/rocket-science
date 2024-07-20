import Like from '@/common/assets/svg/components/Like'
import { UserProps } from '@/common/types/types'
import { Photos } from '@/sections/reviewers/card/photos/Photos'

import s from './Card.module.scss'

type Props = {
  handleImageClick: (image: string, id: number) => void
  user: UserProps
}

export const Card = ({ handleImageClick, user }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.author}>
        <div className={s.authorPhoto}>
          <img alt={'author photo'} src={user.avatar} />
        </div>
        <h3 className={s.authorName}>{user.name}</h3>
      </div>
      <div className={s.content}>
        <p className={s.about}>
          <span>БАРСЕЛОНА</span> &mdash; О ГОРОДЕ:
        </p>
        <p className={s.text}>{user.reviewer?.text}</p>

        <Photos
          handleImageClick={handleImageClick}
          photos={user.reviewer?.photos || []}
          userId={user.id}
        />

        <div className={s.info}>
          <span>{user.reviewer?.date}</span>
          <span>{user.reviewer?.commentsCount} комментариев</span>
          <span>
            <Like className={s.likeIcon} /> {user.reviewer?.likes}
          </span>
        </div>
      </div>
    </div>
  )
}
