import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'styled-icons/boxicons-logos';
import Logo from 'assets/img/logoFooter.png';
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
      <main>
        <section className="w-[100%] grid grid-cols-3 lg:gap-10 sm:gap-5 h-[30vh] bg-alabaster items-center portrait:grid-cols-1 portrait:h-full">
          <article className="flex flex-col justify-center items-center gap-7">
            <div className="lg:w-[260px] sm:w-[130px] portrait:mt-4">
              <img src={Logo} alt="logo" className=" lg:w-[180px] sm:w-[90px] " />
            </div>
            <div className="lg:w-[280px] sm:w-[140px]">
              <p className="text-main-purple lg:text-lg sm:text-xs"> Álvaro Obregón 213, Roma Norte </p>
              <p className="text-main-purple lg:text-lg sm:text-xs"> 06700 Ciudad de México </p>
            </div>
          </article>
          <article className="flex flex-col gap-1 portrait:items-center portrait:m-2">
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base">Vacantes</li>
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base">Contrata</li>
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base">¿Quiénes somos?</li>
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base">Contacto</li>
          </article>
          <article className="flex flex-col w-[55%] justify-self-end lg:mr-20 sm:mr-10 portrait:w-full portrait:items-center portrait:my-4" >
            <button type="button" className="bg-blue-main py-3 px-8 text-main-purple rounded lg:text-lg sm:text-base w-fit " onClick={() => navigate('/contact')}>
              Contacto
            </button>
            <div className="flex flex-row justify-between	pt-8">
              <Instagram size={30} className="text-main-purple" />
              <Facebook size={30} className="text-main-purple" />
              <Twitter size={30} className="text-main-purple" />
              <Linkedin size={30} className="text-main-purple" />
            </div>
          </article>
        </section>
        <section className="w-full h-[10vh] flex flex-row portrait:flex-col portrait:h-full">
          <article className="w-[40%] bg-blue-main flex justify-center  items-center portrait:w-full portrait:p-2">
            <p className="text-main-purple lg:text-base sm:text-xs">contacto@intrare.mx</p>
          </article>
          <article className="w-[60%] bg-main-purple flex justify-center  items-center portrait:w-full portrait:p-2">
            <p className="text-white lg:text-base sm:text-xs">Aviso de privacidad | Todos los derechos reservados. 2023.</p>
          </article>
        </section>
      </main>
  )
};
export default Footer;
