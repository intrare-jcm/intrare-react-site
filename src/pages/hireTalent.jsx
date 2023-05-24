import React from 'react';
import Layout from 'components/layout';
import Logo from 'assets/img/logoFooter.png';
import HubLogoPurple from 'assets/img/logoHubPurple.png';
import LogoOne from 'assets/img/companies/toks.jpg';
import LogoTwo from 'assets/img/companies/soriana.jpg';
import LogoThree from 'assets/img/companies/qualitas.jpg';
import LogoFour from 'assets/img/companies/teleperformance.jpg';
import BannerHire from 'assets/img/bannerHireTalent.png';
import BannerTwoHire from 'assets/img/bannerTwoHireTalent.png'
import {useNavigate} from "react-router-dom";

function HireTalent() {

  const navigate = useNavigate();
  return (
    <Layout>
      <section className="flex flex-row h-[78vh] portrait:flex-col">
        <article className="bg-main-purple w-1/2 flex items-center justify-center portrait:w-full portrait:h-full">
          <div className="flex flex-col justify-center gap-7 w-[80%]">
            {/* <img className="w-[50px]" src={IconWhiteLogo} alt="icon | white" /> */}
            <p className="text-white lg:text-6xl sm:text-3xl text-center w-[85%] mx-auto">
              El talento que buscas ha llegado a tu puerta
            </p>
            <button type="button" className="bg-white py-3 px-8 text-main-purple rounded lg:text-lg sm:text-sm w-fit mt-10 mx-auto" onClick={() => navigate('/contact')}>
              Descúbrelo!
            </button>
          </div>
        </article>
        <article className="bg-white w-1/2 portrait:w-full portrait:h-full">
          <img src={BannerHire} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
      </section>
      <section className="flex flex-col h-[50vh] bg-blue-main justify-center items-center">
        <h1 className="text-center text-main-purple lg:text-6xl sm:text-3xl"> Encontramos seres únicos </h1>
        <h1 className="text-center text-main-purple lg:text-6xl sm:text-3xl"> porque lo hacemos diferente</h1>
      </section>
      <section className="flex flex-col bg-alabaster justify-center items-center lg:gap-16 sm:gap-8">
        <div className="w-[260px] pt-10">
          <img src={Logo} alt="logo" className="w-[250px] " />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-main-purple lg:text-2xl sm:text-base "> Accede al portal más grande de talento diverso </h1>
          <h1 className="text-center text-main-purple lg:text-2xl sm:text-base "> para llevarte al siguiente nivel </h1>
        </div>
        <article className="grid grid-cols-4 gap-7 w-[80%] justify-center items-center py-10 portrait:grid-cols-2">
          <img className="m-auto w-1/2" src={LogoOne} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoTwo} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoThree} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoFour} alt="Logo | Empresa" />
        </article>
      </section>

      <section className="flex flex-col bg-alabaster justify-center items-center py-20">
        <h1 className="text-center text-main-purple lg:text-6xl sm:text-3xl"> Nuestros aliados ya tienen </h1>
        <h1 className="text-center text-main-purple lg:text-6xl sm:text-3xl"> al equipo de sus sueños</h1>
        <button type="button" className="bg-main-purple py-3 px-8 text-white rounded lg:text-lg sm:text-sm w-fit mt-16 " onClick={() => navigate('/contact')}>
          Únete ahora
        </button>
      </section>

      <section className="flex flex-col bg-pink-main justify-center items-center py-20">
        <h1 className="text-center text-main-purple lg:text-3xl sm:text-lg"> Hazlo realidad con </h1>
        <div className="w-[260px] pt-10">
          <img src={HubLogoPurple} alt="logo" className="w-[250px] " />
        </div>
        <p className="text-center text-main-purple lg:text-3xl sm:text-lg mt-10"> Herramientas diversas para el liderazgo</p>
      </section>

      <section className="flex flex-col h-[50vh] grid grid-cols-3 justify-center items-center portrait:grid-cols-1">
        <article className="flex flex-col bg-main-purple h-[100%] justify-center items-center lg:gap-8 sm:gap-4">
          <h1 className="text-white text-center lg:text-4xl sm:text-2xl max-sm:text-xl">Curaduría de talento</h1>
          <p className="text-white lg:text-2xl sm:text-base max-sm:text-sm w-[65%] text-center">
            Seleccionamos al mejor talento para tus necesitdades.
          </p>
        </article>
        <article className="flex flex-col bg-blue-main h-[100%] justify-center items-center lg:gap-8 sm:gap-4">
          <h1 className="text-main-purple lg:text-4xl sm:text-2xl max-sm:text-xl">Mentorías</h1>
          <p className="text-main-purple lg:text-2xl sm:text-base max-sm:text-sm w-[65%] text-center">
            Impulsamos la cultura, el liderazgo y la inclusión para crear empresas productivas.
          </p>
        </article>
        <article className="flex flex-col bg-orange-main h-[100%] justify-center items-center lg:gap-8 sm:gap-4">
          <h1 className="text-white lg:text-4xl sm:text-2xl max-sm:text-xl">Capacitaciones</h1>
          <p className="text-white lg:text-2xl sm:text-base max-sm:text-sm w-[65%] text-center">Crea un equipo de líderes diversos en tu empresa</p>
        </article>
      </section>

      <section className="flex flex-row h-[78vh] portrait:flex-col-reverse">
        <article className="bg-white w-1/2 portrait:w-full">
          <img src={BannerTwoHire} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
        <article className="bg-pink-main w-1/2 flex items-center justify-center portrait:w-full portrait:h-full">
          <div className="flex flex-col justify-center gap-7 w-[80%]">
            <p className="text-main-purple lg:text-5xl sm:text-2xl text-center w-[85%] mx-auto">
              Las empresas incluyentes son empresas más productivas
            </p>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded lg:text-lg sm:text-sm w-fit mt-10 mx-auto" onClick={() => navigate('/contact')}>
              Quieres saber más?
            </button>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default HireTalent;
