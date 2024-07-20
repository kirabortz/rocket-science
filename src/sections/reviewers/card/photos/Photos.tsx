import s from './Photos.module.scss'

type Props = {
    handleImageClick: (image: string, id: number) => void
    photos: string[]
    userId: number
}

export const Photos = ({handleImageClick, photos, userId}: Props) => {
    const visibleImages = photos.slice(0, 4)

    return (
        <>
            <div className={s.gallery}>
                {visibleImages.map((image, index) => (
                    <div
                        className={s.galleryItem}
                        key={`${image}-${index}`}
                        onClick={() => handleImageClick(image, userId)}
                    >
                        <img alt={'preview'} src={image}/>

                    </div>
                ))}
                {photos.length > 4 &&
                    <>
                        <div className={s.overlay} ></div>
                        <span className={s.photosCount} onClick={() => handleImageClick(photos[3], userId)}>+{photos.length}</span>
                    </>
                }
            </div>
        </>
    )
}
