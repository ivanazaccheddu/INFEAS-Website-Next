import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ButtonComponent from './button-component'
import EntryItem from './entry-item'

const TitoloBottoneLista = (props) => {
  return (
    <>
      <div className="titolo-bottone-lista-container1 padding-container">
        <div className="titolo-bottone-lista-container2 thq-section-max-width">
          <div className="titolo-bottone-lista-container3">
            <span className="heading2">{props.titoloSezione}</span>
            <a
              href={props.buttonUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="titolo-bottone-lista-link"
            >
              <ButtonComponent
                button={props.buttonname}
                greenColor="green"
                rootClassName="button-componentroot-class-name20"
                className="titolo-bottone-lista-component1"
              ></ButtonComponent>
            </a>
          </div>
          <div className="titolo-bottone-lista-container4">
            <div className="titolo-bottone-lista-container5">
              <div className="titolo-bottone-lista-container6">
                <Repeater
                  items={
                    props['entriesList'] || [
                      {
                        id: 3,
                        testo:
                          'Promuovi la cultura della sostenibilità nella tua comunità',
                      },
                      {
                        id: 4,
                        testo:
                          'Contribuisci concretamente alla transizione ecologica del territorio',
                      },
                      {
                        id: 5,
                        testo:
                          'Accedi a reti di collaborazione e risorse per progetti innovativi',
                      },
                      {
                        id: 6,
                        testo:
                          'Valorizza le risorse naturali e culturali del tuo territorio',
                      },
                      {
                        id: 7,
                        testo:
                          'Coinvolgi attivamente i cittadini nella tutela ambientale',
                      },
                      {
                        id: 8,
                        testo:
                          'Attira finanziamenti e bandi dedicati alla sostenibilità',
                      },
                      {
                        id: 9,
                        testo:
                          'Offri opportunità educative per scuole e famiglie locali',
                      },
                    ]
                  }
                  renderItem={(list_items) => (
                    <Fragment>
                      <EntryItem entryname={list_items?.testo}></EntryItem>
                    </Fragment>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .titolo-bottone-lista-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #e7eee8;
          }
          .titolo-bottone-lista-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .titolo-bottone-lista-container3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0.75;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .titolo-bottone-lista-link {
            display: contents;
          }
          .titolo-bottone-lista-component1 {
            text-decoration: none;
          }
          .titolo-bottone-lista-container4 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .titolo-bottone-lista-container5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .titolo-bottone-lista-container6 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .titolo-bottone-lista-container2 {
              flex-direction: column;
            }
            .titolo-bottone-lista-container4 {
              flex: 0 0 auto;
              width: 100%;
            }
            .titolo-bottone-lista-container5 {
              flex: 0 0 auto;
            }
          }
          @media (max-width: 767px) {
            .titolo-bottone-lista-container2 {
              width: 100%;
            }
            .titolo-bottone-lista-container6 {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

TitoloBottoneLista.defaultProps = {
  titoloSezione: 'Titolo',
  buttonUrl: 'https://www.teleporthq.io',
  buttonname: '',
  entriesList: [
    {
      id: 3,
      testo: 'Promuovi la cultura della sostenibilità nella tua comunità',
    },
    {
      id: 4,
      testo:
        'Contribuisci concretamente alla transizione ecologica del territorio',
    },
    {
      id: 5,
      testo:
        'Accedi a reti di collaborazione e risorse per progetti innovativi',
    },
    {
      id: 6,
      testo: 'Valorizza le risorse naturali e culturali del tuo territorio',
    },
    {
      id: 7,
      testo: 'Coinvolgi attivamente i cittadini nella tutela ambientale',
    },
    {
      id: 8,
      testo: 'Attira finanziamenti e bandi dedicati alla sostenibilità',
    },
    {
      id: 9,
      testo: 'Offri opportunità educative per scuole e famiglie locali',
    },
  ],
}

TitoloBottoneLista.propTypes = {
  titoloSezione: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonname: PropTypes.string,
  entriesList: PropTypes.array,
}

export default TitoloBottoneLista
