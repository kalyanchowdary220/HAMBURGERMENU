// Write your code here
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'

import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="menu-button"
          >
            <GiHamburgerMenu size="30" />.
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="model-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="25" color="#616e7c" />.
            </button>
            <ul className="list-icons">
              <li>
                <Link to="/" className="home-link" onClick={() => close()}>
                  <AiFillHome size="32" />
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" className="home-link" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <h1>About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default withRouter(Header)
