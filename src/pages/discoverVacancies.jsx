import React from 'react';
import Layout from 'components/layout';
import CandidateImg from 'assets/img/bannerDiscoverVacancies.png';
import BannerDream from 'assets/img/BannerDream.png';
import IconHubPurpleLogo from 'assets/img/logoHubPurple.png';
import IconCom from 'assets/img/IconCom.png';
import IconCap from 'assets/img/IconCap.png';
import IconMen from 'assets/img/IconMen.png'
import {onRedirection} from "../utils/helperGeneral";

/* eslint-disable react/no-unescaped-entities */

function DiscoverVacancies() {
  return (
    <Layout>
      <section className="flex flex-row  md:min-h-[78vh] portrait:flex-col-reverse ">
        <article className="bg-white w-1/2 portrait:w-full">
          <img src={CandidateImg} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>

        <article className="bg-alabaster w-1/2 flex py-8 xl:py-0 items-center justify-center portrait:w-full portrait:h-full">
          <div className="flex flex-col justify-center gap-7 w-10/12 xl:w-[70%] items-center">
            <h1 className="text-main-purple lg:text-6xl text-3xl text-center">¡Se solicita tu talento!</h1>
            <div>
              <p className="text-main-purple lg:text-2xl sm:text-base text-center">Todos tenemos un lugar.</p>
              <p className="text-main-purple lg:text-2xl sm:text-base text-center">Estamos aquí para encontrar el tuyo.</p>
            </div>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded lg:text-lg sm:text-sm w-fit " onClick={()=>onRedirection()}>
              Regístrate
            </button>
          </div>
        </article>
      </section>
      <section className="grid grid-cols-1 gap-4 relative py-32 bg-main-purple">
        <h1 className="text-center text-white lg:text-6xl text-3xl leading-10"> Donde hay rechazo, </h1>
        <h1 className="text-center text-white lg:text-6xl text-3xl leading-10"> nosotros abrimos una puerta.</h1>
      </section>
      <section className="flex flex-row h-[78vh] portrait:flex-col-reverse ">
        <article className="bg-blue-main py-12 xl:py-0 w-1/2 flex items-center justify-center portrait:w-full portrait:h-full">
          <div className="flex flex-col justify-center gap-7 w-10/12 xl:w-[70%] ">
            <h1 className="text-main-purple lg:text-4xl text-3xl text-left w-[60%]">Tus sueños se hacen realidad en</h1>
            <img className="w-[70%]" src={IconHubPurpleLogo} alt="icon | white" />
            <div className=" w-[80%]">
              <p className="text-main-purple lg:text-2xl sm:text-base text-left">Un mundo de puertas abiertas.</p>
            </div>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded lg:text-lg sm:text-sm w-fit " onClick={()=>onRedirection()}>
              Entra ahora
            </button>
          </div>
        </article>

        <article className="bg-white w-1/2 portrait:w-full">
          <img src={BannerDream} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
      </section>
      <section className="grid grid-cols-3 lg:gap-10 gap-4 pt-16 xl:pt-0 h-[78vh] bg-alabaster portrait:grid-cols-1">
        <article className="flex flex-col w-[60%]  m-auto lg:gap-8 sm:gap-2">
          <div className="w-1/4 flex justify-center items-center m-auto">
            <img src={IconCom} alt="logo  - Comunidad" className="w-[75%] xl:w-full object-contain object-center" />
          </div>
          <h1 className="text-main-purple text-center lg:text-4xl text-2xl my-4 xl:my-0"> Comunidad </h1>
          <p className="text-main-purple lg:text-2xl sm:text-base text-center">
            Encuentra una comunidad de apoyo entre personas diversas.
          </p>
        </article>
        <article className="flex flex-col w-[60%]  m-auto lg:gap-8 sm:gap-2">
          <div className="w-1/4 flex justify-center items-center m-auto">
            <img src={IconCap} alt="logo  - Comunidad" className="w-[75%] xl:w-full object-contain object-center" />
          </div>
          <h1 className="text-main-purple text-center lg:text-4xl text-2xl my-4 xl:my-0"> Capacitaciones </h1>
          <p className="text-main-purple lg:text-2xl sm:text-base text-center">
            {' '}
            Preparación de CV, entrevistas y habilidades clave para el empleo.{' '}
          </p>
        </article>
        <article className="flex flex-col w-[60%]  m-auto lg:gap-8 sm:gap-2">
          <div className="w-1/4 flex justify-center items-center m-auto">
            <img src={IconMen} alt="logo  - Comunidad" className="w-[75%] xl:w-full object-contain object-center" />
          </div>
          <h1 className="text-main-purple text-center lg:text-4xl text-2xl my-4 xl:my-0"> Mentorías </h1>
          <p className="text-main-purple lg:text-2xl sm:text-base text-center">
            {' '}
            Personas que te acompañan en cada paso de la integración.{' '}
          </p>
        </article>
      </section>
      <section className="flex flex-col py-16 xl:py-0 xl:pb-32 relative bg-alabaster justify-center items-center">
        <h1 className="text-center text-main-purple lg:text-6xl text-3xl "> Las mejores vacantes en las </h1>
        <h1 className="text-center text-main-purple lg:text-6xl text-3xl">empresas más inclusivas</h1>
        <button type="button" className="bg-main-purple py-3 px-8 text-white rounded lg:text-lg sm:text-sm w-fit mt-10" onClick={()=>onRedirection()}>
          Regístrate
        </button>
      </section>
      <section className="flex flex-row portrait:flex-col">
        <article className="bg-blue-main w-1/2 h-[50vh] flex flex-col lg:gap-10 sm:gap-3 justify-center items-center portrait:w-full ">
          <h1 className="text-main-purple xl:text-3xl text-2xl w-1/2">
            "Intrare me ha ayudado a capcitarme para entrevistas de trabajo"
          </h1>
          <li className="text-main-purple lg:text-1xl sm:text-xs mt-4 xl:mt-0 w-1/2"> Ricado Rivero, venezolano, 46 años </li>
        </article>
        <article className="bg-main-purple w-1/2 h-[50vh] flex flex-col lg:gap-10 sm:gap-3 justify-center items-center portrait:w-full">
          <h1 className="text-white xl:text-3xl text-2xl w-1/2">
            "Gracias a Intrare puedo integrarme legalmente a la sociedad trabajadora del país"
          </h1>
          <li className="text-white lg:text-1xl sm:text-xs mt-4 xl:mt-0  w-1/2"> Armando Viera, Cubano, 30 años </li>
        </article>
      </section>
    </Layout>
  );
}

export default DiscoverVacancies;
