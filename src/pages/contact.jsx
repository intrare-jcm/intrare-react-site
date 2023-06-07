import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from 'components/layout';
import BannerContact from 'assets/img/bannerContact.png';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dfq8l1i', 'template_fhjp0mt', form.current, 'm07NV04VZfjsKTUBc')
        .then((result) => {
          console.log(result)
          window.alert('Tu mensaje se ha enviado correctamente')
        }, (error) => {
          console.log(error.text);
        });
  };
  return (
    <Layout>
      <section className="flex flex-row h-[58vh] portrait:flex-col">
        <article className="bg-white w-1/2 portrait:w-full">
          <img src={BannerContact} alt="banner Team" className="object-cover object-center h-[100%] w-[100%] " />
        </article>
        <article className="bg-blue-main w-1/2 flex items-center justify-center portrait:w-full portrait:h-full">
          <div className="flex flex-col justify-center gap-7 w-[80%] justify-center items-center">
            <h1 className="text-main-purple lg:text-6xl text-3xl"> Cuéntanos</h1>
            <h1 className="text-main-purple lg:text-6xl text-3xl"> qué deseas </h1>
          </div>
        </article>
      </section>
      <section className="flex flex-row bg-main-purple portrait:flex-col">
        <article className="lg:w-1/2 sm:w-full flex flex-col mx-auto md:ml-20 mt-20 gap-8">
          <div>
            <h1 className="text-white text-4xl">Cuenta con Intrare</h1>
            <h1 className="text-white text-4xl">para hacerlo realidad</h1>
          </div>
          <p className="text-white text-1xl">contacto@intrare.mx</p>
          <div>
            <p className="text-white text-1xl">Álvaro Obregón 213, Roma Norte</p>
            <p className="text-white text-1xl">06700 Ciudad de México</p>
          </div>
        </article>
        <form ref={form} onSubmit={sendEmail} className="lg:w-1/2 sm:w-full flex flex-col gap-2 py-20 ">
            <div className="flex flex-col gap-2 w-[80%] mx-auto ">
              <label className="text-white text-1xl">Nombre*</label>
              <input type="text" name="user_name" className="text-1xl rounded py-3 px-2" />
            </div>
            <div className="flex flex-col gap-2 w-[80%] mx-auto ">
              <label className="text-white text-1xl">Correo electronico*</label>
              <input type="email" name="user_email" className="text-1xl rounded py-3 px-2" />
            </div>
            <div className="flex flex-col gap-2 w-[80%] mx-auto ">
              <label className="text-white text-1xl">Mensaje</label>
              <textarea name="message" className="text-1xl rounded py-3 px-2 min-h-[8rem] max-h-32" />
            </div>
            <div className="flex flex-col gap-2 w-[80%] mx-auto ">
              <label className="text-white text-1xl">Número telefónico</label>
              <div className="flex flex-row gap-6">
                <select name='cx_code' className="bg-white px-8 rounded w-[25%]">
                  <option className="text-black">MX</option>
                </select>
                <p className="bg-white rounded landscape:h-[100%] w-[15%] px-5 text-center flex justify-center items-center">+52</p>
                <input name='phone' className="text-1xl rounded py-3 px-2 w-[60%] " />
              </div>
            </div>
            <button type="submit" value="Send" className="bg-orange-main ml-[10%] mt-8 py-3 px-8 text-white rounded text-lg w-fit ">
              Enviar
            </button>
        </form>

      </section>
    </Layout>
  );
}
export default Contact;
