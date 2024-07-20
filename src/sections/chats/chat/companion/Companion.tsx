import Flag from '@/common/assets/svg/components/Flag'
import Star from '@/common/assets/svg/components/Star'
import { UserProps } from '@/common/types/types'

import s from './Companion.module.scss'

type Props = {
  user: UserProps
}

export const Companion = ({ user }: Props) => {
  return (
    <div className={s.userInfo}>
      <div className={s.userPhoto}>
        <img alt={'author photo'} src={user.avatar} />
      </div>

      <div className={s.userAbout}>
        <h3 className={s.authorName}>{user.name}</h3>
        <div className={s.profession}>
          <Flag className={s.flagIcon} />
          <span className={s.professionName}>{user.profession}</span>
        </div>
      </div>

      {user.score !== null && (
        <div className={s.scores}>
          {[...Array(5)].map((_, index) => (
            <Star
              className={user.score && index < user.score ? s.starIconFilled : s.starIcon}
              key={new Date().getMilliseconds() + index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
