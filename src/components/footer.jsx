import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'styled-icons/boxicons-logos';
import Logo from 'assets/img/logoFooter.png';
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
      <main>
        <section className="w-[100%] grid grid-cols-3 gap-10 h-[30vh] bg-alabaster items-center">
          <article className="flex flex-col justify-center items-center gap-7">
            <div className="w-[260px]">
              <img src={Logo} alt="logo" className="w-[180px] " />
            </div>
            <div className="w-[280px]">
              <p className="text-main-purple text-lg"> Álvaro Obregón 213, Roma Norte </p>
              <p className="text-main-purple text-lg"> 06700 Ciudad de México </p>
            </div>
          </article>
          <article className="flex flex-col gap-1">
            <li className="text-main-purple list-none font-bold text-lg">Vacantes</li>
            <li className="text-main-purple list-none font-bold text-lg">Contrata</li>
            <li className="text-main-purple list-none font-bold text-lg">¿Quiénes somos?</li>
            <li className="text-main-purple list-none font-bold text-lg">Contacto</li>
          </article>
          <article className="flex flex-col w-[55%] justify-self-end mr-20">
            <button type="button" className="bg-blue-main py-3 px-8 text-main-purple rounded text-lg w-fit " onClick={() => navigate('/contacto')}>
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
        <section className="w-full h-[10vh] flex flex-row">
          <article className="w-[40%] bg-blue-main flex justify-center  items-center">
            <p className="text-main-purple text-base">contacto@intrare.mx</p>
          </article>
          <article className="w-[60%] bg-main-purple flex justify-center  items-center">
            <p className="text-white text-base">Aviso de privacidad | Todos los derechos reservados. 2023.</p>
          </article>
        </section>
      </main>
  )
};
export default Footer;
