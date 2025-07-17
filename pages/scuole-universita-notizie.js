import React, { useState, Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import SezioneNotizieScuole from '../components/sezione-notizie-scuole'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ScuoleNotizie = (props) => {
  const [categoria, setCategoria] = useState('*')
  return (
    <>
      <div className="scuole-notizie-container">
        <Head>
          <title>Scuole-Notizie - INFEAS Website</title>
          <meta property="og:title" content="Scuole-Notizie - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-notizie-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-notizie-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-notizie-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-notizie-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-notizie-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-notizie-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-notizie-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-notizie-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-notizie-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-notizie-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-notizie-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-notizie-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-notizie-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name29"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per le scuole e università / Notizie"
          rootClassName="headertipologiatargetroot-class-name23"
          headerTitleName="Notizie"
        ></Headertipologiatarget>
        <SezioneNotizieScuole></SezioneNotizieScuole>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name20"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name26"></Footer>
      </div>
      <style jsx>
        {`
          .scuole-notizie-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-notizie-text10 {
            display: inline-block;
          }
          .scuole-notizie-text11 {
            display: inline-block;
          }
          .scuole-notizie-text12 {
            display: inline-block;
          }
          .scuole-notizie-text13 {
            display: inline-block;
          }
          .scuole-notizie-text14 {
            display: inline-block;
          }
          .scuole-notizie-text15 {
            display: inline-block;
          }
          .scuole-notizie-text16 {
            display: inline-block;
          }
          .scuole-notizie-text17 {
            display: inline-block;
          }
          .scuole-notizie-text18 {
            display: inline-block;
          }
          .scuole-notizie-text19 {
            display: inline-block;
          }
          .scuole-notizie-text20 {
            display: inline-block;
          }
          .scuole-notizie-text21 {
            display: inline-block;
          }
          .scuole-notizie-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default ScuoleNotizie
