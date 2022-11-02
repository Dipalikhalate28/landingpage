import React from 'react'
import "../styles/footer.module.css"
function Footer() {
    return (
        <div className='footer'>
            <div style={{width:'100%', fontWeight:'0', color:'#fff', borderBottom:'1px solid #FF9E00'}}>
                <h1 style={{width:'50%', borderRight:'1px solid #FF9E00',padding:'10px 20px'}}>humancloud</h1>
            </div>
            <div className='location'>
                <div className='heading'>HEADQUARTER</div>
                <div className='detail'>
                    <span>California</span>
                    <p>14100 Saratoga-Sunnyvale Road, Saratoga, CA-95070, USA</p>
                </div>

                <div className='heading'>DEVELOPMENT CENTRES</div>
                <div className='detail'>
                    <span>Pune</span>
                    <p>Level 2, Prime Business Bay, Opp. Croma, Veerbhadra Nagar, Baner, Pune 411045, India</p>
                </div>
                <div className='detail'>
                    <span>Hyderabad</span>
                    <p>T-Hub 2.0, 20, Inorbit Mall Rd, Madhapur, Telangana 500081, India</p>
                </div>
            </div>
            <div className='contact'>
                <div className="detail">
                <div className="heading">CONTACT</div>
                    <span>Sales</span>
                    <p>sales@humancloud.co.in India: +91 85301 16304 US: +1 661 577 4443</p>

                    <span>Customer Care</span>
                    <p>info@humancloud.co.in</p>
                </div>
                <div className="detail">
                <div className="heading">QUICK LINKS</div>
                    <span>About Us</span>
                    <span>Careers</span>
                     <span>Blogs</span>
                    <span>Contact Us</span>
                </div>
                <div className="detail">
                <div className="heading">FOLLOW</div>
                    <div className='email-container'>
                        <input type="text" name="email" placeholder='your email ...' id="email" />
                        <div>Subscribe</div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer