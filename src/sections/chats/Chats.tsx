import { useState } from 'react'

import { users } from '@/common/global'
import { MessageProps } from '@/common/types/types'
import { AdminChat } from '@/sections/chats/adminChat/AdminChat'
import { UserChat } from '@/sections/chats/userChat/UserChat'

import s from './Chats.module.scss'

export const Chats = () => {
  const [messages, setMessages] = useState<MessageProps[]>([])

  const userSendHandler = (message: string) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message: {
          text: message,
          time: new Date().toTimeString().slice(0, 5),
        },
        user: {
          avatar: users.admin.avatar,
          role: users.admin.role,
        },
      },
    ])
  }

  const adminSendHandler = (message: string) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message: {
          text: message,
          time: new Date().toTimeString().slice(0, 5),
        },
        user: {
          avatar: users.people.user.avatar,
          role: users.people.user.role,
        },
      },
    ])
  }

  return (
    <div className={s.chats}>
      <UserChat messages={messages} onSend={userSendHandler} user={users.people.user} />

      <div className={s.dividerLine}></div>

      <AdminChat messages={messages} onSend={adminSendHandler} user={users.admin} />
    </div>
  )
}
