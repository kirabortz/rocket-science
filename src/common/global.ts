import adminAvatar from '@/common/assets/img/adminPhoto.jpg'
import photo1 from '@/common/assets/img/photo1.jpg'
import photo2 from '@/common/assets/img/photo2.jpg'
import photo3 from '@/common/assets/img/photo3.jpg'
import photo4 from '@/common/assets/img/photo4.jpg'
import photo5 from '@/common/assets/img/photo5.jpg'
import userAvatar from '@/common/assets/img/userPhoto.jpg'
import {UsersProps} from '@/common/types/types'

export const users: UsersProps = {
    admin: {
        avatar: adminAvatar,
        id: 1,
        name: 'Администратор',
        profession: 'TravelAsk',
        role: 'admin',
        score: null,
    },
    people: {
        user: {
            avatar: userAvatar,
            id: 2,
            name: 'Наталия Полянская',
            profession: 'Гид по Баварии, фотограф',
            reviewer: {
                commentsCount: 9,
                date: 'около 1 года назад',
                likes: 9,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем \n' +
                    'рекомендую хоть раз там \n' +
                    'побывать и осмотреть ...',
            },
            role: 'user',
            score: 4,
        },
        user2: {
            avatar: userAvatar,
            id: 3,
            name: 'Elena Bulgakova',
            profession: '',
            reviewer: {
                commentsCount: 3,
                date: '5 месяцев назад',
                likes: 7,
                photos: [photo1, photo2, photo3, photo5, photo3, photo4, photo5, photo3, photo4, photo5, photo1],
                text:
                    'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон поЕвропе не вписалось 2 испанских города от усталости - решилиостаток путешествия провести в Барселоне ...',
            },
            role: 'user',
            score: null,
        },
        user3: {
            avatar: userAvatar,
            id: 4,
            name: 'Наталия Полянская',
            profession: 'Гид по Баварии, фотограф',
            reviewer: {
                commentsCount: 9,
                date: 'около 1 года назад',
                likes: 9,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем \n' +
                    'рекомендую хоть раз там \n' +
                    'побывать и осмотреть ...',
            },
            role: 'user',
            score: 4,
        },
        user4: {
            avatar: userAvatar,
            id: 5,
            name: 'Elena Bulgakova',
            profession: '',
            reviewer: {
                commentsCount: 3,
                date: '5 месяцев назад',
                likes: 7,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Плюсы города: весь город одни плюсы! Минусы города: не \n' +
                    'видела. В наш марафон по \n' +
                    'Европе не вписалось 2 испанских города от усталости - решили \n' +
                    'остаток путешествия провести в \n' +
                    'Барселоне ...',
            },
            role: 'user',
            score: null,
        },
        user5: {
            avatar: userAvatar,
            id: 6,
            name: 'Наталия Полянская',
            profession: 'Гид по Баварии, фотограф',
            reviewer: {
                commentsCount: 9,
                date: 'около 1 года назад',
                likes: 9,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем \n' +
                    'рекомендую хоть раз там \n' +
                    'побывать и осмотреть ...',
            },
            role: 'user',
            score: 4,
        },
        user6: {
            avatar: userAvatar,
            id: 7,
            name: 'Elena Bulgakova',
            profession: '',
            reviewer: {
                commentsCount: 3,
                date: '5 месяцев назад',
                likes: 7,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Плюсы города: весь город одни плюсы! Минусы города: не \n' +
                    'видела. В наш марафон по \n' +
                    'Европе не вписалось 2 испанских города от усталости - решили \n' +
                    'остаток путешествия провести в \n' +
                    'Барселоне ...',
            },
            role: 'user',
            score: null,
        },
        user7: {
            avatar: userAvatar,
            id: 8,
            name: 'Наталия Полянская',
            profession: 'Гид по Баварии, фотограф',
            reviewer: {
                commentsCount: 9,
                date: 'около 1 года назад',
                likes: 9,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем \n' +
                    'рекомендую хоть раз там \n' +
                    'побывать и осмотреть ...',
            },
            role: 'user',
            score: 4,
        },
        user8: {
            avatar: userAvatar,
            id: 9,
            name: 'Elena Bulgakova',
            profession: '',
            reviewer: {
                commentsCount: 3,
                date: '5 месяцев назад',
                likes: 7,
                photos: [photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo5],
                text:
                    'Плюсы города: весь город одни плюсы! Минусы города: не \n' +
                    'видела. В наш марафон по \n' +
                    'Европе не вписалось 2 испанских города от усталости - решили \n' +
                    'остаток путешествия провести в \n' +
                    'Барселоне ...',
            },
            role: 'user',
            score: null,
        },
    },
}
