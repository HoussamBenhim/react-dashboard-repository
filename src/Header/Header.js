import React, {useState} from 'react';
import headerStyleSheet from './Header.module.css';
import logo from '../images/logo.JPG';
import Horloge from './Horloge';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames';

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    
   const handelclick = () => {
    setisOpen(!isOpen);
    }

    return (
        <header className={headerStyleSheet.header}>
            <img className={headerStyleSheet.logo} src={logo} alt="logo"></img>
            <ul className={ cx(headerStyleSheet.nav_links,  isOpen ? headerStyleSheet.nav_links_active : headerStyleSheet.nav_links_close)  }>
                <li className={headerStyleSheet.nav_links_li}><a className={headerStyleSheet.nav_links_li_a} href="#">Portefeuille</a></li>
                <li className={headerStyleSheet.nav_links_li}><a className={headerStyleSheet.nav_links_li_a} href="#">Composition</a></li>
                <li className={headerStyleSheet.nav_links_li}><a className={headerStyleSheet.nav_links_li_a} href="#">SCR</a></li>
                <li className={headerStyleSheet.nav_links_li}><a className={headerStyleSheet.nav_links_li_a} href="#">ESG</a></li>
                <li className={headerStyleSheet.nav_links_li} ><a className={headerStyleSheet.nav_links_li_a} href="#">Climat</a></li>
            </ul>

            <button className={headerStyleSheet.button} onClick={() => handelclick()}> <MenuIcon /></button>
            {/* <Horloge /> */}
        </header>

    );
}

export default Header;