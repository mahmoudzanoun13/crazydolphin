import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import menuLarge from '../../assets/images/menu_large.png';
import menuSmall from '../../assets/images/menu_small.png';
import closeLarge from '../../assets/images/close_large.png';
import closeSmall from '../../assets/images/close_small.png';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import DropDown from '../DropDown/DropDown';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  useEffect(() => {
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  }, [i18n.language]);

  return (
    <header id="header">
      <div className='shadow-md w-full fixed top-0 left-0 z-20'>
        <nav className='md:flex justify-between items-center bg-white py-4 md:px-10 px-7'>
          <div>
            <NavLink to="/">
              <img loading="lazy" className='w-20 h-auto' src={logo} alt="logo_image" />
            </NavLink>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-12 cursor-pointer md:hidden'
          >
            {
              open
              ? <img loading="lazy" src={closeSmall} alt="close_icon" srcSet={`${closeSmall}, ${closeLarge} 2x`} />
              : <img loading="lazy" src={menuSmall} alt="menu_icon" srcSet={`${menuSmall}, ${menuLarge} 2x`} />
            }
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink to="/" className='text-gray-800 hover:text-gray-400 duration-500'>{t('header.1')}</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink to="/about" className='text-gray-800 hover:text-gray-400 duration-500'>{t('header.2')}</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <DropDown />
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink to="/booking" className='text-gray-800 hover:text-gray-400 duration-500'>{t('header.4')}</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink to="/things_to_do" className='text-gray-800 hover:text-gray-400 duration-500'>{t('header.5')}</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink to="/contact" className='text-gray-800 hover:text-gray-400 duration-500'>{t('header.6')}</NavLink>
            </li>
            <li>
              <select
                onClick={handleClick}
                id="languages"
                name="languages"
                className="md:ml-8 p-2 rounded cursor-pointer"
              >
                <option value="en" className="lang">EN</option>
                <option value="pl" className="lang">PL</option>
                <option value="de" className="lang">DE</option>
                <option value="ru" className="lang">RU</option>
                <option value="dk" className="lang">DK</option>
                <option value="nl" className="lang">NL</option>
                <option value="fr" className="lang">FR</option>
                <option value="ch" className="lang">CN</option>
                <option value="sp" className="lang">ES</option>
                <option value="sr" className="lang">SR</option>
              </select>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
