/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Layout from 'components/layout';
import IconBannerAbout from 'assets/img/iconBannerAbout.png';
import PortalAbout from 'assets/img/portalAbout.png';
import Hannah from 'assets/img/Hannah.png';
import Sofia from 'assets/img/Sofia.png';
import Carlos from 'assets/img/Carlos.png'
import Raymundo from 'assets/img/Raymundo.png';

function About() {
  return (
    <Layout>
      <section className="flex flex-row bg-main-purple h-min-[58vh]">
        <article className="flex flex-col gap-2 w-1/2 mt-16 ml-16 mb-[12rem]">
          <h1 className="text-white text-6xl">If we hace the power,</h1>
          <h1 className="text-white text-6xl">why don't we change</h1>
          <h1 className="text-white text-6xl">the world?</h1>
        </article>
        <div className="w-1/2">
          <img src={IconBannerAbout} alt="Icon" />
        </div>
      </section>
      <section className="flex flex-row h-[78vh]">
        <article className="bg-white w-1/2">
          <img src={PortalAbout} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
        <article className="bg-alabaster w-1/2 flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-12 w-[80%]">
            <h1 className="text-main-purple text-6xl w-[80%]">El portal del talento humano </h1>
            <p className="text-main-purple text-2xl w-[50%]">
              Vinculamos a personas diversas con el empleo de sus sueños
            </p>
          </div>
        </article>
      </section>

      <section className="flex flex-col bg-main-purple h-min-[58vh] ">
        <div className=" flex flex-row flex-wrap gap-x-14 gap-y-2 justify-evenly">
          <article className="h-80 w-[22%] flex flex-col justify-center items-center">
            <div className="bg-blue-main w-[100px] h-[100px] rounded-full	flex justify-center items-center">
              <img className="w-[100px]" src={Hannah} alt="icon | white" />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <h1 className="text-white text-2xl text-center"> Founder & CEO</h1>
              <h2 className="text-white text-1xl text-center"> Hannah Töpler </h2>
            </div>
          </article>
          <article className="h-80 w-[22%] flex flex-col justify-center items-center">
            <div className="bg-blue-main w-[100px] h-[100px] rounded-full	flex justify-center items-center">
              <img className="w-[100px]" src={Sofia} alt="icon | white" />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <h1 className="text-white text-2xl text-center"> Co-Founder & CGO</h1>
              <h2 className="text-white text-1xl text-center"> Sofía Campa</h2>
            </div>
          </article>
          <article className="h-80 w-[22%] flex flex-col justify-center items-center">
            <div className="bg-blue-main w-[100px] h-[100px] rounded-full	flex justify-center items-center">
              <img className="w-[100px]" src={Carlos} alt="icon | white" />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <h1 className="text-white text-2xl text-center"> Co-Founder & CTO</h1>
              <h2 className="text-white text-1xl text-center"> Carlos Martínez </h2>
            </div>
          </article>
          <article className="h-80 w-[22%] flex flex-col justify-center items-center">
            <div className="bg-blue-main w-[100px] h-[100px] rounded-full	flex justify-center items-center">
              <img className="w-[100px]" src={Raymundo} alt="icon | white" />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <h1 className="text-white text-2xl text-center"> CFO</h1>
              <h2 className="text-white text-1xl text-center"> Raymundo von Bertrab </h2>
            </div>
          </article>
        </div>
      </section>
      <section className="flex flex-col h-[78vh] bg-pink-main justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-main-purple text-5xl">Creando sociedades</h1>
          <h1 className="text-main-purple text-5xl">más incluyentes.</h1>
        </div>
        <p className="text-main-purple text-2xl w-[35%] text-center">
          Un mundo laboral mejor conectado, libre y seguro.
        </p>
        <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg w-fit ">
          Empieza hoy
        </button>
      </section>
    </Layout>
  );
}

export default About;
