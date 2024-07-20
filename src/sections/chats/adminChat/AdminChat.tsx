import { Title } from '@/common/components/title/Title'
import { users } from '@/common/global'
import { MessageProps, UserProps } from '@/common/types/types'
import { Chat } from '@/sections/chats/chat/Chat'

import s from './AdminChat.module.scss'

type Props = {
  messages: MessageProps[]
  onSend: (message: string) => void
  user: UserProps
}

export const AdminChat = ({ messages, onSend, user }: Props) => {
  return (
    <div className={s.root}>
      <Title title={'Чат с администратором'} />
      <Chat companion={users.people.user} messages={messages} onSend={onSend} user={user} />
    </div>
  )
}
