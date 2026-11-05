// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let n=()=>{let e=useRef(null),[n,o]=useState(()=>window.innerWidth/1600),[l,s]=useState(()=>window.innerWidth<860),[r,d]=useState(!1),[c,p]=useState(0),[m,h]=useState(null);useEffect(()=>{let e=()=>{let e=window.innerWidth;o(e/1600),s(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let i=setTimeout(()=>{d(!0),p(e=>e+1)},60),t=new IntersectionObserver(([e])=>{e.isIntersecting&&(d(!0),p(e=>e+1))},{threshold:.1});e.current&&t.observe(e.current);let a=()=>{if(e.current){let i=e.current.getBoundingClientRect();i.top<.88*window.innerHeight&&i.bottom>0&&d(!0)}};return window.addEventListener("scroll",a,{passive:!0}),()=>{clearTimeout(i),t.disconnect(),window.removeEventListener("scroll",a)}},[]);let x=[{num:"01",title:"3D AI Diagnostics"},{num:"02",title:"Ivy League Faculty"},{num:"03",title:"Gentle & Painless"},{num:"04",title:"Lifetime Warranty"}];return _jsxs("section",{ref:e,id:"why-choose-us",style:{width:"100%",height:l?"auto":`${1242*n}px`,overflow:"hidden",position:"relative",backgroundColor:"#0F766E",boxSizing:"border-box"},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* ================= DESKTOP STYLES (Fixed 1600px Canvas) ================= */

        /* Frame 340 (Top Left Headline Group) */
        .dw-top-group {
          position: absolute;
          width: 739px;
          height: 204px;
          left: 80px;
          top: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          box-sizing: border-box;
          z-index: 10;
        }

        /* Frame 288 (Original Clean Badge - NO BOX) */
        .dw-badge-pill {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 6px;
          height: 24px;
          background: transparent;
          border: none;
        }

        .dw-dot-white {
          width: 8px;
          height: 8px;
          background: #FFFFFF;
          border-radius: 2px;
          flex: none;
          display: inline-block;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .dw-badge-text {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          text-transform: capitalize;
          color: #FFFFFF;
        }

        /* Main Headline (Instrument Serif) */
        .dw-headline-text {
          width: 739px;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          line-height: 80px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.2px;
          will-change: transform, opacity;
        }

        /* Frame 351 (Middle Row: Image + Right Features) */
        .dw-mid-row {
          position: absolute;
          width: 1229px;
          height: 503px;
          left: 80px;
          top: 344px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 56px;
          box-sizing: border-box;
          z-index: 10;
        }

        /* w1 Image Container with Masked Bottom Reveal */
        .dw-image-mask-wrap {
          width: 776px;
          height: 498px;
          border-radius: 16px;
          overflow: hidden;
          flex: none;
          background-color: #0c5f59;
          position: relative;
        }

        .dw-image-card-inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .dw-image-card-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dw-image-mask-wrap:hover .dw-image-card-inner img {
          transform: scale(1.04);
        }

        /* Frame 350 (Right Column) */
        .dw-right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0px;
          width: 397px;
          height: 503px;
          flex: none;
          box-sizing: border-box;
        }

        .dw-right-title {
          width: 397px;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          line-height: 80px;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.2px;
          will-change: transform, opacity;
        }

        /* Frame 349 (Features List) */
        .dw-features-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 12px;
          width: 260px;
        }

        /* Feature Row Item (Clean Original Style) */
        .dw-feature-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 4px 6px;
          gap: 12px;
          cursor: pointer;
          transition: transform 0.25s ease;
          border-radius: 6px;
          background: transparent;
        }

        .dw-feature-item:hover {
          transform: translateX(6px);
          background-color: rgba(255, 255, 255, 0.06);
        }

        .dw-feature-num-group {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          flex: none;
        }

        .dw-feature-num {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          color: #FFFFFF;
          opacity: 0.95;
        }

        .dw-feature-title {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #FFFFFF;
          margin: 0;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .dw-feature-item:hover .dw-feature-title {
          color: #A7F3D0;
        }

        /* Bottom Quote Statement */
        .dw-quote-container {
          position: absolute;
          width: 1416px;
          height: 252px;
          left: 80px;
          top: 907px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          z-index: 10;
        }

        .dw-quote-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 94.36px;
          line-height: 126px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.5px;
          white-space: nowrap;
          will-change: transform, opacity;
        }

        /* ================= MOBILE STYLES (< 860px) ================= */
        .dw-mobile-wrapper {
          width: 100%;
          padding: 56px 20px 72px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 36px;
          background-color: #0F766E;
          color: #FFFFFF;
          overflow: hidden;
        }

        .dw-mobile-header {
          display: flex;
          flex-direction: column;
          gap: 18px;
          width: 100%;
        }

        .dw-mobile-headline-line {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(32px, 8.2vw, 44px);
          line-height: 1.15;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.2px;
          will-change: transform, opacity;
        }

        .dw-mobile-img-wrap {
          width: 100%;
          height: 250px;
          border-radius: 16px;
          overflow: hidden;
          background-color: #0c5f59;
          position: relative;
        }

        .dw-mobile-img-inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .dw-mobile-img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .dw-mobile-why-dental {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .dw-mobile-right-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(32px, 8vw, 42px);
          line-height: 1.15;
          color: #FFFFFF;
          margin: 0;
          will-change: transform, opacity;
        }

        .dw-mobile-list {
          display: flex;
          flex-direction: column;
          gap: 0px;
          width: 100%;
        }

        .dw-mobile-feature-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          padding: 13px 4px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          will-change: transform, opacity;
        }

        .dw-mobile-feature-title {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;
          color: #FFFFFF;
          margin: 0;
        }

        .dw-mobile-quote-box {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          padding-top: 12px;
        }

        .dw-mobile-quote-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        .dw-mobile-quote {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(28px, 6.8vw, 38px);
          line-height: 1.25;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.2px;
          will-change: transform, opacity;
        }
      `}),!l&&_jsxs("div",{style:{width:"1600px",height:"1242px",position:"absolute",top:0,left:0,transform:`scale(${n})`,transformOrigin:"top left",backgroundColor:"#0F766E",overflow:"hidden",color:"#FFFFFF",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box",userSelect:"none"},children:[_jsxs("div",{className:"dw-top-group",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:"dw-badge-pill",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,ease:[.16,1,.3,1]},children:[_jsx("span",{className:"dw-dot-white"}),_jsx("span",{className:"dw-badge-text",children:"Why Choose Us"}),_jsx("span",{className:"dw-dot-white"})]})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"dw-headline-text",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.85,delay:.08,ease:[.16,1,.3,1]},children:"WHERE SURGICAL SCIENCE"})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"dw-headline-text",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.85,delay:.18,ease:[.16,1,.3,1]},children:"MEETS TIMELESS FACIAL ART."})})]},`dw-top-${c}`),_jsxs("div",{className:"dw-mid-row",children:[_jsx("div",{className:"dw-image-mask-wrap",children:_jsx(motion.div,{className:"dw-image-card-inner",initial:{y:"100%"},animate:r?{y:"0%"}:{y:"100%"},transition:{duration:.92,delay:.15,ease:[.16,1,.3,1]},children:_jsx(motion.img,{src:"/images/why.png",alt:"Modern dental clinic laboratory and team workspace",initial:{scale:1.18,y:"-15%"},animate:r?{scale:1,y:"0%"}:{scale:1.18,y:"-15%"},transition:{duration:1.1,delay:.15,ease:[.16,1,.3,1]}})})}),_jsxs("div",{className:"dw-right-col",children:[_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h3,{className:"dw-right-title",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.82,delay:.22,ease:[.16,1,.3,1]},children:"The Lumina Distinction"})}),_jsx("div",{className:"dw-features-list",children:x.map((e,t)=>_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsxs(motion.div,{className:"dw-feature-item",initial:{y:"120%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"120%",opacity:0},transition:{duration:.75,delay:.32+.1*t,ease:[.16,1,.3,1]},onMouseEnter:()=>h(t),onMouseLeave:()=>h(null),children:[_jsxs("div",{className:"dw-feature-num-group",children:[_jsx("span",{className:"dw-dot-white",style:{backgroundColor:m===t?"#A7F3D0":"#FFFFFF",transform:m===t?"scale(1.2)":"scale(1)"}}),_jsx("span",{className:"dw-feature-num",children:e.num})]}),_jsx("p",{className:"dw-feature-title",children:e.title})]})},t))})]})]},`dw-mid-${c}`),_jsxs("div",{className:"dw-quote-container",children:[_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.p,{className:"dw-quote-text",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.9,delay:.45,ease:[.16,1,.3,1]},children:"“EVERY SMILE WE DESIGN IS A BESPOKE MASTERPIECE"})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.p,{className:"dw-quote-text",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.9,delay:.58,ease:[.16,1,.3,1]},children:"CRAFTED WITH EMPATHY AND UNCOMPROMISING ARTISTRY.”"})})]},`dw-quote-${c}`)]}),l&&_jsxs("div",{className:"dw-mobile-wrapper",children:[_jsxs("div",{className:"dw-mobile-header",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:"dw-badge-pill",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,ease:[.16,1,.3,1]},children:[_jsx("span",{className:"dw-dot-white"}),_jsx("span",{className:"dw-badge-text",children:"Why Choose Us"}),_jsx("span",{className:"dw-dot-white"})]})}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h2,{className:"dw-mobile-headline-line",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.8,delay:.08,ease:[.16,1,.3,1]},children:"WHERE SURGICAL SCIENCE"})}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h2,{className:"dw-mobile-headline-line",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.8,delay:.18,ease:[.16,1,.3,1]},children:"MEETS TIMELESS FACIAL ART."})})]}),_jsx("div",{className:"dw-mobile-img-wrap",children:_jsx(motion.div,{className:"dw-mobile-img-inner",initial:{y:"100%"},animate:r?{y:"0%"}:{y:"100%"},transition:{duration:.88,delay:.2,ease:[.16,1,.3,1]},children:_jsx(motion.img,{src:"/images/why.png",alt:"Modern dental clinic laboratory and team workspace",initial:{scale:1.16,y:"-15%"},animate:r?{scale:1,y:"0%"}:{scale:1.16,y:"-15%"},transition:{duration:1.05,delay:.2,ease:[.16,1,.3,1]}})})}),_jsxs("div",{className:"dw-mobile-why-dental",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h3,{className:"dw-mobile-right-title",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.78,delay:.25,ease:[.16,1,.3,1]},children:"The Lumina Distinction"})}),_jsx("div",{className:"dw-mobile-list",children:x.map((e,t)=>_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsxs(motion.div,{className:"dw-mobile-feature-item",initial:{y:"120%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"120%",opacity:0},transition:{duration:.7,delay:.3+.08*t,ease:[.16,1,.3,1]},children:[_jsxs("div",{className:"dw-feature-num-group",children:[_jsx("span",{className:"dw-dot-white"}),_jsx("span",{className:"dw-feature-num",children:e.num})]}),_jsx("p",{className:"dw-mobile-feature-title",children:e.title})]})},t))})]}),_jsxs("div",{className:"dw-mobile-quote-box",children:[_jsx("div",{className:"dw-mobile-quote-divider"}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.p,{className:"dw-mobile-quote",initial:{y:"110%",opacity:0},animate:r?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.85,delay:.35,ease:[.16,1,.3,1]},children:"“Every smile we design is a bespoke masterpiece crafted with empathy and uncompromising artistry.”"})})]})]},`dw-mob-${c}`)]})}

export default n;