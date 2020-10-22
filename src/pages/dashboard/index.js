import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FaCaretRight } from 'react-icons/fa';

import Menu  from '../../components/Menu';
import ListVeiculos from '../../components/ListVeiculos';
import CarAnimated from '../../components/carAnimated';
import CarWave from '../../components/carWave';
import Footer from '../../components/Footer';
import {GET_BANNER_INFO, GET_THEME_INFO} from './get-dashboard-info';
import Loader from '../../components/Loader';

import { DashboardPage, Title } from './styles';

function Dashboard() {
  const { loading: paginaHomeQueryLoading, error: paginaHomeQueryError, data: paginaHome } = useQuery(GET_BANNER_INFO);
  const { loading: themeQueryLoading, error: themeQueryError, data: themeOptionsQuery } = useQuery(GET_THEME_INFO);
  
  if(paginaHomeQueryLoading || themeQueryLoading) return (
    <>
      <Loader />
    </>
  );
  if (paginaHomeQueryError || themeQueryError) return <div>Error!</div>;

  const responseHome = paginaHome.page.paginahome;
  const responseTheme = themeOptionsQuery.themeOptions.themeoptions;

  return (
    <>
      <Menu logoImg={responseTheme.logo.sourceUrl}/>
      <DashboardPage>
        <div id="banner" style={{background: `url(${responseHome.imagemDoBanner.sourceUrl}) no-repeat scroll center center/cover`}}>
          <div className="container">
            <div className="banner-text">
              <h1>{responseHome.tituloDoBanner}</h1>

              <div className="description">
                <h4>{responseHome.pequenaDescricao}</h4>
                {responseHome.informacao.map(info => (
                  <p key={info.textoDeInformacao}><FaCaretRight />{info.textoDeInformacao}</p>
                ))}
                <a href="" className="vermais abordered">{responseHome.textoDoBotao}</a>
              </div>
            </div>
          </div>
        </div>
        <div id="veiculos">
          <div className="container">
            <div className="veiculos-title">
              <Title>Carros em <span>destaque</span></Title>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget accumsan orci, quis sagittis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
            <ListVeiculos limit="3"/>
          </div>
        </div>
        <div id="aboutus">
          <CarAnimated />
          <div className="container about-box">
            <Title>Sobre a <span>empresa</span></Title>
            <div className="about-text">
              <img src={responseTheme.logo.sourceUrl} alt="ConceptCar" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor posuere vehicula. Phasellus vel purus pellentesque, aliquam sapien at, maximus arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed aliquam enim et augue condimentum egestas. Praesent cursus ipsum eget facilisis aliquam. Suspendisse dapibus quam nec libero hendrerit, eu vehicula tellus ornare. Donec imperdiet vel tellus et accumsan. Integer eu leo mattis, gravida dolor ut, tincidunt nibh.
              </p>
            </div>
          </div>
        </div>
        <CarWave waveImg={responseHome.imagemDeBackgroundDaOnda.sourceUrl} />
      </DashboardPage>
      <Footer 
        logoImg={responseTheme.logo.sourceUrl}
        linkFacebook={responseTheme.facebook}
        linkInstagram={responseTheme.instagram}
        linkWhatsApp={responseTheme.whatsapp}
      />
    </>
  );
}

export default Dashboard;
