import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import CeasList from '../components/ceas-list'
import Footer from '../components/footer'

const MappaCEAS = (props) => {
  return (
    <>
      <div className="mappa-ceas-container1">
        <Head>
          <title>Mappa-CEAS - INFEAS Website</title>
          <meta property="og:title" content="Mappa-CEAS - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="mappa-ceas-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="mappa-ceas-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="mappa-ceas-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="mappa-ceas-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="mappa-ceas-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="mappa-ceas-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="mappa-ceas-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="mappa-ceas-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="mappa-ceas-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="mappa-ceas-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="mappa-ceas-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="mappa-ceas-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="mappa-ceas-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name40"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Mappa CEAS"
          rootClassName="headertipologiatargetroot-class-name33"
          headerTitleName="Mappa CEAS"
        ></Headertipologiatarget>
        <section
          id="elenco-ceas-mappa"
          className="mappa-ceas-container2 padding-container"
        >
          <div className="mappa-ceas-container3 thq-section-max-width">
            <div className="mappa-ceas-container4">
              <div className="mappa-ceas-container5">
                <div className="mappa-ceas-container6">
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
            <CeasList rootClassName="ceas-listroot-class-name2"></CeasList>
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name38"></Footer>
      </div>
      <style jsx>
        {`
          .mappa-ceas-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .mappa-ceas-text10 {
            display: inline-block;
          }
          .mappa-ceas-text11 {
            display: inline-block;
          }
          .mappa-ceas-text12 {
            display: inline-block;
          }
          .mappa-ceas-text13 {
            display: inline-block;
          }
          .mappa-ceas-text14 {
            display: inline-block;
          }
          .mappa-ceas-text15 {
            display: inline-block;
          }
          .mappa-ceas-text16 {
            display: inline-block;
          }
          .mappa-ceas-text17 {
            display: inline-block;
          }
          .mappa-ceas-text18 {
            display: inline-block;
          }
          .mappa-ceas-text19 {
            display: inline-block;
          }
          .mappa-ceas-text20 {
            display: inline-block;
          }
          .mappa-ceas-text21 {
            display: inline-block;
          }
          .mappa-ceas-text22 {
            display: inline-block;
          }
          .mappa-ceas-container2 {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-items: flex-start;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .mappa-ceas-container3 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mappa-ceas-container4 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mappa-ceas-container5 {
            width: 100%;
          }
          .mappa-ceas-container6 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default MappaCEAS
