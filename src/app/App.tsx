import { Chats } from '@/sections/chats/Chats'
import { Header } from '@/sections/header/Header'
import { Reviewers } from '@/sections/reviewers/Reviewers'

import s from './App.module.scss'

export function App() {
  return (
    <div className={s.app}>
      <Header />
      <main>
        <Reviewers />
        <Chats />
      </main>
    </div>
  )
}
