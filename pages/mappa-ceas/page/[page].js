import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../../components/navbar-interactive'
import Headertipologiatarget from '../../../components/headertipologiatarget'
import Cardprovince from '../../../components/cardprovince'
import Footer from '../../../components/footer'
import organizzazioniPageInitialPropsTqPzResource from '../../../resources/organizzazioni-page-initial-props-tq_pz'
import organizzazioniPageInitialPathsTqFResource from '../../../resources/organizzazioni-page-initial-paths-tq_f_'

const Organizzazioni11 = (props) => {
  return (
    <>
      <main className="organizzazioni11-container10">
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
        <Headertipologiatarget
          breadcrumb="Home / Mappa CEAS"
          rootClassName="headertipologiatargetroot-class-name17"
          headerTitleName="Mappa CEAS"
        ></Headertipologiatarget>
        <section
          id="elenco-ceas-mappa"
          className="organizzazioni11-container11 padding-container"
        >
          <div className="organizzazioni11-container12 thq-section-max-width">
            <div className="organizzazioni11-container13">
              <div className="organizzazioni11-container14">
                <div className="organizzazioni11-container15">
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
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/organizzazioni1-resource-organizzazioni1?${new URLSearchParams(
                    params
                  )}`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                )
                  .then((res) => res.json())
                  .then((data) => data)
              }
              renderSuccess={(params) => (
                <Fragment>
                  <div className="organizzazioni11-container16">
                    <Repeater
                      items={params}
                      renderItem={(provinces) => (
                        <Fragment>
                          <span>{provinces?.nome}</span>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              params={{
                locale: props?.locale ?? '',
              }}
            />
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="organizzazioni11-container17">
                    <Repeater
                      items={params}
                      renderItem={(OrganizzazioniEntities) => (
                        <Fragment>
                          <Link
                            href={`/organizzazioni/${OrganizzazioniEntities?.slug}`}
                          >
                            <a>
                              <Cardprovince
                                nomeCeas={OrganizzazioniEntities?.nome}
                                provincia={
                                  OrganizzazioniEntities?.provincia?.nome
                                }
                                rootClassName="cardprovinceroot-class-name"
                                className="organizzazioni11-component3"
                              ></Cardprovince>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              initialData={props.organizzazioniEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name20"></Footer>
        <div>
          <div className="organizzazioni11-container19">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n/* Hide the original static select */\n#select-provincia {\n  display: none !important;\n}\n',
                  }}
                />

                <Script>{`
(function () {
  // Store current selection to persist across re-renders
  let currentProvinceSelection = '';

  function createProvinceDropdown() {
    // Get all organization cards to extract province data
    const orgCards = document.querySelectorAll('.cardprovinceroot-class-name');
    const provinces = new Set();
    
    // Extract unique provinces from the cards
    orgCards.forEach(card => {
      const provinceElement = card.querySelector('[class*="provincia"]') || 
                             card.querySelector('span:last-child') ||
                             card.querySelector('span:nth-child(2)');
      if (provinceElement && provinceElement.textContent.trim()) {
        provinces.add(provinceElement.textContent.trim());
      }
    });

    const select = document.createElement('select');
    select.setAttribute('data-enhanced', 'true');
    select.setAttribute('id', 'select-provincia-enhanced');
    select.className = 'filterby-province-select';

    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Tutte le province';
    defaultOption.value = '';
    select.appendChild(defaultOption);

    // Sort provinces alphabetically and add to select
    Array.from(provinces).sort().forEach(province => {
      const option = document.createElement('option');
      option.textContent = province;
      option.value = province;
      select.appendChild(option);
    });

    // Set the previously selected value if it exists
    if (currentProvinceSelection) {
      select.value = currentProvinceSelection;
    }

    select.addEventListener('change', (e) => {
      const selectedProvince = e.target.value;
      currentProvinceSelection = selectedProvince;
      filterOrganizationsByProvince(selectedProvince);
    });

    return select;
  }

  function filterOrganizationsByProvince(selectedProvince) {
    const orgCards = document.querySelectorAll('.cardprovinceroot-class-name');
    
    orgCards.forEach(card => {
      const cardParent = card.closest('a') || card.parentElement;
      
      if (!selectedProvince) {
        // Show all cards
        cardParent.style.display = '';
        return;
      }

      const provinceElement = card.querySelector('[class*="provincia"]') || 
                             card.querySelector('span:last-child') ||
                             card.querySelector('span:nth-child(2)');
      
      if (provinceElement) {
        const cardProvince = provinceElement.textContent.trim();
        if (cardProvince === selectedProvince) {
          cardParent.style.display = '';
        } else {
          cardParent.style.display = 'none';
        }
      } else {
        // Hide cards without province info when filtering
        cardParent.style.display = 'none';
      }
    });

    // Update grid layout after filtering
    updateGridLayout();
  }

  function updateGridLayout() {
    const container = document.querySelector('.organizzazioni11-container7');
    if (container) {
      // Force grid recalculation
      container.style.display = 'none';
      setTimeout(() => {
        container.style.display = 'grid';
      }, 10);
    }
  }

  function injectProvinceDropdown() {
    const filterContainer = document.querySelector('.filterby-province-container2');
    const originalSelect = document.querySelector('#select-provincia');
    
    if (!filterContainer || !originalSelect) return;

    // Check if we already enhanced this
    const existingEnhanced = document.querySelector('#select-provincia-enhanced');
    if (existingEnhanced) return;

    // Wait for organization cards to be loaded
    const orgCards = document.querySelectorAll('.cardprovinceroot-class-name');
    if (orgCards.length === 0) return;

    // Create and inject the new dropdown
    const newSelect = createProvinceDropdown();
    filterContainer.appendChild(newSelect);
  }

  // Watch for content changes and inject dropdown when ready
  const interval = setInterval(() => {
    try {
      injectProvinceDropdown();
    } catch (err) {
      console.error('Province dropdown injection error:', err);
    }
  }, 500);

  // Stop checking after 30 seconds to avoid infinite polling
  setTimeout(() => {
    clearInterval(interval);
  }, 30000);
})();
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .organizzazioni11-container10 {
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
          .organizzazioni11-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .organizzazioni11-container12 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-container13 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-container14 {
            width: 100%;
          }
          .organizzazioni11-container15 {
            display: contents;
          }
          .organizzazioni11-container16 {
            display: flex;
            flex-direction: column;
          }
          .organizzazioni11-container17 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: grid;
            place-items: start;
            padding-bottom: var(--dl-layout-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .organizzazioni11-component3 {
            text-decoration: none;
          }
          .organizzazioni11-container19 {
            display: contents;
          }
          @media (max-width: 991px) {
            .organizzazioni11-container17 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .organizzazioni11-container17 {
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
    const response = await organizzazioniPageInitialPropsTqPzResource({
      ...context?.params,
      start: (context.params.page - 1) * 1000,
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
    const response = await organizzazioniPageInitialPathsTqFResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 1000)
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
