import React from 'react';
import LogoWhite from 'assets/img/logoWhite.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navidate = useNavigate();
  const onClick = (path) => {
    navidate(path);
  };
  return (
    <main className="h-[20vh] flex flex-col">
      <section className="flex flex-row bg-main-purple p-3 justify-between h-[50%]">
        <img src={LogoWhite} alt="Logo | white" className="" onClick={() => onClick('/')} />
        <div className="flex flex-row gap-9 mr-10 items-center">
          <p className="text-white cursor-pointer" onClick={() => onClick('/about')}>
            Conócenos
          </p>
          <button
            onClick={() => onClick('/contact')}
            type="button"
            className="bg-blue-main py-3 px-8 text-main-purple rounded text-lg w-fit hover:bg-alabaster"
          >
            Contacto
          </button>
        </div>
      </section>
      <section className="flex flex-row h-[50%]">
        <button
          type="button"
          onClick={() => onClick('/discoverVacancies')}
          className="flex w-[50%] justify-center items-center bg-pink-main"
        >
          <p className="text-main-purple text-xl">Descubre vacantes</p>
        </button>
        <button
          type="button"
          onClick={() => onClick('/hireTalent')}
          className="flex w-[50%] justify-center items-center bg-orange-main"
        >
          <p className="text-white text-xl">Contrata talento</p>
        </button>
      </section>
    </main>
  );
}
export default Navbar;
