import { MessageProps } from '@/common/types/types'

import s from './Message.module.scss'

type Props = {
  message: MessageProps
}

export const Message = ({ message }: Props) => {
  return (
    <div className={message.user.role === 'user' ? s.userMessage : s.message}>
      <div className={s.userPhoto}>
        <img alt={'author photo'} src={message.user.avatar} />
      </div>

      <div className={s.textAndTime}>
        <pre className={s.messageText}>
          <div>{message.message.text}</div>
        </pre>

        <div className={s.time}>
          <div>{message.message.time}</div>
        </div>
      </div>
    </div>
  )
}
