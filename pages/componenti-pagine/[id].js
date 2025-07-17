import React, { Fragment } from 'react'
import Head from 'next/head'

import {
  DataProvider,
  CMSMixedType,
  Repeater,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import Headertipologiatarget from '../../components/headertipologiatarget'
import Focusareacomponent from '../../components/focusareacomponent'
import EmptyContainer from '../../components/empty-container'
import Footer from '../../components/footer'
import componentiPaginePageInitialPropsTqE1Resource from '../../resources/componenti-pagine-page-initial-props-tq_e1'
import componentiPaginePageInitialPathsTqRzResource from '../../resources/componenti-pagine-page-initial-paths-tq_rz'

const ComponentiPagine = (props) => {
  return (
    <>
      <div className="componenti-pagine-container1">
        <Head>
          <title>Componenti-pagine - INFEAS Website</title>
          <meta
            property="og:title"
            content="Componenti-pagine - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="componenti-pagine-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="componenti-pagine-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="componenti-pagine-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="componenti-pagine-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="componenti-pagine-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="componenti-pagine-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="componenti-pagine-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="componenti-pagine-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="componenti-pagine-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="componenti-pagine-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="componenti-pagine-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="componenti-pagine-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="componenti-pagine-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name38"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i membri della Rete / Come istituire un CEAS"
          rootClassName="headertipologiatargetroot-class-name31"
          headerTitleName="Come istituire un CEAS"
        ></Headertipologiatarget>
        <section className="componenti-pagine-container2">
          <DataProvider
            renderSuccess={(ComponentiPagineEntity) => (
              <Fragment>
                <Repeater
                  items={ComponentiPagineEntity?.componenti || []}
                  renderItem={(componenti_array) => (
                    <Fragment>
                      <CMSMixedType
                        itemData={componenti_array}
                        mappingConfiguration={{
                          'layout.sezione-focus': (cms_mixed_type) => (
                            <Focusareacomponent
                              testo={componenti_array?.testo || '--'}
                              titolo={componenti_array?.titolo}
                              descrizione={
                                componenti_array?.descrizione || '--'
                              }
                              buttonComponentButtonName="--"
                            ></Focusareacomponent>
                          ),
                        }}
                        renderDefault={(cms_mixed_type) => (
                          <EmptyContainer></EmptyContainer>
                        )}
                        renderError={(cms_mixed_type) => (
                          <div>
                            Error Component. Something wrong happend and you did
                            not provide an error component.
                          </div>
                        )}
                      />
                    </Fragment>
                  )}
                />
                <div className="componenti-pagine-container4 padding-container">
                  <div className="componenti-pagine-container5 thq-section-max-width"></div>
                </div>
              </Fragment>
            )}
            initialData={props.componentiPagineEntity}
            persistDataDuringLoading={true}
            key={props?.componentiPagineEntity?.id}
          />
        </section>
        <Footer rootClassName="footerroot-class-name36"></Footer>
      </div>
      <style jsx>
        {`
          .componenti-pagine-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .componenti-pagine-text10 {
            display: inline-block;
          }
          .componenti-pagine-text11 {
            display: inline-block;
          }
          .componenti-pagine-text12 {
            display: inline-block;
          }
          .componenti-pagine-text13 {
            display: inline-block;
          }
          .componenti-pagine-text14 {
            display: inline-block;
          }
          .componenti-pagine-text15 {
            display: inline-block;
          }
          .componenti-pagine-text16 {
            display: inline-block;
          }
          .componenti-pagine-text17 {
            display: inline-block;
          }
          .componenti-pagine-text18 {
            display: inline-block;
          }
          .componenti-pagine-text19 {
            display: inline-block;
          }
          .componenti-pagine-text20 {
            display: inline-block;
          }
          .componenti-pagine-text21 {
            display: inline-block;
          }
          .componenti-pagine-text22 {
            display: inline-block;
          }
          .componenti-pagine-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .componenti-pagine-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .componenti-pagine-container5 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

ComponentiPagine.defaultProps = {
  componentiPagineEntity: [],
}

ComponentiPagine.propTypes = {
  componentiPagineEntity: PropTypes.array,
}

export default ComponentiPagine

export async function getStaticProps(context) {
  try {
    const response = await componentiPaginePageInitialPropsTqE1Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        componentiPagineEntity: response?.data?.[0],
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
    const response = await componentiPaginePageInitialPathsTqRzResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
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
