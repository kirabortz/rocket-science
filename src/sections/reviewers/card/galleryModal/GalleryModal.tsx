import CloseOutline from '@/common/assets/svg/components/CloseOutline'
import { users } from '@/common/global'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './GalleryModal.module.scss'

type Props = {
  handleImageClick: (image: string, id: number) => void
  isOpen: boolean
  selectedImage: string
  setIsOpen: (value: boolean) => void
  userId: null | number
}

export const GalleryModal = ({
  handleImageClick,
  isOpen,
  selectedImage,
  setIsOpen,
  userId,
}: Props) => {
  const handleClose = () => {
    setIsOpen(false)
  }
  const getUserPhotosById = (userId: null | number) => {
    const user = Object.values(users.people).find(user => user.id === userId)

    if (user && user.reviewer) {
      return user.reviewer.photos
    } else {
      return ['Пусто']
    }
  }
  const currentGallery = getUserPhotosById(userId)

  return (
    isOpen &&
    userId && (
      <div className={s.popup}>
        <div className={s.popupContent}>
          <img alt={'preview'} src={selectedImage} />
          <button onClick={handleClose} type={'button'}>
            <CloseOutline />
          </button>
          <Swiper className={s.gallerySlider} slidesPerView={3} spaceBetween={30}>
            <div className={s.galleryFull}>
              {currentGallery.map(image => (
                <SwiperSlide className={s.swiperSlide}>
                  <div
                    className={s.galleryFullItem}
                    key={new Date().getMilliseconds()}
                    onClick={() => handleImageClick(image, userId)}
                  >
                    <img alt={'preview'} src={image} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    )
  )
}
