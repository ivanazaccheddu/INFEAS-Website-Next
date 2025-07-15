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
                            <React.Fragment>
                              <React.Fragment>
                                (function() {'{'}
                                'use strict'; /** * Groups educational materials
                                by organization name within each province * and
                                sorts organizations alphabetically */ function
                                groupAndSortDocumentsByOrganization() {'{'}
                                // Get all province sections const
                                provinceArticles =
                                document.querySelectorAll('article[id="materiali-didattici-provincia"]');
                                provinceArticles.forEach(provinceArticle =&gt;{' '}
                                {'{'}
                                const provinceName =
                                provinceArticle.querySelector('#nome-provincia').textContent.trim();
                                console.log(\`Processing province: \${'{'}
                                provinceName{'}'}\`); // Get the container that
                                holds all CEAS organizations for this province
                                const provinceContainer =
                                provinceArticle.querySelector('.provincedocuments-container');
                                if (!provinceContainer) {'{'}
                                console.warn(\`No container found for province:
                                \${'{'}provinceName{'}'}\`); return;
                                {'}'}
                                // Get all CEAS elements within this province
                                const ceasElements =
                                Array.from(provinceContainer.querySelectorAll('[data-ceas-name]'));
                                if (ceasElements.length === 0) {'{'}
                                console.log(\`No CEAS elements found for
                                province: \${'{'}provinceName{'}'}\`); return;
                                {'}'}
                                // Group CEAS elements by organization name
                                const groupedByOrg = {'{'}
                                {'}'}; ceasElements.forEach(ceasElement =&gt;{' '}
                                {'{'}
                                const orgName =
                                ceasElement.getAttribute('data-ceas-name'); if
                                (!orgName || orgName === '\$orgName') {'{'}
                                // Skip template elements or elements without
                                proper org name return;
                                {'}'}
                                if (!groupedByOrg[orgName]) {'{'}
                                groupedByOrg[orgName] = [];
                                {'}'}
                                groupedByOrg[orgName].push(ceasElement);
                                {'}'}); // Sort organization names
                                alphabetically const sortedOrgNames =
                                Object.keys(groupedByOrg).sort((a, b) =&gt;{' '}
                                {'{'}
                                return a.localeCompare(b, 'it', {'{'}{' '}
                                sensitivity: 'base' {'}'});
                                {'}'}); console.log(\`Sorted organizations for
                                \${'{'}provinceName{'}'}:\`, sortedOrgNames); //
                                Clear the container provinceContainer.innerHTML
                                = ''; // Re-add elements grouped by organization
                                and sorted alphabetically
                                sortedOrgNames.forEach(orgName =&gt; {'{'}
                                const orgElements = groupedByOrg[orgName]; // If
                                there are multiple elements for the same
                                organization, merge them if (orgElements.length
                                &gt; 1) {'{'}
                                const mergedElement =
                                mergeOrganizationElements(orgElements, orgName);
                                provinceContainer.appendChild(mergedElement);
                                {'}'} else {'{'}
                                provinceContainer.appendChild(orgElements[0]);
                                {'}'}
                                {'}'}); // Add empty placeholder if no valid
                                organizations found if (sortedOrgNames.length
                                === 0) {'{'}
                                const emptyPlaceholder =
                                createEmptyPlaceholder();
                                provinceContainer.appendChild(emptyPlaceholder);
                                {'}'}
                                {'}'});
                                {'}'}
                                /** * Merges multiple CEAS elements for the same
                                organization */ function
                                mergeOrganizationElements(elements, orgName){' '}
                                {'{'}
                                // Use the first element as base const
                                baseElement = elements[0].cloneNode(true); //
                                Find the documents container in the base element
                                const baseDocumentsContainer =
                                baseElement.querySelector('.container-documenti');
                                if (!baseDocumentsContainer) {'{'}
                                return baseElement;
                                {'}'}
                                // Collect all document links (including parent{' '}
                                <a>
                                  {' '}
                                  tags) from all elements const allDocumentLinks
                                  = []; elements.forEach(element =&gt; {'{'}
                                  // Look for the complete link structure:{' '}
                                </a>
                                <a>
                                  <div className="filelisting-filelisting">
                                    ...
                                  </div>
                                </a>
                                const documentLinks =
                                element.querySelectorAll('a[href]
                                .filelisting-filelisting');
                                documentLinks.forEach(linkDiv =&gt; {'{'}
                                // Get the parent{' '}
                                <a>
                                  {' '}
                                  tag which contains the actual link const
                                  parentLink = linkDiv.closest('a[href]'); if
                                  (parentLink) {'{'}
                                  allDocumentLinks.push(parentLink.cloneNode(true));
                                  {'}'}
                                  {'}'});
                                  {'}'}); // Remove duplicate documents based on
                                  file name and URL const uniqueDocuments = [];
                                  const seenDocuments = new Set();
                                  allDocumentLinks.forEach(linkElement =&gt;{' '}
                                  {'{'}
                                  const fileName =
                                  linkElement.querySelector('.file-name')?.textContent?.trim();
                                  const href = linkElement.getAttribute('href');
                                  const uniqueKey = \`\${'{'}fileName{'}'}-\$
                                  {'{'}href{'}'}\`; if (fileName && href &&
                                  !seenDocuments.has(uniqueKey)) {'{'}
                                  seenDocuments.add(uniqueKey);
                                  uniqueDocuments.push(linkElement);
                                  {'}'}
                                  {'}'}); // Clear existing documents in base
                                  container (remove both{' '}
                                </a>
                                <a>
                                  {' '}
                                  tags and any orphaned elements) const
                                  existingLinks =
                                  baseDocumentsContainer.querySelectorAll('a[href]');
                                  existingLinks.forEach(link =&gt;
                                  link.remove()); // Also remove any orphaned
                                  filelisting elements const orphanedElements =
                                  baseDocumentsContainer.querySelectorAll('.filelisting-filelisting');
                                  orphanedElements.forEach(element =&gt; {'{'}
                                  if (!element.closest('a[href]')) {'{'}
                                  element.remove();
                                  {'}'}
                                  {'}'}); // Add all unique documents (complete{' '}
                                </a>
                                <a>
                                  {' '}
                                  tags with their content)
                                  uniqueDocuments.forEach(linkElement =&gt;{' '}
                                  {'{'}
                                  baseDocumentsContainer.appendChild(linkElement);
                                  {'}'}); return baseElement;
                                  {'}'}
                                  /** * Creates an empty placeholder element */
                                  function createEmptyPlaceholder() {'{'}
                                  const placeholder =
                                  document.createElement('div');
                                  placeholder.className =
                                  'empty-placeholder-container';
                                  placeholder.innerHTML = \`
                                  <span className="empty-placeholder-text1 paragraph_xl">
                                    <span className="provincedocuments-text5 paragraph_xl">
                                      <span>
                                        Nessun documento disponibile per questa
                                        provincia
                                      </span>
                                      <br />
                                    </span>
                                  </span>
                                  <span className="paragraph_xl">
                                    <span className="provincedocuments-text2 paragraph_xl">
                                      <span>--</span>
                                      <br />
                                    </span>
                                  </span>
                                  \`; return placeholder;
                                  {'}'}
                                  /** * Initialize the grouping and sorting when
                                  DOM is ready */ function initialize() {'{'}
                                  if (document.readyState === 'loading') {'{'}
                                  document.addEventListener('DOMContentLoaded',
                                  groupAndSortDocumentsByOrganization);
                                  {'}'} else {'{'}
                                  groupAndSortDocumentsByOrganization();
                                  {'}'}
                                  {'}'}
                                  // Initialize the function initialize(); //
                                  Expose function globally for manual triggering
                                  if needed
                                  window.groupAndSortDocumentsByOrganization =
                                  groupAndSortDocumentsByOrganization;
                                  console.log('Document grouping and sorting
                                  function initialized');
                                  {'}'})();
                                </a>
                              </React.Fragment>
                            </React.Fragment>
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
        `}
      </style>
    </>
  )
}

export default ScuoleMaterialiDidattici
