import React from 'react';
import Layout from 'components/layout';
import CandidateImg from 'assets/img/bannerDiscoverVacancies.png';
import BannerDream from 'assets/img/BannerDream.png';
import IconHubPurpleLogo from 'assets/img/logoHubPurple.png';
import IconDefault from 'assets/img/iconWhiteLogo.png';

/* eslint-disable react/no-unescaped-entities */

function DiscoverVacancies() {
  return (
    <Layout>
      <section className="flex flex-row h-[78vh]">
        <article className="bg-white w-1/2">
          <img src={CandidateImg} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>

        <article className="bg-alabaster w-1/2 flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-7 w-[70%] items-center">
            <h1 className="text-main-purple text-6xl text-center">¡Se solicita tu talento!</h1>
            <div>
              <p className="text-main-purple text-2xl text-center">Todos tenemos un lugar.</p>
              <p className="text-main-purple text-2xl text-center">Estamos aquí para encontrar el tuyo</p>
            </div>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg w-fit ">
              Regístrate
            </button>
          </div>
        </article>
      </section>
      <section className="flex flex-col h-[50vh] bg-main-purple justify-center items-center">
        <h1 className="text-center text-white text-6xl"> Donde hay rechazo, </h1>
        <h1 className="text-center text-white text-6xl"> nosotros abrimos una puerta.</h1>
      </section>
      <section className="flex flex-row h-[78vh]">
        <article className="bg-blue-main w-1/2 flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-7 w-[70%] ">
            <h1 className="text-main-purple text-4xl text-left w-[60%]">Tus sueños se hacen realidad en</h1>
            <img className="w-[70%]" src={IconHubPurpleLogo} alt="icon | white" />
            <div className=" w-[80%]">
              <p className="text-main-purple text-2xl text-left">Un mundo de puertas abiertas</p>
            </div>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg w-fit ">
              Entra ahora
            </button>
          </div>
        </article>

        <article className="bg-white w-1/2">
          <img src={BannerDream} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
      </section>
      <section className="grid grid-cols-3 gap-10 h-[76vh] bg-alabaster">
        <article className="flex flex-col w-[60%]  m-auto gap-8">
          <div className="w-1/4 flex justify-center items-center m-auto">
            <img src={IconDefault} alt="logo  - Comunidad" className="object-contain object-center" />
          </div>
          <h1 className="text-main-purple text-center text-4xl"> Comunidad </h1>
          <p className="text-main-purple text-2xl text-center">
            Encuentra una comunidad de apoyo entre personas diversas
          </p>
        </article>
        <article className="flex flex-col w-[60%]  m-auto gap-8">
          <div className="w-1/4 flex justify-center items-center m-auto">
            <img src={IconDefault} alt="logo  - Comunidad" className="object-contain object-center" />
          </div>
          <h1 className="text-main-purple text-center text-4xl"> Capacitaciones </h1>
          <p className="text-main-purple text-2xl text-center">
            {' '}
            Preparación de CV, entrevistas y habilidades clave para el empleo{' '}
          </p>
        </article>
        <article className="flex flex-col w-[60%]  m-auto gap-8">
          <div className="w-1/4 flex justify-center items-center m-auto">
            <img src={IconDefault} alt="logo  - Comunidad" className="object-contain object-center" />
          </div>
          <h1 className="text-main-purple text-center text-4xl"> Mentorías </h1>
          <p className="text-main-purple text-2xl text-center">
            {' '}
            Personas que te acompañan en cada paso de la integración{' '}
          </p>
        </article>
      </section>
      <section className="flex flex-col h-[50vh] bg-alabaster justify-center items-center">
        <h1 className="text-center text-main-purple text-6xl"> Las mejores vacantes en las </h1>
        <h1 className="text-center text-main-purple text-6xl">empresas más inclusivas</h1>
        <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg w-fit mt-10">
          Regístrate
        </button>
      </section>
      <section className="flex flex-row ">
        <article className="bg-blue-main w-1/2 h-[50vh] flex flex-col gap-10 justify-center items-center">
          <h1 className="text-main-purple text-3xl w-1/2">
            "Intrare me ha ayudado a capcitarme para entrevistas de trabajo"
          </h1>
          <li className="text-main-purple text-1xl w-1/2"> Ricado Rivero, venezolano, 46 años </li>
        </article>
        <article className="bg-main-purple w-1/2 h-[50vh] flex flex-col gap-10 justify-center items-center">
          <h1 className="text-white text-3xl w-1/2">
            "Gracias a Intrare puedo integrarme legalmente a la sociedad trabajadora del país"
          </h1>
          <li className="text-white text-1xl w-1/2"> Armando Viera, cubano, 30 años </li>
        </article>
      </section>
      <section className="flex flex-row">
        <article className="bg-orange-main w-1/2 h-[50vh] flex flex-col gap-10 justify-center items-center">
          <h1 className="text-white text-3xl w-1/2">
            "Intrare me ha ayudado a capcitarme para entrevistas de trabajo"
          </h1>
          <li className="text-white text-1xl w-1/2"> Ricado Rivero, venezolano, 46 años </li>
        </article>
        <article className="bg-pink-main w-1/2 h-[50vh] flex flex-col gap-10 justify-center items-center">
          <h1 className="text-main-purple text-3xl w-1/2">
            "Gracias a Intrare puedo integrarme legalmente a la sociedad trabajadora del país"
          </h1>
          <li className="text-main-purple text-1xl w-1/2"> Armando Viera, cubano, 30 años </li>
        </article>
      </section>
    </Layout>
  );
}

export default DiscoverVacancies;
