import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../../components/navbar-interactive'
import Headertipologiatarget from '../../../components/headertipologiatarget'
import CeasList from '../../../components/ceas-list'
import Footer from '../../../components/footer'
import organizzazioniPageInitialPropsTqKtResource from '../../../resources/organizzazioni-page-initial-props-tq_kt'
import organizzazioniPageInitialPathsTqSResource from '../../../resources/organizzazioni-page-initial-paths-tq__s'

const Organizzazioni11 = (props) => {
  const router = useRouter()
  return (
    <>
      <main className="organizzazioni11-container1">
        <Head>
          <title>Organizzazioni1 - INFEAS Website</title>
          <meta
            property="og:title"
            content="Organizzazioni1 - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="organizzazioni11-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="organizzazioni11-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="organizzazioni11-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="organizzazioni11-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="organizzazioni11-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="organizzazioni11-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="organizzazioni11-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="organizzazioni11-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="organizzazioni11-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="organizzazioni11-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="organizzazioni11-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="organizzazioni11-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="organizzazioni11-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name22"
        ></NavbarInteractive>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="organizzazioni11-container2">
                <Repeater
                  items={params}
                  renderItem={(OrganizzazioniEntities) => <Fragment></Fragment>}
                />
              </div>
              <div className="organizzazioni11-cms-pagination-node"></div>
            </Fragment>
          )}
          initialData={props.organizzazioniEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
        <Headertipologiatarget
          breadcrumb="Home / Mappa CEAS"
          rootClassName="headertipologiatargetroot-class-name17"
          headerTitleName="Mappa CEAS"
        ></Headertipologiatarget>
        <section
          id="elenco-ceas-mappa"
          className="organizzazioni11-container3 padding-container"
        >
          <div className="organizzazioni11-container4 thq-section-max-width">
            <div className="organizzazioni11-container5">
              <div className="organizzazioni11-container6">
                <div className="organizzazioni11-container7">
                  <React.Fragment>
                    <React.Fragment>
                      <iframe
                        src="https://www.google.com/maps/d/embed?mid=1H9iCa0FfFqi0OffyjrXv-din_ddUFAU"
                        width="100%"
                        height="700px"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                      ></iframe>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <CeasList rootClassName="ceas-listroot-class-name"></CeasList>
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name20"></Footer>
      </main>
      <style jsx>
        {`
          .organizzazioni11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-text10 {
            display: inline-block;
          }
          .organizzazioni11-text11 {
            display: inline-block;
          }
          .organizzazioni11-text12 {
            display: inline-block;
          }
          .organizzazioni11-text13 {
            display: inline-block;
          }
          .organizzazioni11-text14 {
            display: inline-block;
          }
          .organizzazioni11-text15 {
            display: inline-block;
          }
          .organizzazioni11-text16 {
            display: inline-block;
          }
          .organizzazioni11-text17 {
            display: inline-block;
          }
          .organizzazioni11-text18 {
            display: inline-block;
          }
          .organizzazioni11-text19 {
            display: inline-block;
          }
          .organizzazioni11-text20 {
            display: inline-block;
          }
          .organizzazioni11-text21 {
            display: inline-block;
          }
          .organizzazioni11-text22 {
            display: inline-block;
          }
          .organizzazioni11-container2 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: grid;
            place-items: start;
            padding-bottom: var(--dl-layout-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .organizzazioni11-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .organizzazioni11-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .organizzazioni11-container4 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-container5 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-container6 {
            width: 100%;
          }
          .organizzazioni11-container7 {
            display: contents;
          }
          @media (max-width: 991px) {
            .organizzazioni11-container2 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .organizzazioni11-container2 {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Organizzazioni11.defaultProps = {
  organizzazioniEntities: [],
}

Organizzazioni11.propTypes = {
  organizzazioniEntities: PropTypes.array,
}

export default Organizzazioni11

export async function getStaticProps(context) {
  try {
    const response = await organizzazioniPageInitialPropsTqKtResource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        organizzazioniEntities: response,
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
    const response = await organizzazioniPageInitialPathsTqSResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
