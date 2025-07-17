import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import HeaderVector from '../../components/header-vector'
import DettaglioEventiCompleto from '../../components/dettaglio-eventi-completo'
import Galleriaimmagginislot from '../../components/galleriaimmagginislot'
import Imagecontainercomponent from '../../components/imagecontainercomponent'
import Footer from '../../components/footer'
import eventiPageInitialPropsTqIResource from '../../resources/eventi-page-initial-props-tq_-i'
import eventiPageInitialPathsTq4gResource from '../../resources/eventi-page-initial-paths-tq_4g'

const Eventi11 = (props) => {
  return (
    <>
      <main id="pagina-dettaglio-evento" className="eventi11-container1">
        <Head>
          <title>Eventi1 - INFEAS Website</title>
          <meta property="og:title" content="Eventi1 - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="eventi11-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="eventi11-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="eventi11-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="eventi11-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="eventi11-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="eventi11-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="eventi11-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="eventi11-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="eventi11-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="eventi11-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="eventi11-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="eventi11-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="eventi11-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name30"
        ></NavbarInteractive>
        <DataProvider
          renderSuccess={(EventiEntity) => (
            <Fragment>
              <HeaderVector
                breadcrumb="Home / Eventi"
                idTitleSlug={EventiEntity?.slug}
                titoloHeader={EventiEntity?.nome || '--'}
                rootClassName="header-vectorroot-class-name2"
              ></HeaderVector>
              <section
                id="descrizione-evento"
                className="eventi11-container2 padding-container"
              >
                <div className="eventi11-container3 thq-section-max-width">
                  <DettaglioEventiCompleto
                    luogo={EventiEntity?.luogo || '--'}
                    nomeOrg={EventiEntity?.organizzazione?.nome}
                    oraFine={EventiEntity?.data_fine}
                    dataFine={EventiEntity?.data_fine}
                    imageAlt={EventiEntity?.immagine?.alt || 'immagine'}
                    indirizzo={EventiEntity?.indirizzo || '--'}
                    mostraOra={EventiEntity?.mostra_ora}
                    oraInizio={EventiEntity?.data_inizio}
                    dataInizio={EventiEntity?.data_inizio}
                    cmsRichtext={EventiEntity?.descrizione || '--'}
                    destinatari={EventiEntity?.destinatari}
                    rootClassName="dettaglio-eventi-completoroot-class-name"
                    immagineEvento={EventiEntity?.immagine?.url || '--'}
                    documentiEvento={EventiEntity?.documenti || []}
                  ></DettaglioEventiCompleto>
                </div>
                <Galleriaimmagginislot rootClassName="galleriaimmagginislotroot-class-name">
                  <Repeater
                    items={EventiEntity?.galleria?.immagini || []}
                    renderItem={(galleira_immagini) => (
                      <Fragment>
                        <Imagecontainercomponent
                          imageAlt={galleira_immagini?.alt || '--'}
                          imageSrc={galleira_immagini?.url || '--'}
                          rootClassName="imagecontainercomponentroot-class-name"
                        ></Imagecontainercomponent>
                      </Fragment>
                    )}
                  />
                </Galleriaimmagginislot>
              </section>
            </Fragment>
          )}
          initialData={props.eventiEntity}
          persistDataDuringLoading={true}
          key={props?.eventiEntity?.slug}
        />
        <Footer rootClassName="footerroot-class-name27"></Footer>
      </main>
      <style jsx>
        {`
          .eventi11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .eventi11-text10 {
            display: inline-block;
          }
          .eventi11-text11 {
            display: inline-block;
          }
          .eventi11-text12 {
            display: inline-block;
          }
          .eventi11-text13 {
            display: inline-block;
          }
          .eventi11-text14 {
            display: inline-block;
          }
          .eventi11-text15 {
            display: inline-block;
          }
          .eventi11-text16 {
            display: inline-block;
          }
          .eventi11-text17 {
            display: inline-block;
          }
          .eventi11-text18 {
            display: inline-block;
          }
          .eventi11-text19 {
            display: inline-block;
          }
          .eventi11-text20 {
            display: inline-block;
          }
          .eventi11-text21 {
            display: inline-block;
          }
          .eventi11-text22 {
            display: inline-block;
          }
          .eventi11-container2 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            background-color: white;
          }
          .eventi11-container3 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Eventi11.defaultProps = {
  eventiEntity: [],
}

Eventi11.propTypes = {
  eventiEntity: PropTypes.array,
}

export default Eventi11

export async function getStaticProps(context) {
  try {
    const response = await eventiPageInitialPropsTqIResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        eventiEntity: response?.data?.[0],
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
    const response = await eventiPageInitialPathsTq4gResource({})
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
