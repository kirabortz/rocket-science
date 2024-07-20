import s from './Title.module.scss'

type Props = {
  title: string
}

export const Title = ({ title }: Props) => {
  return <h1 className={s.title}>{title}</h1>
}
