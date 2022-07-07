import React from 'react'
import styled from 'styled-components'
import { themeColor } from '../Utils/index'

function Badge({
  content,
  clean = false,
  glow = false,
  pago = false,
  demora = false,
}) {
  return (
    <Div clean={clean} glow={glow} pago={pago} demora={demora}>
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${themeColor};
     color:${themeColor};`}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({ pago }) =>
    pago &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}
${({ demora }) =>
    demora &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badge;