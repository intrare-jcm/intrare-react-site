import React from 'react';
import Layout from 'components/layout';
import IconWhiteLogo from 'assets/img/iconWhiteLogo.png';
import BannerTeam from 'assets/img/bannerTeam.png';
import CandidateImg from 'assets/img/BannerCandidate.png';
import LogoHub from 'assets/img/logoHub.png';
import BannerHub from 'assets/img/bannerHub.png';
import LogoOne from 'assets/img/companies/unilever.png';
import LogoTwo from 'assets/img/companies/Bimbo_logo.webp';
import LogoThree from 'assets/img/companies/Orbia_logo.svg.png';
import LogoFour from 'assets/img/companies/soriana.png';
import {onRedirection} from "utils/helperGeneral";
import {useNavigate} from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <Layout>
      <section className="flex landscape:flex-row portrait:flex-col min-h-[78vh]">
        <article className="bg-main-purple landscape:w-1/2 portrait:w-full portrait:h-1/2  flex items-center justify-center ">
          <div className="flex flex-col py-16 xl:py-0 justify-center gap-7 w-[80%]">
            <img className="w-[50px]" src={IconWhiteLogo} alt="icon | white" />
            <p className="text-white xl:text-6xl text-3xl">El portal del talento humano </p>
            <button type="button" className="bg-white py-3 px-8 text-main-purple rounded text-lg w-fit" onClick={()=>onRedirection('http://candidates.intrare.mx/')}>
              Regístrate
            </button>
          </div>
        </article>
        <article className="bg-white landscape:w-1/2 portrait:w-full ">
          <img src={BannerTeam} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
      </section>

      <section className="flex bg-alabaster flex-col min-h-[70vh] xl:mt-0 xl:min-h-[78vh] justify-center items-center gap-10 portrait:h-full portrait:p-5">
        <h1 className="text-main-purple lg:text-5xl text-3xl text-center w-10/12 xl:w-8/12">
          Vinculamos a personas diversas con el empleo de sus sueños
        </h1>
        <article className="grid grid-cols-2 gap-8 xl:gap-0 xl:grid-cols-4 w-[80%] justify-center items-center lg:py-10 sm:py-2">
          <img className="m-auto w-[100px]" src={LogoOne} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoTwo} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoThree} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoFour} alt="Logo | Empresa" />
        </article>
        <h3 className="text-main-purple lg:text-2xl sm:text-base font-light w-10/12	xl:w-5/12 text-center">
          Expandimos las posibilidades del talento y abrimos las posibilidades de las empresa.{' '}
        </h3>
      </section>

      <section className="flex landscape:flex-row portrait:flex-col min-h-[78vh]">
        <article className="bg-white landscape:w-1/2 portrait:w-full">
          <img src={CandidateImg} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>

        <article className="bg-blue-main landscape:w-1/2 portrait:w-full portrait:h-full flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-7 w-[70%] py-16 xl:py-0">
            <h1 className="text-main-purple lg:text-4xl text-3xl">
              Accede a la red más grande de talento diverso en América Latina
            </h1>
            <div>
              <p className="text-main-purple lg:text-2xl sm:text-base">Somos tu equipo extedido</p>
              <p className="text-main-purple lg:text-2xl sm:text-base">de RH y reclutamiento</p>
            </div>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-base w-fit " onClick={() => navigate('/contacto')}>
              Contrata aqui
            </button>
          </div>
        </article>
      </section>

      <section className="flex landscape:flex-row portrait:flex-col min-h-[78vh] bg-main-purple portrait:h-full relative">
        <article className="absolute xl:relative z-10 top-[12%] xl:top-auto w-1/2 flex items-center justify-center portrait:w-full ">
          <div className="flex flex-col justify-center gap-7 w-[70%] portrait:p-5 bg-main-purple">
            <img className="w-[90%] md:w-[60%]" src={LogoHub} alt="icon | white" />
            <p className="text-white lg:text-2xl sm:text-base">
              Utilizamos tecnología AI para crear conexiones épicas. Encuentra empleo, ofrece tus vacantes. Todo en un
              sólo lugar.
            </p>
            <button type="button" className="bg-white py-3 px-8 text-main-purple rounded text-lg w-fit" onClick={() => navigate('/talento')}>
              Intégrate
            </button>
          </div>
        </article>
        <article className="bg-main-purple w-1/2 portrait:w-full relative z-0">
          <img src={BannerHub} alt="banner Team" className="object-cover object-center absolute right-0 top-96 md:top-80 w-[75%] xl:top-auto xl:relative xl:h-[100%] xl:w-[100%] " />
        </article>
      </section>

      <section className="flex flex-col h-[78vh] bg-pink-main justify-center items-center lg:gap-14 sm:gap-6">
        <div className="flex flex-col justify-center items-center gap-2 portrait:gap-5">
          <h1 className="text-main-purple lg:text-5xl text-3xl">Asegúrate de brillar.</h1>
          <h1 className="text-main-purple lg:text-5xl text-3xl">Nosotros hacemos el resto.</h1>
        </div>
        <p className="text-main-purple lg:text-2xl mt-8 xl:mt-0 text-base text-center w-[35%] portrait:w-[80%] xl:text-left">
          Nuestro modelo de confianza favorece el desarrollo pleno del talento y el crecimiento de las empresas. Lejos
          de la discriminación.
        </p>
        <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg  w-fit portrait:mt-4" onClick={() => onRedirection('https://candidates.intrare.mx')}>
          Empieza hoy
        </button>
      </section>
    </Layout>
  );
}

export default Home;
