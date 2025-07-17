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
            <div id="dynamic-ceas-map" className="mappa-ceas-container4">
              <div className="mappa-ceas-container5">
                <div className="mappa-ceas-container6">
                  <React.Fragment>
                    <React.Fragment>
                      <link
                        rel="stylesheet"
                        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                      />

                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n/* Hide the original clickable spans immediately */\n.ceas-list-container2 span {\n  display: none !important;\n}\n',
                        }}
                      />

                      <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" />

                      <Script>{`
(function () {
  // Store current selection to persist across re-renders
  let currentProvinceSelection = '';

  function createDropdownFromSpans(spans, labelText) {
    const select = document.createElement('select');
    select.setAttribute('data-enhanced', 'true');
    select.setAttribute('data-type', 'province');

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
    if (currentProvinceSelection) {
      // Find the option with matching text
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].textContent === currentProvinceSelection) {
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
        currentProvinceSelection = selectedText;
        spans[index].click(); // trigger original React filter
      } else {
        // Reset was selected - need to trigger React state to go back to "*"
        currentProvinceSelection = '';
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
    
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.delete('provincia'); // Remove any province parameters
    
    // Clear our stored selection
    currentProvinceSelection = '';
    
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
    const provinceContainer = document.querySelector('.ceas-list-container2');
    if (!provinceContainer) return;

    const provinceSpans = provinceContainer.querySelectorAll('span');

    // Check if dropdown already exists
    const provinceDropdownExists = provinceContainer.querySelector('select[data-enhanced]');

    // Only inject if spans exist and dropdown not already present
    if (provinceSpans.length && !provinceDropdownExists) {
      const dropdown = createDropdownFromSpans(provinceSpans, 'Filtra per provincia');
      provinceContainer.insertBefore(dropdown, provinceContainer.firstChild);
    }
  }

  // Map initialization
  async function initCeasMap() {
    // Wait for Leaflet to load
    if (typeof L === 'undefined') {
      console.log('Waiting for Leaflet to load...');
      setTimeout(initCeasMap, 100);
      return;
    }

    let ceasMap;
    let ceasMarkers = [];

    async function fetchCeasData() {
      try {
        const response = await fetch('https://infeas.dbs.agency/api/organizzazioni');
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        console.error('Error fetching CEAS data:', error);
        return [];
      }
    }

    function createMarker(organization, map) {
      const lat = parseFloat(organization.attributes.latitudine);
      const lng = parseFloat(organization.attributes.longitudine);
      
      if (isNaN(lat) || isNaN(lng)) {
        console.warn('Invalid coordinates for:', organization.attributes.nome);
        return null;
      }

      const popupContent = \`
        <div style="max-width: 300px;">
          <h3 style="margin: 0 0 10px 0; color: #333; font-size: 16px;">\${organization.attributes.nome}</h3>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Luogo:</strong> \${organization.attributes.luogo || 'N/A'}</p>
          \${organization.attributes.indirizzo ? \`<p style="margin: 5px 0; font-size: 14px;"><strong>Indirizzo:</strong> \${organization.attributes.indirizzo}</p>\` : ''}
          \${organization.attributes.telefono ? \`<p style="margin: 5px 0; font-size: 14px;"><strong>Telefono:</strong> \${organization.attributes.telefono}</p>\` : ''}
          \${organization.attributes.email ? \`<p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:\${organization.attributes.email}">\${organization.attributes.email}</a></p>\` : ''}
          \${organization.attributes.sito ? \`<p style="margin: 5px 0; font-size: 14px;"><strong>Sito:</strong> <a href="\${organization.attributes.sito}" target="_blank">\${organization.attributes.sito}</a></p>\` : ''}
        </div>
      \`;

      const marker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup(popupContent);

      return marker;
    }

    // Initialize map centered on Sardinia
    const mapElement = document.getElementById('dynamic-ceas-map');
    if (!mapElement) {
      console.error('Map element not found!');
      return;
    }

    try {
      console.log('Initializing map...');
      ceasMap = L.map('dynamic-ceas-map').setView([40.1209, 9.0129], 8);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(ceasMap);

      console.log('Map initialized successfully');

      // Fetch and display CEAS organizations
      const organizations = await fetchCeasData();
      console.log('Loaded CEAS organizations:', organizations.length);

      const group = new L.featureGroup();
      let validMarkers = 0;

      organizations.forEach(org => {
        const marker = createMarker(org, ceasMap);
        if (marker) {
          ceasMarkers.push(marker);
          group.addLayer(marker);
          validMarkers++;
        }
      });

      // Fit map to show all markers if we have valid coordinates
      if (validMarkers > 0) {
        ceasMap.fitBounds(group.getBounds(), {
          padding: [20, 20],
          maxZoom: 15
        });
      }

      console.log('Map initialized with', validMarkers, 'markers');
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  // Wait for DOM to be ready, then initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCeasMap);
  } else {
    // DOM is already ready, wait a bit then initialize
    setTimeout(initCeasMap, 500);
  }

  // Watch and reinject dropdowns when necessary
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
            <CeasList rootClassName="ceas-listroot-class-name2"></CeasList>
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name38"></Footer>
        <div>
          <div className="mappa-ceas-container8">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n/* Hide the original clickable spans immediately */\n.ceas-list-container2 span {\n  display: none !important;\n}\n',
                  }}
                />

                <Script>{`
(function () {
  // Store current selection to persist across re-renders
  let currentProvinceSelection = '';

  function createDropdownFromSpans(spans, labelText) {
    const select = document.createElement('select');
    select.setAttribute('data-enhanced', 'true');
    select.setAttribute('data-type', 'province');

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
    if (currentProvinceSelection) {
      // Find the option with matching text
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].textContent === currentProvinceSelection) {
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
        currentProvinceSelection = selectedText;
        spans[index].click(); // trigger original React filter
      } else {
        // Reset was selected - need to trigger React state to go back to "*"
        currentProvinceSelection = '';
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
    currentUrl.searchParams.delete('provincia'); // Remove any province parameters
    
    // Clear our stored selection
    currentProvinceSelection = '';
    
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
    const provinceContainer = document.querySelector('.ceas-list-container2');
    if (!provinceContainer) return;

    const provinceSpans = provinceContainer.querySelectorAll('span');

    // Check if dropdown already exists
    const provinceDropdownExists = provinceContainer.querySelector('select[data-enhanced]');

    // Only inject if spans exist and dropdown not already present
    if (provinceSpans.length && !provinceDropdownExists) {
      const dropdown = createDropdownFromSpans(provinceSpans, 'Filtra per provincia');
      provinceContainer.insertBefore(dropdown, provinceContainer.firstChild);
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
            height: 700px;
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
          .mappa-ceas-container8 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default MappaCEAS
