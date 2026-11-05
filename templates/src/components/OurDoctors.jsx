// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let r=()=>{let e=useRef(null),[r,a]=useState(()=>window.innerWidth/1600),[n,d]=useState(()=>window.innerWidth<860),[s,l]=useState(!1),[c,p]=useState(0);useEffect(()=>{let e=()=>{let e=window.innerWidth;a(e/1600),d(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let i=setTimeout(()=>{l(!0),p(e=>e+1)},60),t=new IntersectionObserver(([e])=>{e.isIntersecting&&(l(!0),p(e=>e+1))},{threshold:.05});return e.current&&t.observe(e.current),()=>{clearTimeout(i),t.disconnect()}},[]);let m=[{name:"Dr. Elena Vance, DDS",role:"Director of Aesthetic Dentistry",bio:"Leads our clinic with 10+ years of experience in advanced and restorative dentistry. Specializes in braces and clear aligners for healthier smiles.",img:"https://cdn.jiro.build/Dentis/Image/d1.png"},{name:"Dr. Marcus Chen, DMD, MD",role:"Chief of Maxillofacial & Implants",bio:"Specializes in modern clear aligners, orthodontic realignment, and aesthetic smile symmetry with over 8 years of clinical expertise.",img:"https://cdn.jiro.build/Dentis/Image/d2.png"},{name:"Dr. Sophia Laurent, BDS",role:"Implant & Surgical Care",bio:"Board-certified oral surgeon specializing in dental implants, bone grafting, and gentle surgical restoration for complex cases.",img:"https://cdn.jiro.build/Dentis/Image/d3.png"},{name:"Dr. Julian Hayes, DDS",role:"Director of Clear Aligners",bio:"Dedicated pediatric dentist skilled in gentle behavioral care, preventive treatments, and creating joyful experiences for young smiles.",img:"https://cdn.jiro.build/Dentis/Image/d4.png"},{name:"Dr. Julian Thorne",role:"Cosmetic Dentist",bio:"Renowned cosmetic dental specialist focused on bespoke porcelain veneers, digital smile design, and advanced whitening therapies.",img:"https://cdn.jiro.build/Dentis/Image/d5.png"},{name:"Dr. Sophia Rossi",role:"Endodontics & Care",bio:"Endodontic expert specializing in microscopic root canal therapies, emergency tooth relief, and saving natural teeth with zero pain.",img:"https://cdn.jiro.build/Dentis/Image/d6.png"}];return _jsxs("section",{ref:e,id:"dentists",style:{width:"100%",height:n?"auto":`${1360*r}px`,overflow:"hidden",position:"relative",backgroundColor:"#F0FDFA",boxSizing:"border-box"},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* ================= DESKTOP STYLES (Fixed 1600px Canvas) ================= */
        
        /* Top Header Frame (Frame 2147226796) */
        .dd-header-box {
          position: absolute;
          width: 900px;
          height: auto;
          left: calc(50% - 450px);
          top: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 16px;
          box-sizing: border-box;
          z-index: 5;
        }

        /* Pill Badge (Frame 2147226743) */
        .dd-badge-pill {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          gap: 10px;
          width: 126px;
          height: 44px;
          border: 1px solid #0F766E;
          border-radius: 9999px;
          background: transparent;
          cursor: default;
          transition: all 0.25s ease;
        }

        .dd-badge-pill:hover {
          background-color: rgba(15, 118, 110, 0.06);
          transform: translateY(-1px);
        }

        .dd-badge-text {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #0F766E;
        }

        /* Main Heading (Instrument Serif) */
        .dd-heading-text {
          width: 100%;
          max-width: 900px;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 58px;
          line-height: 72px;
          text-align: center;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0;
          letter-spacing: -0.2px;
          white-space: nowrap;
          will-change: transform, opacity;
        }

        /* Doctors Grid Container (6 Cards) */
        .dd-grid-container {
          position: absolute;
          width: 1320px;
          left: 140px;
          top: 364px;
          display: grid;
          grid-template-columns: repeat(3, 420px);
          grid-template-rows: repeat(2, 398px);
          gap: 30px 30px;
          box-sizing: border-box;
        }

        /* Fixed wrapper maintaining grid stability */
        .dd-card-wrapper {
          width: 420px;
          height: 398px;
          position: relative;
        }

        /* Doctor Card (Expands / Drops downwards on hover) */
        .dd-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 420px;
          background: #FFFFFF;
          border-radius: 30px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          z-index: 10;
          display: flex;
          flex-direction: column;
        }

        .dd-card-wrapper:hover .dd-card {
          z-index: 50;
          transform: translateY(-4px);
        }

        /* Card Top Image Box */
        .dd-card-image-wrap {
          width: 420px;
          height: 302px;
          overflow: hidden;
          background-color: #E6F4F1;
          position: relative;
          flex: none;
        }

        .dd-card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dd-card-wrapper:hover .dd-card-image-wrap img {
          transform: scale(1.035);
        }

        /* Dropping Info Area */
        .dd-card-drop-panel {
          width: 420px;
          background: #FFFFFF;
          padding: 18px 24px 22px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Expandable Bio Text */
        .dd-card-bio-wrap {
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-8px);
          transition: max-height 0.42s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.35s ease,
                      transform 0.42s cubic-bezier(0.16, 1, 0.3, 1),
                      margin 0.35s ease;
          margin-bottom: 0px;
        }

        .dd-card-wrapper:hover .dd-card-bio-wrap {
          max-height: 100px;
          opacity: 1;
          transform: translateY(0px);
          margin-bottom: 20px;
        }

        .dd-card-bio-text {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #000000;
          margin: 0;
        }

        /* Bottom Meta Row */
        .dd-card-meta-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .dd-doctor-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .dd-doctor-name {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 28px;
          color: #000000;
          margin: 0;
          transition: color 0.25s ease;
        }

        .dd-card-wrapper:hover .dd-doctor-name {
          color: #0F766E;
        }

        .dd-doctor-role {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #000000;
          margin: 0;
        }

        .dd-book-btn {
          font-family: 'Inter Tight', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #0F766E;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 8px;
          transition: all 0.25s ease;
        }

        .dd-book-btn:hover {
          color: #00514A;
          background-color: rgba(15, 118, 110, 0.08);
          transform: translateX(3px);
        }

        .dd-book-btn svg {
          transition: transform 0.25s ease;
        }

        .dd-book-btn:hover svg {
          transform: translateX(2px);
        }

        /* ================= MOBILE STYLES (< 860px) ================= */
        .dd-mobile-wrapper {
          width: 100%;
          padding: 56px 20px 72px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
          background-color: #F0FDFA;
        }

        .dd-mobile-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
          width: 100%;
          max-width: 480px;
        }

        .dd-mobile-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(34px, 8.5vw, 48px);
          line-height: 1.12;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .dd-mobile-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          max-width: 440px;
        }

        .dd-mobile-card {
          width: 100%;
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .dd-mobile-card-img {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background-color: #E6F4F1;
        }

        .dd-mobile-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        .dd-mobile-drop-panel {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
        }

        .dd-mobile-bio-text {
          font-family: 'Inter Tight', sans-serif;
          font-size: 15px;
          line-height: 22px;
          color: #000000;
          margin: 0 0 16px 0;
        }

        .dd-mobile-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .dd-mobile-name {
          font-family: 'Inter Tight', sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: #000000;
          margin: 0 0 2px;
        }

        .dd-mobile-role {
          font-family: 'Inter Tight', sans-serif;
          font-size: 14px;
          color: #000000;
          margin: 0;
        }

        .dd-mobile-book {
          font-family: 'Inter Tight', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #0F766E;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background-color: rgba(15, 118, 110, 0.08);
          border-radius: 8px;
        }
      `}),!n&&_jsxs("div",{style:{width:"1600px",height:"1360px",position:"absolute",top:0,left:0,transform:`scale(${r})`,transformOrigin:"top left",backgroundColor:"#F0FDFA",overflow:"hidden",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box",userSelect:"none"},children:[_jsxs("div",{className:"dd-header-box",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"dd-badge-pill",initial:{y:"110%",opacity:0},animate:s?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,ease:[.16,1,.3,1]},children:_jsx("span",{className:"dd-badge-text",children:"Our Doctors"})})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"dd-heading-text",initial:{y:"110%",opacity:0},animate:s?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.82,delay:.08,ease:[.16,1,.3,1]},children:"MASTER CLINICIANS"})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"dd-heading-text",initial:{y:"110%",opacity:0},animate:s?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.82,delay:.18,ease:[.16,1,.3,1]},children:"BEHIND YOUR TRANSFORMATION"})})]},`hdr-${c}`),_jsx("div",{className:"dd-grid-container",children:m.map((e,t)=>{let r=Math.floor(t/3),a=t%3;return _jsx(motion.div,{className:"dd-card-wrapper",initial:{opacity:0,y:35},animate:s?{opacity:1,y:0}:{opacity:0,y:35},transition:{duration:.75,delay:.15+.15*r+.08*a,ease:[.16,1,.3,1]},children:_jsxs("div",{className:"dd-card",children:[_jsx("div",{className:"dd-card-image-wrap",children:_jsx("img",{src:e.img,alt:e.name})}),_jsxs("div",{className:"dd-card-drop-panel",children:[_jsx("div",{className:"dd-card-bio-wrap",children:_jsx("p",{className:"dd-card-bio-text",children:e.bio})}),_jsxs("div",{className:"dd-card-meta-row",children:[_jsxs("div",{className:"dd-doctor-meta",children:[_jsx("h3",{className:"dd-doctor-name",children:e.name}),_jsx("p",{className:"dd-doctor-role",children:e.role})]}),_jsxs("a",{href:"#appointment",className:"dd-book-btn",children:[_jsx("span",{children:"Book Now"}),_jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[_jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),_jsx("polyline",{points:"7 7 17 7 17 17"})]})]})]})]})]})},t)})},`grid-${c}`)]}),n&&_jsxs("div",{className:"dd-mobile-wrapper",children:[_jsxs("div",{className:"dd-mobile-header",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"dd-badge-pill",initial:{y:"110%",opacity:0},animate:s?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,ease:[.16,1,.3,1]},children:_jsx("span",{className:"dd-badge-text",children:"Our Doctors"})})}),_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.h2,{className:"dd-mobile-title",initial:{y:"110%",opacity:0},animate:s?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,delay:.1,ease:[.16,1,.3,1]},children:["MASTER CLINICIANS",_jsx("br",{}),"BEHIND YOUR TRANSFORMATION"]})})]}),_jsx("div",{className:"dd-mobile-grid",children:m.map((e,t)=>_jsxs(motion.div,{className:"dd-mobile-card",initial:{opacity:0,y:25},animate:s?{opacity:1,y:0}:{opacity:0,y:25},transition:{duration:.65,delay:.1+t%3*.08,ease:[.16,1,.3,1]},children:[_jsx("div",{className:"dd-mobile-card-img",children:_jsx("img",{src:e.img,alt:e.name})}),_jsxs("div",{className:"dd-mobile-drop-panel",children:[_jsx("p",{className:"dd-mobile-bio-text",children:e.bio}),_jsxs("div",{className:"dd-mobile-meta-row",children:[_jsxs("div",{children:[_jsx("h3",{className:"dd-mobile-name",children:e.name}),_jsx("p",{className:"dd-mobile-role",children:e.role})]}),_jsxs("a",{href:"#appointment",className:"dd-mobile-book",children:[_jsx("span",{children:"Book Now"}),_jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[_jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),_jsx("polyline",{points:"7 7 17 7 17 17"})]})]})]})]})]},t))},`mob-grid-${c}`)]},`mob-wrap-${c}`)]})}

export default r;