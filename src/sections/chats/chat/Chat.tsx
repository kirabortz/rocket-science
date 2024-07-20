import { useEffect, useRef } from 'react'

import { MessageProps, UserProps } from '@/common/types/types'
import { Actions } from '@/sections/chats/chat/actions/Actions'
import { Companion } from '@/sections/chats/chat/companion/Companion'
import { Message } from '@/sections/chats/chat/message/Message'

import s from './Chat.module.scss'
type Props = {
  companion: UserProps
  messages: MessageProps[]
  onSend: (message: string) => void
  user: UserProps
}

export const Chat = ({ companion, messages, onSend, user }: Props) => {
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className={s.root}>
      <Companion user={user} />

      <div className={s.chat} ref={chatRef}>
        {messages.map((message: MessageProps) => {
          return <Message key={message.id} message={message} />
        })}
      </div>

      <Actions companion={companion} onSend={onSend} />
    </div>
  )
}
