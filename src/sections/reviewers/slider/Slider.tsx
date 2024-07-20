import { useState } from 'react'

import { users } from '@/common/global'
import { Card } from '@/sections/reviewers/card/Card'
import { GalleryModal } from '@/sections/reviewers/card/galleryModal/GalleryModal'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './slider.css'

export const Slider = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [id, setId] = useState<null | number>(null)

  const handleImageClick = (image: string, userId: number) => {
    setSelectedImage(image)
    setIsOpen(true)
    setId(userId)
  }

  return (
    <>
      <GalleryModal
        handleImageClick={handleImageClick}
        isOpen={isOpen}
        selectedImage={selectedImage}
        setIsOpen={setIsOpen}
        userId={id}
      />
      <Swiper
        className={'mySwiper'}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        slidesPerView={3}
        spaceBetween={30}
      >
        {Object.values(users.people).map(user => (
          <SwiperSlide>
            <Card
              handleImageClick={handleImageClick}
              key={new Date().getMilliseconds()}
              user={user}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={'custom-pagination'}></div>
    </>
  )
}
