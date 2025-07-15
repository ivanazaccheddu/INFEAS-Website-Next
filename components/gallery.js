import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery = (props) => {
  return (
    <>
      <figure className={`gallery-gallery ${props.rootClassName} `}>
        <div className="gallery-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="gallery_img"
          />
        </div>
        <div className="gallery-container2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="gallery-image2"
          />
        </div>
        <div className="gallery-container3">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="gallery-image3"
          />
        </div>
        <div className="gallery-container4">
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="gallery-image4"
          />
        </div>
        <div className="gallery-container5">
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="gallery-image5"
          />
        </div>
      </figure>
      <style jsx>
        {`
          .gallery-gallery {
            gap: var(--dl-layout-space-halfunit);
            display: grid;
            position: relative;
            align-self: center;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }
          .gallery-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: column;
          }
          .gallery-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: column;
          }
          .gallery-image2 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .gallery-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: column;
          }
          .gallery-image3 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .gallery-container4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: column;
          }
          .gallery-image4 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .gallery-container5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: column;
          }
          .gallery-image5 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .galleryroot-class-name {
            width: 100%;
          }
          .galleryroot-class-name1 {
            width: 100%;
          }
          .galleryroot-class-name2 {
            width: 100%;
          }
          .galleryroot-class-name3 {
            width: 100%;
          }
          .galleryroot-class-name4 {
            width: 100%;
          }
          @media (max-width: 767px) {
            .gallery-gallery {
              width: 100%;
              flex-direction: column;
            }
            .gallery-container1 {
              width: 100%;
            }
            .gallery-container2 {
              width: 100%;
            }
            .gallery-container3 {
              width: 100%;
            }
            .gallery-container4 {
              width: 100%;
            }
            .gallery-container5 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
              width: 100%;
              align-items: center;
              flex-direction: column;
            }
            .gallery-container1 {
              width: 100%;
            }
            .gallery-container2 {
              width: 100%;
            }
            .gallery-container3 {
              width: 100%;
            }
            .gallery-container4 {
              width: 100%;
            }
            .gallery-container5 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
  rootClassName: '',
  imageAlt1: 'image',
  imageAlt3: 'image',
  imageAlt: 'image',
  imageAlt4: 'image',
  imageSrc3: '/community_4-optimized.jpg',
  imageSrc1: '/community_2-optimized.jpg',
  imageAlt2: 'image',
  imageSrc2: '/community_3-optimized.jpg',
  imageSrc: '/community_1-optimized.jpg',
  imageSrc4: '/community_5-optimized.jpg',
}

Gallery.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
}

export default Gallery
