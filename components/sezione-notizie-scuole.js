import React, { useState, Fragment } from 'react'
import { useRouter } from 'next/router'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NewsSimple from './news-simple'
import EmptyPlaceholder from './empty-placeholder'

const SezioneNotizieScuole = (props) => {
  const router = useRouter()
  const [categoria, setCategoria] = useState('*')
  return (
    <>
      <section className="sezione-notizie-scuole-sezione-notizie-scuole padding-container">
        <div className="sezione-notizie-scuole-container1 thq-section-max-width">
          <div className="sezione-notizie-scuole-container2">
            <span className="sezione-notizie-scuole-text10 paragraph_xl">
              <span>
                Rimani aggiornato su eventi, programmi e iniziative dedicati a
                scuole e università.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Scopri le ultime attività e opportunità per approfondire
                l&apos;educazione ambientale e promuovere la sostenibilità nelle
                nuove generazioni.
              </span>
            </span>
          </div>
          <div className="sezione-notizie-scuole-news3columns">
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/sezione-notizie-scuole-resource-sezione-notizie-scuole?${new URLSearchParams(
                    params
                  )}`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                )
                  .then((res) => res.json())
                  .then((data) => data)
              }
              renderSuccess={(params) => (
                <Fragment>
                  <div className="grid-3">
                    <Repeater
                      items={params}
                      renderItem={(news) => (
                        <Fragment>
                          <NewsSimple
                            border="yes"
                            tagName={news?.categoria_notizie?.nome || '--'}
                            dataNews={news?.data_pubblicazione || '--'}
                            titoloNews={news?.nome || '--'}
                            rootClassName="news-simpleroot-class-name9"
                            descrizioneBreve={news?.descrizione_breve || '--'}
                          ></NewsSimple>
                        </Fragment>
                      )}
                      renderEmpty={() => (
                        <Fragment>
                          <EmptyPlaceholder
                            testo={
                              <Fragment>
                                <span className="sezione-notizie-scuole-text14 paragraph_xl">
                                  <span>
                                    Torna a trovarci presto per restare
                                    aggiornato con le ultime novità e
                                    aggiornamenti.
                                  </span>
                                  <br></br>
                                </span>
                              </Fragment>
                            }
                            titolo={
                              <Fragment>
                                <span className="sezione-notizie-scuole-text17 paragraph_xl">
                                  <span>
                                    Nessuna notizia disponibile al momento
                                  </span>
                                  <br></br>
                                </span>
                              </Fragment>
                            }
                            rootClassName="empty-placeholderroot-class-name1"
                          ></EmptyPlaceholder>
                        </Fragment>
                      )}
                    />
                  </div>
                  <div className="sezione-notizie-scuole-cms-pagination-node"></div>
                </Fragment>
              )}
              params={{
                'pagination[start]':
                  (parseInt(router.query?.['cPage-3hdq2'] ?? 1) - 1) * 15,
                categoria: categoria,
                locale: props?.locale ?? '',
              }}
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .sezione-notizie-scuole-sezione-notizie-scuole {
            position: relative;
          }
          .sezione-notizie-scuole-container1 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sezione-notizie-scuole-container2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sezione-notizie-scuole-text10 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .sezione-notizie-scuole-news3columns {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
          }
          .sezione-notizie-scuole-text14 {
            display: inline-block;
          }
          .sezione-notizie-scuole-text17 {
            display: inline-block;
            font-weight: 600;
          }
          .sezione-notizie-scuole-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .sezione-notizie-scuole-news3columns {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .sezione-notizie-scuole-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default SezioneNotizieScuole
