
import './App.css';
import React, { useState } from 'react';
import { Route, Routes, useLocation, useNavigate, useRoutes } from "react-router-dom"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import { Sidebar } from 'primereact/sidebar';
import Logo from './assets/logo_name.png';
import kh from './assets/kh.png';
import en from './assets/en.png';
import { Link } from 'react-router-dom';
import Body from './components/body';
import About from './page/about';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useContext } from 'react';
import { contents } from './language/data';
import { LangContext } from './context/langContext';
import Blog from './page/blog';
import BlogDetail from './page/blog-detail';
import { scroller } from 'react-scroll';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname)
  const [right, setRight] = useState(false);
  const { ChangeLang, Language } = useContext(LangContext);
  const { nav } = contents[Language];
  // console.log(contents[Language]);

  const scrollTarget = (target) => scroller.scrollTo(target, { smooth: true, duration: 700 });
  const scrollToPage = async (target) => {
    await navigate('/');
    scrollTarget(target);
  };

  <React.Fragment>
    <button className="p-sidebar-icon p-link mr-1">
      <span className="pi pi-print" />
    </button>
    <button className="p-sidebar-icon p-link mr-1">
      <span className="pi pi-arrow-right" />
    </button>
  </React.Fragment>

  return (
    <>
      <div className='container' id="container">
        {/* Header */}

        <div className='header'>
          <div className='flex justify-content-between'>
            {/* Logo */}

            <div className='logo m-2'>
              <Link to="/">   <img src={Logo} width={150} alt="logo" /></Link>
            </div>
            {/* navbar */}
            <div className='res'>
              <div className='navbar flex alige-item-center justify-content-evenly'>
                {pathname === "/" ?
                  <AnchorLink href="#solution" className='no-underline text-white'><div>{nav[0]}</div></AnchorLink>
                  :
                  <div onClick={() => scrollToPage('solution')} className='no-underline text-white'>{nav[0]}</div>
                }
                {pathname === "/" ?
                  <AnchorLink href="#product" className='no-underline text-white'><div>{nav[1]}</div></AnchorLink>
                  :
                  <div onClick={() => scrollToPage('product')} className="no-underline text-white">{nav[1]}</div>
                }
                {pathname === "/" ?
                  <AnchorLink href="#about" className='no-underline text-white'><div >{nav[2]}</div></AnchorLink>
                  :
                  <div onClick={() => scrollToPage('about')} className='no-underline text-white'>{nav[2]}</div>
                }
                <Link to="/blog" className='no-underline text-white'><div>Blog</div></Link>
              </div>
            </div>
            <div className='menu'>
              <Sidebar visible={right} position="right"
                onHide={() => setRight(false)}>
              
              </Sidebar>

              <i className='m-6 text-xxl pi pi-th-large text-2xl text-white cursor-pointer' label='' onClick={() => setRight(true)}></i>
            </div>
            {/* Language */}

            <div className='lan mt-3'>
              <img src={en} width={50} alt="en"
                onClick={() => ChangeLang('en')}

              />
              , <img src={kh} width={50} alt="kh"
                onClick={() => ChangeLang('kh')} />
            </div>
          </div>
        </div>
        {/* Body */}
        {/* Footer */}
      </div>
      <Routes>
        <Route path='/' element={<Body
        />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Body />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/blog-detail' element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
