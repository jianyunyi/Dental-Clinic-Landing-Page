// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let o=({text:e,isHovered:t})=>_jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",height:"26px",lineHeight:"26px"},children:e.split("").map((e,s)=>{let o=" "===e;return _jsxs("span",{style:{display:"inline-block",position:"relative",overflow:"hidden",height:"26px",lineHeight:"26px",width:o?"0.34em":"auto"},children:[_jsx(motion.span,{style:{display:"inline-block",willChange:"transform"},animate:{y:t?"-100%":"0%"},transition:{duration:.28,delay:.015*s,ease:[.33,1,.68,1]},children:o?" ":e}),_jsx(motion.span,{style:{display:"inline-block",position:"absolute",left:0,top:0,willChange:"transform"},initial:{y:"100%"},animate:{y:t?"0%":"100%"},transition:{duration:.28,delay:.015*s,ease:[.33,1,.68,1]},children:o?" ":e})]},s)})}),a=()=>{let e=useRef(null),[a,r]=useState(()=>window.innerWidth/1600),[l,d]=useState(()=>window.innerWidth<860),[p,h]=useState(!1),[c,x]=useState(0),[m,g]=useState(!1),[f,b]=useState(!1),[u,w]=useState(!1);useEffect(()=>{let e=()=>{let e=window.innerWidth;r(e/1600),d(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let i=setTimeout(()=>{h(!0),x(e=>e+1)},50),t=new IntersectionObserver(([e])=>{e.isIntersecting?(h(!0),x(e=>e+1)):h(!1)},{threshold:.12});return e.current&&t.observe(e.current),()=>{clearTimeout(i),t.disconnect()}},[]);let F=["https://cdn.jiro.build/Dentis/Image/h1.png","https://cdn.jiro.build/Dentis/Image/h2.png","https://cdn.jiro.build/Dentis/Image/h3.png","https://cdn.jiro.build/Dentis/Image/h4.png","https://cdn.jiro.build/Dentis/Image/h5.png","https://cdn.jiro.build/Dentis/Image/h6.png","https://cdn.jiro.build/Dentis/Image/h7.png"],y=[...F,...F],j=["https://cdn.jiro.build/Dentis/Image/h5.png","https://cdn.jiro.build/Dentis/Image/h6.png","https://cdn.jiro.build/Dentis/Image/h7.png","https://cdn.jiro.build/Dentis/Image/h1.png","https://cdn.jiro.build/Dentis/Image/h2.png","https://cdn.jiro.build/Dentis/Image/h3.png","https://cdn.jiro.build/Dentis/Image/h4.png"],v=[...j,...j];return _jsxs("div",{ref:e,style:{width:"100%",height:l?"auto":"100vh",minHeight:"100vh",overflow:"hidden",position:"relative",backgroundColor:"#0F766E",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* Tooth Background Watermark */
        .dh-watermark {
          position: absolute;
          width: 764px;
          height: 764px;
          left: calc(50% - 764px / 2);
          top: calc(50% - 764px / 2);
          opacity: 0.04;
          pointer-events: none;
          z-index: 1;
        }

        /* Top Floating Navigation Pill */
        .dh-nav-pill {
          position: absolute;
          width: 384px;
          height: 46px;
          left: calc(50% - 384px / 2);
          top: 20px;
          background: #0C877E;
          border-radius: 8px;
          padding: 10px 16px;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 34px;
          z-index: 35;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .dh-logo-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 6px;
          text-decoration: none;
          cursor: pointer;
        }

        .dh-logo-icon {
          width: 22.43px;
          height: 22.43px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dh-logo-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 21px;
          line-height: 26px;
          color: #FFFFFF;
        }

        .dh-menu-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          width: 24px;
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          transition: transform 0.2s ease;
        }

        .dh-menu-btn:hover {
          transform: scale(1.08);
        }

        .dh-menu-line {
          width: 23px;
          height: 2px;
          background: #FFFFFF;
          border-radius: 1px;
          transition: all 0.25s ease;
        }

        /* Dropdown Menu */
        .dh-dropdown {
          position: absolute;
          width: 384px;
          left: calc(50% - 384px / 2);
          top: 74px;
          background: rgba(12, 135, 126, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          padding: 14px 16px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 40;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(12px);
        }

        .dh-dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 8px;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: background-color 0.2s ease, transform 0.15s ease;
          cursor: pointer;
        }

        .dh-dropdown-item:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: translateX(4px);
        }

        /* Left Column (Infinite Top-to-Bottom Slider) */
        .dh-col-left {
          position: absolute;
          width: 266px;
          left: 60px;
          top: -261px;
          z-index: 2;
          pointer-events: none;
        }

        /* Right Column (Infinite Bottom-to-Top Slider) */
        .dh-col-right {
          position: absolute;
          width: 266px;
          left: 1274px;
          top: -100px;
          z-index: 2;
          pointer-events: none;
        }

        .dh-slider-track {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          will-change: transform;
        }

        .dh-card {
          width: 266px;
          height: 302px;
          border-radius: 14px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.05);
          flex: none;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
        }

        .dh-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Center Content */
        .dh-center-group {
          position: absolute;
          width: 940px;
          height: 344px;
          left: calc(50% - 940px / 2);
          top: 186px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 30px;
          z-index: 10;
        }

        .dh-inner-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 40px;
          width: 940px;
          height: 344px;
        }

        .dh-text-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 14px;
          width: 940px;
          height: 260px;
        }

        /* Headline Containers for Top-to-Bottom Reveal Effect */
        .dh-title-line-wrap {
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          text-align: center;
          gap: 20px;
        }

        .dh-title-word-mask {
          display: inline-flex;
          overflow: hidden;
          vertical-align: top;
          margin: 0;
          flex-shrink: 0;
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 101.311px;
          line-height: 101px;
        }

        .dh-title-word {
          display: inline-block;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 101.311px;
          line-height: 101px;
          text-align: center;
          text-transform: uppercase;
          color: #F0FDFA;
          margin: 0;
          letter-spacing: -0.5px;
          will-change: transform, opacity;
        }

        .dh-subtitle-wrap {
          overflow: hidden;
          display: flex;
          justify-content: center;
          width: 940px;
        }

        .dh-subtitle {
          width: 620px;
          height: 44px;
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #F0FDFA;
          margin: 0;
          will-change: transform, opacity;
        }

        /* Action Buttons */
        .dh-cta-group {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          width: 393px;
          height: 44px;
        }

        .dh-btn-primary {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px 20px;
          gap: 5px;
          width: 193px;
          height: 44px;
          border-radius: 9999px;
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          text-decoration: none;
          box-sizing: border-box;
          cursor: pointer;
          transition: background-color 0.28s ease, color 0.28s ease, border-color 0.28s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .dh-btn-secondary {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px 20px;
          gap: 5px;
          width: 180px;
          height: 44px;
          border-radius: 9999px;
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.28s ease, color 0.28s ease, border-color 0.28s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* Bottom Badges */
        .dh-badges {
          position: absolute;
          width: 577px;
          height: 22px;
          left: calc(50% - 577px / 2);
          bottom: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 20px;
          z-index: 10;
        }

        .dh-badge-item-1 {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 5px;
          width: 181px;
          height: 22px;
        }

        .dh-badge-item-2 {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 5px;
          width: 159px;
          height: 22px;
        }

        .dh-badge-item-3 {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 5px;
          width: 197px;
          height: 22px;
        }

        .dh-badge-text {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          color: #FFFFFF;
        }

        .dh-check-icon {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ================= MOBILE LAYOUT STYLES ================= */
        .dh-mobile-wrapper {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 18px 16px 42px;
          box-sizing: border-box;
          position: relative;
          z-index: 5;
        }

        .dh-mobile-nav {
          width: 100%;
          max-width: 420px;
          height: 48px;
          background: #0C877E;
          border-radius: 10px;
          padding: 10px 16px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 40;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .dh-mobile-dropdown {
          position: absolute;
          width: 100%;
          top: 56px;
          left: 0;
          background: rgba(12, 135, 126, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          padding: 12px 14px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 50;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(14px);
        }

        .dh-mobile-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 22px;
          width: 100%;
          max-width: 480px;
          margin: 36px 0;
          z-index: 10;
        }

        .dh-mobile-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: clamp(40px, 10.5vw, 56px);
          line-height: 1.05;
          text-align: center;
          text-transform: uppercase;
          color: #F0FDFA;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .dh-mobile-subtitle {
          font-family: 'Inter Tight', sans-serif;
          font-size: 15px;
          line-height: 22px;
          text-align: center;
          color: #F0FDFA;
          opacity: 0.95;
          margin: 0;
          padding: 0 8px;
        }

        .dh-mobile-cta {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 320px;
          align-items: center;
        }

        .dh-mobile-gallery {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          width: 100%;
          max-width: 480px;
          padding: 6px 4px 12px;
          margin-bottom: 24px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .dh-mobile-gallery::-webkit-scrollbar {
          display: none;
        }

        .dh-mobile-card {
          width: 116px;
          height: 136px;
          border-radius: 12px;
          overflow: hidden;
          flex: none;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }
        .dh-mobile-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .dh-mobile-badges {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          width: 100%;
          z-index: 10;
        }

        .dh-mobile-badge-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 14px;
          color: #FFFFFF;
        }
      `}),!l&&_jsxs("header",{style:{width:"1600px",height:"770px",position:"absolute",transform:`scale(${a})`,transformOrigin:"center center",backgroundColor:"#0F766E",overflow:"hidden",color:"#FFFFFF",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box",userSelect:"none"},children:[_jsx("svg",{className:"dh-watermark",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M160,80 C110,80 70,130 70,200 C70,250 100,290 130,320 C155,345 160,390 180,450 C190,480 205,480 215,440 C230,380 240,320 250,320 C260,320 270,380 285,440 C295,480 310,480 320,450 C340,390 345,345 370,320 C400,290 430,250 430,200 C430,130 390,80 340,80 C290,80 265,115 250,115 C235,115 210,80 160,80 Z",stroke:"#FFFFFF",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),_jsxs(motion.nav,{className:"dh-nav-pill",initial:{opacity:0,y:-25},animate:p?{opacity:1,y:0}:{opacity:0,y:-25},transition:{duration:.6,ease:"easeOut"},children:[_jsxs("a",{href:"#",className:"dh-logo-wrap",children:[_jsx("span",{className:"dh-logo-icon",children:_jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M7 3C4.2 3 2 5.5 2 9C2 12.5 3.8 15 5.5 17.5C7.2 20 8.5 22 9.5 22C10.5 22 11.2 19 12 19C12.8 19 13.5 22 14.5 22C15.5 22 16.8 20 18.5 17.5C20.2 15 22 12.5 22 9C22 5.5 19.8 3 17 3C14.2 3 13 5.5 12 5.5C11 5.5 9.8 3 7 3Z",fill:"#FFFFFF"})})}),_jsx("span",{className:"dh-logo-text",children:"LUMINA"})]}),_jsxs("button",{className:"dh-menu-btn","aria-label":"Toggle menu",onClick:()=>w(e=>!e),children:[_jsx("span",{className:"dh-menu-line",style:{transform:u?"rotate(45deg) translate(5px, 6px)":"none"}}),_jsx("span",{className:"dh-menu-line",style:{opacity:+!u}}),_jsx("span",{className:"dh-menu-line",style:{transform:u?"rotate(-45deg) translate(5px, -6px)":"none"}})]})]},`nav-${c}`),_jsx(AnimatePresence,{children:u&&_jsxs(motion.div,{className:"dh-dropdown",initial:{opacity:0,y:-12,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.96},transition:{duration:.22,ease:"easeOut"},children:[_jsxs("a",{href:"#services",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"Aesthetic Services"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#about",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"The Studio"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#dentists",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"Our Specialists"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#reviews",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"Transformations"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#appointment",className:"dh-dropdown-item",style:{background:"rgba(255, 255, 255, 0.2)",fontWeight:600},onClick:()=>w(!1),children:[_jsx("span",{children:"Reserve Consultation"}),_jsx("span",{children:"✦"})]})]})}),_jsx("div",{className:"dh-col-left",children:_jsx(motion.div,{className:"dh-slider-track",animate:{y:["-50%","0%"]},transition:{y:{repeat:1/0,repeatType:"loop",duration:35,ease:"linear"}},children:y.map((e,t)=>_jsx("div",{className:"dh-card",children:_jsx("img",{src:e,alt:`Dental clinic procedure ${t+1}`})},`left-card-${t}`))})}),_jsx("div",{className:"dh-col-right",children:_jsx(motion.div,{className:"dh-slider-track",animate:{y:["0%","-50%"]},transition:{y:{repeat:1/0,repeatType:"loop",duration:35,ease:"linear"}},children:v.map((e,t)=>_jsx("div",{className:"dh-card",children:_jsx("img",{src:e,alt:`Dental patient care ${t+1}`})},`right-card-${t}`))})}),_jsx("div",{className:"dh-center-group",children:_jsxs("div",{className:"dh-inner-content",children:[_jsxs("div",{className:"dh-text-box",children:[_jsxs("h1",{style:{margin:0,padding:0,fontWeight:"normal",fontSize:"inherit",display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[_jsx("span",{className:"dh-title-line-wrap",children:["YOUR","SMILE"].map((e,t)=>_jsx("span",{className:"dh-title-word-mask",children:_jsx(motion.span,{className:"dh-title-word",initial:{y:"-120%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"-120%",opacity:0},transition:{duration:.82,delay:.1*t,ease:[.16,1,.3,1]},children:e})},t))}),_jsx("span",{className:"dh-title-line-wrap",children:["NEEDS","THE","BEST","CARE"].map((e,t)=>_jsx("span",{className:"dh-title-word-mask",children:_jsx(motion.span,{className:"dh-title-word",initial:{y:"-120%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"-120%",opacity:0},transition:{duration:.82,delay:.2+.08*t,ease:[.16,1,.3,1]},children:e})},t))})]}),_jsx("div",{className:"dh-subtitle-wrap",children:_jsx(motion.p,{className:"dh-subtitle",initial:{y:"-110%",opacity:0},animate:p?{y:"0%",opacity:.95}:{y:"-110%",opacity:0},transition:{duration:.75,delay:.55,ease:[.16,1,.3,1]},children:"From routine checkups to complete smile makeovers, our experienced dentists provide gentle, painless, and affordable treatment using modern technology."})})]},`text-box-${c}`),_jsxs(motion.div,{className:"dh-cta-group",initial:{opacity:0,y:25},animate:p?{opacity:1,y:0}:{opacity:0,y:25},transition:{duration:.7,delay:.65,ease:"easeOut"},children:[_jsx("a",{href:"#appointment",className:"dh-btn-primary",style:{backgroundColor:m?"#14B8A6":"#FFFFFF",color:m?"#FFFFFF":"#14B8A6",border:m?"1px solid #FFFFFF":"1px solid transparent",transform:m?"translateY(-2px)":"none",boxShadow:m?"0 8px 22px rgba(0, 0, 0, 0.18)":"0 4px 14px rgba(0, 0, 0, 0.08)"},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:_jsx(o,{text:"Book an Appointment",isHovered:m})}),_jsx("a",{href:"tel:+666890890890",className:"dh-btn-secondary",style:{backgroundColor:f?"#FFFFFF":"transparent",color:f?"#14B8A6":"#FFFFFF",borderColor:"#FFFFFF",borderWidth:"1px",borderStyle:"solid",transform:f?"translateY(-2px)":"none",boxShadow:f?"0 8px 22px rgba(0, 0, 0, 0.18)":"none"},onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:_jsx(o,{text:"+ 666 890 890 890",isHovered:f})})]},`cta-${c}`)]})}),_jsxs(motion.div,{className:"dh-badges",initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.7,delay:.75,ease:"easeOut"},children:[_jsxs("div",{className:"dh-badge-item-1",children:[_jsx("span",{className:"dh-check-icon",children:_jsx("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M1.5 6L5.5 10L13.5 2",stroke:"#FFFFFF",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),_jsx("span",{className:"dh-badge-text",children:"18+ Years of Medical Mastery"})]}),_jsxs("div",{className:"dh-badge-item-2",children:[_jsx("span",{className:"dh-check-icon",children:_jsx("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M1.5 6L5.5 10L13.5 2",stroke:"#FFFFFF",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),_jsx("span",{className:"dh-badge-text",children:"12,000+ Transformed Smiles"})]}),_jsxs("div",{className:"dh-badge-item-3",children:[_jsx("span",{className:"dh-check-icon",children:_jsx("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M1.5 6L5.5 10L13.5 2",stroke:"#FFFFFF",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),_jsx("span",{className:"dh-badge-text",children:"Ivy League Board Specialists"})]})]},`badges-${c}`)]}),l&&_jsxs("div",{className:"dh-mobile-wrapper",children:[_jsx("svg",{style:{position:"absolute",width:"320px",height:"320px",left:"calc(50% - 160px)",top:"180px",opacity:.04,pointerEvents:"none",zIndex:1},viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M160,80 C110,80 70,130 70,200 C70,250 100,290 130,320 C155,345 160,390 180,450 C190,480 205,480 215,440 C230,380 240,320 250,320 C260,320 270,380 285,440 C295,480 310,480 320,450 C340,390 345,345 370,320 C400,290 430,250 430,200 C430,130 390,80 340,80 C290,80 265,115 250,115 C235,115 210,80 160,80 Z",stroke:"#FFFFFF",strokeWidth:"12",strokeLinecap:"round",strokeLinejoin:"round"})}),_jsxs("nav",{className:"dh-mobile-nav",children:[_jsxs("a",{href:"#",className:"dh-logo-wrap",children:[_jsx("span",{className:"dh-logo-icon",children:_jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M7 3C4.2 3 2 5.5 2 9C2 12.5 3.8 15 5.5 17.5C7.2 20 8.5 22 9.5 22C10.5 22 11.2 19 12 19C12.8 19 13.5 22 14.5 22C15.5 22 16.8 20 18.5 17.5C20.2 15 22 12.5 22 9C22 5.5 19.8 3 17 3C14.2 3 13 5.5 12 5.5C11 5.5 9.8 3 7 3Z",fill:"#FFFFFF"})})}),_jsx("span",{className:"dh-logo-text",children:"LUMINA"})]}),_jsxs("button",{className:"dh-menu-btn","aria-label":"Toggle menu",onClick:()=>w(e=>!e),children:[_jsx("span",{className:"dh-menu-line",style:{transform:u?"rotate(45deg) translate(5px, 6px)":"none"}}),_jsx("span",{className:"dh-menu-line",style:{opacity:+!u}}),_jsx("span",{className:"dh-menu-line",style:{transform:u?"rotate(-45deg) translate(5px, -6px)":"none"}})]}),_jsx(AnimatePresence,{children:u&&_jsxs(motion.div,{className:"dh-mobile-dropdown",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:[_jsxs("a",{href:"#services",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"Aesthetic Services"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#about",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"The Studio"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#dentists",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"Our Specialists"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#reviews",className:"dh-dropdown-item",onClick:()=>w(!1),children:[_jsx("span",{children:"Transformations"}),_jsx("span",{children:"→"})]}),_jsxs("a",{href:"#appointment",className:"dh-dropdown-item",style:{background:"rgba(255, 255, 255, 0.2)",fontWeight:600},onClick:()=>w(!1),children:[_jsx("span",{children:"Reserve Consultation"}),_jsx("span",{children:"✦"})]})]})})]}),_jsxs("div",{className:"dh-mobile-hero",children:[_jsxs("h1",{className:"dh-mobile-title",children:["YOUR SMILE",_jsx("br",{}),"NEEDS THE BEST CARE"]}),_jsx("p",{className:"dh-mobile-subtitle",children:"From routine checkups to complete smile makeovers, our experienced dentists provide gentle, painless, and affordable treatment using modern technology."}),_jsxs("div",{className:"dh-mobile-cta",children:[_jsx("a",{href:"#appointment",className:"dh-btn-primary",style:{width:"100%",height:"46px",backgroundColor:m?"#14B8A6":"#FFFFFF",color:m?"#FFFFFF":"#14B8A6",border:m?"1px solid #FFFFFF":"1px solid transparent",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:_jsx(o,{text:"Book an Appointment",isHovered:m})}),_jsx("a",{href:"tel:+666890890890",className:"dh-btn-secondary",style:{width:"100%",height:"46px",backgroundColor:f?"#FFFFFF":"transparent",color:f?"#14B8A6":"#FFFFFF",borderColor:"#FFFFFF",borderWidth:"1px",borderStyle:"solid"},onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:_jsx(o,{text:"+ 666 890 890 890",isHovered:f})})]})]}),_jsx("div",{className:"dh-mobile-gallery",children:F.map((e,t)=>_jsx("div",{className:"dh-mobile-card",children:_jsx("img",{src:e,alt:"Dental care procedure"})},`mob-img-${t}`))}),_jsxs("div",{className:"dh-mobile-badges",children:[_jsxs("div",{className:"dh-mobile-badge-item",children:[_jsx("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M1.5 6L5.5 10L13.5 2",stroke:"#FFFFFF",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),_jsx("span",{children:"18+ Years of Medical Mastery"})]}),_jsxs("div",{className:"dh-mobile-badge-item",children:[_jsx("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M1.5 6L5.5 10L13.5 2",stroke:"#FFFFFF",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),_jsx("span",{children:"12,000+ Transformed Smiles"})]}),_jsxs("div",{className:"dh-mobile-badge-item",children:[_jsx("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_jsx("path",{d:"M1.5 6L5.5 10L13.5 2",stroke:"#FFFFFF",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),_jsx("span",{children:"Ivy League Board Specialists"})]})]})]})]})}

export default a;