import React, { useState, Fragment } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavbarInteractive = (props) => {
  const [isVisible, setIsVisible] = useState(true)
  const [activeLink, setActiveLink] = useState('newState')
  return (
    <>
      <nav
        id="navigation"
        role="navigation"
        tabindex="0"
        aria-labelledby="Navigazione principale"
        className={`navbar-interactive-container10 ${props.rootClassName} `}
      >
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <div className="navbar-interactive-container11">
            <Link href="/">
              <a className="navbar-interactive-link10">
                <img
                  id="logo-infeas"
                  alt="Logo INFEAS - Informazione, Formazione ed Educazione Ambientale e alla Sostenibilità"
                  src="/logo_infeas1-200h.png"
                  tabindex="0"
                  className="navbar-interactive-image"
                />
              </a>
            </Link>
          </div>
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive-desktop-menu"
          >
            <div className="navbar-interactive-container12">
              <div className="navbar-interactive-menu">
                <div className="navbar-interactive-container13">
                  <nav
                    id="i-link-social"
                    role="menu"
                    className="navbar-interactive-buttons1"
                  >
                    <span>
                      {props.text5 ?? (
                        <Fragment>
                          <span className="navbar-interactive-text35">
                            Seguici su
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <a
                      href="https://www.facebook.com/sardegnainfeas/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="navbar-interactive-link11"
                    >
                      <svg
                        id="link-facebook"
                        href="https://www.facebook.com/sardegnainfeas/"
                        viewBox="0 0 877.7142857142857 1024"
                        tabindex="0"
                        aria-describedby="Facebook link"
                        className="navbar-interactive-icon10 thq-icon-small"
                      >
                        <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/infeassardegna/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="navbar-interactive-link12"
                    >
                      <svg
                        id="link-instagram"
                        href="https://www.instagram.com/infeassardegna/"
                        viewBox="0 0 877.7142857142857 1024"
                        tabindex="0"
                        aria-label="Instagram link"
                        aria-describedby="Instagram link"
                        className="navbar-interactive-icon12 thq-icon-small"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC7zVvsPFyZaKABSSk7uA9ng"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="navbar-interactive-link13"
                    >
                      <svg
                        id="link-youtube"
                        href="https://www.youtube.com/channel/UC7zVvsPFyZaKABSSk7uA9ng"
                        viewBox="0 0 1024 1024"
                        tabindex="0"
                        aria-label="Youtubelink"
                        aria-describedby="Youtube link"
                        className="navbar-interactive-icon14 thq-icon-small"
                      >
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                  </nav>
                  <div className="navbar-interactive-buttons2">
                    <button className="navbar-interactive-login1 button">
                      <span>
                        {props.login1 ?? (
                          <Fragment>
                            <span className="navbar-interactive-text24">
                              Cerca
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 56 56"
                        className="navbar-interactive-icon16"
                      >
                        <path
                          d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906M16.539 25.398c0-4.945 4.055-9 9.023-9c4.946 0 9 4.055 9 9a8.76 8.76 0 0 1-1.664 5.18l5.86 5.86c.328.328.539.773.539 1.218c0 .985-.68 1.664-1.594 1.664c-.539 0-.984-.164-1.43-.61l-5.789-5.788a8.9 8.9 0 0 1-4.922 1.5c-4.968 0-9.023-4.055-9.023-9.024m2.601 0c0 3.516 2.907 6.422 6.422 6.422c3.47 0 6.375-2.906 6.375-6.422c0-3.468-2.906-6.375-6.375-6.375c-3.515 0-6.422 2.907-6.422 6.375"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <button className="navbar-interactive-register1 button">
                      <span>
                        {props.register1 ?? (
                          <Fragment>
                            <span className="navbar-interactive-text29">
                              Cerca
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="navbar-interactive-container14">
                  <nav role="menubar" className="navbar-interactive-links1">
                    <div
                      id="menu-scuole"
                      role="menuitem"
                      aria-controls="submenu-scuole"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setActiveLink('scuole')}
                      className="navbar-interactive-container15"
                    >
                      <span
                        id="per-le-scuole-e-universita-link"
                        tabindex="0"
                        aria-label="Per le scule e università"
                        className="navbar-interactive-perscuoleuniversit1 toggle-sottomenu"
                      >
                        Per le scuole e università
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      id="menu-cittadini"
                      role="menuitem"
                      aria-controls="submenu-cittadini"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setActiveLink('cittadini')}
                      className="navbar-interactive-container16"
                    >
                      <span
                        id="per-tutti-i-cittadini-link"
                        tabindex="0"
                        className="navbar-interactive-pertuttiicittadini1 toggle-sottomenu"
                      >
                        Per tutti i cittadini
                      </span>
                    </div>
                    <div
                      id="menu-rete"
                      role="menuitem"
                      area-controls="menu-rete"
                      area-expanded="false"
                      area-haspopup="true"
                      onClick={() => setActiveLink('rete')}
                      className="navbar-interactive-container17 toggle-sottomenu"
                    >
                      <span
                        id="per-i-membri-della-rete-link"
                        tabindex="0"
                        onClick={() => setActiveLink('perimembredellarete')}
                        className="navbar-interactive-perimbembridellarete"
                      >
                        Per i membri della Rete
                      </span>
                    </div>
                    <div className="navbar-interactive-container18">
                      <Link
                        href="/cittadini-notizie1"
                        onClick={() => setActiveLink('mappaceas')}
                      >
                        <a
                          id="mappa-ceas-link"
                          tabindex="0"
                          className="navbar-interactive-link14"
                        >
                          Mappa CEAS
                        </a>
                      </Link>
                    </div>
                    <div className="navbar-interactive-container19">
                      <Link
                        href="/press-kit"
                        onClick={() => setActiveLink('presskit')}
                      >
                        <a
                          id="press-kit-link"
                          className="navbar-interactive-link15"
                        >
                          Press Kit
                        </a>
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div>
              <div className="navbar-interactive-container21">
                <React.Fragment>
                  <React.Fragment>
                    <link
                      rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=play_circle"
                    />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n\n  * {\n  -webkit-font-smoothing: antialiased;\n  \n  }\n\n    @media (max-width: 479px) {\n  html, body {\n    font-size: 14px;\n  }\n}\n\n.soluzioni-menu-container a {\ndisplay:block; width:100%}\n',
                      }}
                    />
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon18">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <div className="navbar-interactive-nav">
              <div className="navbar-interactive-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-interactive-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon20"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-interactive-links2">
                <span className="navbar-interactive-text13">
                  {props.text ?? (
                    <Fragment>
                      <span className="navbar-interactive-text32">
                        Per scuole e Università
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-text14">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text26">
                        Per tutti i cittadini
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-text15">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text27">
                        Per i membri della Rete
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-text16">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text30">
                        Mappa CEAS
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-text17">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text36">
                        Press Kit
                      </span>
                    </Fragment>
                  )}
                </span>
              </nav>
              <div className="navbar-interactive-container22">
                <div className="navbar-interactive-buttons3">
                  <button className="navbar-interactive-login2 button">
                    <span>
                      {props.login ?? (
                        <Fragment>
                          <span className="navbar-interactive-text25">
                            Login
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button className="button">
                    <span>
                      {props.register ?? (
                        <Fragment>
                          <span className="navbar-interactive-text33">
                            Register
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="navbar-interactive-buttons4">
                  <span>
                    {props.text51 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text34">
                          Seguici su
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="navbar-interactive-icon22 thq-icon-small"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="navbar-interactive-icon24 thq-icon-small"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon26 thq-icon-small"
                  >
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-interactive-icon28"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-interactive-icon30"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-interactive-icon32"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        {activeLink === 'cittadini' && (
          <nav
            id="submenu-cittadini"
            role="menu"
            tabindex="0"
            onMouseLeave={() => setActiveLink('none')}
            className="navbar-interactive-pertuttiicittadini2"
          >
            <div className="navbar-interactive-container23">
              <div className="navbar-interactive-container24"></div>
              <Link href="/cittadini">
                <a
                  id="INFEAS-per-cittadini"
                  role="menu-item"
                  tabindex="0"
                  aria-label="Infeas per i cattadini"
                  className="navbar-interactive-link16"
                >
                  INFEAS per tutti i cittadini
                </a>
              </Link>
              <Link href="/mappa-ceas">
                <a className="navbar-interactive-link17">
                  <p
                    id="mappa-ceas"
                    role="menu-item"
                    tabindex="0"
                    label-aria="Mappa CEAS"
                    className="navbar-interactive-link18"
                  >
                    Mappa CEAS
                  </p>
                </a>
              </Link>
              <Link href="/cittadini-eventi">
                <a className="navbar-interactive-link20">
                  I prossimi appuntamenti
                </a>
              </Link>
              <Link href="/cittadini-notizie">
                <a className="navbar-interactive-link22">Notizie</a>
              </Link>
              <Link href="/sistema-regionale-infeas">
                <a className="navbar-interactive-link23">
                  A proposito di INFEAS
                </a>
              </Link>
            </div>
          </nav>
        )}
        {activeLink === 'scuole' && (
          <nav
            id="submenu-scuole"
            role="menu"
            tabindex="0"
            aria-labelledby="scuole-button"
            onMouseLeave={() => setActiveLink('none')}
            className="navbar-interactive-perscuoleuniversit2"
          >
            <div className="navbar-interactive-container25">
              <aside
                id="separator"
                role="separator"
                className="navbar-interactive-container26"
              ></aside>
              <Link href="/scuole-universita">
                <a
                  id="per-scuole-universita-link"
                  role="menuitem"
                  tabindex="0"
                  aria-label="Per le Scuole e Università"
                  className="navbar-interactive-link24"
                >
                  <span>INFEAS per l</span>
                  <span>e scuole e università</span>
                </a>
              </Link>
              <Link href="/materiali-didattici">
                <a
                  id="materiali-didattici-link"
                  role="menuitem"
                  tabindex="0"
                  aria-label="Materiali didattici"
                  className="navbar-interactive-link25"
                >
                  {props.text122 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text28">
                        Materiali didattici
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/scuole-universita-notizie">
                <a
                  id="notizie-scuole-link"
                  role="menuitem"
                  tabindex="0"
                  aria-label="Notizie"
                  className="navbar-interactive-link27"
                >
                  Notizie
                </a>
              </Link>
              <Link href="/scuole-universita-eventi">
                <a
                  id="eventi-scuole-link"
                  role="menuitem"
                  tabindex="0"
                  className="navbar-interactive-link29"
                >
                  I prossimi appuntamenti
                </a>
              </Link>
              <Link href="/sistema-regionale-infeas">
                <a
                  id="dettagli-infeas-link"
                  role="menuitem"
                  tabindex="0"
                  aria-label="A proposito di INFEAS"
                  className="navbar-interactive-link30"
                >
                  {props.text1121 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text31">
                        A proposito di INFEAS
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
          </nav>
        )}
        {activeLink === 'rete' && (
          <nav
            id="submenu-rete"
            role="menu"
            tabindex="0"
            onMouseLeave={() => setActiveLink('none')}
            className="navbar-interactive-perimembridellarete"
          >
            <div className="navbar-interactive-container27">
              <div className="navbar-interactive-container28"></div>
              <Link href="/rete-dashboard">
                <a
                  id="dashboard-link"
                  role="menuitem"
                  tabindex="0"
                  className="navbar-interactive-link31"
                >
                  Dashboard INFEAS
                </a>
              </Link>
              <span
                id="eventi-rete-link"
                role="menuitem"
                tabindex="0"
                className="navbar-interactive-text23"
              >
                I prossimi appuntamenti
              </span>
              <Link href="/rete-notizie">
                <a
                  id="notizie-rete-link"
                  role="menuitem"
                  tabindex="0"
                  className="navbar-interactive-link32"
                >
                  Notizie della rete
                </a>
              </Link>
            </div>
          </nav>
        )}
      </nav>
      <style jsx>
        {`
          .navbar-interactive-container10 {
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .navbar-interactive-navbar-interactive {
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
            background-color: #ffffff;
          }
          .navbar-interactive-container11 {
            margin: 0px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
          }
          .navbar-interactive-link10 {
            display: contents;
          }
          .navbar-interactive-image {
            width: 100%;
            max-width: 280px;
            text-decoration: none;
          }
          .navbar-interactive-desktop-menu {
            flex: 1;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .navbar-interactive-container12 {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .navbar-interactive-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .navbar-interactive-container13 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-interactive-buttons1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-interactive-link11 {
            display: contents;
          }
          .navbar-interactive-icon10 {
            fill: var(--dl-color-theme-primary1);
            text-decoration: none;
          }
          .navbar-interactive-link12 {
            display: contents;
          }
          .navbar-interactive-icon12 {
            fill: var(--dl-color-theme-primary1);
            text-decoration: none;
          }
          .navbar-interactive-link13 {
            display: contents;
          }
          .navbar-interactive-icon14 {
            fill: var(--dl-color-theme-primary1);
            text-decoration: none;
          }
          .navbar-interactive-buttons2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-login1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            border-width: 0px;
          }
          .navbar-interactive-icon16 {
            fill: #333333;
            color: #333333;
          }
          .navbar-interactive-register1 {
            display: none;
          }
          .navbar-interactive-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-container15 {
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-container15:hover {
            cursor: pointer;
          }
          .navbar-interactive-perscuoleuniversit1 {
            transition: 0.3s;
          }

          .navbar-interactive-container16 {
            width: auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-container16:hover {
            cursor: pointer;
          }
          .navbar-interactive-pertuttiicittadini1 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-container17 {
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-container17:hover {
            cursor: pointer;
          }
          .navbar-interactive-perimbembridellarete {
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-container18 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-link14 {
            transition: 0.3s;
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .navbar-interactive-link14:hover {
            cursor: pointer;
          }
          .navbar-interactive-container19 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-link15 {
            transition: 0.3s;
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .navbar-interactive-link15:hover {
            cursor: pointer;
          }
          .navbar-interactive-container21 {
            display: contents;
          }
          .navbar-interactive-burger-menu {
            display: none;
          }
          .navbar-interactive-icon18 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .navbar-interactive-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-interactive-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-logo {
            height: 2rem;
          }
          .navbar-interactive-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-text14 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-text15 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-text16 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-text17 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-container22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-buttons3 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-login2 {
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-buttons4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-interactive-icon22 {
            fill: var(--dl-color-theme-primary1);
          }
          .navbar-interactive-icon24 {
            fill: var(--dl-color-theme-primary1);
          }
          .navbar-interactive-icon26 {
            fill: var(--dl-color-theme-primary1);
          }
          .navbar-interactive-icon28 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-icon30 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-icon32 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-pertuttiicittadini2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            padding: var(--dl-layout-space-fourunits);
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .navbar-interactive-container23 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-interactive-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .navbar-interactive-link16 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .navbar-interactive-link17 {
            display: contents;
          }
          .navbar-interactive-link18 {
            color: #ffffff;
            text-decoration: none;
          }
          .navbar-interactive-link20 {
            color: #ffffff;
            text-decoration: none;
          }
          .navbar-interactive-link22 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .navbar-interactive-link23 {
            color: #ffffff;
            text-decoration: none;
          }
          .navbar-interactive-perscuoleuniversit2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            padding: var(--dl-layout-space-fourunits);
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            background-color: #3e41f2;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .navbar-interactive-container25 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-interactive-container26 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .navbar-interactive-link24 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .navbar-interactive-link25 {
            color: #ffffff;
            text-decoration: none;
          }
          .navbar-interactive-link27 {
            color: rgb(255, 255, 255);
          }
          .navbar-interactive-link29 {
            color: rgb(255, 255, 255);
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-interactive-link29:hover {
            cursor: pointer;
          }
          .navbar-interactive-link30 {
            color: #ffffff;
            text-decoration: none;
          }
          .navbar-interactive-perimembridellarete {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            padding: var(--dl-layout-space-fourunits);
            align-self: stretch;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            background-color: #6a6c8e;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .navbar-interactive-container27 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-interactive-container28 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .navbar-interactive-link31 {
            color: rgb(255, 255, 255);
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-interactive-link31:hover {
            cursor: pointer;
          }
          .navbar-interactive-text23 {
            color: rgb(255, 255, 255);
            transition: 0.3s;
          }
          .navbar-interactive-text23:hover {
            cursor: pointer;
          }
          .navbar-interactive-link32 {
            color: rgb(255, 255, 255);
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-interactive-link32:hover {
            cursor: pointer;
          }
          .navbar-interactive-text24 {
            display: inline-block;
          }
          .navbar-interactive-text25 {
            display: inline-block;
          }
          .navbar-interactive-text26 {
            display: inline-block;
          }
          .navbar-interactive-text27 {
            display: inline-block;
          }
          .navbar-interactive-text28 {
            display: inline-block;
          }
          .navbar-interactive-text29 {
            display: inline-block;
          }
          .navbar-interactive-text30 {
            display: inline-block;
          }
          .navbar-interactive-text31 {
            display: inline-block;
          }
          .navbar-interactive-text32 {
            display: inline-block;
          }
          .navbar-interactive-text33 {
            display: inline-block;
          }
          .navbar-interactive-text34 {
            display: inline-block;
          }
          .navbar-interactive-text35 {
            display: inline-block;
          }
          .navbar-interactive-text36 {
            display: inline-block;
          }
          .navbar-interactiveroot-class-name {
            width: 100%;
          }
          .navbar-interactiveroot-class-name1 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name2 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name4 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name5 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name6 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name7 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name8 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name9 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name10 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name11 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name12 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name13 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name14 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name15 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name16 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name18 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name25 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name26 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name27 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name28 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name29 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name31 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name32 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name34 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name36 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name37 {
            width: 100%;
          }

          .navbar-interactiveroot-class-name39 {
            width: 100%;
          }
          .navbar-interactiveroot-class-name40 {
            width: 100%;
          }
          @media (max-width: 1200px) {
            .navbar-interactive-container22 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 991px) {
            .navbar-interactive-navbar-interactive {
              align-items: flex-end;
              flex-direction: row;
            }
            .navbar-interactive-container11 {
              margin: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-container13 {
              gap: var(--dl-layout-space-unit);
            }
            .navbar-interactive-burger-menu {
              display: flex;
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              align-items: center;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-interactive-image {
              width: 20vh;
            }
            .navbar-interactive-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .navbar-interactive-icon18 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .navbar-interactive-text13 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-text14 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-text15 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-text16 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-text17 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
              padding: var(--dl-layout-space-twounits);
            }
            .navbar-interactive-icon18 {
              width: 40px;
              height: var(--dl-layout-size-small);
            }
            .navbar-interactive-mobile-menu {
              padding: 16px;
            }
            .navbar-interactive-container22 {
              gap: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  login1: undefined,
  login: undefined,
  text1: undefined,
  text2: undefined,
  text122: undefined,
  logoSrc: '/infeaslogo.svg',
  logoAlt: 'image',
  register1: undefined,
  text3: undefined,
  rootClassName: '',
  text1121: undefined,
  text: undefined,
  register: undefined,
  text51: undefined,
  text5: undefined,
  text4: undefined,
}

NavbarInteractive.propTypes = {
  login1: PropTypes.element,
  login: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text122: PropTypes.element,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  register1: PropTypes.element,
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
  text1121: PropTypes.element,
  text: PropTypes.element,
  register: PropTypes.element,
  text51: PropTypes.element,
  text5: PropTypes.element,
  text4: PropTypes.element,
}

export default NavbarInteractive
