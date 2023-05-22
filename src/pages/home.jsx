import React from 'react';
import Layout from 'components/layout';
import IconWhiteLogo from 'assets/img/iconWhiteLogo.png';
import BannerTeam from 'assets/img/bannerTeam.png';
import CandidateImg from 'assets/img/BannerCandidate.png';
import LogoHub from 'assets/img/logoHub.png';
import BannerHub from 'assets/img/bannerHub.png';
import LogoOne from 'assets/img/companies/toks.jpg';
import LogoTwo from 'assets/img/companies/soriana.jpg';
import LogoThree from 'assets/img/companies/qualitas.jpg';
import LogoFour from 'assets/img/companies/teleperformance.jpg';

function Home() {
  return (
    <Layout>
      <section className="flex flex-row h-[78vh]">
        <article className="bg-main-purple w-1/2 flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-7 w-[80%]">
            <img className="w-[50px]" src={IconWhiteLogo} alt="icon | white" />
            <p className="text-white text-6xl">El portal del talento humano </p>
            <button type="button" className="bg-white py-3 px-8 text-main-purple rounded text-lg w-fit ">
              Regístrate
            </button>
          </div>
        </article>
        <article className="bg-white w-1/2">
          <img src={BannerTeam} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
      </section>

      <section className="flex flex-col h-[78vh] justify-center items-center gap-10">
        <h1 className="text-main-purple text-5xl text-center w-8/12">
          Vinculamos a personas diversas con el empleo de sus sueños
        </h1>
        <article className="grid grid-cols-4 w-[80%] justify-center items-center py-10">
          <img className="m-auto w-1/2" src={LogoOne} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoTwo} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoThree} alt="Logo | Empresa" />
          <img className="m-auto w-1/2" src={LogoFour} alt="Logo | Empresa" />
        </article>
        <h3 className="text-main-purple text-2xl font-light	w-5/12 text-center">
          Expandimos las posibilidades del talento y abrimos las posibilidades de las empresa.{' '}
        </h3>
      </section>

      <section className="flex flex-row h-[78vh]">
        <article className="bg-white w-1/2">
          <img src={CandidateImg} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>

        <article className="bg-blue-main w-1/2 flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-7 w-[70%]">
            <h1 className="text-main-purple text-4xl">
              Accede a la red más grande de talento diverso en América Latina
            </h1>
            <div>
              <p className="text-main-purple text-2xl">Somos tu equipo extedido</p>
              <p className="text-main-purple text-2xl">de RH y reclutamiento</p>
            </div>
            <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg w-fit ">
              Contrata aqui
            </button>
          </div>
        </article>
      </section>

      <section className="flex flex-row h-[78vh] bg-main-purple">
        <article className="bg-main-purple w-1/2 flex items-center justify-center ">
          <div className="flex flex-col justify-center gap-7 w-[70%]">
            <img className="w-[60%]" src={LogoHub} alt="icon | white" />
            <p className="text-white text-2xl">
              Utilizamos tecnología AI para crear conexiones épicas. Encuentra empleom ofrece tus vacantes. Todo en un
              sólo lugar.
            </p>
            <button type="button" className="bg-white py-3 px-8 text-main-purple rounded text-lg w-fit ">
              Intégrate
            </button>
          </div>
        </article>
        <article className="bg-main-purple w-1/2">
          <img src={BannerHub} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
      </section>

      <section className="flex flex-col h-[78vh] bg-pink-main justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-main-purple text-5xl">Asegúrate de brillar.</h1>
          <h1 className="text-main-purple text-5xl">Nosotros hacemos el resto.</h1>
        </div>
        <p className="text-main-purple text-2xl w-[35%] text-left">
          Nuestro modelo de confianza favorece el desarrollo pleno del talento y el crecimiento de las empresas, lejos
          de la discriminación.
        </p>
        <button type="button" className="bg-main-purple py-3 px-8 text-white rounded text-lg w-fit ">
          Empieza hoy
        </button>
      </section>
    </Layout>
  );
}

export default Home;
