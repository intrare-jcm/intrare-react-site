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
            <div className="xl:w-[260px] xl:mx-0 mx-auto portrait:mt-4">
              <img src={Logo} alt="logo" className="mt-4 w-[120px] xl:mt-0 lg:w-[180px]" />
            </div>
            <div className="lg:w-[280px] mx-auto xl:mx-0 text-center xl:text-left">
              <p className="text-main-purple lg:text-lg sm:text-xs"> Álvaro Obregón 213, Roma Norte </p>
              <p className="text-main-purple lg:text-lg sm:text-xs"> 06700 Ciudad de México </p>
            </div>
          </article>
          <article className="flex flex-col gap-1 portrait:items-center portrait:m-2 pt-8 lg:pt-8">
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base hover:cursor-pointer" onClick={() => navigate('/empresas')}>Vacantes</li>
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base hover:cursor-pointer" onClick={() => navigate('/talento')}>Contrata</li>
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base hover:cursor-pointer" onClick={() => navigate('/sobre-nosotros')}>¿Quiénes somos?</li>
            <li className="text-main-purple list-none font-bold lg:text-lg sm:text-base hover:cursor-pointer" onClick={() => navigate('/contacto')} >Contacto</li>
          </article>
          <article className="flex flex-col w-[55%] pt-4 lg:pt-4 justify-self-end xl:mr-20 portrait:w-full portrait:items-center portrait:my-4" >
            <button type="button" className="bg-blue-main py-3 px-8 text-main-purple rounded lg:text-lg sm:text-base w-fit " onClick={() => navigate('/contacto')}>
              Contacto
            </button>
            <div className="flex flex-row justify-between py-8 lg:py-4">
              <a href="https://www.instagram.com/intraremx/"> <Instagram size={30} className="text-main-purple hover:cursor-pointer" /></a>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a href="https://www.facebook.com/intraremx"><Facebook size={30} className="text-main-purple hover:cursor-pointer" /></a>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a href="https://twitter.com/intrare_mx"><Twitter size={30} className="text-main-purple hover:cursor-pointer" /></a>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
              <a href="https://www.linkedin.com/company/intrare/" /><Linkedin size={30} className="text-main-purple hover:cursor-pointer" />
            </div>
          </article>
        </section>
        <section className="w-full h-[10vh] flex flex-row portrait:flex-col portrait:h-full">
          <article className="w-[40%] bg-blue-main flex justify-center  items-center portrait:w-full portrait:p-2">
            <p className="text-main-purple lg:text-base sm:text-[16px]">contacto@intrare.mx</p>
          </article>
          <article className="w-[60%] bg-main-purple flex justify-center  items-center portrait:w-full portrait:p-2">
            <p className="text-white lg:text-base text-center md:text-left sm:text-[16px]"><span className='hover:cursor-pointer' onClick={() => navigate('/politica-de-privacidad')}>Aviso de privacidad</span> | Todos los derechos reservados. 2023.</p>
          </article>
        </section>
      </main>
  )
};
export default Footer;
