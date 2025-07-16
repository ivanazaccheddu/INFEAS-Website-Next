import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import FilterbyProvince from '../components/filterby-province'
import Provincedocuments from '../components/provincedocuments'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ScuoleMaterialiDidattici = (props) => {
  return (
    <>
      <main
        id="pagina-materiali-didattici"
        className="scuole-materiali-didattici-container1"
      >
        <Head>
          <title>ScuoleMateriali-didattici - INFEAS Website</title>
          <meta
            property="og:title"
            content="ScuoleMateriali-didattici - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-materiali-didattici-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-materiali-didattici-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-materiali-didattici-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-materiali-didattici-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-materiali-didattici-text14">
                Mappa CEAS
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-materiali-didattici-text15">
                Press Kit
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-materiali-didattici-text16">
                Seguici su
              </span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-materiali-didattici-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-materiali-didattici-text18">
                Seguici su
              </span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-materiali-didattici-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-materiali-didattici-text20">
                Register
              </span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-materiali-didattici-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-materiali-didattici-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name11"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home /  Per le scuole e università / Materiali Didattici"
          rootClassName="headertipologiatargetroot-class-name1"
          headerTitleName="Materiali didattici"
        ></Headertipologiatarget>
        <section id="elenco-materiali-didattici" className="padding-container">
          <div className="scuole-materiali-didattici-container3 thq-section-max-width">
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="scuole-materiali-didattici-text23">
                    Filtra per
                  </span>
                </Fragment>
              }
              rootClassName="filterby-provinceroot-class-name1"
            ></FilterbyProvince>
            <div className="scuole-materiali-didattici-container4">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/scuole-materiali-didattici-resource-scuole-materiali-didattici?${new URLSearchParams(
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
                    <div className="scuole-materiali-didattici-container5">
                      <Repeater
                        items={params}
                        renderItem={(province) => (
                          <Fragment>
                            <Provincedocuments
                              provId={province?.id}
                              provName={province?.nome}
                            ></Provincedocuments>
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
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name10"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name11"></Footer>
        <div>
          <div className="scuole-materiali-didattici-container7">
            <React.Fragment>
              <Script>{`
(function() {
    'use strict';
    
    /**
     * Groups educational materials by organization name within each province
     * and sorts organizations alphabetically. Hides provinces with no documents.
     */
    function groupAndSortDocumentsByOrganization() {
        // Get all province sections
        const provinceArticles = document.querySelectorAll('article[id="materiali-didattici-provincia"]');
        
        provinceArticles.forEach(provinceArticle => {
            const provinceName = provinceArticle.querySelector('#nome-provincia').textContent.trim();
            console.log(\`Processing province: \${provinceName}\`);
            
            // Get the container that holds all CEAS organizations for this province
            const provinceContainer = provinceArticle.querySelector('.provincedocuments-container');
            
            if (!provinceContainer) {
                console.warn(\`No container found for province: \${provinceName}\`);
                // Hide the province if no container is found
                provinceArticle.style.display = 'none';
                return;
            }
            
            // Get all CEAS elements within this province
            const ceasElements = Array.from(provinceContainer.querySelectorAll('[data-ceas-name]'));
            
            if (ceasElements.length === 0) {
                console.log(\`No CEAS elements found for province: \${provinceName}\`);
                // Hide the province if no CEAS elements are found
                provinceArticle.style.display = 'none';
                return;
            }
            
            // Group CEAS elements by organization name
            const groupedByOrg = {};
            
            ceasElements.forEach(ceasElement => {
                const orgName = ceasElement.getAttribute('data-ceas-name');
                
                if (!orgName || orgName === '\$orgName') {
                    // Skip template elements or elements without proper org name
                    return;
                }
                
                if (!groupedByOrg[orgName]) {
                    groupedByOrg[orgName] = [];
                }
                
                groupedByOrg[orgName].push(ceasElement);
            });
            
            // Sort organization names alphabetically
            const sortedOrgNames = Object.keys(groupedByOrg).sort((a, b) => {
                return a.localeCompare(b, 'it', { sensitivity: 'base' });
            });
            
            console.log(\`Sorted organizations for \${provinceName}:\`, sortedOrgNames);
            
            // Hide province if no valid organizations found
            if (sortedOrgNames.length === 0) {
                console.log(\`No valid organizations found for province: \${provinceName}, hiding it\`);
                provinceArticle.style.display = 'none';
                return;
            }
            
            // Show the province (in case it was previously hidden)
            provinceArticle.style.display = '';
            
            // Clear the container
            provinceContainer.innerHTML = '';
            
            // Re-add elements grouped by organization and sorted alphabetically
            sortedOrgNames.forEach(orgName => {
                const orgElements = groupedByOrg[orgName];
                
                // If there are multiple elements for the same organization, merge them
                if (orgElements.length > 1) {
                    const mergedElement = mergeOrganizationElements(orgElements, orgName);
                    provinceContainer.appendChild(mergedElement);
                } else {
                    provinceContainer.appendChild(orgElements[0]);
                }
            });
        });
    }
    
    /**
     * Merges multiple CEAS elements for the same organization
     */
    function mergeOrganizationElements(elements, orgName) {
        // Use the first element as base
        const baseElement = elements[0].cloneNode(true);
        
        // Find the documents container in the base element
        const baseDocumentsContainer = baseElement.querySelector('.container-documenti');
        
        if (!baseDocumentsContainer) {
            return baseElement;
        }
        
        // Collect all document links (including parent <a> tags) from all elements
        const allDocumentLinks = [];
        
        elements.forEach(element => {
            // Look for the complete link structure: <a><div class="filelisting-filelisting">...</div></a>
            const documentLinks = element.querySelectorAll('a[href] .filelisting-filelisting');
            documentLinks.forEach(linkDiv => {
                // Get the parent <a> tag which contains the actual link
                const parentLink = linkDiv.closest('a[href]');
                if (parentLink) {
                    allDocumentLinks.push(parentLink.cloneNode(true));
                }
            });
        });
        
        // Remove duplicate documents based on file name and URL
        const uniqueDocuments = [];
        const seenDocuments = new Set();
        
        allDocumentLinks.forEach(linkElement => {
            const fileName = linkElement.querySelector('.file-name')?.textContent?.trim();
            const href = linkElement.getAttribute('href');
            const uniqueKey = \`\${fileName}-\${href}\`;
            
            if (fileName && href && !seenDocuments.has(uniqueKey)) {
                seenDocuments.add(uniqueKey);
                uniqueDocuments.push(linkElement);
            }
        });
        
        // Clear existing documents in base container (remove both <a> tags and any orphaned elements)
        const existingLinks = baseDocumentsContainer.querySelectorAll('a[href]');
        existingLinks.forEach(link => link.remove());
        
        // Also remove any orphaned filelisting elements
        const orphanedElements = baseDocumentsContainer.querySelectorAll('.filelisting-filelisting');
        orphanedElements.forEach(element => {
            if (!element.closest('a[href]')) {
                element.remove();
            }
        });
        
        // Add all unique documents (complete <a> tags with their content)
        uniqueDocuments.forEach(linkElement => {
            baseDocumentsContainer.appendChild(linkElement);
        });
        
        return baseElement;
    }
    
    /**
     * Waits for all content to be loaded with multiple fallback strategies
     */
    function waitForContentAndExecute() {
        // Strategy 1: Check if required elements exist
        function checkForRequiredElements() {
            const provinceArticles = document.querySelectorAll('article[id="materiali-didattici-provincia"]');
            return provinceArticles.length > 0;
        }
        
        // Strategy 2: Use MutationObserver to detect when content is added
        function setupMutationObserver() {
            const observer = new MutationObserver((mutations) => {
                let contentAdded = false;
                mutations.forEach(mutation => {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        contentAdded = true;
                    }
                });
                
                if (contentAdded && checkForRequiredElements()) {
                    observer.disconnect();
                    // Add a small delay to ensure all JavaScript has finished executing
                    setTimeout(() => {
                        console.log('Content detected via MutationObserver, executing initialization...');
                        initializePageFunctionality();
                    }, 100);
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            // Disconnect observer after 30 seconds to prevent memory leaks
            setTimeout(() => {
                observer.disconnect();
            }, 30000);
        }
        
        // Strategy 3: Multiple delay-based attempts
        function executeWithDelays() {
            const delays = [500, 1000, 2000, 3000, 5000];
            
            delays.forEach(delay => {
                setTimeout(() => {
                    if (checkForRequiredElements()) {
                        console.log(\`Content found after \${delay}ms, executing initialization...\`);
                        initializePageFunctionality();
                    }
                }, delay);
            });
        }
        
        // Execute immediately if content is already there
        if (checkForRequiredElements()) {
            console.log('Content already available, executing initialization...');
            initializePageFunctionality();
        } else {
            console.log('Content not ready, setting up observers and delays...');
            setupMutationObserver();
            executeWithDelays();
        }
    }
    
    /**
     * Initialize the grouping and sorting when everything is fully loaded
     */
    function initialize() {
        // Wait for complete page load (including images, stylesheets, etc.)
        if (document.readyState === 'complete') {
            waitForContentAndExecute();
        } else {
            window.addEventListener('load', waitForContentAndExecute);
        }
        
        // Backup: also listen for DOMContentLoaded in case window.load doesn't fire
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(waitForContentAndExecute, 1000);
            });
        }
    }
    
    /**
     * Populates the province dropdown with available provinces
     */
    function populateProvinceDropdown() {
        const dropdown = document.getElementById('select-provincia');
        if (!dropdown) {
            console.warn('Province dropdown not found');
            return;
        }
        
        // Get all visible province articles (those with documents)
        const provinceArticles = document.querySelectorAll('article[id="materiali-didattici-provincia"]');
        const provinces = [];
        
        provinceArticles.forEach(article => {
            // Only include provinces that are visible (have documents)
            if (article.style.display !== 'none') {
                const provinceName = article.querySelector('#nome-provincia')?.textContent?.trim();
                if (provinceName) {
                    provinces.push(provinceName);
                }
            }
        });
        
        // Sort provinces alphabetically
        provinces.sort((a, b) => a.localeCompare(b, 'it', { sensitivity: 'base' }));
        
        // Clear existing options except the first one (default)
        const defaultOption = dropdown.querySelector('option[value="Provincia"]');
        dropdown.innerHTML = '';
        if (defaultOption) {
            dropdown.appendChild(defaultOption);
        } else {
            // Create default option if it doesn't exist
            const defaultOpt = document.createElement('option');
            defaultOpt.value = 'Provincia';
            defaultOpt.textContent = 'Provincia';
            defaultOpt.selected = true;
            dropdown.appendChild(defaultOpt);
        }
        
        // Add province options
        provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            dropdown.appendChild(option);
        });
        
        console.log('Province dropdown populated with:', provinces);
    }
    
    /**
     * Filters provinces based on dropdown selection
     */
    function filterProvinces() {
        const dropdown = document.getElementById('select-provincia');
        if (!dropdown) return;
        
        const selectedProvince = dropdown.value;
        const provinceArticles = document.querySelectorAll('article[id="materiali-didattici-provincia"]');
        
        provinceArticles.forEach(article => {
            const provinceName = article.querySelector('#nome-provincia')?.textContent?.trim();
            
            if (selectedProvince === 'Provincia') {
                // Show all provinces that have documents
                // Only show if it wasn't originally hidden due to no documents
                const hasDocuments = article.querySelector('[data-ceas-name]') !== null;
                if (hasDocuments) {
                    article.style.display = '';
                }
            } else if (provinceName === selectedProvince) {
                // Show only the selected province
                article.style.display = '';
            } else {
                // Hide all other provinces
                article.style.display = 'none';
            }
        });
        
        console.log('Filtered provinces for:', selectedProvince);
    }
    
    /**
     * Sets up the province filter functionality
     */
    function setupProvinceFilter() {
        const dropdown = document.getElementById('select-provincia');
        if (!dropdown) {
            console.warn('Province dropdown not found, retrying...');
            // Retry after a short delay
            setTimeout(setupProvinceFilter, 500);
            return;
        }
        
        // Populate the dropdown with available provinces
        populateProvinceDropdown();
        
        // Add event listener for filtering
        dropdown.addEventListener('change', filterProvinces);
        
        console.log('Province filter setup complete');
    }
    
    /**
     * Main function that handles both grouping and filter setup
     */
    function initializePageFunctionality() {
        // First, group and sort documents
        groupAndSortDocumentsByOrganization();
        
        // Then setup the province filter
        setupProvinceFilter();
    }
    
    // Initialize the function
    initialize();
    
    // Expose functions globally for manual triggering if needed
    window.groupAndSortDocumentsByOrganization = groupAndSortDocumentsByOrganization;
    window.setupProvinceFilter = setupProvinceFilter;
    window.initializePageFunctionality = initializePageFunctionality;
    
    console.log('Document grouping and province filter functionality initialized');
})();
`}</Script>
            </React.Fragment>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .scuole-materiali-didattici-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-materiali-didattici-text10 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text11 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text12 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text13 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text14 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text15 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text16 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text17 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text18 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text19 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text20 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text21 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text22 {
            display: inline-block;
          }
          .scuole-materiali-didattici-container3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scuole-materiali-didattici-text23 {
            display: inline-block;
          }
          .scuole-materiali-didattici-container4 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scuole-materiali-didattici-container5 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .scuole-materiali-didattici-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ScuoleMaterialiDidattici
