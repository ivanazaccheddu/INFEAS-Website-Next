import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Cardwithphoto = (props) => {
  return (
    <>
      <article
        id="card-progetto-home"
        role="link"
        className={`cardwithphoto-cardwithphoto ${props.rootClassName} `}
      >
        <div className="cardwithphoto-container1">
          <img
            id="fotoid"
            alt={props.fotoAlt}
            src={props.fotoCard}
            className="cardwithphoto-foto1"
          />
          <div className="cardwithphoto-coloroverlay"></div>
          <article id="progetto-card" className="cardwithphoto-container2">
            <div className="cardwithphoto-container3">
              <span className="cardwithphoto-text">{props.nomeProgetto}</span>
            </div>
          </article>
        </div>
      </article>
      <style jsx>
        {`
          .cardwithphoto-cardwithphoto {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            aspect-ratio: 1/0.8;
          }
          .cardwithphoto-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .cardwithphoto-foto1 {
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 20px;
          }
          .cardwithphoto-coloroverlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: none;
            opacity: 30%;
            z-index: 0;
            position: absolute;
            align-items: flex-start;
            border-radius: 21px;
            flex-direction: column;
            background-color: #000000;
          }
          .cardwithphoto-container2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            position: absolute;
            align-items: flex-start;
            padding-top: 32px;
          }
          .cardwithphoto-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .cardwithphoto-text {
            color: rgb(255, 255, 255);
            font-size: 30px;
            align-self: stretch;
            font-style: Black;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 900;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }

          .cardwithphotoroot-class-name1 {
            width: auto;
          }
          .cardwithphotoroot-class-name3 {
            width: auto;
          }
          .cardwithphotoroot-class-name4 {
            width: auto;
          }
          .cardwithphotoroot-class-name5 {
            width: auto;
          }
          .cardwithphotoroot-class-name6 {
            width: auto;
          }
          .cardwithphotoroot-class-name7 {
            width: auto;
          }
          .cardwithphotoroot-class-name8 {
            width: auto;
          }
          @media (max-width: 1200px) {
            .cardwithphoto-cardwithphoto {
              max-width: 400px;
            }
            .cardwithphoto-text {
              top: var(--dl-layout-space-fourunits);
              position: static;
            }
          }
          @media (max-width: 991px) {
            .cardwithphoto-text {
              top: 47px;
              right: -4px;
            }
          }
          @media (max-width: 767px) {
            .cardwithphotoroot-class-name1 {
              width: 100%;
            }
            .cardwithphotoroot-class-name3 {
              width: 100%;
            }
            .cardwithphotoroot-class-name4 {
              width: 100%;
            }
            .cardwithphotoroot-class-name5 {
              width: 100%;
            }
            .cardwithphotoroot-class-name6 {
              width: 100%;
            }
            .cardwithphotoroot-class-name7 {
              width: 100%;
            }
            .cardwithphotoroot-class-name8 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .cardwithphoto-cardwithphoto {
              width: 100%;
            }
            .cardwithphoto-foto1 {
              width: 100%;
            }
            .cardwithphoto-text {
              top: 63px;
              right: 5px;
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

Cardwithphoto.defaultProps = {
  rootClassName: '',
  nomeProgetto: 'Educazione Ambientale',
  fotoAlt: 'fotoAlt',
  fotoCard: '/external/rectangle20679232-u8pw-1500w.png',
}

Cardwithphoto.propTypes = {
  rootClassName: PropTypes.string,
  nomeProgetto: PropTypes.string,
  fotoAlt: PropTypes.string,
  fotoCard: PropTypes.string,
}

export default Cardwithphoto
