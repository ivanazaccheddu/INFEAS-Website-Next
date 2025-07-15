import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Tag from '../components/tag'
import NewsSimple from '../components/news-simple'
import CardEvento from '../components/card-evento'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const GeneralRicerca = (props) => {
  return (
    <>
      <main id="pagina-ricerca" className="general-ricerca-container10">
        <Head>
          <title>General-Ricerca - INFEAS Website</title>
          <meta
            property="og:title"
            content="General-Ricerca - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="general-ricerca-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="general-ricerca-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="general-ricerca-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="general-ricerca-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="general-ricerca-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="general-ricerca-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="general-ricerca-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="general-ricerca-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="general-ricerca-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="general-ricerca-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="general-ricerca-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="general-ricerca-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="general-ricerca-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name2"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Ricerca"
          rootClassName="headertipologiatargetroot-class-name8"
          headerTitleName="Ricerca"
        ></Headertipologiatarget>
        <section className="general-ricerca-container11 padding-container">
          <div className="general-ricerca-sezioniricerca thq-section-max-width">
            <div className="general-ricerca-dettaglio-sx">
              <div className="general-ricerca-container12">
                <div className="general-ricerca-filtra-per1">
                  <div className="general-ricerca-container13">
                    <label className="general-ricerca-text23">
                      Keyword di ricerca
                    </label>
                  </div>
                </div>
                <div className="general-ricerca-container14">
                  <select name="Filter by" className="general-ricerca-select1">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="general-ricerca-container15">
                <div className="general-ricerca-filtra-per2">
                  <div className="general-ricerca-container16">
                    <label className="general-ricerca-text24">Filtra per</label>
                  </div>
                </div>
                <div className="general-ricerca-container17">
                  <select name="Filter by" className="general-ricerca-select2">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="general-ricerca-container18">
                <div className="general-ricerca-filtra-per3">
                  <div className="general-ricerca-container19">
                    <label className="general-ricerca-text25">Filtra per</label>
                  </div>
                </div>
                <div className="general-ricerca-container20">
                  <select name="Filter by" className="general-ricerca-select3">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="general-ricerca-container21">
                <label className="general-ricerca-text26">
                  TAG Selezionato
                </label>
                <div className="general-ricerca-container22">
                  <Tag></Tag>
                  <Tag></Tag>
                  <Tag></Tag>
                </div>
              </div>
            </div>
            <div className="general-ricerca-dettaglio-dx">
              <div className="general-ricerca-notizie">
                <div className="general-ricerca-container23">
                  <div className="general-ricerca-container24">
                    <div className="general-ricerca-container25">
                      <img
                        alt="image"
                        src="/Icone/icon_news.svg"
                        className="general-ricerca-image1"
                      />
                    </div>
                    <h3 className="heading3">Notizie</h3>
                  </div>
                </div>
                <div className="general-ricerca-container26">
                  <div className="general-ricerca-container27">
                    <NewsSimple></NewsSimple>
                    <NewsSimple></NewsSimple>
                  </div>
                  <div className="general-ricerca-container28">
                    <NewsSimple></NewsSimple>
                    <NewsSimple></NewsSimple>
                  </div>
                  <div className="general-ricerca-container29">
                    <NewsSimple></NewsSimple>
                    <NewsSimple></NewsSimple>
                  </div>
                </div>
              </div>
              <div className="general-ricerca-eventi1">
                <div className="general-ricerca-container30">
                  <div className="general-ricerca-container31">
                    <div className="general-ricerca-container32">
                      <img
                        alt="image"
                        src="/Icone/icon_eventi.svg"
                        className="general-ricerca-image2"
                      />
                    </div>
                    <h3 className="heading3">Eventi</h3>
                  </div>
                </div>
                <div className="general-ricerca-container33">
                  <div className="general-ricerca-container34">
                    <CardEvento
                      fotoEvento="/eventi_1.jpg"
                      rootClassName="card-eventoroot-class-name10"
                    ></CardEvento>
                    <CardEvento
                      fotoEvento="/eventi_1.jpg"
                      rootClassName="card-eventoroot-class-name34"
                    ></CardEvento>
                    <CardEvento
                      fotoEvento="/eventi_1.jpg"
                      rootClassName="card-eventoroot-class-name33"
                    ></CardEvento>
                    <CardEvento fotoEvento="/eventi_2.jpg"></CardEvento>
                  </div>
                </div>
              </div>
              <div className="general-ricerca-eventi2">
                <div className="general-ricerca-container35">
                  <div className="general-ricerca-container36">
                    <div className="general-ricerca-container37">
                      <img
                        alt="image"
                        src="/Icone/icon_multimedia.svg"
                        className="general-ricerca-image3"
                      />
                    </div>
                    <span className="heading3">Multimedia</span>
                  </div>
                </div>
                <div className="general-ricerca-container38"></div>
              </div>
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name1"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name1"></Footer>
      </main>
      <style jsx>
        {`
          .general-ricerca-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .general-ricerca-text10 {
            display: inline-block;
          }
          .general-ricerca-text11 {
            display: inline-block;
          }
          .general-ricerca-text12 {
            display: inline-block;
          }
          .general-ricerca-text13 {
            display: inline-block;
          }
          .general-ricerca-text14 {
            display: inline-block;
          }
          .general-ricerca-text15 {
            display: inline-block;
          }
          .general-ricerca-text16 {
            display: inline-block;
          }
          .general-ricerca-text17 {
            display: inline-block;
          }
          .general-ricerca-text18 {
            display: inline-block;
          }
          .general-ricerca-text19 {
            display: inline-block;
          }
          .general-ricerca-text20 {
            display: inline-block;
          }
          .general-ricerca-text21 {
            display: inline-block;
          }
          .general-ricerca-text22 {
            display: inline-block;
          }
          .general-ricerca-container11 {
            display: block;
            border-width: 0px;
          }
          .general-ricerca-sezioniricerca {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-dettaglio-sx {
            gap: var(--dl-layout-space-twounits);
            flex: 0.4;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .general-ricerca-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .general-ricerca-filtra-per1 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-container13 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-text23 {
            font-size: 17px;
            font-weight: bold;
          }
          .general-ricerca-container14 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-select1 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .general-ricerca-container15 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .general-ricerca-filtra-per2 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-container16 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-text24 {
            font-size: 17px;
            font-weight: bold;
          }
          .general-ricerca-container17 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-select2 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .general-ricerca-container18 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .general-ricerca-filtra-per3 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-container19 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-text25 {
            font-size: 17px;
            font-weight: bold;
          }
          .general-ricerca-container20 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .general-ricerca-select3 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .general-ricerca-container21 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .general-ricerca-text26 {
            font-style: normal;
            font-weight: 700;
          }
          .general-ricerca-container22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .general-ricerca-dettaglio-dx {
            gap: var(--dl-layout-space-twounits);
            flex: 0.9;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .general-ricerca-notizie {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-container23 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-container24 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b0b0c2;
            border-width: 15px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .general-ricerca-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .general-ricerca-image1 {
            width: 100%;
            object-fit: cover;
          }
          .general-ricerca-container26 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .general-ricerca-container27 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .general-ricerca-container28 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .general-ricerca-container29 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .general-ricerca-eventi1 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-container30 {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .general-ricerca-container31 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b0b0c2;
            border-width: 15px;
            padding-left: var(--dl-layout-space-threeunits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .general-ricerca-container32 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .general-ricerca-image2 {
            width: 100%;
            object-fit: cover;
          }
          .general-ricerca-container33 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-container34 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
          }
          .general-ricerca-eventi2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-container35 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .general-ricerca-container36 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b0b0c2;
            border-width: 0px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-bottom-width: 15px;
          }
          .general-ricerca-container37 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .general-ricerca-image3 {
            width: 100%;
            object-fit: cover;
          }
          .general-ricerca-container38 {
            gap: var(--dl-layout-space-threeunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .general-ricerca-sezioniricerca {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .general-ricerca-sezioniricerca {
              gap: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .general-ricerca-sezioniricerca {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 479px) {
            .general-ricerca-sezioniricerca {
              gap: var(--dl-layout-space-threeunits);
            }
            .general-ricerca-dettaglio-sx {
              flex-direction: column;
            }
            .general-ricerca-dettaglio-dx {
              flex-direction: column;
            }
            .general-ricerca-container34 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default GeneralRicerca
