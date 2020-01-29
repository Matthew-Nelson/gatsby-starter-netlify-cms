import React from "react";
import { Link } from "gatsby";
import logoColor from "../img/logo-color.png";
import logoBlack from "../img/logo-black.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      isHome: false
    };
  }

  getStyle() {
    return {
      position: "fixed",
      right: 0,
      left: 0,
      zIndex: "999",
      background: this.state.isHome ? "none" : "white"
    };
  }

  componentDidMount() {
    if (window.location.pathname === "/") {
      this.setState({
        isHome: true
      });
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className='navbar is-transparent' role='navigation' aria-label='main-navigation' style={this.getStyle()}>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Logo'>
              <img src={this.state.isHome ? logoBlack : logoColor} alt='BM' className='' style={{ maxHeight: `100px` }} />
            </Link>
            {/* Hamburger menu */}
            {/* eslint-disable-next-line */}
            <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target='navMenu' onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id='navMenu' className={`navbar-menu ${this.state.navBarActiveClass}`} style={{ flexDirection: "column", justifyContent: "center" }}>
            <div className='navbar-end has-text-centered top' style={{ color: "goldenRod" }}>
              <Link className='navbar-item' to='/contact-us' style={{ color: "inherit" }}>
                Contact Us
              </Link>
              <a className='navbar-item' href='https://www.calpolycorporation.org/' target='_blank' rel='noopener noreferrer' style={{ color: "inherit" }}>
                Back to Cal Poly Corporation
              </a>
            </div>
            <div className='navbar-end has-text-centered bottom'>
              <Link className='navbar-item' to='/about'>
                About
              </Link>
              <Link className='navbar-item' to='/home-designs'>
                Home Designs
              </Link>
              <Link className='navbar-item' to='/available-homes'>
                Available Homes
              </Link>
              <Link className='navbar-item' to='/resources'>
                Resources
              </Link>
              <Link className='navbar-item' to='/community'>
                Community
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
