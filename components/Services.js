import React, { useEffect } from 'react'
import "../styles/services.module.css"
import { partnersimage } from '../images/svgexports'
import { clientsimage } from '../images/svgexports'
import { useState } from 'react'
import { Card } from '@mui/material'

function Services() {
    const [width, setWidth] = useState("")
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    const updateWidthAndHeight = () => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth);
    };
    return (
        <Card className='services'>
            <div className="services-text">
                <div>Services</div>
                <div>A platform connecting partners and clients for improved and efficient collaboration.</div>
            </div>
            <div className="partners">
                <div className='image'>
                    {partnersimage}
                </div>
                <div className="partner-features">
                    <div style={{ fontSize: '30px', fontWeight: '600', color: '#5D2EAB' }}>For Partners</div>
                    <div className='feature'>Feature #1</div>
                    <div className='feature'>Feature #1</div>
                    <div className='feature'>Feature #1</div>
                    <div className='cnt-btn'>Let's Connect</div>
                </div>


            </div>
            {width < "420" ?
                <div><br></br>
                    <br></br>

                    <br></br>

                    <br></br>
                    <br></br>

                    <br></br></div>
                : null
            }
            <div className="clients">
                <div className="client-features">
                    <div style={{ fontSize: '30px', fontWeight: '600', color: '#5D2EAB' }}>For Clients</div>
                    <div className='feature'>Feature #1</div>
                    <div className='feature'>Feature #1</div>
                    <div className='feature'>Feature #1</div>
                    <div className='cnt-btn'>Let's Connect</div>
                </div>
                <div className='image'>
                    {clientsimage}
                </div>

            </div>
        </Card>
    )
}

export default Services
