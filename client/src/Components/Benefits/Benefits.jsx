import React from 'react';

import { TbLocationOff } from 'react-icons/tb';
import { GiSandsOfTime, GiTakeMyMoney } from 'react-icons/gi';
import { FaHouseUser } from 'react-icons/fa';
import BenefitCard from './BenefitCard';
import SectionTitle from '../SectionTitle/SectionTitle'

const Benefits = () => {
  return (
    <div className='w-full bg-[#575989] text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <SectionTitle heading='Beneficios de la psicología online' subheading=''/>
          <p className='py-4 text-l'>
            Nuestra plataforma se basa en la realización de sesiones online. 
            Te vamos a contar un poco de porqué es beneficiosa para vos la psicología en línea 
            que ofrece PsicoApp.
          </p>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <BenefitCard icon={<TbLocationOff size={40} />} heading='Puedes tener acceso desde cualquier lugar' text='Esta es la principal ventaja de la terapia online, que no necesitas desplazarte al consultorio, sino que puedes acceder a las sesiones desde donde estés, solo necesitas un ordenador e internet.
                Por eso muchas personas con problemas de movilidad
                o con falta de tiempo 
                prefieren tener acceso a un psicólogo por internet.' />

            <BenefitCard icon={<GiSandsOfTime size={40} />} heading='Conveniencia de horarios' text='La flexibilidad de un psicólogo por internet es otro de los beneficios, ya que tienes la oportunidad de escoger horarios más convenientes para ambos.

Si tienes una agenda apretada por los compromisos laborales y/o académicos, no tienes que sacrificar tus horarios, sino establecer uno a conveniencia.

El psicólogo puede adaptar las sesiones a tu agenda y ritmo de vida. Esta es otra gran ventaja de la aplicación.' />
            <BenefitCard icon={<FaHouseUser size={40} />} heading='Mayor comodidad' text='El hecho de poder estar en tu hogar, e incluso de vacaciones y solo encender el ordenador para “asistir” a tu sesión de terapia, es una comodidad que sin duda debes aprovechar.

No tienes que interrumpir tus viajes, o compromisos para mantener tus sesiones o asistir a la clínica de psicología.' />
            <BenefitCard icon={<GiTakeMyMoney size={40} />} heading='Menor costo' text='Ten en cuenta que el costo de una asistencia psicológica en línea es más económico, esto se debe a que el gasto de la clínica de terapia en línea también es menor.

Por lo tanto, podrás recibir la terapia y tratamiento que necesites según tu problema a tratar por un menor costo.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;