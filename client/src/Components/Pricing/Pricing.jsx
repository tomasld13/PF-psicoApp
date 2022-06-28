import React from 'react'
import { Button } from '../Button/Button'
import { IconContext } from 'react-icons/lib'
import { GiGoldBar, GiCutDiamond, GiCrystalBars } from 'react-icons/gi'
import { FaHandRock } from 'react-icons/fa'
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

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9bc1', size: 64 }}>
        <PricingSection>
          <PricingWrapper>
            <PricingHeading>Precios</PricingHeading>
                <PricingContainer>
                    <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <FaHandRock />
                            </PricingCardIcon>
                            <PricingCardPlan>Citas Individuales</PricingCardPlan>
                            <PricingCardCost>$2,300 ARS</PricingCardCost>
                            <PricingCardLength>Semanal</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Incluye 1 cita de 50 minutos</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 1 persona</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Elegir Plan</Button>
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard to='/auth/login'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCrystalBars />
                            </PricingCardIcon>
                            <PricingCardPlan>Paquete regular</PricingCardPlan>
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
                            <PricingCardPlan>Paquete Premium</PricingCardPlan>
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
                </PricingContainer>
          </PricingWrapper>
        </PricingSection>
    </IconContext.Provider>
  )
}

export default Pricing