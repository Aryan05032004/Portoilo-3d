import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import {  menu, close } from '../assets';
import iconstyle from '../assets/iconstyle.png';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${ scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to={"/"} className='flex items-center gap-2' onClick={()=> { setActive(""); window.scroll(0, 0); }}>
          <img src={iconstyle} alt='logo' className='w-12 h-12 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Aryan | <span style={{ display: "inline" }} className='sm:block hidden'>BE IT</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-grow gap-10 justify-center'>
          {
            navLinks.map((link)=>(<li key={link.id} className={`${active === link.id ? "text-white" : "text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {navLinks.map((nav) => (
              <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`} onClick={() => {setToggle(!toggle); setActive(nav.title); }}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
