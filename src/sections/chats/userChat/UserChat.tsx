import { Title } from '@/common/components/title/Title'
import { users } from '@/common/global'
import { MessageProps, UserProps } from '@/common/types/types'
import { Chat } from '@/sections/chats/chat/Chat'

import s from './UserChat.module.scss'

type Props = {
  messages: MessageProps[]
  onSend: (message: string) => void
  user: UserProps
}

export const UserChat = ({ messages, onSend, user }: Props) => {
  return (
    <div className={s.chat}>
      <Title title={'Чат с пользователем'} />
      <Chat companion={users.admin} messages={messages} onSend={onSend} user={user} />
    </div>
  )
}
