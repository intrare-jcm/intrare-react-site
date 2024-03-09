import React from 'react';
import Layout from 'components/layout';
import AuroraBanner from 'assets/img/aurora-tech-banner.jpeg';

function AuroraArticle() {

  return (
    <Layout>

      <section className="bg-alabaster py-12">
        <article className="max-w-full md:max-w-screen-lg px-4 md:px-2 mx-auto flex flex-col items-center gap-6 md:gap-12">
          <h1 className="text-main-purple font-medium md:text-5xl text-3xl text-center w-full leading-normal">
            Intrare Startup Mexicana gana prestigioso premio internacional de tecnología 
          </h1>

          <img src={AuroraBanner} alt="aurora-premio-intrare" className='h-auto max-w-full' />

          <p className="text-black text-base w-full">
            La empresa social mexicana <b>Intrare</b> resultó ser ganadora del segundo lugar 
            del Premio Aurora Tech 2024, impulsado por inDrive.
          </p>

          <p className="text-black text-base w-full">
            En el marco del Día Internacional de la Mujer, este premio mundial para las mujeres fundadoras de 
            startups tecnológicas. En este caso Hannah Töpler recibió el segundo lugar con Intrare. Intrare es 
            una startup tecnológica que crea modelos de inteligencia artificial propia para eliminar 
            los sesgos en el reclutamiento. Ofrece una solución Software as a Service (SaaS) 
            con la que empresas pueden filtrar, seleccionar y gestionar todo su talento sin sesgos. 
            La misión de Intrare es ofrecer empleos justos a millones de refugiados, mujeres vulnerables, 
            personas LGBTIQ+ y diferentes tipos de talentos diversos, para así romper el ciclo de la 
            pobreza en miles de cientos de vidas.
          </p>

          <p className="text-black text-base w-full">
            El premio Aurora Tech tuvo una convocatoria de 649 participantes provenientes de más de 102 países, 
            demostrando la capacidad de las mujeres para dar forma al futuro de la tecnología. InDrive, 
            responsable de este proyecto, asegura que este “Es un testimonio del increíble talento y 
            determinación de las fundadoras femeninas en todo el mundo”. En este caso Intrare resultó 
            seleccionada por este desarrollo de modelos de Inteligencia Artificial y 
            la inclusión que estos han generado.
          </p>

          <p className="text-black text-base w-full">
            La startup mexicana ha logrado desarrollar un algoritmo de reclutamiento que ha permitido 
            eliminar sesgos al momento de asignar talentos con puestos de trabajo. Esto significa 
            una gran oportunidad para poblaciones tradicionalmente excluidas, donde el acceso 
            a puestos de trabajo formales y de calidad puede sacarlos de situaciones de pobreza.
          </p>

          <p className="text-black text-base w-full">
            En la entrega de premios el Primer Lugar fue para Folake Owodunni con Emergency 
            Response Africa, y el tercer lugar para Sarah Phiri-Molema con Deaftronics (Pty) Ltd.
          </p>

          <p>
            ¡Felicidades a todas las fundadoras destacadas!
          </p>
        </article>
      </section>
    </Layout>
  );
}

export default AuroraArticle;
