import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <footer
        id="footer"
        tabindex="0"
        className={`footer-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-links thq-grid-5">
            <nav className="footer-column1 thq-flex-column">
              <a
                href="mailto:info@sardegnainfeas.it?subject=Richiesta di informazioni"
                className="footer-link1 paragraph_sm"
              >
                info@sardegnainfeas.it
              </a>
              <Link href="/privacy-policy">
                <a className="footer-link11 paragraph_sm">Informativa Policy</a>
              </Link>
            </nav>
            <nav className="footer-column2 thq-flex-column">
              <Link href="/sistema-regionale-infeas">
                <a className="footer-link12 paragraph_sm">
                  Il sistema regionale INFEAS
                </a>
              </Link>
              <Link href="/sistema-regionale-infeas">
                <a className="footer-link13 paragraph_sm">
                  Centro Regionale di Coordinamento
                </a>
              </Link>
              <Link href="/sistema-regionale-infeas">
                <a className="footer-link14 paragraph_sm">
                  Nodi territoriali INFEAS
                </a>
              </Link>
              <Link href="/mappa-ceas">
                <a className="footer-link15 paragraph_sm">Mappa dei CEAS</a>
              </Link>
              <Link href="/sistema-regionale-infeas">
                <a className="footer-link16 paragraph_sm">Altri soggetti</a>
              </Link>
            </nav>
            <nav className="footer-column3 thq-flex-column">
              <Link href="/notizie">
                <a className="footer-link17">
                  <strong className="footer-column3-title1 paragraph_sm">
                    Notizie
                  </strong>
                </a>
              </Link>
              <Link href="/eventi">
                <a className="footer-link18">
                  <strong className="footer-column3-title2 paragraph_sm">
                    Eventi
                  </strong>
                </a>
              </Link>
              <Link href="/press-kit">
                <a className="footer-link19">
                  <strong className="footer-column3-title3 paragraph_sm">
                    Press Kit
                  </strong>
                </a>
              </Link>
            </nav>
            <div className="footer-column4 thq-flex-column">
              <Link href="/rete-info-linee-guida">
                <a className="footer-link20 paragraph_sm">
                  <span>Info e linee guida</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/progetto-siquas">
                <a className="footer-link21 paragraph_sm">Progetto SIQUAS</a>
              </Link>
              <Link href="/rete-info-linee-guida">
                <a className="footer-link22 paragraph_sm">Info regionali</a>
              </Link>
              <Link href="/rete-info-linee-guida">
                <a className="footer-link23 paragraph_sm">Info nazionali</a>
              </Link>
              <Link href="/rete-info-linee-guida">
                <a className="footer-link24 paragraph_sm">Link utili</a>
              </Link>
            </div>
            <div className="footer-column5 thq-flex-column">
              <Link href="/">
                <a className="footer-link25">
                  <div className="footer-footer-links">
                    <img
                      id="logo infeas"
                      alt="Company Logo"
                      src="/infeaslogo.svg"
                      className="footer-image1"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="footer-credits">
            <div className="footer-row">
              <div className="footer-social-links">
                <a
                  href="https://www.facebook.com/sardegnainfeas/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link26"
                >
                  <svg
                    id="fb-icon"
                    viewBox="0 0 877.7142857142857 1024"
                    aria-label="icona facebook"
                    className="footer-icon1 thq-icon-small"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/infeassardegna/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link27"
                >
                  <svg
                    id="instagram-icon"
                    role="link"
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon3 thq-icon-small"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC7zVvsPFyZaKABSSk7uA9ng"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link28"
                >
                  <svg
                    id="youtube-icon"
                    role="link"
                    viewBox="0 0 1024 1024"
                    className="footer-icon5 thq-icon-small"
                  >
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-container {
            background-color: #303633;
          }
          .footer-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-links {
            width: 100%;
            align-self: center;
          }
          .footer-column1 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link1 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link11 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-column2 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link12 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link13 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link14 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link15 {
            fill: white;
            color: white;
          }
          .footer-link16 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-column3 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link17 {
            display: contents;
          }
          .footer-column3-title1 {
            fill: white;
            color: white;
            font-weight: bold;
            text-decoration: none;
          }
          .footer-link18 {
            display: contents;
          }
          .footer-column3-title2 {
            fill: white;
            color: white;
            font-weight: bold;
            text-decoration: none;
          }
          .footer-link19 {
            display: contents;
          }
          .footer-column3-title3 {
            fill: white;
            color: white;
            font-weight: bold;
            text-decoration: none;
          }
          .footer-column4 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link20 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link21 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link22 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link23 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-link24 {
            fill: white;
            color: white;
            text-decoration: none;
          }
          .footer-column5 {
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link25 {
            display: contents;
          }
          .footer-footer-links {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-image1 {
            width: 100%;
            height: 3rem;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .footer-credits {
            flex: initial;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-row {
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-social-links {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-link26 {
            display: contents;
          }
          .footer-icon1 {
            fill: #ffffff;
            text-decoration: none;
          }
          .footer-link27 {
            display: contents;
          }
          .footer-icon3 {
            fill: #ffffff;
            text-decoration: none;
          }
          .footer-link28 {
            display: contents;
          }
          .footer-icon5 {
            fill: #ffffff;
            text-decoration: none;
          }
          .footerroot-class-name {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name3 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name4 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name5 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name7 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name8 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name9 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name12 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name13 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name14 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name15 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name16 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }

          .footerroot-class-name23 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name24 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name25 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name26 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }

          .footerroot-class-name29 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name30 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }

          .footerroot-class-name32 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }

          .footerroot-class-name34 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }
          .footerroot-class-name35 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: #303633;
          }

          @media (max-width: 991px) {
            .footer-column1 {
              max-width: 100%;
            }
            .footer-column2 {
              max-width: 100%;
            }
            .footer-column3 {
              max-width: 100%;
            }
            .footer-column4 {
              max-width: 100%;
            }
            .footer-column5 {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .footer-links {
              width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-column1 {
              max-width: 100%;
              align-items: center;
            }
            .footer-column2 {
              max-width: 100%;
              align-items: center;
            }
            .footer-column3 {
              max-width: 100%;
              align-items: center;
            }
            .footer-column3-title1 {
              text-align: center;
            }
            .footer-column3-title2 {
              text-align: center;
            }
            .footer-column3-title3 {
              text-align: center;
            }
            .footer-column4 {
              max-width: 100%;
              align-items: flex-start;
            }
            .footer-column5 {
              max-width: 100%;
              align-items: center;
            }
            .footer-footer-links {
              align-self: center;
            }
            .footer-image1 {
              align-self: center;
            }
            .footer-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
            }
            .footer-social-links {
              gap: var(--dl-layout-space-threeunits);
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              display: grid;
            }
            .footer-column1 {
              width: 100%;
              max-width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-link1 {
              align-self: flex-start;
              text-align: left;
            }
            .footer-link11 {
              align-self: flex-start;
              text-align: left;
            }
            .footer-column2 {
              width: 100%;
              max-width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-link14 {
              align-self: flex-start;
            }
            .footer-link15 {
              align-self: flex-start;
            }
            .footer-link16 {
              align-self: flex-start;
            }
            .footer-column3 {
              width: 100%;
              max-width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-column4 {
              width: 100%;
              max-width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-column5 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links {
              align-items: center;
              justify-content: center;
            }
            .footer-row {
              justify-content: center;
            }
            .footer-social-links {
              gap: var(--dl-layout-space-threeunits);
              align-items: center;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
