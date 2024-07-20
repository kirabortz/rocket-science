export type MessageProps = {
  id: number
  message: {
    text: string
    time: string
  }
  user: {
    avatar: string
    role: string
  }
}

export type UserProps = {
  avatar: string
  id: number
  name: string
  profession: string
  reviewer?: ReviewerProps
  role: string
  score: null | number
}
export type ReviewerProps = {
  commentsCount: number
  date: string
  likes: number
  photos: string[]
  text: string
}
export type UsersProps = {
  admin: UserProps
  people: Record<string, UserProps>
}
