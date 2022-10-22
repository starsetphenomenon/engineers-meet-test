import React from 'react'
import Container from '../container/Container'
import './About.scss'
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div className="about">
            <Container padding={135}>

                <Fade bottom>
                    <div className="about-mouse">
                        <div className="ellipse">
                            <div className="ellipse-line"></div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="about-top">
                        <h3>About us</h3>
                        <h1>Global technologies</h1>
                    </div>
                </Fade>
                <div className="about-content">
                    <Fade left>
                        <div className="about-diagram">
                            <img src="/assets/img/chart.svg" alt="chart" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="about-info">
                            <h1>Level 1</h1>
                            <p>Deploy a multi-legged futures strategy by simultaneously placing orders
                                to buy and sell from the same order ticket.</p>
                            <p>Place and manage orders based on the Level 2 order book, which provides a
                                live display of all bids and offers waiting to be executed.</p>
                            <button>Start Now</button>
                        </div>
                    </Fade>
                </div>
            </Container>
        </div>
    )
}
