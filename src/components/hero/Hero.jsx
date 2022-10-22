import React from 'react'
import Container from '../container/Container'
import './Hero.scss'
import Fade from 'react-reveal/Fade';

export default function Hero() {
    return (
        <div style={{ backgroundImage: 'url(/assets/img/hero_vector-bg.svg)' }} className="hero">
            <div className="hero-wrapper"></div>
            <Container padding={135}>
                <div className="hero-img">
                    <img src="/assets/img/hero-bg.svg" alt="hero-img" />
                </div>
                <div className="hero-code">
                    <img src="/assets/img/hero-code.svg" alt="hero-img" />
                </div>
                <Fade left>
                    <div className="hero__info">
                        <h3>crypto trading</h3>
                        <h1>Engineers Meet</h1>
                        <h1 className='traders'>Traders __</h1>
                        <p>Advanced crypto algorithmic trading and efficient
                            cross-chain execution, at scale.</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="hero__btn">
                        <button>Learn More <img className="arr-down" src='/assets/img/btn-line.svg' alt='btn-arrow'></img></button>
                    </div>
                </Fade>
            </Container>
        </div>
    )
}
