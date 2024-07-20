import { ChangeEvent, useState } from 'react'

import Send from '@/common/assets/svg/components/Send'
import { UserProps } from '@/common/types/types'

import s from './Actions.module.scss'

type Props = {
  companion: UserProps
  onSend: (message: string) => void
}

export const Actions = ({ companion, onSend }: Props) => {
  const [text, setText] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }
  const onSendHandler = (message: string) => {
    if (message) {
      onSend(message.trim())
      setText('')
    }
  }

  return (
    <div className={s.actions}>
      <div className={s.userPhoto}>
        <img alt={'author photo'} src={companion.avatar} />
      </div>

      <input
        className={s.input}
        onChange={onChange}
        placeholder={'Напишите сообщение...'}
        value={text}
      />
      <button className={s.sendBtn} onClick={() => onSendHandler(text)}>
        <Send className={s.sendIcon} />
      </button>
    </div>
  )
}
