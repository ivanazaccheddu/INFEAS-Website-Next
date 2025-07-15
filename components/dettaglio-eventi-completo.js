import React, { Fragment } from 'react'

import Markdown from 'markdown-to-jsx'
import {
  DateTimePrimitive,
  Repeater,
  CMSMixedType,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Tag from './tag'
import Filelistingdynamiczone from './filelistingdynamiczone'

const DettaglioEventiCompleto = (props) => {
  return (
    <>
      <article
        className={`dettaglio-eventi-completo-two-colrightimage ${props.rootClassName} `}
      >
        <div className="dettaglio-eventi-completo-container10">
          <Tag rootClassName="tagroot-class-name4"></Tag>
          <div>
            <Markdown>{props?.cmsRichtext}</Markdown>
          </div>
        </div>
        <div className="dettaglio-eventi-completo-dettagli-evento">
          {props.immagineEvento !== '--' && (
            <img
              alt={props.imageAlt}
              src={props.immagineEvento}
              className="dettaglio-eventi-completo-image"
            />
          )}
          <div className="dettaglio-eventi-completo-container12">
            <div className="dettaglio-eventi-completo-data-luogo">
              <hr className="dettaglio-eventi-completo-separator"></hr>
              <div className="dettaglio-eventi-completo-data-ora-inizio">
                <span className="dettaglio-eventi-completo-text10 paragraph_xl">
                  Data inizio:
                </span>
                <span className="paragraph_xl">
                  <DateTimePrimitive
                    format="DD/MM/YYYY"
                    date={props.dataInizio}
                  ></DateTimePrimitive>
                </span>
                {props.mostraOra === true && (
                  <div className="dettaglio-eventi-completo-container13">
                    <span>|</span>
                    <span className="paragraph_xl">
                      <DateTimePrimitive
                        format="HH:MM"
                        date={props.oraInizio}
                      ></DateTimePrimitive>
                    </span>
                  </div>
                )}
              </div>
              {props.dataFine !== '1980-01-01' && (
                <div className="dettaglio-eventi-completo-data-ora-fine">
                  <div className="dettaglio-eventi-completo-fine"></div>
                </div>
              )}
              {props.luogo !== '--' && (
                <div className="dettaglio-eventi-completo-luogo">
                  <span className="dettaglio-eventi-completo-text12 paragraph_xl">
                    Luogo:
                  </span>
                  <span className="paragraph_xl">{props.luogo}</span>
                </div>
              )}
              {props.indirizzo !== '--' && (
                <div className="dettaglio-eventi-completo-indirizzo">
                  <span className="dettaglio-eventi-completo-text14 paragraph_xl">
                    Indirizzo
                  </span>
                  <span className="paragraph_xl">{props.indirizzo}</span>
                </div>
              )}
            </div>
            <div className="dettaglio-eventi-completo-destinatari">
              <div className="dettaglio-eventi-completo-container14">
                <div className="dettaglio-eventi-completo-container15">
                  <span className="dettaglio-eventi-completo-text16 paragraph_xl">
                    A chi è rivolto
                  </span>
                  <div className="dettaglio-eventi-completo-container16">
                    <Repeater
                      items={
                        props['destinatari'] || [
                          {
                            nome: 'Cittadini',
                            slug: 'cittadini',
                            createdAt: '2025-05-08T13:10:40.375Z',
                            updatedAt: '2025-05-15T13:54:59.508Z',
                            descrizione:
                              '<p>INFEAS Sardegna promuove iniziative volte a sensibilizzare e coinvolgere i cittad.</p>',
                            publishedAt: '2025-05-08T13:10:41.451Z',
                          },
                          {
                            nome: 'Cittadini2',
                            slug: 'cittadini2',
                            createdAt: '2025-05-08T13:10:40.375Z',
                            updatedAt: '2025-05-15T13:54:59.508Z',
                            descrizione:
                              '<p>INFEAS Sardegna promuove iniziative volte a sensibilizzare e coinvolgere i cittad.</p>',
                            publishedAt: '2025-05-08T13:10:41.451Z',
                          },
                        ]
                      }
                      renderItem={(destinatari_context) => (
                        <Fragment>
                          <span className="paragraph_xl">
                            {destinatari_context?.nome}
                          </span>
                        </Fragment>
                      )}
                      renderEmpty={() => (
                        <Fragment>
                          <span>Informazione non fornita</span>
                        </Fragment>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="dettaglio-eventi-completo-org">
              <span className="dettaglio-eventi-completo-text19 paragraph_xl">
                Pubblicato da:
              </span>
              <span className="paragraph_xl">{props.nomeOrg}</span>
            </div>
            {props.documentiEvento?.['0']?.['id'] > 0 && (
              <div className="dettaglio-eventi-completo-container17">
                <span className="dettaglio-eventi-completo-text21 paragraph_xl">
                  Documenti correlati
                </span>
                <div className="dettaglio-eventi-completo-container18">
                  <Repeater
                    items={props['documentiEvento'] || []}
                    renderItem={(documenti_dyn_zone) => (
                      <Fragment>
                        <CMSMixedType
                          itemData={documenti_dyn_zone?.__component}
                          mappingConfiguration={{}}
                          renderDefault={(cms_mixed_type) => (
                            <Filelistingdynamiczone
                              fileName={documenti_dyn_zone?.nome}
                              fileArray={documenti_dyn_zone?.file || []}
                              fileListingUrl={
                                documenti_dyn_zone?.file?.data?.attributes?.url
                              }
                            ></Filelistingdynamiczone>
                          )}
                          renderError={(cms_mixed_type) => (
                            <div>
                              Error Component. Something wrong happend and you
                              did not provide an error component.
                            </div>
                          )}
                        />
                      </Fragment>
                    )}
                    renderEmpty={() => (
                      <Fragment>
                        <span className="paragraph_md">Nessun documento</span>
                      </Fragment>
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .dettaglio-eventi-completo-two-colrightimage {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .dettaglio-eventi-completo-container10 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dettaglio-eventi-completo-dettagli-evento {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .dettaglio-eventi-completo-image {
            width: 100%;
            object-fit: cover;
          }
          .dettaglio-eventi-completo-container12 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dettaglio-eventi-completo-data-luogo {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .dettaglio-eventi-completo-separator {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .dettaglio-eventi-completo-data-ora-inizio {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .dettaglio-eventi-completo-text10 {
            font-style: normal;
            font-weight: 700;
          }
          .dettaglio-eventi-completo-container13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
          }
          .dettaglio-eventi-completo-data-ora-fine {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-eventi-completo-fine {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .dettaglio-eventi-completo-luogo {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .dettaglio-eventi-completo-text12 {
            font-weight: 700;
          }
          .dettaglio-eventi-completo-indirizzo {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .dettaglio-eventi-completo-text14 {
            font-weight: 700;
          }
          .dettaglio-eventi-completo-destinatari {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-eventi-completo-container14 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglio-eventi-completo-container15 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglio-eventi-completo-text16 {
            font-weight: 700;
          }
          .dettaglio-eventi-completo-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dettaglio-eventi-completo-org {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .dettaglio-eventi-completo-text19 {
            font-weight: 700;
          }
          .dettaglio-eventi-completo-container17 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-eventi-completo-text21 {
            font-weight: bold;
          }
          .dettaglio-eventi-completo-container18 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .dettaglio-eventi-completo-two-colrightimage {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 479px) {
            .dettaglio-eventi-completo-two-colrightimage {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

DettaglioEventiCompleto.defaultProps = {
  imageAlt: 'immagine-evento',
  documentiEvento: [],
  oraFine: '2025-06-26T13:52:15.034Z',
  oraInizio: '2025-06-26T13:52:15.034Z',
  cmsRichtext: 'Fallback value',
  dataFine: '2025-06-26T13:52:15.034Z',
  dataInizio: '2025-06-26T13:52:15.034Z',
  destinatari: [
    {
      nome: 'Cittadini',
      slug: 'cittadini',
      createdAt: '2025-05-08T13:10:40.375Z',
      updatedAt: '2025-05-15T13:54:59.508Z',
      descrizione:
        '<p>INFEAS Sardegna promuove iniziative volte a sensibilizzare e coinvolgere i cittad.</p>',
      publishedAt: '2025-05-08T13:10:41.451Z',
    },
    {
      nome: 'Cittadini2',
      slug: 'cittadini2',
      createdAt: '2025-05-08T13:10:40.375Z',
      updatedAt: '2025-05-15T13:54:59.508Z',
      descrizione:
        '<p>INFEAS Sardegna promuove iniziative volte a sensibilizzare e coinvolgere i cittad.</p>',
      publishedAt: '2025-05-08T13:10:41.451Z',
    },
  ],
  indirizzo: 'text',
  luogo: 'text',
  rootClassName: '',
  immagineEvento: 'newProp',
  nomeOrg: 'org',
  mostraOra: true,
}

DettaglioEventiCompleto.propTypes = {
  imageAlt: PropTypes.string,
  documentiEvento: PropTypes.array,
  oraFine: PropTypes.string,
  oraInizio: PropTypes.string,
  cmsRichtext: PropTypes.string,
  dataFine: PropTypes.string,
  dataInizio: PropTypes.string,
  destinatari: PropTypes.array,
  indirizzo: PropTypes.string,
  luogo: PropTypes.string,
  rootClassName: PropTypes.string,
  immagineEvento: PropTypes.string,
  nomeOrg: PropTypes.string,
  mostraOra: PropTypes.boolean,
}

export default DettaglioEventiCompleto
