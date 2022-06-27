import React from 'react'
import styled from 'styled-components'
import MapImg from './map-image.png'


const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    .card-container {
        position: relative;
        min-height: 400px;
    }
    .map__card {
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: #e4e1ff;
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map__cards__heading {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link {
        display: inline-block;
        font-size: 1.5rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px) {
        .map__card {
            max-width: none;
            right: auto;
        }
    }

`;

function Map() {
  return (
    <MapStyles>
        <div className="card-container">
            <div className="map__card">
                <h3 className="map__card__heading">
                    Nuestras oficiales están acá!
                </h3>
                <p>Buenos Aires, Argentina</p>
                <a href="https://www.google.com/search?q=buenos+aires+google+maps&oq=buenos+aires+google+maps&aqs=chrome..69i57.3095j0j1&sourceid=chrome&ie=UTF-8#" 
                   target='_blank' 
                   rel='noreferrer' 
                   className='map__card__link'
                   >
                     Abrir en Google Maps
                </a>
            </div>
        </div>
    </MapStyles>
  )
}

export default Map