import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TargetCategoryInfo = (props) => {
  return (
    <>
      <section
        id="descrizione-categoria-utente"
        tabindex="0"
        className={`target-category-info-container1 padding-container ${props.rootClassName} `}
      >
        <div className="target-category-info-container2 thq-section-max-width">
          <img
            id="icona-destinatario"
            alt={props.iconDestinatarioAlt}
            src={props.iconDestinatario}
            aria-label="Icona per la descrizione"
            className="target-category-info-image"
          />
          <h2 className="heading2">{props.headingDestinatari}</h2>
          <p className="paragraph_xl">{props.descrizioneDestinatari}</p>
        </div>
      </section>
      <style jsx>
        {`
          .target-category-info-container1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-color: #dbe6ea;
          }
          .target-category-info-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .target-category-info-image {
            width: var(--dl-layout-size-medium);
            object-fit: cover;
          }

          @media (max-width: 479px) {
            .target-category-info-container2 {
              gap: var(--dl-layout-space-unit);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

TargetCategoryInfo.defaultProps = {
  descrizioneDestinatari:
    "Il Sistema Regionale INFEAS Sardegna promuove attività per scuole e università attraverso i Centri di Educazione Ambientale e alla Sostenibilità (CEAS). L'obiettivo è sensibilizzare le nuove generazioni sui temi ambientali e promuovere la cultura della sostenibilità. Le iniziative includono programmi educativi, laboratori, eventi e progetti concreti per sviluppare conoscenze, competenze e comportamenti responsabili verso l'ambiente.",
  iconDestinatario: '/iconasostenibilitã\xA0.svg',
  headingDestinatari: 'Educare alla sostenibilità',
  iconDestinatarioAlt: 'iconaDestinatari',
  rootClassName: '',
}

TargetCategoryInfo.propTypes = {
  descrizioneDestinatari: PropTypes.string,
  iconDestinatario: PropTypes.string,
  headingDestinatari: PropTypes.string,
  iconDestinatarioAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TargetCategoryInfo
