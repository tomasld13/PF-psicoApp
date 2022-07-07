import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib'
import { 
    PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
 } from './Pricing.element'
 import { postMP } from '../../slice/psico/thunks.js';
import { GoBriefcase } from "react-icons/go";
import { MdEscalatorWarning, MdOutlineEmojiPeople, MdOutlineWc, MdOutlineGroups } from "react-icons/md";



function Pricing({idpsycho}) {
    const { pychoId } = useSelector(state => state.psicology);
    const {date, time} = useSelector(state => state.psicology.calendar);
    const dispatch = useDispatch();
    const {id} = useSelector(state=>state.auth.authBack)

    // const [service, setService] = useState("");
    // const [price, setPrice] = useState("");
    const linkPago = useSelector (state=>state.psicology.initPoint.id)
    useEffect(()=>{
    }, [linkPago])



    let ico = [(<GoBriefcase/>),(<MdEscalatorWarning/>),(<MdOutlineGroups/>),(<MdOutlineWc/>),(<MdOutlineEmojiPeople/>)];

    async function handleOnClick(e, s, p){
        e.preventDefault();
        await dispatch(postMP({
            id: id,
            servicio: s,
            precio: p,
            hora: time,
            fecha: date,
            psicoId: idpsycho
        }));
    }

  return (
    <IconContext.Provider value={{ color: 'white', size: 64 }}>
        <PricingSection name='pricing'>
          <PricingWrapper>
            <PricingHeading>Precios</PricingHeading>
                <PricingContainer>

                {pychoId ? pychoId.servicios?.map((item, index) => {
                            return (     
                                    //<option value={`${item.servicio},${item.precios[0].costo}`}>{`${item.servicio} $${item.precios[0].costo}`}</option>
                                    
                                    <PricingCard onClick={(e) =>{
                                        // setService(`${item.servicio}`);
                                        // setPrice(`${item.precios[0].costo}`);
                                        handleOnClick(e, item.servicio, item.precios[0].costo)}}
                                        PricingCard to='#pago'>
                                        <PricingCardInfo>
                                            <PricingCardIcon>
                                                {ico[index]}
                                            </PricingCardIcon>
                                            <PricingCardPlan>{`${item.servicio}`}</PricingCardPlan>
                                            <PricingCardCost>{`$${item.precios[0].costo} ARS`}</PricingCardCost>
                                        </PricingCardInfo>
                                    </PricingCard>
                            )
                        }
                        
                        ): <></>}

                    {/* <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <FaHandRock />
                            </PricingCardIcon>
                            <PricingCardPlan>Sesion de Trabajo</PricingCardPlan>
                            <PricingCardCost>$2,300 ARS</PricingCardCost>
                            <PricingCardLength>Una sesion</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Incluye 1 cita de 50 minutos</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 1 persona</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Elegir Plan</Button>
                        </PricingCardInfo>
                    </PricingCard> */}
{/* 
                    <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCrystalBars />
                            </PricingCardIcon>
                            <PricingCardPlan>Sesion Infantil</PricingCardPlan>
                            <PricingCardCost>$16.249 ARS</PricingCardCost>
                            <PricingCardLength>Mensual</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Incluye 2 citas semanales</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 1 persona</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Elegir Plan</Button>
                        </PricingCardInfo>
                    </PricingCard>

                    <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCutDiamond />
                            </PricingCardIcon>
                            <PricingCardPlan>Sesion de Grupo</PricingCardPlan>
                            <PricingCardCost>$28.499 ARS</PricingCardCost>
                            <PricingCardLength>Mensual</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>2 citas semanales</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 2 personas</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Elegir Plan</Button>
                        </PricingCardInfo>
                    </PricingCard>

                    <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCutDiamond />
                            </PricingCardIcon>
                            <PricingCardPlan>Sesion de Pareja</PricingCardPlan>
                            <PricingCardCost>$28.499 ARS</PricingCardCost>
                            <PricingCardLength>Mensual</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>2 citas semanales</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 2 personas</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Elegir Plan</Button>
                        </PricingCardInfo>
                    </PricingCard>

                    <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCutDiamond />
                            </PricingCardIcon>
                            <PricingCardPlan>Sesion Personal</PricingCardPlan>
                            <PricingCardCost>$28.499 ARS</PricingCardCost>
                            <PricingCardLength>Mensual</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>2 citas semanales</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 2 personas</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Elegir Plan</Button>
                        </PricingCardInfo>
                    </PricingCard> */}

                </PricingContainer>
          </PricingWrapper>
        </PricingSection>
    </IconContext.Provider>
  )
}

export default Pricing