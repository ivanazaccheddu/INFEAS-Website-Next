import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import SezioneNotizieScuole from '../components/sezione-notizie-scuole'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ReteNotizieDellaRete = (props) => {
  return (
    <>
      <div className="rete-notizie-della-rete-container1">
        <Head>
          <title>Rete-Notizie-della-rete - INFEAS Website</title>
          <meta
            property="og:title"
            content="Rete-Notizie-della-rete - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="rete-notizie-della-rete-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="rete-notizie-della-rete-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rete-notizie-della-rete-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rete-notizie-della-rete-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rete-notizie-della-rete-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="rete-notizie-della-rete-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="rete-notizie-della-rete-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="rete-notizie-della-rete-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="rete-notizie-della-rete-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="rete-notizie-della-rete-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="rete-notizie-della-rete-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="rete-notizie-della-rete-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="rete-notizie-della-rete-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name3"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i memberi della Rete / Notizie della rete"
          rootClassName="headertipologiatargetroot-class-name9"
          headerTitleName="Notizie della rete"
        ></Headertipologiatarget>
        <SezioneNotizieScuole
          rootClassName="sezione-notizie-scuoleroot-class-name1"
          descrizione=" "
        ></SezioneNotizieScuole>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name2"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name3"></Footer>
        <div>
          <div className="rete-notizie-della-rete-container3">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n/* Hide the original clickable spans immediately */\n.sezione-notizie-scuole-container2 span {\n  display: none !important;\n}\n',
                  }}
                />

                <Script>{`
(function () {
  // Store current selection to persist across re-renders
  let currentCategorySelection = '';

  function createDropdownFromSpans(spans, labelText) {
    const select = document.createElement('select');
    select.setAttribute('data-enhanced', 'true');
    select.setAttribute('data-type', 'category');

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

    // Set the previously selected value if it exists and state is not "*"
    if (currentCategorySelection) {
      // Find the option with matching text
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].textContent === currentCategorySelection) {
          select.selectedIndex = i;
          break;
        }
      }
    } else {
      // Reset to placeholder if state is "*" or no selection
      select.selectedIndex = 0;
    }

    select.addEventListener('change', (e) => {
      const index = parseInt(e.target.value);
      if (!isNaN(index)) {
        // Store the selected text for persistence
        const selectedText = e.target.options[e.target.selectedIndex].textContent;
        currentCategorySelection = selectedText;
        spans[index].click(); // trigger original React filter
      } else {
        // Reset was selected - need to trigger React state to go back to "*"
        currentCategorySelection = '';
        triggerResetState();
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

  function triggerResetState() {
    // Since there's no visible reset button in this component, we need to trigger
    // the React state change to "*" manually. 
    
    // The most reliable way is to modify the URL to remove any filters
    // and trigger a page reload
    
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.delete('categoria'); // Remove any category parameters
    
    // Clear our stored selection
    currentCategorySelection = '';
    
    // Update the URL and reload if necessary
    if (currentUrl.toString() !== window.location.toString()) {
      window.history.pushState({}, '', currentUrl);
      window.location.reload();
    } else {
      // If URL is already clean, just reload to reset React state
      window.location.reload();
    }
  }

  function injectDropdowns() {
    const catContainer = document.querySelector('.sezione-notizie-scuole-container2');
    if (!catContainer) return;

    const catSpans = catContainer.querySelectorAll('span');

    // Check if dropdown already exists
    const catDropdownExists = catContainer.querySelector('select[data-enhanced]');

    // Only inject if spans exist and dropdown not already present
    if (catSpans.length && !catDropdownExists) {
      const dropdown = createDropdownFromSpans(catSpans, 'Filtra per categoria');
      catContainer.insertBefore(dropdown, catContainer.firstChild);
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
      </div>
      <style jsx>
        {`
          .rete-notizie-della-rete-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .rete-notizie-della-rete-text10 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text11 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text12 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text13 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text14 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text15 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text16 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text17 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text18 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text19 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text20 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text21 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text22 {
            display: inline-block;
          }
          .rete-notizie-della-rete-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ReteNotizieDellaRete
