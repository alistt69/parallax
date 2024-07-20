import './App.css'
import {useEffect, useRef, useState} from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
//import LocomotiveScroll from "locomotive-scroll"
//import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'




function App() {

    const containerRef = useRef(null)

  return (
      <>

          <LocomotiveScrollProvider options={{smooth: true,}} containerRef={containerRef}>
              <main data-scroll-container="" ref={containerRef} style={{height: '1400px'}}>
                  <div data-scroll-section="">
                      <header className="main-header">
                          <div className="layers">
                              <div className="layer-header" data-scroll="" data-scroll-speed="-0.6" data-scroll-position="top">

                                  <div className="layer-caption">
                                      parallax
                                  </div>

                                  <div className="layer-title">
                                      template
                                  </div>

                              </div>
                              <div className="layers-base" data-scroll="" data-scroll-speed="-2" data-scroll-position="top"></div>
                              <div className="layers-middle" data-scroll="" data-scroll-speed="-0.4" data-scroll-position="top"></div>
                              <div className="layers-front" data-scroll="" data-scroll-speed="1.4" data-scroll-position="top"></div>

                          </div>
                      </header>
                  </div>
                  <div data-scroll-section="">
                      <article className="main-article" data-scroll="" data-scroll-speed="1.4" data-scroll-position="top">
                          <div className="main-article-content" data-scroll="" data-scroll-speed="1.5" data-scroll-position="top">

                              <div>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt
                                  ut
                                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                  ullamco
                                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                  reprehenderit in
                                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                  cupidatat
                                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </div>

                          </div>
                      </article>
                  </div>
              </main>
          </LocomotiveScrollProvider>

      </>
  )
}

export default App


{/*          <Fullpage>
              <FullpageNavigation />
              <FullPageSections>
                  <FullpageSection className="main-header">*/}