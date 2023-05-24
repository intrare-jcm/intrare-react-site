import React from 'react';
import LogoWhite from 'assets/img/logoWhite.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navidate = useNavigate();
  const onClick = (path) => {
    navidate(path);
  };
  return (
    <main className=" portrait:h-auto flex flex-col bg-main-purple">
      <section className="flex flex-row bg-main-purple p-3 justify-between items-center portrait:flex-col portrait:items-center py-[16px]">
        <img src={LogoWhite} alt="Logo | white" className=" h-[20px] portrait:h-[20px] portrait:w-auto portrait:py-0" onClick={() => onClick('/')} />
        <div className="flex flex-row gap-9 mr-10 items-center portrait:mr-0 portrait:m-2">
          <p className="text-white cursor-pointer lg:text-lg sm:text-xs" onClick={() => onClick('/sobre-nosotros')}>
            Conócenos
          </p>
          <button
            onClick={() => onClick('/contacto')}
            type="button"
            className="bg-blue-main py-3 px-8 text-main-purple rounded lg:text-lg sm:text-xs w-fit hover:bg-alabaster"
          >
            Contacto
          </button>
        </div>
      </section>
      <section className="flex flex-row h-[10vh] portrait:h-[30%]">
        <button
          type="button"
          onClick={() => onClick('/empresas')}
          className="flex w-[50%] justify-center items-center bg-pink-main portrait:py-5"
        >
          <p className="text-main-purple lg:text-xl sm:text-bas">Descubre vacantes</p>
        </button>
        <button
          type="button"
          onClick={() => onClick('/talento')}
          className="flex w-[50%] justify-center items-center bg-orange-main portrait:py-5"
        >
          <p className="text-white lg:text-xl sm:text-base">Contrata talento</p>
        </button>
      </section>
    </main>
  );
}
export default Navbar;
