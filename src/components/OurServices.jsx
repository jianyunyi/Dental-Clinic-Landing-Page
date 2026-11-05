// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let a=()=>{let e=useRef(null),[a,o]=useState(()=>window.innerWidth/1600),[n,r]=useState(()=>window.innerWidth<860),[l,d]=useState(0),[c,p]=useState(!1),[m,h]=useState(0);useEffect(()=>{let e=()=>{let e=window.innerWidth;o(e/1600),r(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let i=setTimeout(()=>{p(!0),h(e=>e+1)},50),t=new IntersectionObserver(([e])=>{e.isIntersecting?(p(!0),h(e=>e+1)):p(!1)},{threshold:.08});return e.current&&t.observe(e.current),()=>{clearTimeout(i),t.disconnect()}},[]);let x=[{num:"01",title:"General Checkup & Cleaning",desc:"Regular exams and professional cleaning to keep your teeth and gums healthy.",img:"https://cdn.jiro.build/Dentis/Image/s1.png"},{num:"02",title:"Root Canal Treatment",desc:"Save your natural tooth and relieve pain with gentle, modern root canal care.",img:"https://cdn.jiro.build/Dentis/Image/s2.png"},{num:"03",title:"Braces & Aligners",desc:"Straighten your teeth with traditional braces or clear, nearly invisible aligners.",img:"https://cdn.jiro.build/Dentis/Image/s3.png"},{num:"04",title:"Dental Implants",desc:"Replace missing teeth with strong, natural-looking implants that last for years.",img:"https://cdn.jiro.build/Dentis/Image/s4.png"},{num:"05",title:"Kids Dentistry",desc:"Friendly, patient care that helps children feel safe and build healthy habits.",img:"https://cdn.jiro.build/Dentis/Image/s5.png"}];return _jsxs("section",{ref:e,id:"services",style:{width:"100%",height:n?"auto":`${1423*a}px`,overflow:"hidden",position:"relative",backgroundColor:"#F0FDFA",boxSizing:"border-box"},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* Top Header Frame (Frame 318) */
        .ds-top-bar {
          position: absolute;
          width: 1440px;
          height: 118px;
          left: 80px;
          top: 80px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
          box-sizing: border-box;
        }

        .ds-top-row {
          width: 1440px;
          height: 100px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .ds-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          line-height: 80px;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0;
          letter-spacing: -0.2px;
          will-change: transform, opacity;
        }

        .ds-tooth-icon {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
        }

        .ds-tooth-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 6px 12px rgba(15, 118, 110, 0.08));
        }

        .ds-divider-top {
          width: 1440px;
          height: 1px;
          background: rgba(73, 73, 73, 0.25);
          flex: none;
        }

        /* Services List (Frame 2147226752) */
        .ds-list-container {
          position: absolute;
          width: 1440px;
          height: 1125px;
          left: 80px;
          top: 218px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
        }

        /* Single Service Row */
        .ds-item-block {
          width: 1440px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          box-sizing: border-box;
          border-radius: 8px;
          transition: background-color 0.25s ease;
          padding: 8px 12px;
          cursor: pointer;
        }

        .ds-item-block:hover {
          background-color: rgba(15, 118, 110, 0.025);
        }

        .ds-item-row {
          width: 1440px;
          height: 162px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        /* Left Info Column (Frame 314) */
        .ds-col-title {
          width: 380px;
          height: 162px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          flex: none;
        }

        .ds-meta-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
          width: 100%;
        }

        .ds-badge-num {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
        }

        .ds-num-dot {
          width: 8px;
          height: 8px;
          background: #14B8A6;
          border-radius: 2px;
          flex: none;
        }

        .ds-num-text {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          color: #00221F;
        }

        .ds-service-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 30px;
          line-height: 40px;
          text-transform: uppercase;
          color: #00221F;
          margin: 0;
          letter-spacing: -0.2px;
          transition: color 0.25s ease;
          will-change: transform, opacity;
        }

        .ds-item-block:hover .ds-service-title {
          color: #0F766E;
        }

        /* Bracketed Arrow [ ↗ ] (Frame 313) */
        .ds-arrow-bracket {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2px;
          width: 38px;
          height: 27px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #6B6B6B;
          transition: color 0.25s ease, transform 0.25s ease;
          will-change: transform, opacity;
        }

        .ds-arrow-bracket.active,
        .ds-item-block:hover .ds-arrow-bracket {
          color: #14B8A6;
          transform: translateX(4px);
        }

        .ds-arrow-bracket svg {
          transition: stroke 0.25s ease, transform 0.25s ease;
        }

        .ds-arrow-bracket.active svg,
        .ds-item-block:hover .ds-arrow-bracket svg {
          stroke: #14B8A6;
          transform: translate(2px, -2px);
        }

        /* Center Description Column */
        .ds-col-desc {
          width: 280px;
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #00221F;
          margin: 0;
          flex: none;
          will-change: transform, opacity;
        }

        /* Right Image Column */
        .ds-col-image {
          width: 273px;
          height: 162px;
          border-radius: 12px;
          overflow: hidden;
          flex: none;
          box-shadow: 0 10px 24px rgba(0, 34, 31, 0.07);
          background-color: #E6F4F1;
          will-change: transform, opacity;
        }

        .ds-col-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ds-item-block:hover .ds-col-image img {
          transform: scale(1.05);
        }

        .ds-row-divider {
          width: 1440px;
          height: 1px;
          background: rgba(73, 73, 73, 0.25);
          flex: none;
          will-change: transform;
        }

        /* ================= MOBILE SERVICES STYLES ================= */
        .ds-mobile-wrapper {
          width: 100%;
          padding: 50px 18px 70px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .ds-mobile-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(73, 73, 73, 0.25);
        }

        .ds-mobile-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 38px;
          line-height: 44px;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0;
        }

        .ds-mobile-tooth {
          width: 60px;
          height: 60px;
          flex: none;
        }
        .ds-mobile-tooth img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .ds-mobile-item {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(73, 73, 73, 0.2);
        }

        .ds-mobile-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .ds-mobile-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 26px;
          line-height: 32px;
          text-transform: uppercase;
          color: #00221F;
          margin: 0;
        }

        .ds-mobile-desc {
          font-family: 'Inter Tight', sans-serif;
          font-size: 15px;
          line-height: 22px;
          color: #00221F;
          margin: 0;
        }

        .ds-mobile-img {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 34, 31, 0.08);
        }
        .ds-mobile-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}),!n&&_jsxs("div",{style:{width:"1600px",height:"1423px",position:"absolute",top:0,left:0,transform:`scale(${a})`,transformOrigin:"top left",backgroundColor:"#F0FDFA",overflow:"hidden",color:"#00221F",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box",userSelect:"none"},children:[_jsxs("div",{className:"ds-top-bar",children:[_jsxs("div",{className:"ds-top-row",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h2,{className:"ds-heading",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.82,ease:[.16,1,.3,1]},children:"Our Services"})}),_jsx(motion.div,{className:"ds-tooth-icon",initial:{opacity:0,scale:.8,y:20},animate:c?{opacity:1,scale:1,y:0}:{opacity:0,scale:.8,y:20},transition:{duration:.75,delay:.2,ease:"easeOut"},children:_jsx("img",{src:"/images/tooth_3d.jpg",alt:"Healthy molar tooth 3D icon"})})]}),_jsx(motion.div,{className:"ds-divider-top",initial:{scaleX:0},animate:c?{scaleX:1}:{scaleX:0},transition:{duration:.8,delay:.25,ease:"easeOut"},style:{transformOrigin:"left"}})]},`top-bar-${m}`),_jsx("div",{className:"ds-list-container",children:x.map((e,t)=>{let a=l===t,o=.2+.12*t;return _jsxs("div",{className:"ds-item-block",onMouseEnter:()=>d(t),children:[_jsxs("div",{className:"ds-item-row",children:[_jsxs("div",{className:"ds-col-title",children:[_jsxs("div",{className:"ds-meta-group",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:"ds-badge-num",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,delay:o,ease:[.16,1,.3,1]},children:[_jsx("span",{className:"ds-num-dot"}),_jsx("span",{className:"ds-num-text",children:e.num})]})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h3,{className:"ds-service-title",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.8,delay:o+.05,ease:[.16,1,.3,1]},children:e.title})})]}),_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:`ds-arrow-bracket ${a?"active":""}`,initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,delay:o+.1,ease:[.16,1,.3,1]},children:[_jsx("span",{children:"["}),_jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:a?"#14B8A6":"#6B6B6B",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[_jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),_jsx("polyline",{points:"7 7 17 7 17 17"})]}),_jsx("span",{children:"]"})]})})]}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.p,{className:"ds-col-desc",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.8,delay:o+.08,ease:[.16,1,.3,1]},children:e.desc})}),_jsx(motion.div,{className:"ds-col-image",initial:{opacity:0,y:35},animate:c?{opacity:1,y:0}:{opacity:0,y:35},transition:{duration:.75,delay:o+.12,ease:"easeOut"},children:_jsx("img",{src:e.img,alt:e.title})})]}),_jsx(motion.div,{className:"ds-row-divider",initial:{scaleX:0},animate:c?{scaleX:1}:{scaleX:0},transition:{duration:.75,delay:o+.15,ease:"easeOut"},style:{transformOrigin:"left"}})]},`srv-${t}`)})},`list-${m}`)]}),n&&_jsxs("div",{className:"ds-mobile-wrapper",children:[_jsxs("div",{className:"ds-mobile-top-bar",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h2,{className:"ds-mobile-heading",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,ease:[.16,1,.3,1]},children:"Our Services"})}),_jsx("div",{className:"ds-mobile-tooth",children:_jsx("img",{src:"/images/tooth_3d.jpg",alt:"Tooth icon"})})]}),x.map((e,t)=>{let a=.15+.1*t;return _jsxs("div",{className:"ds-mobile-item",children:[_jsxs("div",{className:"ds-mobile-meta",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:"ds-badge-num",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,delay:a,ease:[.16,1,.3,1]},children:[_jsx("span",{className:"ds-num-dot"}),_jsx("span",{className:"ds-num-text",children:e.num})]})}),_jsxs("div",{className:"ds-arrow-bracket active",children:[_jsx("span",{children:"["}),_jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#14B8A6",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[_jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),_jsx("polyline",{points:"7 7 17 7 17 17"})]}),_jsx("span",{children:"]"})]})]}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h3,{className:"ds-mobile-title",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,delay:a+.05,ease:[.16,1,.3,1]},children:e.title})}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.p,{className:"ds-mobile-desc",initial:{y:"110%",opacity:0},animate:c?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,delay:a+.08,ease:[.16,1,.3,1]},children:e.desc})}),_jsx(motion.div,{className:"ds-mobile-img",initial:{opacity:0,y:25},animate:c?{opacity:1,y:0}:{opacity:0,y:25},transition:{duration:.65,delay:a+.12,ease:"easeOut"},children:_jsx("img",{src:e.img,alt:e.title})})]},`mob-srv-${t}`)})]},`mob-wrap-${m}`)]})}

export default a;