import React from 'react'
import Container from '../container/Container'
import './Future.scss'
import Fade from 'react-reveal/Fade';

export default function Future() {
    return (
        <div className="future">
            <Container padding={135}>
                <Fade left>
                    <div className="schema">
                        <div className="schema-top">
                            <div className="schema-item">Artificial Intelligence</div>
                            <div className="schema-item">Storage Networks</div>
                            <div className="schema-item">P2P Networks</div>
                        </div>
                        <div className="schema-mid">
                            <div className="fork">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="midline"></div>
                            </div>
                            <div className="schema-item">Public Data</div>
                            <div className="schema-item">Encrypted Private <br></br> Data *</div>
                        </div>
                        <div className="schema-bottom">
                            <div className="consumers">
                                <div className="schema-bottom-lines">
                                    <div className="lines-item">
                                        <div className="arrow"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="lines-item">
                                        <div className="arrow"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                                <h1>Consumers</h1>
                            </div>
                            <div className="schema-icon">
                                <img src="/assets/img/triangle-icon.svg" alt="schema-icon" />
                            </div>
                            <p>Easy to use digital service and exclusive personal service for our active traders</p>
                            <div className="schema-item">Indexing</div>
                            <div className="schema-item">API</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="info">
                        <h1>The future Cryptocurrency trading <span>platform</span></h1>
                        <p>Take advantage of time and sales, futures spread orders and depth trader
                            — plus, trade directly from charts.</p>
                        <a href=".">Learn more</a>
                    </div>
                </Fade>
            </Container>

        </div>
    )
}
