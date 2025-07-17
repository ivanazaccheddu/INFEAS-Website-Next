import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Cardwithicon from '../components/cardwithicon'
import CardAlignCenter from '../components/card-align-center'
import Herostatic from '../components/herostatic'
import ProgrammiDidattici from '../components/programmi-didattici'
import Cardwithphoto from '../components/cardwithphoto'
import Gallery from '../components/gallery'
import CardEvento from '../components/card-evento'
import LoghiSponsor from '../components/loghi-sponsor'
import TwoColrightimage from '../components/two-colrightimage'
import CardboxDashboard from '../components/cardbox-dashboard'
import HeaderVector from '../components/header-vector'
import Headertipologiatarget from '../components/headertipologiatarget'
import FilterbyProvince from '../components/filterby-province'
import Cardprovince from '../components/cardprovince'
import EducareSostenibilit from '../components/educare-sostenibilit'
import InsiemeAmbiente from '../components/insieme-ambiente'
import Cardprovincelisting from '../components/cardprovincelisting'
import Tag from '../components/tag'
import Dettaglioceas from '../components/dettaglioceas'
import FilterbyEventi from '../components/filterby-eventi'
import Footer from '../components/footer'
import NavbarInteractive from '../components/navbar-interactive'
import NewsSimple from '../components/news-simple'
import ParagrafoDettaglioCeas from '../components/paragrafo-dettaglio-ceas'
import NewsTitle from '../components/news-title'

