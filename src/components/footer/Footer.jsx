import React from 'react'
import Container from '../container/Container'
import './Footer.scss'
import Hover from 'react-3d-hover';

export default function Footer() {
    return (
        <div className="footer">
            <Container padding={135}>
                <Hover scale={1} perspective={900} speed={500}>
                    <div className="footer-left">
                        <div className="footer-item">
                            <div className="footer-left-bg">
                                <img src="/assets/img/formula-bg.svg" alt="bg" />
                            </div>
                            <h3>
                                Spot & Margin
                            </h3>
                            <h1>
                                Trade <span>200+ </span>
                                pairs with up
                                to 10x leverage
                            </h1>
                            <a href=".">Learn more</a>
                        </div>
                    </div>
                </Hover>
                <div className="footer-right">
                    <div className="top">
                        <Hover scale={1} perspective={900} speed={500}>
                            <div className="footer-item">
                                <h3>
                                    Derivatives
                                </h3>
                                <h1>
                                    40+ quarterly futures and contracts
                                </h1>
                                <a href=".">Learn more</a>
                            </div>
                        </Hover>
                        <Hover scale={1} perspective={900} speed={500}>
                            <div className="footer-item">
                                <h3>
                                    Trading Arena
                                </h3>
                                <h1>
                                    Prize pools worth up to USD 1,000,000
                                </h1>
                                <a href=".">Learn more</a>
                            </div>
                        </Hover>
                    </div>
                    <div className="bottom">
                        <Hover scale={1} perspective={900} speed={500}>
                            <div className="footer-item">
                                <div className="footer-bottom-bg">
                                    <img src="/assets/img/schema-bg.svg" alt="bg" />
                                </div>
                                <h3>
                                    mobile app
                                </h3>
                                <h1>
                                    Trade anytime, <br></br> anywhere
                                </h1>
                                <a href=".">Learn more</a>
                            </div>
                        </Hover>
                    </div>
                </div>
            </Container >
        </div >
    )
}
