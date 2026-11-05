// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let n=()=>{let e=useRef(null),[n,s]=useState(()=>window.innerWidth/1600),[a,l]=useState(()=>window.innerWidth<860),[r,c]=useState(!1),[p,d]=useState(0);useEffect(()=>{let e=()=>{let e=window.innerWidth;s(e/1600),l(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let t=setTimeout(()=>{c(!0),d(e=>e+1)},60),o=new IntersectionObserver(([e])=>{e.isIntersecting&&(c(!0),d(e=>e+1))},{threshold:.08});return e.current&&o.observe(e.current),()=>{clearTimeout(t),o.disconnect()}},[]);let f=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},x=[{label:"Work",targetId:"beforeafter"},{label:"Services",targetId:"services"},{label:"About Us",targetId:"about"},{label:"Process",targetId:"whychooseus"}],m=[{label:"Checkup & Cleaning",targetId:"services"},{label:"Clear Aligners",targetId:"services"},{label:"Braces & Aligners",targetId:"services"},{label:"Aesthetic Veneers",targetId:"services"}],h=[{label:"Instagram",href:"https://instagram.com"},{label:"Behance",href:"https://behance.net"},{label:"LinkedIn",href:"https://linkedin.com"},{label:"Dribbble",href:"https://dribbble.com"}];return _jsxs("footer",{ref:e,id:"footer",style:{width:"100%",height:a?"auto":`${745*n}px`,overflow:"hidden",position:"relative",backgroundColor:"#0F766E",boxSizing:"border-box",order:10,flex:"none",flexGrow:0},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* ================= DESKTOP STYLES (Fixed 1600px Canvas) ================= */

        /* Frame 391: Copyright Row */
        .footer-copyright-row {
          position: absolute;
          width: 556px;
          height: 28px;
          left: 87px;
          top: 60px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 198px;
          box-sizing: border-box;
          z-index: 10;
        }

        .footer-copy-text {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          text-transform: capitalize;
          color: #FFFFFF;
          margin: 0;
          white-space: nowrap;
          user-select: none;
        }

        /* Frame 390: Navigation Columns Container */
        .footer-nav-container {
          position: absolute;
          width: 491px;
          height: 167px;
          left: 1023px;
          top: 60px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 85px;
          box-sizing: border-box;
          z-index: 10;
        }

        /* Column Heading */
        .footer-col-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0 0 13px 0;
          white-space: nowrap;
          user-select: none;
        }

        /* Links List */
        .footer-links-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
          box-sizing: border-box;
        }

        /* Link Item Row */
        .footer-link-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          height: 24px;
          text-decoration: none;
          color: #FFFFFF;
          cursor: pointer;
          transition: transform 0.22s ease, opacity 0.22s ease;
          background: transparent;
          border: none;
          padding: 0;
        }

        .footer-link-item:hover {
          transform: translateX(4px);
          opacity: 0.88;
        }

        /* Bullet Square (Rectangle 40) */
        .footer-bullet {
          width: 8px;
          height: 8px;
          background: #FFFFFF;
          border-radius: 2px;
          flex: none;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .footer-link-item:hover .footer-bullet {
          transform: rotate(45deg) scale(1.15);
          background-color: #CCFBF1;
        }

        /* Link Text */
        .footer-link-label {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          text-transform: capitalize;
          color: #FFFFFF;
          white-space: nowrap;
          user-select: none;
        }

        /* Giant "LUMINA" Typography */
        .footer-giant-title {
          position: absolute;
          width: 1587px;
          height: 784px;
          left: calc(50% - 1587px/2 + 0.5px);
          top: 135px;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 603.086px;
          line-height: 784px;
          text-transform: uppercase;
          color: #FFFFFF;
          text-align: center;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          margin: 0;
          letter-spacing: -6px;
          z-index: 1;
        }

        /* ================= MOBILE STYLES (< 860px) ================= */
        .footer-mobile-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 60px 24px 0px;
          box-sizing: border-box;
          background: #0F766E;
          position: relative;
          overflow: hidden;
        }

        .footer-mobile-columns {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          max-width: 520px;
          gap: 36px 20px;
          margin-bottom: 40px;
        }

        .footer-mobile-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 130px;
        }

        .footer-mobile-copy-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-bottom: 30px;
          text-align: center;
        }

        .footer-mobile-giant {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: clamp(96px, 24vw, 220px);
          line-height: 0.95;
          text-transform: uppercase;
          color: #FFFFFF;
          text-align: center;
          width: 100%;
          letter-spacing: -2px;
          margin: 0;
          user-select: none;
          pointer-events: none;
          padding-bottom: 10px;
        }
      `}),!a&&_jsxs("div",{style:{width:"1600px",height:"745px",position:"absolute",top:0,left:0,transform:`scale(${n})`,transformOrigin:"top left",backgroundColor:"#0F766E",overflow:"hidden",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box"},children:[_jsxs(motion.div,{className:"footer-copyright-row",initial:{opacity:0,y:-20},animate:r?{opacity:1,y:0}:{opacity:0,y:-20},transition:{duration:.7,ease:[.16,1,.3,1]},children:[_jsx("p",{className:"footer-copy-text",children:"© 2026 LUMINA Dental & Aesthetics Studio"}),_jsx("p",{className:"footer-copy-text",children:"All Rights Reserved."})]},`foot-copy-${p}`),_jsxs("div",{className:"footer-nav-container",children:[_jsxs(motion.div,{style:{width:"87px",boxSizing:"border-box"},initial:{opacity:0,y:-20},animate:r?{opacity:1,y:0}:{opacity:0,y:-20},transition:{duration:.7,delay:.1,ease:[.16,1,.3,1]},children:[_jsx("h3",{className:"footer-col-heading",children:"Navigation"}),_jsx("div",{className:"footer-links-list",style:{width:"77px"},children:x.map((e,o)=>_jsxs("button",{className:"footer-link-item",onClick:()=>f(e.targetId),children:[_jsx("span",{className:"footer-bullet"}),_jsx("span",{className:"footer-link-label",style:{fontWeight:0===o?500:400},children:e.label})]},o))})]},`foot-col1-${p}`),_jsxs(motion.div,{style:{width:"152px",boxSizing:"border-box"},initial:{opacity:0,y:-20},animate:r?{opacity:1,y:0}:{opacity:0,y:-20},transition:{duration:.7,delay:.18,ease:[.16,1,.3,1]},children:[_jsx("h3",{className:"footer-col-heading",children:"Services"}),_jsx("div",{className:"footer-links-list",style:{width:"152px"},children:m.map((e,o)=>_jsxs("button",{className:"footer-link-item",onClick:()=>f(e.targetId),children:[_jsx("span",{className:"footer-bullet"}),_jsx("span",{className:"footer-link-label",children:e.label})]},o))})]},`foot-col2-${p}`),_jsxs(motion.div,{style:{width:"82px",boxSizing:"border-box"},initial:{opacity:0,y:-20},animate:r?{opacity:1,y:0}:{opacity:0,y:-20},transition:{duration:.7,delay:.26,ease:[.16,1,.3,1]},children:[_jsx("h3",{className:"footer-col-heading",children:"Connect"}),_jsx("div",{className:"footer-links-list",style:{width:"82px"},children:h.map((e,o)=>_jsxs("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"footer-link-item",children:[_jsx("span",{className:"footer-bullet"}),_jsx("span",{className:"footer-link-label",children:e.label})]},o))})]},`foot-col3-${p}`)]}),_jsx(motion.h1,{className:"footer-giant-title",initial:{opacity:0,y:80},animate:r?{opacity:1,y:0}:{opacity:0,y:80},transition:{duration:.95,delay:.2,ease:[.16,1,.3,1]},children:"LUMINA"},`foot-dentis-${p}`)]}),a&&_jsxs("div",{className:"footer-mobile-wrap",children:[_jsxs("div",{className:"footer-mobile-columns",children:[_jsxs("div",{className:"footer-mobile-col",children:[_jsx("h3",{className:"footer-col-heading",children:"Navigation"}),_jsx("div",{className:"footer-links-list",children:x.map((e,o)=>_jsxs("button",{className:"footer-link-item",onClick:()=>f(e.targetId),children:[_jsx("span",{className:"footer-bullet"}),_jsx("span",{className:"footer-link-label",children:e.label})]},o))})]}),_jsxs("div",{className:"footer-mobile-col",children:[_jsx("h3",{className:"footer-col-heading",children:"Services"}),_jsx("div",{className:"footer-links-list",children:m.map((e,o)=>_jsxs("button",{className:"footer-link-item",onClick:()=>f(e.targetId),children:[_jsx("span",{className:"footer-bullet"}),_jsx("span",{className:"footer-link-label",children:e.label})]},o))})]}),_jsxs("div",{className:"footer-mobile-col",children:[_jsx("h3",{className:"footer-col-heading",children:"Connect"}),_jsx("div",{className:"footer-links-list",children:h.map((e,o)=>_jsxs("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"footer-link-item",children:[_jsx("span",{className:"footer-bullet"}),_jsx("span",{className:"footer-link-label",children:e.label})]},o))})]})]}),_jsxs("div",{className:"footer-mobile-copy-row",children:[_jsx("p",{className:"footer-copy-text",style:{fontSize:"15px"},children:"© 2026 LUMINA Dental & Aesthetics Studio"}),_jsx("p",{className:"footer-copy-text",style:{fontSize:"15px"},children:"All Rights Reserved."})]}),_jsx(motion.h1,{className:"footer-mobile-giant",initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,ease:[.16,1,.3,1]},children:"LUMINA"})]},`foot-mob-${p}`)]})}

export default n;