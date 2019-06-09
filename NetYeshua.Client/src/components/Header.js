import React from 'react';
import Logo from '../img/logo_red_yeshua.png';

class Header extends React.Component {
    render() {
        return (<header id="header" className="header-transparent header-transparent-dark-bottom-border header-transparent-dark-bottom-border-1 header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
                    <div className="header-body border-top-0 bg-dark box-shadow-none">
                        <div className="header-container container">
                            <div className="header-row">
                                <div className="header-column">
                                    <div className="header-row">
                                        <div className="header-logo">
                                            <a href="#"> {/* HREF NEEDS TO BE INDEX.HTML */}
                                                <img alt="Red Yeshua" width="150" src={Logo}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-column justify-content-end">
                                    <div className="header-row">
                                        <div className="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">
                                            <div className="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                                <nav className="collapse">
                                                    <ul className="nav nav-pills" id="mainNav">
                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle active" href="#"> {/* HREF NEEDS TO BE INDEX.HTML */}
                                                                Home
                                                            </a>
                                                        </li>
                                                        <li className="dropdown dropdown-mega">
                                                            <a className="dropdown-item dropdown-toggle" href="#">
                                                                Announcements
                                                            </a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle" href="#">
                                                                Gallery
                                                            </a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle" href="#">
                                                                Services
                                                            </a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle" href="#">
                                                                Staff Directory
                                                            </a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle" href="#">
                                                                Contact
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                        </div>
                                        <div className="header-nav-features header-nav-features-light header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
                                            <button type="button" className="btn btn-3d btn-primary">Donate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>);
    }
}

export default Header;