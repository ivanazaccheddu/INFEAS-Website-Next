import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import Headertipologiatarget from '../../components/headertipologiatarget'
import Cardwithphoto from '../../components/cardwithphoto'
import Footer from '../../components/footer'
import progettiPageInitialPropsTqOzResource from '../../resources/progetti-page-initial-props-tq_oz'

const Progetti = (props) => {
  return (
    <>
      <main className="progetti-container1">
        <Head>
          <title>Progetti - INFEAS Website</title>
          <meta property="og:title" content="Progetti - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="progetti-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="progetti-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="progetti-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="progetti-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="progetti-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="progetti-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="progetti-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="progetti-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="progetti-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="progetti-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="progetti-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="progetti-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="progetti-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name23"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Progetti"
          rootClassName="headertipologiatargetroot-class-name18"
          headerTitleName="Progetti"
        ></Headertipologiatarget>
        <section
          id="elenco-progetti"
          className="progetti-container2 padding-container"
        >
          <div className="progetti-container3 thq-section-max-width">
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="progetti-container4">
                    <Repeater
                      items={params}
                      renderItem={(ProgettiEntities) => (
                        <Fragment>
                          <Link href={`/progetti/${ProgettiEntities?.slug}`}>
                            <a>
                              <Cardwithphoto
                                fotoAlt={
                                  ProgettiEntities?.immagine?.alt || '--'
                                }
                                fotoCard={
                                  ProgettiEntities?.immagine?.url || '--'
                                }
                                nomeProgetto={ProgettiEntities?.nome}
                                rootClassName="cardwithphotoroot-class-name"
                                className="progetti-component3"
                              ></Cardwithphoto>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              initialData={props.progettiEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name21"></Footer>
      </main>
      <style jsx>
        {`
          .progetti-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .progetti-text10 {
            display: inline-block;
          }
          .progetti-text11 {
            display: inline-block;
          }
          .progetti-text12 {
            display: inline-block;
          }
          .progetti-text13 {
            display: inline-block;
          }
          .progetti-text14 {
            display: inline-block;
          }
          .progetti-text15 {
            display: inline-block;
          }
          .progetti-text16 {
            display: inline-block;
          }
          .progetti-text17 {
            display: inline-block;
          }
          .progetti-text18 {
            display: inline-block;
          }
          .progetti-text19 {
            display: inline-block;
          }
          .progetti-text20 {
            display: inline-block;
          }
          .progetti-text21 {
            display: inline-block;
          }
          .progetti-text22 {
            display: inline-block;
          }
          .progetti-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .progetti-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .progetti-container4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .progetti-component3 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Progetti.defaultProps = {
  progettiEntities: [],
}

Progetti.propTypes = {
  progettiEntities: PropTypes.array,
}

export default Progetti

export async function getStaticProps(context) {
  try {
    const response = await progettiPageInitialPropsTqOzResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        progettiEntities: response,
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
