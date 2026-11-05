// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let n=()=>{let e=useRef(null),[n,r]=useState(()=>window.innerWidth/1600),[o,s]=useState(()=>window.innerWidth<860),[l,d]=useState(!1),[c,p]=useState(0);useEffect(()=>{let e=()=>{let e=window.innerWidth;r(e/1600),s(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let i=setTimeout(()=>{d(!0),p(e=>e+1)},50),t=new IntersectionObserver(([e])=>{e.isIntersecting?(d(!0),p(e=>e+1)):d(!1)},{threshold:.12});return e.current&&t.observe(e.current),()=>{clearTimeout(i),t.disconnect()}},[]);let m=[{number:"15+",label:"Years of Mastery"},{number:"10K+",label:"Perfected Smiles"},{number:"10+",label:"Board Specialists"},{number:"24/7",label:"24/7 Concierge Care"}];return _jsxs("section",{ref:e,id:"about",style:{width:"100%",height:o?"auto":`${1430*n}px`,overflow:"hidden",position:"relative",backgroundColor:"#F0FDFA",boxSizing:"border-box"},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* Top Main Frame (Frame 2147226751) */
        .da-main-frame {
          position: absolute;
          width: 1422px;
          height: auto;
          left: calc(50% - 711px);
          top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 32px;
          box-sizing: border-box;
        }

        /* Pill Badge (Frame 2147226743) */
        .da-badge-pill {
          box-sizing: border-box;
          display: inline-flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 24px;
          width: auto;
          min-width: 140px;
          height: 44px;
          border: 1px solid #0F766E;
          border-radius: 9999px;
          background: transparent;
          cursor: default;
          transition: all 0.25s ease;
        }

        .da-badge-pill:hover {
          background-color: rgba(15, 118, 110, 0.06);
          transform: translateY(-1px);
        }

        .da-badge-text {
          width: auto;
          height: 22px;
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #0F766E;
          white-space: nowrap;
        }

        /* Content Frame (Frame 2147226750) */
        .da-content-frame {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 50px;
          width: 1422px;
          height: auto;
        }

        /* Big Statement Headline */
        .da-headline-box {
          width: 1422px;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .da-headline-line-wrap {
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .da-headline-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 56px;
          line-height: 66px;
          text-align: center;
          text-transform: uppercase;
          color: #00514A;
          margin: 0;
          letter-spacing: -0.2px;
          will-change: transform, opacity;
        }

        /* Stats Row (Frame 2147226749) */
        .da-stats-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0px;
          gap: 103px;
          width: 1234px;
          height: 141px;
        }

        .da-stat-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0px;
          gap: 2px;
          width: 136px;
          height: 141px;
          flex: none;
        }

        .da-stat-number {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 90px;
          line-height: 117px;
          text-align: center;
          color: #00514A;
          margin: 0;
          white-space: nowrap;
        }

        .da-stat-label {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #0F766E;
          white-space: nowrap;
          margin: 0;
        }

        /* Divider (Rectangle 5) */
        .da-divider {
          width: 2px;
          height: 102px;
          background: #A8E2D4;
          flex: none;
        }

        /* Big Banner Image (Rectangle 6) */
        .da-image-banner {
          position: absolute;
          width: 1434px;
          height: 600px;
          left: calc(50% - 1434px / 2);
          top: 776px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(0, 81, 74, 0.08);
          background-color: #E6F4F1;
        }

        .da-image-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .da-image-banner:hover img {
          transform: scale(1.025);
        }

        /* ================= MOBILE ABOUT STYLES ================= */
        .da-mobile-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 56px 18px 72px;
          box-sizing: border-box;
          text-align: center;
        }

        .da-mobile-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 22px;
          border: 1px solid #0F766E;
          border-radius: 9999px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 14px;
          color: #0F766E;
          margin-bottom: 24px;
        }

        .da-mobile-headline {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: clamp(26px, 6.8vw, 36px);
          line-height: 1.25;
          text-align: center;
          text-transform: uppercase;
          color: #00514A;
          margin: 0 0 36px;
          max-width: 540px;
          letter-spacing: -0.2px;
        }

        .da-mobile-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 16px;
          width: 100%;
          max-width: 480px;
          padding: 24px 8px;
          border-top: 1px solid #A8E2D4;
          border-bottom: 1px solid #A8E2D4;
          margin-bottom: 36px;
        }

        .da-mobile-stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .da-mobile-stat-num {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(44px, 11vw, 54px);
          line-height: 1.05;
          color: #00514A;
          margin: 0;
        }

        .da-mobile-stat-lbl {
          font-family: 'Inter Tight', sans-serif;
          font-size: 14px;
          line-height: 18px;
          color: #0F766E;
          margin: 4px 0 0;
        }

        .da-mobile-img-banner {
          width: 100%;
          max-width: 540px;
          height: 250px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 14px 34px rgba(0, 81, 74, 0.1);
        }

        .da-mobile-img-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
      `}),!o&&_jsxs("div",{style:{width:"1600px",height:"1430px",position:"absolute",top:0,left:0,transform:`scale(${n})`,transformOrigin:"top left",backgroundColor:"#F0FDFA",overflow:"hidden",color:"#00514A",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box",userSelect:"none"},children:[_jsxs("div",{className:"da-main-frame",children:[_jsx(motion.div,{className:"da-badge-pill",initial:{opacity:0,y:-20},animate:l?{opacity:1,y:0}:{opacity:0,y:-20},transition:{duration:.6,ease:"easeOut"},children:_jsx("span",{className:"da-badge-text",children:"The Lumina Studio"})},`badge-${c}`),_jsxs("div",{className:"da-content-frame",children:[_jsx("div",{className:"da-headline-box",children:["WHERE CLINICAL PRECISION MEETS THE TRANQUILITY OF","A LUXURY SPA. OUR BESPOKE SMILE ARCHITECTURE,","PAINLESS LASER METHODS, AND MINDFUL CARE","ENSURE EVERY VISIT IS AN INDULGENT,","CONFIDENCE-BUILDING EXPERIENCE YOU ACTUALLY ENJOY."].map((e,t)=>_jsx("div",{className:"da-headline-line-wrap",children:_jsx(motion.p,{className:"da-headline-text",initial:{y:"-110%",opacity:0},animate:l?{y:"0%",opacity:1}:{y:"-110%",opacity:0},transition:{duration:.8,delay:.1+.08*t,ease:[.16,1,.3,1]},children:e})},t))},`headline-${c}`),_jsx(motion.div,{className:"da-stats-row",initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.5,ease:"easeOut"},children:m.map((e,n)=>_jsxs(_Fragment,{children:[_jsxs("div",{className:"da-stat-item",children:[_jsx("h3",{className:"da-stat-number",children:e.number}),_jsx("p",{className:"da-stat-label",children:e.label})]}),n<m.length-1&&_jsx(motion.div,{className:"da-divider",initial:{scaleY:0},animate:l?{scaleY:1}:{scaleY:0},transition:{duration:.6,delay:.6+.08*n,ease:"easeOut"},style:{transformOrigin:"center"}})]},n))},`stats-${c}`)]})]}),_jsx(motion.div,{className:"da-image-banner",initial:{opacity:0,y:50,scale:.98},animate:l?{opacity:1,y:0,scale:1}:{opacity:0,y:50,scale:.98},transition:{duration:.85,delay:.65,ease:[.16,1,.3,1]},children:_jsx("img",{src:"https://cdn.jiro.build/Dentis/Image/a%201.png",alt:"Doctor providing modern care in dental clinic operatory room"})},`img-banner-${c}`)]}),o&&_jsxs("div",{className:"da-mobile-wrapper",children:[_jsx("div",{className:"da-mobile-badge",children:_jsx("span",{children:"The Lumina Studio"})}),_jsx("h2",{className:"da-mobile-headline",children:"From your first checkup to advanced treatments like implants and braces, we take time to listen, explain every step clearly, and create a plan that fits your needs and budget. Modern equipment, strict hygiene, and a friendly team make every visit comfortable."}),_jsx("div",{className:"da-mobile-stats-grid",children:m.map((e,t)=>_jsxs("div",{className:"da-mobile-stat-box",children:[_jsx("h3",{className:"da-mobile-stat-num",children:e.number}),_jsx("p",{className:"da-mobile-stat-lbl",children:e.label})]},`mob-stat-${t}`))}),_jsx("div",{className:"da-mobile-img-banner",children:_jsx("img",{src:"https://cdn.jiro.build/Dentis/Image/a%201.png",alt:"Doctor providing modern care in dental clinic operatory room"})})]})]})}

export default n;