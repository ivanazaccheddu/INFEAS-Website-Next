import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Eventilisting from '../components/eventilisting'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ScuoleEventi = (props) => {
  return (
    <>
      <main className="scuole-eventi-container1">
        <Head>
          <title>Scuole-Eventi - INFEAS Website</title>
          <meta property="og:title" content="Scuole-Eventi - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-eventi-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-eventi-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-eventi-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-eventi-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-eventi-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-eventi-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-eventi-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-eventi-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-eventi-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-eventi-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-eventi-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-eventi-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-eventi-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name35"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per le scuole e università / Eventi"
          rootClassName="headertipologiatargetroot-class-name28"
          headerTitleName="Eventi"
        ></Headertipologiatarget>
        <section
          id="elenco-eventi-per-cittadini"
          className="scuole-eventi-container2 padding-container"
        >
          <div className="scuole-eventi-container3 thq-section-max-width">
            <div className="scuole-eventi-container4">
              <span className="scuole-eventi-text23 paragraph_xl">
                Non perdere i prossimi eventi e iniziative promossi da INFEAS!
                Scopri date, luoghi e dettagli delle attività dedicate
                all’educazione alla sostenibilità.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Eventilisting></Eventilisting>
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name23"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name33"></Footer>
        <div>
          <div className="scuole-eventi-container6">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n/* Hide the original clickable spans immediately */\n.eventilisting-container2 span,\n.eventilisting-container3 span {\n  display: none !important;\n}\n',
                  }}
                />

                <Script>{`
(function () {
  function createDropdownFromSpans(spans, labelText) {
    const select = document.createElement('select');
    select.setAttribute('data-enhanced', 'true');

    const defaultOption = document.createElement('option');
    defaultOption.textContent = \`-- \${labelText} --\`;
    defaultOption.value = '';
    select.appendChild(defaultOption);

    spans.forEach((span, index) => {
      const text = span.textContent.trim();
      if (!text) return; // Skip empty
      const option = document.createElement('option');
      option.textContent = text;
      option.value = index;
      select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
      const index = parseInt(e.target.value);
      if (!isNaN(index)) {
        spans[index].click(); // trigger original React filter
      }
    });

    // Simple styling
    Object.assign(select.style, {
      padding: '8px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '14px',
      marginBottom: '10px',
    });

    return select;
  }

  function injectDropdowns() {
    const catContainer = document.querySelector('.eventilisting-container2');
    const provContainer = document.querySelector('.eventilisting-container3');
    if (!catContainer || !provContainer) return;

    const catSpans = catContainer.querySelectorAll('span');
    const provSpans = provContainer.querySelectorAll('span');

    // Check if dropdown already exists
    const catDropdownExists = catContainer.querySelector('select[data-enhanced]');
    const provDropdownExists = provContainer.querySelector('select[data-enhanced]');

    // Only inject if spans exist and dropdown not already present
    if (catSpans.length && !catDropdownExists) {
      const dropdown = createDropdownFromSpans(catSpans, 'Filtra per categoria');
      catContainer.insertBefore(dropdown, catContainer.firstChild);
    }

    if (provSpans.length && !provDropdownExists) {
      const dropdown = createDropdownFromSpans(provSpans, 'Filtra per provincia');
      provContainer.insertBefore(dropdown, provContainer.firstChild);
    }
  }

  // Watch and reinject when necessary
  const interval = setInterval(() => {
    try {
      injectDropdowns();
    } catch (err) {
      console.error('Dropdown injection error:', err);
    }
  }, 300);
})();
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .scuole-eventi-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-eventi-text10 {
            display: inline-block;
          }
          .scuole-eventi-text11 {
            display: inline-block;
          }
          .scuole-eventi-text12 {
            display: inline-block;
          }
          .scuole-eventi-text13 {
            display: inline-block;
          }
          .scuole-eventi-text14 {
            display: inline-block;
          }
          .scuole-eventi-text15 {
            display: inline-block;
          }
          .scuole-eventi-text16 {
            display: inline-block;
          }
          .scuole-eventi-text17 {
            display: inline-block;
          }
          .scuole-eventi-text18 {
            display: inline-block;
          }
          .scuole-eventi-text19 {
            display: inline-block;
          }
          .scuole-eventi-text20 {
            display: inline-block;
          }
          .scuole-eventi-text21 {
            display: inline-block;
          }
          .scuole-eventi-text22 {
            display: inline-block;
          }
          .scuole-eventi-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            background-color: #dbeae3;
          }
          .scuole-eventi-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .scuole-eventi-container4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .scuole-eventi-text23 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .scuole-eventi-container6 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ScuoleEventi
