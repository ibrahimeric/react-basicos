import React from 'react'
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Employer</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Comming soon on</h4>
            <div className='icon'>
              <ul className='iconLista'>
                <li className="iconos"><a className='facebook' href="#"><i class="fa fa-facebook"></i></a></li>
                <li className="iconos"><a className='instagram' href="#"><i class="fa fa-instagram"></i></a></li>
                <li className="iconos"><a className='twitter' href="#"><i class="fa fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserverd.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
