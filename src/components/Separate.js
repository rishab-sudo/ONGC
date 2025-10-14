import React from 'react'
import { Container } from 'react-bootstrap'
import "./Separate.css"

const Separate = () => {
    return (
        <Container fluid className='sep-fluid'>
            <Container className='sep-container'>
                <div className=''>
                    <p className='special-heading'>Departments</p>
                    <p className='page-heading'>Popular Departments</p>
                    <p>Far far away, behind the word mountains, far from the Consonantia, there live <br />
                        the blind texts. Separated they marks grove right at the coast</p>
                </div>

                <div className='bottom-sec-div'>

                    <div className='icon-text-div'>
                        <div className='sep-icon-div'>
                            <img src={require("../assets/campur_life_1.jpg")} alt="" />
                        </div>
                        <div>
                            <p>Economics</p>
                        </div>
                    </div>
                    <div className='icon-text-div'>
                        <div className='sep-icon-div'>
                            <img src={require("../assets/campur_life_1.jpg")} alt="" />
                        </div>
                        <div>
                            <p>Economics</p>
                        </div>
                    </div>

                    <div className='icon-text-div'>
                        <div className='sep-icon-div'>
                            <img src={require("../assets/campur_life_1.jpg")} alt="" />
                        </div>
                        <div>
                            <p>Economics</p>
                        </div>
                    </div>

                    <div className='icon-text-div'>
                        <div className='sep-icon-div'>
                            <img src={require("../assets/campur_life_1.jpg")} alt="" />
                        </div>
                        <div>
                            <p>Economics</p>
                        </div>

                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Separate