const Style = (props) => {
  return (
    <>
      <div className="style-container100">
        <Head>
          <title>Style - INFEAS Website</title>
          <meta property="og:title" content="Style - INFEAS Website" />
        </Head>
        <div className="style-container101">
          <div className="style-font10">
            <span className="style-text100">Font</span>
          </div>
          <div className="style-container102">
            <h1 className="heading1 style-text101">
              Bentornati su Infeas Sardegna
            </h1>
            <h2 className="heading2">Bentornati su Infeas Sardegna</h2>
            <span className="heading3">
              Impariamo dalla natura, diffondiamo conoscenza, costruiamo
              sostenibilità per la nostra comunità.
            </span>
            <span className="heading4">
              Impariamo dalla natura, diffondiamo conoscenza, costruiamo
              sostenibilità per la nostra comunità.
            </span>
            <span className="paragraph_xl">
              INFEAS è il sistema regionale della Sardegna dedicato
              all&apos;educazione ambientale e alla sostenibilità. Coordina e
              supporta i Centri di Educazione Ambientale e alla Sostenibilità
              (CEAS), promuove buone pratiche, progetta percorsi educativi e
              favorisce la collaborazione tra enti, comunità e istituzioni per
              costruire un futuro sostenibile.
            </span>
            <span className="paragraph_md">
              INFEAS è il sistema regionale della Sardegna dedicato
              all&apos;educazione ambientale e alla sostenibilità. Coordina e
              supporta i Centri di Educazione Ambientale e alla Sostenibilità
              (CEAS), promuove buone pratiche, progetta percorsi educativi e
              favorisce la collaborazione tra enti, comunità e istituzioni per
              costruire un futuro sostenibile.
            </span>
            <span className="paragraph_sm">
              INFEAS è il sistema regionale della Sardegna dedicato
              all&apos;educazione ambientale e alla sostenibilità. Coordina e
              supporta i Centri di Educazione Ambientale e alla Sostenibilità
              (CEAS), promuove buone pratiche, progetta percorsi educativi e
              favorisce la collaborazione tra enti, comunità e istituzioni per
              costruire un futuro sostenibile.
            </span>
          </div>
          <div className="style-card">
            <span className="style-text108">Card</span>
          </div>
          <div className="style-container103">
            <div className="style-container104">
              <Cardwithicon></Cardwithicon>
              <div className="style-cardwithicon1">
                <div className="style-container105">
                  <img
                    alt="image"
                    src="/Icone/icon-vedimappa.svg"
                    className="style-image10"
                  />
                </div>
                <span className="paragraph_xxl">
                  Scopri le ultime notizie da Infeas
                </span>
              </div>
              <div className="style-cardwithicon2">
                <div className="style-container106">
                  <img
                    alt="image"
                    src="/Icone/icon-esplora.svg"
                    className="style-image11"
                  />
                </div>
                <span className="paragraph_xxl">
                  Scopri le ultime notizie da Infeas
                </span>
              </div>
              <div className="style-cardwithicon3">
                <div className="style-container107">
                  <img
                    alt="image"
                    src="/Icone/icon-scopriattivit%C3%A3%C2%A0.svg"
                    className="style-image12"
                  />
                </div>
                <span className="paragraph_xxl">
                  Scopri le ultime notizie da Infeas
                </span>
              </div>
            </div>
          </div>
          <div className="style-card2">
            <span className="style-text112">Card 3</span>
          </div>
          <div className="style-a-chi-si-rivolge">
            <div className="style-titolo-paragraph">
              <div className="style-container108">
                <span className="style-text113 heading1">
                  A chi si rivolge?
                </span>
                <span className="style-text114 paragraph_xl">
                  Sviluppando programmi formativi e incoraggiando la
                  cooperazione tra organizzazioni, comunità locali e istituzioni
                  per un domani più verde.
                </span>
              </div>
            </div>
            <div className="style-container109">
              <CardAlignCenter></CardAlignCenter>
              <CardAlignCenter imageSrc="/external/scuoleeuni.svg"></CardAlignCenter>
              <CardAlignCenter imageSrc="/Icone/cittadini.svg"></CardAlignCenter>
            </div>
          </div>
          <div className="style-font11">
            <span className="style-text115">Header section</span>
          </div>
          <div className="style-container110">
            <Herostatic
              text={
                <Fragment>
                  <span className="style-text116">
                    Bentornati su INFEAS Sardegna
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="style-text117">
                    Impariamo dalla natura, diffondiamo conoscenza, costruiamo
                    sostenibilità per la nostra comunità.
                  </span>
                </Fragment>
              }
            ></Herostatic>
          </div>
          <div className="style-font12">
            <span className="style-text118">Press kit</span>
          </div>
          <div className="style-container111">
            <div className="style-font13">
              <span className="style-text119">Programmi didattici</span>
            </div>
          </div>
          <div className="style-container112">
            <ProgrammiDidattici
              text={
                <Fragment>
                  <span className="style-text120">Programmi Didattici</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="style-text121">
                    Offriamo risorse, programmi e strumenti educativi rivolti a
                    scuole e università per approfondire i temi ambientali e
                    della sostenibilità. I materiali includono guide, attività
                    pratiche, percorsi tematici e programmi strutturati, pensati
                    per supportare docenti e studenti nello sviluppo di
                    conoscenze e competenze per un futuro più sostenibile.
                  </span>
                </Fragment>
              }
            ></ProgrammiDidattici>
          </div>
          <div className="style-button10">
            <span className="style-text122">Bottoni</span>
          </div>
          <div className="style-container113">
            <div className="style-container114"></div>
          </div>
          <div className="style-button11">
            <span className="style-text123">Card with photo</span>
          </div>
          <div className="style-container115">
            <div className="style-container116">
              <span className="heading1">Scopri i temi e progetti INFEAS</span>
            </div>
            <div className="style-container117">
              <Cardwithphoto></Cardwithphoto>
              <Cardwithphoto></Cardwithphoto>
              <Cardwithphoto></Cardwithphoto>
            </div>
            <div className="style-container118">
              <span className="style-text125 paragraph_xl">
                I progetti di rete sono iniziative collaborative su temi
                condivisi, che coinvolgono CEAS, istituzioni e comunità locali
                per promuovere sostenibilità e innovazione. Attraverso il lavoro
                coordinato, favoriscono buone pratiche e azioni efficaci sul
                territorio.
              </span>
            </div>
          </div>
          <div className="style-button12">
            <span className="style-text126">News </span>
          </div>
          <div className="style-container119">
            <div className="style-news1">
              <div className="style-frame403581">
                <img
                  alt="Line111636"
                  src="/external/line111636-wbeq.svg"
                  className="style-line111"
                />
                <span className="style-text127 heading4">
                  Aggiornamento del Registro Regionale dei CEAS (RERC) – sez. A
                  “CEAS non accreditati”
                </span>
                <span className="style-text128 Pharagraph_Medium">
                  A seguito dell’iscrizione del CEAS istituito presso il Comune
                  di Narbolia, denominato “Sinis Montiferru”, è stato aggiornato
                  il Registro Regionale dei Centri di educazione all’ambiente e
                  alla sostenibilità (RERC) – sez. A “CEAS non accreditati”.
                </span>
                <span className="style-text129 Pharagraph_Medium">
                  10 Gennaio 2024
                </span>
                <div className="style-footer1">
                  <div className="style-group402341">
                    <div className="style-frame6333231">
                      <span className="style-text130 Paragraph_very_small">
                        CULTURA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="style-news2">
              <div className="style-frame403582">
                <img
                  alt="Line111636"
                  src="/external/line111636-zjpn.svg"
                  className="style-line112"
                />
                <span className="style-text131 heading4">
                  Graduatoria dei progetti idonei CEAS
                </span>
                <span className="style-text132 Pharagraph_Medium">
                  Graduatoria dei progetti idonei a valere sul Bando per il
                  finanziamento di progetti di educazione allo sviluppo
                  sostenibile e alla cittadinanza globale, destinato agli Enti
                  pubblici titolari di CEAS della rete INFEAS – annualità 2024,
                  di cui alla D.G.R. n. 4/132 del 15.02.2024.
                </span>
                <span className="style-text133 Pharagraph_Medium">
                  25 Gennaio 2024
                </span>
                <div className="style-footer2">
                  <div className="style-group402342">
                    <div className="style-frame6333232">
                      <span className="style-text134 Paragraph_very_small">
                        CULTURA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="style-news3">
              <div className="style-frame403583">
                <img
                  alt="Line111636"
                  src="/external/line111636-jrg.svg"
                  className="style-line113"
                />
                <span className="style-text135 heading4">
                  CEAS APERTI 2024 – Insieme per le terre del futuro – III°
                  EDIZIONE
                </span>
                <span className="style-text136 Pharagraph_Medium">
                  Dal 24 Settembre al 15 Ottobre torna CEAS Aperti, l’evento di
                  carattere regionale che coinvolge i nostri Centri di
                  Educazione Ambientale e alla Sostenibilità della Sardegna.
                </span>
                <span className="style-text137 Pharagraph_Medium">
                  28 Gennaio 2024
                </span>
                <div className="style-footer3">
                  <div className="style-group402343">
                    <div className="style-frame6333233">
                      <span className="style-text138 Paragraph_very_small">
                        CULTURA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="style-button13">
            <span className="style-text139">Card gallery</span>
          </div>
          <div className="style-container120">
            <div className="style-container121">
              <span className="style-text140 H1">
                Scopri la community INFEAS
              </span>
            </div>
            <Gallery rootClassName="galleryroot-class-name"></Gallery>
          </div>
          <div className="style-button14">
            <span className="style-text141">Infographic</span>
          </div>
          <div className="style-container122">
            <div className="style-container123">
              <span className="heading1">I Numeri del 2024</span>
            </div>
            <div className="style-container124">
              <div className="style-num-title">
                <div className="style-container125">
                  <span className="heading2">48</span>
                  <div className="style-container126">
                    <span className="paragraph_md">Laboratori</span>
                  </div>
                </div>
              </div>
              <div className="style-container127">
                <div className="style-container128">
                  <span className="H2">5650</span>
                  <div className="style-container129">
                    <span className="paragraph_md">
                      Partecipanti alle attività di gruppo
                    </span>
                  </div>
                </div>
              </div>
              <div className="style-container130">
                <div className="style-container131">
                  <span className="H2">7</span>
                  <span className="paragraph_md">Nuovi CEAS Accreditati</span>
                </div>
              </div>
              <div className="style-container132">
                <div className="style-container133">
                  <span className="H2">48</span>
                  <span className="paragraph_md">
                    Progetti realizzati nel territorio
                  </span>
                </div>
              </div>
              <img
                alt="image"
                src="/external/img-numeri-800w.png"
                className="style-image13"
              />
              <div className="style-container134">
                <span className="style-text151 Pharagraph_Medium">
                  Un progetto sperimentale che unisce Fondazione di Sardegna e
                  Fondazione Triennale Milano per trasformare l’artigianato
                  artistico e tradizionale in nuove opportunità di sviluppo e
                  innovazione.
                </span>
              </div>
            </div>
          </div>
          <div className="style-button15">
            <span className="style-text152">2 Colonne</span>
          </div>
          <div className="style-container135">
            <div className="style-container136">
              <span className="heading1">
                Vuoi istituire un CEAS nella tua provincia o comune ?
              </span>
            </div>
            <div className="style-container137">
              <div className="style-bullet1">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check1"
                />
                <span className="paragraph_md">
                  Promuovi la cultura della sostenibilità nella tua comunità
                </span>
              </div>
              <div className="style-bullet2">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check2"
                />
                <span className="paragraph_md">
                  Contribuisci concretamente alla transizione ecologica del
                  territorio
                </span>
              </div>
              <div className="style-bullet3">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check3"
                />
                <span className="paragraph_md">
                  Accedi a reti di collaborazione e risorse per progetti
                  innovativi
                </span>
              </div>
              <div className="style-bullet4">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check4"
                />
                <span className="paragraph_md">
                  Valorizza le risorse naturali e culturali del tuo territorio
                </span>
              </div>
              <div className="style-bullet5">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check5"
                />
                <span className="paragraph_md">
                  Coinvolgi attivamente i cittadini nella tutela ambientale
                </span>
              </div>
              <div className="style-bullet6">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check6"
                />
                <span className="paragraph_md">
                  Attira finanziamenti e bandi dedicati alla sostenibilità
                </span>
              </div>
              <div className="style-bullet7">
                <img
                  alt="Frame2I923"
                  src="/external/frame2i923-kumr.svg"
                  className="style-check7"
                />
                <span className="paragraph_md">
                  Offri opportunità educative per scuole e famiglie locali
                </span>
              </div>
            </div>
          </div>
          <div className="style-button16">
            <span className="style-text161">Card evento</span>
          </div>
          <div className="style-container138">
            <CardEvento rootClassName="card-eventoroot-class-name"></CardEvento>
            <CardEvento></CardEvento>
            <CardEvento></CardEvento>
          </div>
          <div className="style-button17">
            <span className="style-text162">Card evento</span>
          </div>
          <div className="style-container139">
            <div className="style-card-evento11">
              <div className="style-image-frame1">
                <img
                  alt="Rectangle2086I159"
                  src="/external/rectangle2086i159-spog-500h.png"
                  className="style-foto1"
                />
                <img
                  alt="Vector155I159"
                  src="/external/vector155i159-x5f.svg"
                  className="style-vector1551"
                />
              </div>
              <div className="style-card-content1">
                <div className="style-frame404681">
                  <div className="style-data-o-veraly1">
                    <span className="style-text163">Casa Gioiosa</span>
                    <span className="style-text164">20 / 12 / 2024</span>
                    <span className="style-text165">ORE 19:30</span>
                  </div>
                  <span className="style-text166">
                    CEAS aperti a Casa Gioiosa
                  </span>
                </div>
                <div className="style-footer4">
                  <div className="style-group402344">
                    <div className="style-frame6333234">
                      <span className="style-text167 Paragraph_very_small">
                        CULTURA
                      </span>
                    </div>
                  </div>
                  <div className="style-logo-container1">
                    <img
                      alt="image22I159"
                      src="/external/image22i159-fnsn-200h.png"
                      className="style-image221"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="style-card-evento12">
              <div className="style-image-frame2">
                <img
                  alt="Rectangle2086I159"
                  src="/external/rectangle2086i159-spog-500h.png"
                  className="style-foto2"
                />
                <img
                  alt="Vector155I159"
                  src="/external/vector155i159-x5f.svg"
                  className="style-vector1552"
                />
              </div>
              <div className="style-card-content2">
                <div className="style-frame404682">
                  <div className="style-data-o-veraly2">
                    <span className="style-text168">Casa Gioiosa</span>
                    <span className="style-text169">20 / 12 / 2024</span>
                    <span className="style-text170">ORE 19:30</span>
                  </div>
                  <span className="style-text171">
                    CEAS aperti a Casa Gioiosa
                  </span>
                </div>
                <div className="style-footer5">
                  <div className="style-group402345">
                    <div className="style-frame6333235">
                      <span className="style-text172 Paragraph_very_small">
                        CULTURA
                      </span>
                    </div>
                  </div>
                  <div className="style-logo-container2">
                    <img
                      alt="image22I159"
                      src="/external/image22i159-fnsn-200h.png"
                      className="style-image222"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="style-button18">
            <span className="style-text173">2 Colonne</span>
          </div>
          <div className="style-container140"></div>
          <div className="style-button19">
            <span className="style-text174">Loghi Sponsor</span>
          </div>
          <LoghiSponsor></LoghiSponsor>
          <div className="style-font14">
            <span className="style-text175">Twocolumn_section</span>
          </div>
          <div className="style-container141">
            <TwoColrightimage
              text={
                <Fragment>
                  <span className="style-text176">
                    Aggiornamento del Registro Regionale dei CEAS (RERC) – sez.
                    A “CEAS non accreditati”
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="style-text177">
                    A seguito dell’iscrizione del CEAS istituito presso il
                    Comune di Narbolia, denominato “Sinis Montiferru”, è stato
                    aggiornato il Registro Regionale dei Centri di educazione
                    all’ambiente e alla sostenibilità (RERC) – sez. A “CEAS non
                    accreditati”.
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="style-text178">CULTURA</span>
                </Fragment>
              }
            ></TwoColrightimage>
          </div>
          <div className="style-font15">
            <span className="style-text179">Search Result Title</span>
          </div>
          <div className="style-container142">
            <div className="style-notizie1">
              <div className="style-container143">
                <div className="style-container144">
                  <img
                    alt="image"
                    src="/Icone/icon_news.svg"
                    className="style-image14"
                  />
                </div>
                <span className="heading3">Notizie</span>
              </div>
              <div className="style-container145"></div>
            </div>
            <div className="style-eventi1">
              <div className="style-container146">
                <div className="style-container147">
                  <img
                    alt="image"
                    src="/Icone/icon_eventi.svg"
                    className="style-image15"
                  />
                </div>
                <span className="heading3">Eventi</span>
              </div>
              <div className="style-container148"></div>
            </div>
            <div className="style-eventi2">
              <div className="style-container149">
                <div className="style-container150">
                  <img
                    alt="image"
                    src="/Icone/icon_multimedia.svg"
                    className="style-image16"
                  />
                </div>
                <span className="heading3">Multimedia</span>
              </div>
              <div className="style-container151"></div>
            </div>
          </div>
          <div className="style-font16">
            <span className="style-text183">Box Dashboard</span>
          </div>
          <div className="style-container152">
            <div className="style-box-dashboard">
              <CardboxDashboard></CardboxDashboard>
              <div className="style-procedure">
                <img
                  alt="image"
                  src="/box-icon.svg"
                  className="style-image17"
                />
                <h4 className="style-text184 heading4">Procedure</h4>
                <div className="style-container153"></div>
              </div>
            </div>
            <div className="style-notizie2">
              <div className="style-info-e-linee-guida">
                <img
                  alt="image"
                  src="/box-icon.svg"
                  className="style-image18"
                />
                <h4 className="style-text185 heading4">Info e Linee guida</h4>
                <div className="style-container154"></div>
              </div>
              <div className="style-siquas">
                <img
                  alt="image"
                  src="/box-icon.svg"
                  className="style-image19"
                />
                <h4 className="style-text186 heading4">SIQUAS</h4>
                <div className="style-container155"></div>
              </div>
            </div>
          </div>
          <div className="style-font17">
            <span className="style-text187">Header</span>
          </div>
          <div className="style-container156">
            <HeaderVector></HeaderVector>
            <Headertipologiatarget></Headertipologiatarget>
            <header
              id="header-pagina"
              className="style-header-scuoleeuniversit1"
            >
              <div className="style-header1 thq-section-max-width">
                <p className="style-text188 paragraph_md">
                  Home / Per Scuole e Universtità
                </p>
                <h1
                  id="header-title"
                  aria-labelledby="page-title"
                  className="style-text189 heading1"
                >
                  Rete INFEAS
                </h1>
              </div>
              <img
                alt="immagine-background"
                src="/headerimg-texture-1500w.png"
                className="style-image20"
              />
            </header>
            <header id="header-pagina" className="style-header-cittadini">
              <div className="style-header2 thq-section-max-width">
                <p className="style-text190 paragraph_md">
                  Home / Per Scuole e Universtità
                </p>
                <h1
                  id="header-title"
                  aria-labelledby="page-title"
                  className="style-text191 heading1"
                >
                  Per i cittadini
                </h1>
              </div>
              <img
                alt="immagine-background"
                src="/headerimg-texture-1500w.png"
                className="style-image21"
              />
              <img
                alt="immagine-background"
                src="/headerimg-texture-1500w.png"
                className="style-image23"
              />
            </header>
            <header
              id="header-pagina"
              className="style-header-scuoleeuniversit2"
            >
              <div className="style-header3 thq-section-max-width">
                <p className="style-text192 paragraph_md">
                  Home / Per Scuole e Universtità
                </p>
                <h1
                  id="header-title"
                  aria-labelledby="page-title"
                  className="style-text193 heading1"
                >
                  Scuole e Università
                </h1>
              </div>
              <img
                alt="immagine-background"
                src="/headerimg-texture-1500w.png"
                className="style-image24"
              />
              <img
                alt="immagine-background"
                src="/headerimg-texture-1500w.png"
                className="style-image25"
              />
            </header>
          </div>
          <div className="style-font18">
            <span className="style-text194">News dalla rete</span>
          </div>
          <div className="style-container157">
            <div className="style-news-rete3columns1"></div>
            <div className="style-news-rete3columns2"></div>
            <div className="style-news-rete3columns3"></div>
          </div>
          <div className="style-font19">
            <span className="style-text195">News 3 column</span>
          </div>
          <div className="style-container158">
            <div className="style-container159">
              <span className="style-text196 heading2">Notizie della rete</span>
              <span className="style-text197 paragraph_xl">
                Esplora le ultime notizie riguardanti la rete Infeas, inclusi
                bandi, scadenze importanti e presentazioni di progetti
                innovativi. Rimani aggiornato sulle opportunità e le iniziative
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="style-news3columns"></div>
          </div>
          <div className="style-font20">
            <span className="style-text198">Card Province</span>
          </div>
          <div className="style-container160">
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="style-text199">Filtra per</span>
                </Fragment>
              }
            ></FilterbyProvince>
            <div className="style-container161">
              <Cardprovince></Cardprovince>
              <Cardprovince></Cardprovince>
              <Cardprovince></Cardprovince>
            </div>
            <div className="style-container162">
              <Cardprovince></Cardprovince>
              <Cardprovince></Cardprovince>
              <Cardprovince></Cardprovince>
            </div>
            <div className="style-container163">
              <Cardprovince></Cardprovince>
              <Cardprovince></Cardprovince>
              <Cardprovince></Cardprovince>
            </div>
          </div>
          <div className="style-font21">
            <span className="style-text200">Icon + Title + Paragraph</span>
          </div>
          <div className="style-container164">
            <EducareSostenibilit
              text={
                <Fragment>
                  <span className="style-text201">
                    Educare alla sostenibilità
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="style-text202">
                    Il Sistema Regionale INFEAS Sardegna promuove attività per
                    scuole e università attraverso i Centri di Educazione
                    Ambientale e alla Sostenibilità (CEAS). L&apos;obiettivo è
                    sensibilizzare le nuove generazioni sui temi ambientali e
                    promuovere la cultura della sostenibilità. Le iniziative
                    includono programmi educativi, laboratori, eventi e progetti
                    concreti per sviluppare conoscenze, competenze e
                    comportamenti responsabili verso l&apos;ambiente.
                  </span>
                </Fragment>
              }
            ></EducareSostenibilit>
            <InsiemeAmbiente
              text={
                <Fragment>
                  <span className="style-text203">
                    Insieme per un ambiente più sostenibile
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="style-text204">
                    INFEAS Sardegna promuove iniziative volte a sensibilizzare e
                    coinvolgere i cittadini nella tutela dell&apos;ambiente e
                    nella sostenibilità. Le attività si concentrano su eventi,
                    percorsi informativi e progetti pratici che stimolano la
                    partecipazione attiva della comunità. L’obiettivo è
                    diffondere una cultura della sostenibilità, favorire
                    comportamenti responsabili e creare un impatto positivo sul
                    territorio, contribuendo così alla protezione dell’ambiente
                    per le generazioni future.
                  </span>
                </Fragment>
              }
            ></InsiemeAmbiente>
          </div>
          <div className="style-font22">
            <span className="style-text205">card_provincia</span>
          </div>
          <div className="style-container165">
            <Cardprovincelisting
              text1={
                <Fragment>
                  <span className="style-text206">Documenti utili</span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="style-text207">
                    Brochure attivitá formativa
                  </span>
                </Fragment>
              }
            ></Cardprovincelisting>
            <Cardprovincelisting
              text1={
                <Fragment>
                  <span className="style-text208">Documenti utili</span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="style-text209">
                    Brochure attivitá formativa
                  </span>
                </Fragment>
              }
            ></Cardprovincelisting>
            <Cardprovincelisting
              text1={
                <Fragment>
                  <span className="style-text210">Documenti utili</span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="style-text211">
                    Brochure attivitá formativa
                  </span>
                </Fragment>
              }
            ></Cardprovincelisting>
          </div>
          <div className="style-font23">
            <span className="style-text212">CTA-Maps</span>
          </div>
          <div className="style-container166"></div>
          <div className="style-font24">
            <span className="style-text213">dettaglio-cittadini</span>
          </div>
          <div className="style-dettaglio-cittadini">
            <div className="style-container167">
              <img
                alt="image"
                src="/ceasaperti2024.jpg"
                className="style-image26"
              />
            </div>
            <div className="style-container168">
              <div className="style-column-sx">
                <div className="style-container169">
                  <span className="style-text214">
                    VAI A
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <div className="style-lista-ceas">
                    <div className="style-ceas1">
                      <img
                        alt="image"
                        src="/Icone/arrow-icon.svg"
                        className="style-image27"
                      />
                      <span>
                        CEAS Aperti: Un evento regionale per la sostenibilità
                      </span>
                    </div>
                    <div className="style-ceas2">
                      <img
                        alt="image"
                        src="/Icone/arrow-icon.svg"
                        className="style-image28"
                      />
                      <span>
                        CEAS Aperti: Un evento regionale per la sostenibilità
                      </span>
                    </div>
                    <div className="style-ceas3">
                      <img
                        alt="image"
                        src="/Icone/arrow-icon.svg"
                        className="style-image29"
                      />
                      <span>
                        CEAS Aperti: Un evento regionale per la sostenibilità
                      </span>
                    </div>
                    <div className="style-ceas4">
                      <img
                        alt="image"
                        src="/Icone/arrow-icon.svg"
                        className="style-image30"
                      />
                      <span>
                        CEAS Aperti: Un evento regionale per la sostenibilità
                      </span>
                    </div>
                    <div className="style-ceas5">
                      <img
                        alt="image"
                        src="/Icone/arrow-icon.svg"
                        className="style-image31"
                      />
                      <span>
                        CEAS Aperti: Un evento regionale per la sostenibilità
                      </span>
                    </div>
                  </div>
                </div>
                <div className="style-container170">
                  <span className="style-text220">TAG</span>
                  <Tag></Tag>
                </div>
              </div>
              <div className="style-column-dx-paragrafo">
                <div className="style-container171">
                  <span className="style-text221">
                    <span>
                      Dal 24 Settembre al 15 Ottobre torna CEAS Aperti, l’evento
                      di carattere regionale che coinvolge i nostri Centri di
                      Educazione Ambientale e alla Sostenibilità della Sardegna.
                    </span>
                    <br></br>
                    <span>
                      Questa terza edizione, la più ricca di sempre, vedrà
                      protagonisti ben 45 CEAS che per l’occasione hanno creato
                      un ricco calendario di attività gratuite con l’obiettivo
                      di aumentare la consapevolezza dei cittadini sulle
                      tematiche ambientali cruciali dei tempi moderni.
                    </span>
                    <br></br>
                    <br></br>
                    <span>INSIEME PER LE TERRE DEL FUTURO</span>
                    <br></br>
                    <span>
                      Tema portante di questa edizione sarà il suolo, filo
                      conduttore di tutte le attività. Il suolo rappresenta una
                      delle risorse fondamentali del nostro pianeta, dai servizi
                      di approvvigionamento (materie prime, prodotti alimentari
                      etc.) e regolazione naturale (del clima, della qualità
                      dell’acqua, di protezione e mitigazione dei fenomeni
                      idrologici estremi etc.) a quelli di supporto agli habitat
                      delle specie e alla conservazione della biodiversità.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Gli studi condotti nel 2009 dallo scienziato Johan
                      Rockström hanno messo in evidenza i rischi connessi al
                      superamento di alcuni limiti ambientali, tra cui il
                      consumo del suolo, già oltrepassato nel 2015. Questo
                      rende urgente un’azione di sensibilizzazione per la tutela
                      di questa preziosa risorsa.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      CEAS Aperti consentirà a tutti gli interessati di
                      approfondire queste tematiche, scoprire e visitare i
                      Centri della rete INFEAS, di conoscere le bellezze
                      naturalistiche e paesaggistiche della nostra isola e di
                      partecipare a tutte le attività proposte che sono gratuite
                      e pensate per tutti.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Sono oltre 70 gli eventi previsti in tutto il territorio
                      regionale, che includono passeggiate esplorative,
                      escursioni, incontri, cineforum, laboratori di vario tipo
                      e mostre.
                    </span>
                  </span>
                </div>
                <div className="style-container172"></div>
                <span className="style-text239">
                  CEAS Aperti 2024 – Insieme per le terre del futuro – è un
                  progetto sostenuto dalla Regione Sardegna (Assessorato
                  all’Ambiente SVASI) e coordinato nelle sue azioni dal Comune
                  di Capoterra, con il suo Centro di Educazione all’Ambiente e
                  alla Sostenibilità (CEAS) Laguna di Santa Gilla.
                </span>
              </div>
            </div>
          </div>
          <div className="style-font25">
            <span className="style-text240">dettaglio-ceas</span>
          </div>
          <Dettaglioceas
            text={
              <Fragment>
                <span className="style-text241">Contatti</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="style-text242">Documenti Utili</span>
              </Fragment>
            }
          ></Dettaglioceas>
          <div className="style-font26">
            <span className="style-text243">Filter by</span>
          </div>
          <div className="style-filterby">
            <select name="Filter by" className="style-select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select name="Filter by" className="style-select2">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="style-font27">
            <span className="style-text244">Accordion</span>
          </div>
          <div data-thq="accordion" className="style-accordion1">
            <details data-thq="accordion-trigger" className="style-trigger1">
              <summary data-thq="accordion-summary" className="style-summary1">
                <span className="heading4">
                  <span className="style-text246">Locandine</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div
                  data-thq="accordion-icon"
                  className="style-icon-container1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="style-icon1"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
          </div>
          <div data-thq="accordion" className="style-accordion2">
            <details data-thq="accordion-trigger" className="style-trigger2">
              <summary data-thq="accordion-summary" className="style-summary2">
                <span className="style-text248 heading4">Loghi</span>
                <div
                  data-thq="accordion-icon"
                  className="style-icon-container2"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="style-icon3"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="style-container173">
                <div className="style-container174">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image32"
                  />
                  <span className="paragraph_xl">Locandina INFEAS 2024</span>
                </div>
                <div className="style-container175">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image33"
                  />
                  <span className="paragraph_xl">Locandina Ceas Aperti</span>
                </div>
              </div>
            </div>
            <div data-thq="accordion-content">
              <div className="style-container176">
                <div className="style-container177">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image34"
                  />
                  <span className="paragraph_xl">Locandina INFEAS 2024</span>
                </div>
                <div className="style-container178">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image35"
                  />
                  <span className="paragraph_xl">Locandina Ceas Aperti</span>
                </div>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="style-accordion3">
            <details data-thq="accordion-trigger" className="style-trigger3">
              <summary data-thq="accordion-summary" className="style-summary3">
                <span className="style-text253 heading4">Brochure</span>
                <div
                  data-thq="accordion-icon"
                  className="style-icon-container3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="style-icon5"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="style-container179">
                <div className="style-container180">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image36"
                  />
                  <span className="paragraph_xl">Locandina INFEAS 2024</span>
                </div>
                <div className="style-container181">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image37"
                  />
                  <span className="paragraph_xl">Locandina Ceas Aperti</span>
                </div>
              </div>
            </div>
            <div data-thq="accordion-content">
              <div className="style-container182">
                <div className="style-container183">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image38"
                  />
                  <span className="paragraph_xl">Locandina INFEAS 2024</span>
                </div>
                <div className="style-container184">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image39"
                  />
                  <span className="paragraph_xl">Locandina Ceas Aperti</span>
                </div>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="style-accordion4">
            <details data-thq="accordion-trigger" className="style-trigger4">
              <summary data-thq="accordion-summary" className="style-summary4">
                <span className="style-text258 heading4">
                  Comunicati stampa
                </span>
                <div
                  data-thq="accordion-icon"
                  className="style-icon-container4"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="style-icon7"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="style-container185">
                <div className="style-container186">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image40"
                  />
                  <span className="paragraph_xl">Locandina INFEAS 2024</span>
                </div>
                <div className="style-container187">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image41"
                  />
                  <span className="paragraph_xl">Locandina Ceas Aperti</span>
                </div>
              </div>
            </div>
            <div data-thq="accordion-content">
              <div className="style-container188">
                <div className="style-container189">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image42"
                  />
                  <span className="paragraph_xl">Locandina INFEAS 2024</span>
                </div>
                <div className="style-container190">
                  <img
                    alt="image"
                    src="/icondownload.svg"
                    className="style-image43"
                  />
                  <span className="paragraph_xl">Locandina Ceas Aperti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-thq="accordion" className="style-accordion5">
          <div data-thq="accordion-content">
            <div className="style-container191">
              <p>
                Default Content for the Accordion. This can be anything that you
                want
              </p>
            </div>
          </div>
        </div>
        <div className="style-font28">
          <span className="style-text264">Filter by province</span>
        </div>
        <FilterbyProvince
          text={
            <Fragment>
              <span className="style-text265">Filtra per</span>
            </Fragment>
          }
        ></FilterbyProvince>
        <div className="style-font29">
          <span className="style-text266">Filter by eventi</span>
        </div>
        <FilterbyEventi
          text={
            <Fragment>
              <span className="style-text267">Dedicato a</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="style-text268">Tipologia</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="style-text269">Durata</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="style-text270">Luogo</span>
            </Fragment>
          }
        ></FilterbyEventi>
        <Footer rootClassName="footerroot-class-name"></Footer>
        <div className="style-font30">
          <span className="style-text271">nav bar</span>
        </div>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="style-text272">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="style-text273">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="style-text274">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="style-text275">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="style-text276">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="style-text277">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="style-text278">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="style-text279">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="style-text280">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="style-text281">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="style-text282">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="style-text283">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="style-text284">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name"
        ></NavbarInteractive>
        <div className="style-font31">
          <span className="style-text285">I Prossimi appuntamenti</span>
        </div>
        <div className="style-container192">
          <div className="style-two-colrightimage">
            <div className="style-container193">
              <span className="style-text286 heading2">
                I Prossimi Appuntamenti
              </span>
              <span className="style-text287 paragraph_xl">
                Non perdere i prossimi eventi e iniziative promossi da INFEAS!
                Scopri date, luoghi e dettagli delle attività dedicate
                all’educazione alla sostenibilità.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="style-container194">
                <div className="style-container195">
                  <CardEvento
                    fotoEvento="/eventi_1.jpg"
                    rootClassName="card-eventoroot-class-name1"
                  ></CardEvento>
                  <CardEvento fotoEvento="/eventi_2.jpg"></CardEvento>
                  <CardEvento fotoEvento="/eventi_3.jpg"></CardEvento>
                </div>
              </div>
            </div>
            <div className="style-container196">
              <div className="style-container197"></div>
              <div className="style-container198">
                <img
                  alt="image"
                  src="/arrow-sx.svg"
                  className="style-image44"
                />
                <img
                  alt="image"
                  src="/arrow-dx.svg"
                  className="style-image45"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="style-font32">
          <span className="style-text288">Ricerca risultati</span>
        </div>
        <div className="style-dettaglioceas1">
          <div className="style-dettaglio-sx1">
            <div className="style-container199">
              <div className="style-filtra-per1">
                <div className="style-container200">
                  <span className="style-text289">Keyword di ricerca</span>
                </div>
              </div>
              <div className="style-container201">
                <select name="Filter by" className="style-select3">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="style-container202">
              <div className="style-filtra-per2">
                <div className="style-container203">
                  <span className="style-text290">Filtra per</span>
                </div>
              </div>
              <div className="style-container204">
                <select name="Filter by" className="style-select4">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="style-container205">
              <div className="style-filtra-per3">
                <div className="style-container206">
                  <span className="style-text291">Filtra per</span>
                </div>
              </div>
              <div className="style-container207">
                <select name="Filter by" className="style-select5">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="style-container208">
              <span className="style-text292">TAG Selezionato</span>
              <div className="style-container209">
                <Tag></Tag>
                <Tag></Tag>
                <Tag></Tag>
              </div>
            </div>
          </div>
          <div className="style-dettaglio-dx1">
            <div className="style-notizie3">
              <div className="style-container210">
                <div className="style-container211">
                  <div className="style-container212">
                    <img
                      alt="image"
                      src="/Icone/icon_news.svg"
                      className="style-image46"
                    />
                  </div>
                  <span className="heading3">Notizie</span>
                </div>
                <div className="style-container213"></div>
              </div>
              <div className="style-container214">
                <div className="style-container215">
                  <NewsSimple></NewsSimple>
                  <NewsSimple></NewsSimple>
                </div>
                <div className="style-container216">
                  <NewsSimple></NewsSimple>
                  <NewsSimple></NewsSimple>
                </div>
                <div className="style-container217">
                  <NewsSimple></NewsSimple>
                  <NewsSimple></NewsSimple>
                </div>
              </div>
            </div>
            <div className="style-eventi3">
              <div className="style-container218">
                <div className="style-container219">
                  <div className="style-container220">
                    <img
                      alt="image"
                      src="/Icone/icon_eventi.svg"
                      className="style-image47"
                    />
                  </div>
                  <span className="heading3">Eventi</span>
                </div>
                <div className="style-container221"></div>
              </div>
              <div className="style-container222">
                <div className="style-container223">
                  <CardEvento
                    fotoEvento="/eventi_1.jpg"
                    rootClassName="card-eventoroot-class-name7"
                  ></CardEvento>
                  <CardEvento fotoEvento="/eventi_2.jpg"></CardEvento>
                </div>
                <div className="style-container224">
                  <CardEvento
                    fotoEvento="/eventi_1.jpg"
                    rootClassName="card-eventoroot-class-name8"
                  ></CardEvento>
                  <CardEvento fotoEvento="/eventi_2.jpg"></CardEvento>
                </div>
              </div>
            </div>
            <div className="style-eventi4">
              <div className="style-container225">
                <div className="style-container226">
                  <div className="style-container227">
                    <img
                      alt="image"
                      src="/Icone/icon_multimedia.svg"
                      className="style-image48"
                    />
                  </div>
                  <span className="heading3">Multimedia</span>
                </div>
                <div className="style-container228"></div>
              </div>
              <div className="style-container229"></div>
            </div>
          </div>
        </div>
        <div className="style-font33">
          <span className="style-text296">Paragrafo tematiche</span>
        </div>
        <div className="style-paragrafodettaglioceas">
          <ParagrafoDettaglioCeas
            text3={
              <Fragment>
                <span className="style-text297">Obiettivi e compiti</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="style-text298 paragraph_xl">
                  <span>
                    Il CEAS, ubicato nel compendio naturale della laguna di
                    Nora, ha tra i suoi obiettivi quello di aumentare la
                    conoscenza e quindi la consapevolezza del valore ecologico,
                    sociale ed economico di questi ambienti costieri. Il fine
                    del nostro lavoro è educare al rispetto dell’ambiente in
                    generale, con particolare attenzione alla conoscenza e alla
                    cultura del mare, creando “occasioni”, incontri, esperienze
                    multidisciplinari che parlino e facciano riflettere sulle
                    interazioni tra le diverse componenti ambientali e insegnino
                    a pensare per sistemi, educando al senso del limite e alla
                    responsabilità di ogni azione del singolo e offrendo
                    contemporaneamente le opportunità di benessere legate alla
                    tutela e salvaguardia del territorio.
                  </span>
                  <br></br>
                  <span>
                    Vogliamo contribuire alla costruzione di una Sardegna più
                    sostenibile. Vogliamo portare il testimone che la storia ci
                    ha consegnato prendendoci cura di un angolo del paesaggio
                    costiero, il promontorio di Nora, dove il passaggio
                    dell’uomo ci racconta dell’intimo rapporto con il suo
                    ambiente, il mare, il fiume, la costa, e proporlo come un
                    sofisticato ambiente didattico polifunzionale in cui le
                    valenze naturalistiche e paesaggistiche, le valenze storiche
                    e archeologiche, le valenze economiche e produttive mostrino
                    i modi meravigliosi in cui la natura e l’uomo costruiscono
                    la storia e preparano il futuro.
                  </span>
                </span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="style-text302">OFFERTA FORMATIVA</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="style-text303">
                  Le attività didattiche rivolte al pubblico
                </span>
              </Fragment>
            }
            text9={
              <Fragment>
                <span className="style-text304">Ultimo aggiornamento:</span>
              </Fragment>
            }
          ></ParagrafoDettaglioCeas>
        </div>
        <div className="style-font34">
          <span className="style-text305">
            Dashboard Ceas | Dettaglio membri rete infeas
          </span>
        </div>
        <div className="style-dettaglioceas2">
          <div className="style-dettaglio-sx2">
            <div className="style-container230">
              <div className="style-filtra-per4">
                <div className="style-container231">
                  <span className="style-text306">Keyword di ricerca</span>
                </div>
              </div>
              <div className="style-container232">
                <select name="Filter by" className="style-select6">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="style-container233">
              <div className="style-filtra-per5">
                <div className="style-container234">
                  <span className="style-text307">Filtra per</span>
                </div>
              </div>
              <div className="style-container235">
                <select name="Filter by" className="style-select7">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="style-container236">
              <div className="style-filtra-per6">
                <div className="style-container237">
                  <span className="style-text308">Filtra per</span>
                </div>
              </div>
              <div className="style-container238">
                <select name="Filter by" className="style-select8">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="style-container239">
              <span className="style-text309">TAG Selezionato</span>
              <div className="style-container240">
                <Tag></Tag>
                <Tag></Tag>
                <Tag></Tag>
              </div>
            </div>
          </div>
          <div className="style-dettaglio-dx2">
            <div className="style-notizie4">
              <div className="style-container241">
                <div className="style-container242">
                  <span className="heading3">Comunicati Bandi e Notizie</span>
                </div>
                <div className="style-container243"></div>
              </div>
              <div className="style-container244">
                <div className="style-container245">
                  <NewsTitle></NewsTitle>
                  <NewsTitle></NewsTitle>
                </div>
                <div className="style-container246">
                  <NewsTitle></NewsTitle>
                  <NewsTitle></NewsTitle>
                </div>
                <div className="style-container247">
                  <NewsTitle></NewsTitle>
                  <NewsTitle></NewsTitle>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="style-font35">
          <span className="style-text311">Padding Container</span>
        </div>
        <div className="padding-container style-container248"></div>
      </div>
      <style jsx>
        {`
          .style-container100 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .style-container101 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .style-font10 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text100 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container102 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-card {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text108 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container103 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container104 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-cardwithicon1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #dfdcdc;
            border-width: 1px;
            padding-left: var(--dl-layout-space-twounits);
            border-radius: 12px;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .style-container105 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image10 {
            width: auto;
            object-fit: cover;
          }
          .style-cardwithicon2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #dfdcdc;
            border-width: 1px;
            padding-left: var(--dl-layout-space-twounits);
            border-radius: 12px;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .style-container106 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image11 {
            width: auto;
            object-fit: cover;
          }
          .style-cardwithicon3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #dfdcdc;
            border-width: 1px;
            padding-left: var(--dl-layout-space-twounits);
            border-radius: 12px;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .style-container107 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image12 {
            width: auto;
            object-fit: cover;
          }
          .style-card2 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text112 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-a-chi-si-rivolge {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-sixunits);
            align-items: center;
            flex-direction: column;
            background-color: #36402b;
          }
          .style-titolo-paragraph {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container108 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: center;
            padding-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .style-text113 {
            color: #ffffff;
          }
          .style-text114 {
            color: #ffffff;
            text-align: center;
          }
          .style-container109 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .style-font11 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text115 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container110 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .style-text116 {
            display: inline-block;
          }
          .style-text117 {
            display: inline-block;
          }
          .style-font12 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text118 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container111 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-font13 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text119 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container112 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text120 {
            display: inline-block;
          }
          .style-text121 {
            display: inline-block;
          }
          .style-button10 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text122 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container113 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container114 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-button11 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text123 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container115 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-fourunits);
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .style-container116 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container117 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container118 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text125 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .style-button12 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text126 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container119 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-news1 {
            gap: 54px;
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .style-frame403581 {
            gap: 29px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-line111 {
            width: 100%;
            height: 9px;
          }
          .style-text127 {
            font-weight: 700;
          }
          .style-text128 {
            color: rgba(37, 35, 47, 1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-text129 {
            color: rgba(37, 35, 47, 1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-footer1 {
            gap: 124px;
            display: flex;
            align-items: center;
          }
          .style-group402341 {
            width: 98px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .style-frame6333231 {
            gap: 10px;
            top: 0px;
            left: 0px;
            height: 26px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: rgba(76, 79, 92, 1);
          }
          .style-text130 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-news2 {
            gap: 54px;
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .style-frame403582 {
            gap: 29px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-line112 {
            width: 100%;
            height: 9px;
          }
          .style-text131 {
            font-weight: 700;
          }
          .style-text132 {
            color: rgba(37, 35, 47, 1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-text133 {
            color: rgba(37, 35, 47, 1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-footer2 {
            gap: 124px;
            display: flex;
            align-items: center;
          }
          .style-group402342 {
            width: 98px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .style-frame6333232 {
            gap: 10px;
            top: 0px;
            left: 0px;
            height: 26px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: rgba(76, 79, 92, 1);
          }
          .style-text134 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-news3 {
            gap: 54px;
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .style-frame403583 {
            gap: 29px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-line113 {
            width: 100%;
            height: 9px;
          }
          .style-text135 {
            font-weight: 700;
          }
          .style-text136 {
            color: rgba(37, 35, 47, 1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-text137 {
            color: rgba(37, 35, 47, 1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-footer3 {
            gap: 124px;
            display: flex;
            align-items: center;
          }
          .style-group402343 {
            width: 98px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .style-frame6333233 {
            gap: 10px;
            top: 0px;
            left: 0px;
            height: 26px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: rgba(76, 79, 92, 1);
          }
          .style-text138 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-button13 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text139 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container120 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container121 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text140 {
            align-self: center;
            text-align: center;
          }
          .style-button14 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text141 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container122 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-sixunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbe6ea;
          }
          .style-container123 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container124 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-num-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            background-color: #e9f2f5;
          }
          .style-container125 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: row;
          }
          .style-container126 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container127 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            background-color: #e9f2f5;
          }
          .style-container128 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: row;
          }
          .style-container129 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container130 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            background-color: #e9f2f5;
          }
          .style-container131 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: row;
          }
          .style-container132 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            background-color: #e9f2f5;
          }
          .style-container133 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: row;
          }
          .style-image13 {
            right: -99px;
            width: 710px;
            bottom: -97px;
            height: 936px;
            z-index: -1;
            position: absolute;
            object-fit: cover;
          }
          .style-container134 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text151 {
            width: 50%;
          }
          .style-button15 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text152 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container135 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container136 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container137 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-bullet1 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check1 {
            width: 27px;
            height: 21px;
          }
          .style-bullet2 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check2 {
            width: 27px;
            height: 21px;
          }
          .style-bullet3 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check3 {
            width: 27px;
            height: 21px;
          }
          .style-bullet4 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check4 {
            width: 27px;
            height: 21px;
          }
          .style-bullet5 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check5 {
            width: 27px;
            height: 21px;
          }
          .style-bullet6 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check6 {
            width: 27px;
            height: 21px;
          }
          .style-bullet7 {
            gap: 21px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .style-check7 {
            width: 27px;
            height: 21px;
          }
          .style-button16 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text161 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container138 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-button17 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text162 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container139 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .style-card-evento11 {
            width: auto;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: 30px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .style-image-frame1 {
            display: flex;
            padding: 30px;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-foto1 {
            width: auto;
            height: 500px;
            align-self: stretch;
          }
          .style-vector1551 {
            top: -180.154296875px;
            left: 254.546875px;
            width: 843px;
            height: 806px;
            z-index: 1;
            position: absolute;
          }
          .style-card-content1 {
            gap: 10px;
            display: flex;
            padding: 10px 30px 30px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-frame404681 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-data-o-veraly1 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
          }
          .style-text163 {
            color: rgba(111, 103, 128, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-text164 {
            color: rgba(111, 103, 128, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-text165 {
            color: rgba(111, 103, 128, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-text166 {
            color: rgba(51, 69, 65, 1);
            height: auto;
            font-size: 22px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-footer4 {
            gap: 124px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .style-group402344 {
            width: 98px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .style-frame6333234 {
            gap: 10px;
            top: 0px;
            left: 0px;
            height: 26px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: rgba(76, 79, 92, 1);
          }
          .style-text167 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-logo-container1 {
            gap: 10px;
            width: 187.8084716796875px;
            height: 94px;
            display: flex;
            padding: 10px 0 10px 10px;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .style-image221 {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .style-card-evento12 {
            width: auto;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: 30px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .style-image-frame2 {
            width: 100%;
            display: flex;
            padding: 30px;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-foto2 {
            width: auto;
            height: 500px;
            align-self: stretch;
          }
          .style-vector1552 {
            top: -180.154296875px;
            left: 254.546875px;
            width: 843px;
            height: 806px;
            z-index: 1;
            position: absolute;
          }
          .style-card-content2 {
            gap: 10px;
            display: flex;
            padding: 10px 30px 30px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-frame404682 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-data-o-veraly2 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
          }
          .style-text168 {
            color: rgba(111, 103, 128, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-text169 {
            color: rgba(111, 103, 128, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-text170 {
            color: rgba(111, 103, 128, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-text171 {
            color: rgba(51, 69, 65, 1);
            height: auto;
            font-size: 22px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .style-footer5 {
            gap: 124px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .style-group402345 {
            width: 98px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .style-frame6333235 {
            gap: 10px;
            top: 0px;
            left: 0px;
            height: 26px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: rgba(76, 79, 92, 1);
          }
          .style-text172 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .style-logo-container2 {
            gap: 10px;
            width: 187.8084716796875px;
            height: 94px;
            display: flex;
            padding: 10px 0 10px 10px;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .style-image222 {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .style-button18 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text173 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container140 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-button19 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text174 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-font14 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text175 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container141 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .style-text176 {
            display: inline-block;
          }
          .style-text177 {
            display: inline-block;
          }
          .style-text178 {
            display: inline-block;
          }
          .style-font15 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text179 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container142 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-notizie1 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container143 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container144 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image14 {
            width: 100%;
            object-fit: cover;
          }
          .style-container145 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-eventi1 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container146 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container147 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image15 {
            width: 100%;
            object-fit: cover;
          }
          .style-container148 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-eventi2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container149 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container150 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image16 {
            width: 100%;
            object-fit: cover;
          }
          .style-container151 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-font16 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text183 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container152 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-box-dashboard {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-procedure {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            background-color: #027b62;
          }
          .style-image17 {
            width: 28px;
            height: 35px;
            object-fit: cover;
          }
          .style-text184 {
            color: rgb(255, 255, 255);
          }
          .style-container153 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .style-notizie2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-info-e-linee-guida {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            background-color: #7e8773;
          }
          .style-image18 {
            width: 28px;
            height: 35px;
            object-fit: cover;
          }
          .style-text185 {
            color: rgb(255, 255, 255);
          }
          .style-container154 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .style-siquas {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            background-color: #7685c0;
          }
          .style-image19 {
            width: 28px;
            height: 35px;
            object-fit: cover;
          }
          .style-text186 {
            color: rgb(255, 255, 255);
          }
          .style-container155 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .style-font17 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text187 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container156 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-header-scuoleeuniversit1 {
            flex: 0 0 auto;
            width: 100%;
            display: block;
            position: relative;
            align-self: center;
            background-color: var(--dl-color-theme-secondary1);
          }
          .style-header1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-self: center;
            min-height: 450px;
            padding-top: 150px;
            flex-direction: column;
            padding-bottom: 150px;
            justify-content: center;
          }
          .style-text188 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .style-text189 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .style-image20 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .style-header-cittadini {
            flex: 0 0 auto;
            width: 100%;
            display: block;
            position: relative;
            align-self: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .style-header2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-self: center;
            min-height: 450px;
            padding-top: 150px;
            flex-direction: column;
            padding-bottom: 150px;
            justify-content: center;
          }
          .style-text190 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .style-text191 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .style-image21 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .style-image23 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .style-header-scuoleeuniversit2 {
            flex: 0 0 auto;
            width: 100%;
            display: block;
            position: relative;
            align-self: center;
            background-color: #0f4eb3;
          }
          .style-header3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-self: center;
            min-height: 450px;
            padding-top: 150px;
            flex-direction: column;
            padding-bottom: 150px;
            justify-content: center;
          }
          .style-text192 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .style-text193 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .style-image24 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .style-image25 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .style-font18 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text194 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container157 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-news-rete3columns1 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-news-rete3columns2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-news-rete3columns3 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-font19 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text195 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container158 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .style-container159 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-text196 {
            font-style: normal;
            font-weight: 400;
          }
          .style-text197 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .style-news3columns {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
          }
          .style-font20 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text198 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container160 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text199 {
            display: inline-block;
          }
          .style-container161 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-container162 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-container163 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-font21 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text200 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container164 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text201 {
            display: inline-block;
          }
          .style-text202 {
            display: inline-block;
          }
          .style-text203 {
            display: inline-block;
          }
          .style-text204 {
            display: inline-block;
          }
          .style-font22 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text205 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container165 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text206 {
            display: inline-block;
          }
          .style-text207 {
            display: inline-block;
          }
          .style-text208 {
            display: inline-block;
          }
          .style-text209 {
            display: inline-block;
          }
          .style-text210 {
            display: inline-block;
          }
          .style-text211 {
            display: inline-block;
          }
          .style-font23 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text212 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container166 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-font24 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text213 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-dettaglio-cittadini {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-container167 {
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .style-image26 {
            width: 100%;
            height: 505px;
            object-fit: cover;
          }
          .style-container168 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-column-sx {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-container169 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-text214 {
            font-style: normal;
            font-weight: 700;
          }
          .style-lista-ceas {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-ceas1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-image27 {
            width: var(--dl-layout-size-xsmall);
            object-fit: cover;
          }
          .style-ceas2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-image28 {
            width: var(--dl-layout-size-xsmall);
            object-fit: cover;
          }
          .style-ceas3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-image29 {
            width: var(--dl-layout-size-xsmall);
            object-fit: cover;
          }
          .style-ceas4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-image30 {
            width: var(--dl-layout-size-xsmall);
            object-fit: cover;
          }
          .style-ceas5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-image31 {
            width: var(--dl-layout-size-xsmall);
            object-fit: cover;
          }
          .style-container170 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-text220 {
            font-style: normal;
            font-weight: 700;
          }
          .style-column-dx-paragrafo {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-container171 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-text221 {
            width: 100%;
          }
          .style-container172 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .style-text239 {
            width: 100%;
          }
          .style-font25 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text240 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-text241 {
            display: inline-block;
          }
          .style-text242 {
            display: inline-block;
          }
          .style-font26 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text243 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-filterby {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select1 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-select2 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-font27 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text244 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .style-trigger1 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-secondary1);
          }
          .style-summary1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .style-text246 {
            color: #ffffff;
          }
          .style-icon-container1 {
            transition: transform 0.3s ease-in-out;
          }
          .style-icon1 {
            fill: #ffffff;
          }
          .style-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .style-trigger2 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .style-summary2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .style-text248 {
            fill: #464957;
            color: #464957;
          }
          .style-icon-container2 {
            transition: transform 0.3s ease-in-out;
          }
          .style-icon3 {
            fill: #ffffff;
          }
          .style-container173 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .style-container174 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image32 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container175 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image33 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container176 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .style-container177 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image34 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container178 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image35 {
            width: 3vh;
            object-fit: cover;
          }
          .style-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .style-trigger3 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .style-summary3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .style-text253 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .style-icon-container3 {
            transition: transform 0.3s ease-in-out;
          }
          .style-icon5 {
            fill: #ffffff;
          }
          .style-container179 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .style-container180 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image36 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container181 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image37 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container182 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .style-container183 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image38 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container184 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image39 {
            width: 3vh;
            object-fit: cover;
          }
          .style-accordion4 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .style-trigger4 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .style-summary4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .style-text258 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .style-icon-container4 {
            transition: transform 0.3s ease-in-out;
          }
          .style-icon7 {
            fill: #ffffff;
          }
          .style-container185 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .style-container186 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image40 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container187 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image41 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container188 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .style-container189 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image42 {
            width: 3vh;
            object-fit: cover;
          }
          .style-container190 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-image43 {
            width: 3vh;
            object-fit: cover;
          }
          .style-accordion5 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .style-container191 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .style-font28 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text264 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-text265 {
            display: inline-block;
          }
          .style-font29 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text266 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-text267 {
            display: inline-block;
          }
          .style-text268 {
            display: inline-block;
          }
          .style-text269 {
            display: inline-block;
          }
          .style-text270 {
            display: inline-block;
          }
          .style-font30 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text271 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-text272 {
            display: inline-block;
          }
          .style-text273 {
            display: inline-block;
          }
          .style-text274 {
            display: inline-block;
          }
          .style-text275 {
            display: inline-block;
          }
          .style-text276 {
            display: inline-block;
          }
          .style-text277 {
            display: inline-block;
          }
          .style-text278 {
            display: inline-block;
          }
          .style-text279 {
            display: inline-block;
          }
          .style-text280 {
            display: inline-block;
          }
          .style-text281 {
            display: inline-block;
          }
          .style-text282 {
            display: inline-block;
          }
          .style-text283 {
            display: inline-block;
          }
          .style-text284 {
            display: inline-block;
          }
          .style-font31 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text285 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-container192 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-two-colrightimage {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-sixunits);
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #dbeae3;
          }
          .style-container193 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .style-text286 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .style-text287 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .style-container194 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container195 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .style-container196 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-container197 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-container198 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-image44 {
            width: 100%;
            object-fit: cover;
          }
          .style-image45 {
            width: auto;
            object-fit: cover;
          }
          .style-font32 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text288 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-dettaglioceas1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-dettaglio-sx1 {
            gap: var(--dl-layout-space-twounits);
            flex: 0.5;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-container199 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-filtra-per1 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container200 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-text289 {
            font-size: 17px;
            font-weight: bold;
          }
          .style-container201 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select3 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-container202 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-filtra-per2 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container203 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-text290 {
            font-size: 17px;
            font-weight: bold;
          }
          .style-container204 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select4 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-container205 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-filtra-per3 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container206 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-text291 {
            font-size: 17px;
            font-weight: bold;
          }
          .style-container207 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select5 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-container208 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-text292 {
            font-style: normal;
            font-weight: 700;
          }
          .style-container209 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-dettaglio-dx1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-notizie3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container210 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container211 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container212 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image46 {
            width: 100%;
            object-fit: cover;
          }
          .style-container213 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-container214 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container215 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-container216 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-container217 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-eventi3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container218 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container219 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container220 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image47 {
            width: 100%;
            object-fit: cover;
          }
          .style-container221 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-container222 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container223 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-container224 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .style-eventi4 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container225 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container226 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container227 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .style-image48 {
            width: 100%;
            object-fit: cover;
          }
          .style-container228 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-container229 {
            gap: var(--dl-layout-space-threeunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-font33 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text296 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-paragrafodettaglioceas {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            background-color: #efeff2;
          }
          .style-text297 {
            display: inline-block;
          }
          .style-text298 {
            display: inline-block;
          }
          .style-text302 {
            display: inline-block;
          }
          .style-text303 {
            display: inline-block;
          }
          .style-text304 {
            display: inline-block;
          }
          .style-font34 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text305 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          .style-dettaglioceas2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-dettaglio-sx2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0.5;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-container230 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-filtra-per4 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container231 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-text306 {
            font-size: 17px;
            font-weight: bold;
          }
          .style-container232 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select6 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-container233 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-filtra-per5 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container234 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-text307 {
            font-size: 17px;
            font-weight: bold;
          }
          .style-container235 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select7 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-container236 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .style-filtra-per6 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-container237 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-text308 {
            font-size: 17px;
            font-weight: bold;
          }
          .style-container238 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .style-select8 {
            width: 100%;
            height: var(--dl-layout-size-small);
            padding-top: 0px;
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .style-container239 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-text309 {
            font-style: normal;
            font-weight: 700;
          }
          .style-container240 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .style-dettaglio-dx2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: grid;
          }
          .style-notizie4 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0.5;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container241 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container242 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .style-container243 {
            flex: 0 0 auto;
            width: 100%;
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .style-container244 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .style-container245 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-container246 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-container247 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .style-font35 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #262534;
          }
          .style-text311 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
          }
          @media (max-width: 1200px) {
            .style-text101 {
              font-size: 73px;
            }
            .style-image13 {
              width: 630px;
              height: 871px;
            }
            .style-container138 {
              display: flex;
              flex-direction: row;
            }
            .style-container193 {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .style-container194 {
              width: auto;
              height: auto;
            }
            .style-container195 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .style-dettaglioceas1 {
              gap: var(--dl-layout-space-twounits);
            }
            .style-paragrafodettaglioceas {
              gap: var(--dl-layout-space-twounits);
            }
            .style-dettaglioceas2 {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .style-text101 {
              font-size: 65px;
            }
            .style-container119 {
              width: auto;
              flex-direction: column;
            }
            .style-image13 {
              width: 482px;
              height: 719px;
            }
            .style-container138 {
              height: auto;
              flex-direction: row;
            }
            .style-container168 {
              flex-direction: column;
            }
            .style-two-colrightimage {
              flex-direction: column;
            }
            .style-container195 {
              flex-direction: column;
            }
            .style-dettaglioceas1 {
              gap: var(--dl-layout-space-threeunits);
            }
            .style-paragrafodettaglioceas {
              gap: var(--dl-layout-space-threeunits);
            }
            .style-dettaglioceas2 {
              gap: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .style-text101 {
              font-size: 57px;
            }
            .style-container104 {
              align-items: center;
              flex-direction: column;
            }
            .style-cardwithicon1 {
              width: 100%;
            }
            .style-cardwithicon2 {
              width: 100%;
            }
            .style-cardwithicon3 {
              width: 100%;
            }
            .style-container109 {
              align-items: center;
              flex-direction: column;
            }
            .style-container119 {
              width: 100%;
            }
            .style-news1 {
              width: 100%;
            }
            .style-frame403581 {
              width: 100%;
            }
            .style-image13 {
              width: 320px;
              height: 612px;
            }
            .style-container135 {
              align-self: flex-start;
              align-items: flex-start;
              flex-direction: column;
            }
            .style-container136 {
              align-self: center;
            }
            .style-container138 {
              width: auto;
              height: auto;
              align-self: center;
              flex-direction: column;
            }
            .style-box-dashboard {
              flex-direction: column;
            }
            .style-notizie2 {
              flex-direction: column;
            }
            .style-header1 {
              min-height: 450px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .style-header2 {
              min-height: 450px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .style-header3 {
              min-height: 450px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .style-news-rete3columns1 {
              display: flex;
              flex-direction: column;
            }
            .style-news-rete3columns2 {
              display: flex;
              flex-direction: column;
            }
            .style-news-rete3columns3 {
              display: flex;
              flex-direction: column;
            }
            .style-news3columns {
              display: flex;
              flex-direction: column;
            }
            .style-container161 {
              display: flex;
              flex-direction: column;
            }
            .style-container162 {
              display: flex;
              flex-direction: column;
            }
            .style-container163 {
              display: flex;
              flex-direction: column;
            }
            .style-container195 {
              width: auto;
              height: auto;
              display: flex;
              align-self: center;
              flex-direction: column;
            }
            .style-dettaglioceas1 {
              flex-direction: column-reverse;
            }
            .style-paragrafodettaglioceas {
              flex-direction: column-reverse;
            }
            .style-dettaglioceas2 {
              flex-direction: column-reverse;
            }
            .style-container248 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-fourunits);
              padding-right: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .style-container101 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .style-text101 {
              font-size: 49px;
            }
            .style-container104 {
              flex-direction: column;
            }
            .style-a-chi-si-rivolge {
              padding: var(--dl-layout-space-unit);
            }
            .style-container109 {
              flex-direction: column;
            }
            .style-container114 {
              align-self: center;
              align-items: center;
              flex-direction: column;
            }
            .style-container127 {
              flex-direction: row;
            }
            .style-container128 {
              width: 100%;
              flex-direction: row;
            }
            .style-container129 {
              width: 100%;
              align-self: center;
            }
            .style-container138 {
              flex-direction: column;
            }
            .style-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
            .style-dettaglio-cittadini {
              flex-direction: column;
            }
            .style-two-colrightimage {
              width: auto;
            }
            .style-container195 {
              display: flex;
            }
            .style-dettaglioceas1 {
              gap: var(--dl-layout-space-threeunits);
            }
            .style-dettaglio-sx1 {
              flex-direction: column;
            }
            .style-dettaglio-dx1 {
              flex-direction: column;
            }
            .style-paragrafodettaglioceas {
              gap: var(--dl-layout-space-threeunits);
            }
            .style-dettaglioceas2 {
              gap: var(--dl-layout-space-threeunits);
            }
            .style-dettaglio-sx2 {
              flex-direction: column;
            }
            .style-dettaglio-dx2 {
              flex-direction: column;
            }
            .style-container248 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Style
