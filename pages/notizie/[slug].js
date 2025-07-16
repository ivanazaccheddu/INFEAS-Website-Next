import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import Headertipologiatarget from '../../components/headertipologiatarget'
import Tag from '../../components/tag'
import Footer from '../../components/footer'
import dettaglionotiziePageInitialPropsTqZaResource from '../../resources/dettaglionotizie-page-initial-props-tq_za'
import dettaglionotiziePageInitialPathsTqPfResource from '../../resources/dettaglionotizie-page-initial-paths-tq_pf'

const DettaglioNotizie = (props) => {
  return (
    <>
      <main
        id="pagina-dettaglio-notizie"
        className="dettaglio-notizie-container1"
      >
        <Head>
          <title>Dettaglio-notizie - INFEAS Website</title>
          <meta
            property="og:title"
            content="Dettaglio-notizie - INFEAS Website"
          />
        </Head>
        <DataProvider
          renderSuccess={(NotizieEntity) => (
            <Fragment>
              <NavbarInteractive
                text={
                  <Fragment>
                    <span className="dettaglio-notizie-text10">
                      Per scuole e Università
                    </span>
                  </Fragment>
                }
                login={
                  <Fragment>
                    <span className="dettaglio-notizie-text11">Login</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="dettaglio-notizie-text12">
                      Per tutti i cittadini
                    </span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="dettaglio-notizie-text13">
                      Per i membri della Rete
                    </span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="dettaglio-notizie-text14">Mappa CEAS</span>
                  </Fragment>
                }
                text4={
                  <Fragment>
                    <span className="dettaglio-notizie-text15">Press Kit</span>
                  </Fragment>
                }
                text5={
                  <Fragment>
                    <span className="dettaglio-notizie-text16">Seguici su</span>
                  </Fragment>
                }
                login1={
                  <Fragment>
                    <span className="dettaglio-notizie-text17">Cerca</span>
                  </Fragment>
                }
                text51={
                  <Fragment>
                    <span className="dettaglio-notizie-text18">Seguici su</span>
                  </Fragment>
                }
                text122={
                  <Fragment>
                    <span className="dettaglio-notizie-text19">
                      Materiali didattici
                    </span>
                  </Fragment>
                }
                register={
                  <Fragment>
                    <span className="dettaglio-notizie-text20">Register</span>
                  </Fragment>
                }
                text1121={
                  <Fragment>
                    <span className="dettaglio-notizie-text21">
                      A proposito di INFEAS
                    </span>
                  </Fragment>
                }
                register1={
                  <Fragment>
                    <span className="dettaglio-notizie-text22">Cerca</span>
                  </Fragment>
                }
                rootClassName="navbar-interactiveroot-class-name20"
              ></NavbarInteractive>
              <Headertipologiatarget
                breadcrumb="Home / Notizie"
                rootClassName="headertipologiatargetroot-class-name16"
                headerTitleName={NotizieEntity?.nome}
              ></Headertipologiatarget>
              <section
                id="descrizione-notizie"
                tabindex="0"
                className="dettaglio-notizie-container2 padding-container"
              >
                <div className="dettaglio-notizie-container3 thq-section-max-width">
                  <div className="dettaglio-notizie-container4">
                    <div className="dettaglio-notizie-container5">
                      <span>VAI A</span>
                      <span className="paragraph_md">
                        <span>titletitletitletitletitletitletitle</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="dettaglio-notizie-container6">
                      <span>TAG</span>
                      <Tag
                        idTag={NotizieEntity?.categoria_notizie?.id || '--'}
                        nomeTag={NotizieEntity?.categoria_notizie?.nome || '--'}
                        rootClassName="tagroot-class-name1"
                      ></Tag>
                    </div>
                  </div>
                  <div className="dettaglio-notizie-container7">
                    <img
                      alt="image"
                      src={NotizieEntity?.immagine?.url}
                      className="dettaglio-notizie-image"
                    />
                    <div className="dettaglio-notizie-container8 paragraph_md">
                      <Markdown>{NotizieEntity?.descrizione || '--'}</Markdown>
                    </div>
                  </div>
                </div>
              </section>
            </Fragment>
          )}
          initialData={props.notizieEntity}
          persistDataDuringLoading={true}
          key={props?.notizieEntity?.slug}
        />
        <Footer rootClassName="footerroot-class-name18"></Footer>
      </main>
      <style jsx>
        {`
          .dettaglio-notizie-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .dettaglio-notizie-text10 {
            display: inline-block;
          }
          .dettaglio-notizie-text11 {
            display: inline-block;
          }
          .dettaglio-notizie-text12 {
            display: inline-block;
          }
          .dettaglio-notizie-text13 {
            display: inline-block;
          }
          .dettaglio-notizie-text14 {
            display: inline-block;
          }
          .dettaglio-notizie-text15 {
            display: inline-block;
          }
          .dettaglio-notizie-text16 {
            display: inline-block;
          }
          .dettaglio-notizie-text17 {
            display: inline-block;
          }
          .dettaglio-notizie-text18 {
            display: inline-block;
          }
          .dettaglio-notizie-text19 {
            display: inline-block;
          }
          .dettaglio-notizie-text20 {
            display: inline-block;
          }
          .dettaglio-notizie-text21 {
            display: inline-block;
          }
          .dettaglio-notizie-text22 {
            display: inline-block;
          }
          .dettaglio-notizie-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .dettaglio-notizie-container3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .dettaglio-notizie-container4 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-notizie-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-notizie-container6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-notizie-container7 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-notizie-image {
            width: 50%;
            align-self: center;
            object-fit: cover;
          }
          .dettaglio-notizie-container8 {
            flex: 1;
            align-self: stretch;
          }
          @media (max-width: 991px) {
            .dettaglio-notizie-container3 {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .dettaglio-notizie-container3 {
              flex-direction: column;
            }
            .dettaglio-notizie-container8 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

DettaglioNotizie.defaultProps = {
  notizieEntity: [],
}

DettaglioNotizie.propTypes = {
  notizieEntity: PropTypes.array,
}

export default DettaglioNotizie

export async function getStaticProps(context) {
  try {
    const response = await dettaglionotiziePageInitialPropsTqZaResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        notizieEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await dettaglionotiziePageInitialPathsTqPfResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.attributes?.slug).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
