// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let r=()=>{let e,r,o,s,l=useRef(null),[d,p]=useState(()=>window.innerWidth/1600),[m,c]=useState(()=>window.innerWidth<860),[h,x]=useState(!1),[g,f]=useState(0),[b,u]=useState(null);useEffect(()=>{let e=()=>{let e=window.innerWidth;p(e/1600),c(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let e=setTimeout(()=>{x(!0),f(e=>e+1)},60),t=new IntersectionObserver(([e])=>{e.isIntersecting&&(x(!0),f(e=>e+1))},{threshold:.1});return l.current&&t.observe(l.current),()=>{clearTimeout(e),t.disconnect()}},[]);let y=[{id:1,name:"Julianne Montgomery",role:"Vogue Fashion Director",rating:5,treatment:"Clear Aligners",quote:"“Straightened my teeth without anyone noticing I had aligners on. Modern dental care at its best.”",left:80.5,top:264,width:190.85,height:190.85,zIndex:2,imageSrc:"https://cdn.jiro.build/Dentis/Image/r1.png"},{id:2,name:"Alexander Sterling",role:"Architectural Digest Partner",rating:5,treatment:"Preventive & Scaling",quote:"“Completely pain-free cleaning and checkup. The staff made me feel at home from the first minute.”",left:80.5,top:468.21,width:148.87,height:148.87,zIndex:3,imageSrc:"https://cdn.jiro.build/Dentis/Image/r2.png"},{id:3,name:"Dominic Zhao",role:"Fintech Managing Director",rating:5,treatment:"Gentle Dentistry",quote:"“No stress, no discomfort. The team explained every step and made my visit a breeze.”",left:266.58,top:347.02,width:190.85,height:190.85,zIndex:4,imageSrc:"https://cdn.jiro.build/Dentis/Image/r3.png"},{id:4,name:"Noah Davis",role:"University Student",rating:5,treatment:"Cavity Prevention",quote:"“Seamless visit from check-in to finish. Everything was explained clearly and painlessly.”",left:227.46,top:520.7,width:104.97,height:104.97,zIndex:6,imageSrc:"https://cdn.jiro.build/Dentis/Image/r4.png"},{id:5,name:"Daniel Craig",role:"Business Consultant",rating:5,treatment:"Modern Orthodontics",quote:"“Braces were a big decision, but the team made the process easy and comfortable. My teeth look great!”",left:323.5,top:550.71,width:165.09,height:165.09,zIndex:5,imageSrc:"https://cdn.jiro.build/Dentis/Image/r10.mp4"},{id:6,name:"Lucas Miller",role:"Product Designer",rating:5,treatment:"Smile Makeover",quote:"“Dr. Ghusali and the surgical team restored my smile completely. Life-changing confidence booster!”",left:465.07,top:340.34,width:341.63,height:341.63,zIndex:1,imageSrc:"https://cdn.jiro.build/Dentis/Image/r5.png"},{id:7,name:"Marcus Jones",role:"Fitness Coach",rating:5,treatment:"Laser Whitening",quote:"“Three shades whiter in just 45 minutes! I’m getting compliments on my smile everywhere.”",left:786.66,top:284.99,width:190.85,height:190.85,zIndex:3,imageSrc:"https://cdn.jiro.build/Dentis/Image/r6.png"},{id:8,name:"Maya Patel",role:"Marketing Lead",rating:5,treatment:"Cosmetic Dentistry",quote:"“The attention to detail and facial symmetry is incredible. I can’t stop smiling for photos now!”",left:795.25,top:492.07,width:243.34,height:243.34,zIndex:4,imageSrc:"https://cdn.jiro.build/Dentis/Image/r7.png"},{id:9,name:"Leo & Family",role:"Pediatric Care",rating:5,treatment:"Family Dentistry",quote:"“Our kids actually look forward to visiting the dentist! Gentle, fun, and caring doctors.”",left:970.84,top:359.43,width:188.95,height:188.95,zIndex:3,imageSrc:"https://cdn.jiro.build/Dentis/Image/r8.png"},{id:10,name:"Jin Woo",role:"Photographer",rating:5,treatment:"Full Smile Restoration",quote:"“The staff made me feel so comfortable, and my treatment was painless and efficient. Truly world-class care!”",left:1146.42,top:361.33,width:374.08,height:374.08,zIndex:2,imageSrc:"https://cdn.jiro.build/Dentis/Image/r9.mp4"}];return _jsxs("section",{ref:l,id:"testimonials",style:{width:"100%",height:m?"auto":`${815*d}px`,overflow:"hidden",position:"relative",backgroundColor:"#0F766E",boxSizing:"border-box",order:8,flex:"none",flexGrow:0},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* ================= DESKTOP STYLES (Fixed 1600px Canvas) ================= */

        /* Top Header Frame (Frame 2147226796) */
        .tm-header-box {
          position: absolute;
          width: 587px;
          height: 144px;
          left: calc(50% - 587px/2 + 0.5px);
          top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 20px;
          box-sizing: border-box;
          z-index: 20;
        }

        /* Pill Badge (Frame 2147226743) */
        .tm-badge-pill {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          gap: 10px;
          width: 128px;
          height: 44px;
          border: 1px solid #FFFFFF;
          border-radius: 9999px;
          background: transparent;
          cursor: default;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tm-badge-pill:hover {
          background-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .tm-badge-text {
          width: 86px;
          height: 22px;
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #FFFFFF;
          white-space: nowrap;
          user-select: none;
        }

        /* Heading (Smiles That Speak for Us) */
        .tm-heading-text {
          width: 587px;
          height: 80px;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          line-height: 80px;
          text-align: center;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.2px;
          white-space: nowrap;
        }

        /* Desktop Canvas Container for Avatars (Group 113 Area) */
        .tm-canvas-stage {
          position: absolute;
          width: 1600px;
          height: 815px;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        /* Individual Animated Circular Avatar Container */
        .tm-avatar-node {
          position: absolute;
          border-radius: 50%;
          cursor: pointer;
          pointer-events: auto;
          user-select: none;
          box-shadow: none;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          overflow: hidden;
        }

        .tm-avatar-node:hover {
          transform: scale(1.04) translateY(-3px) !important;
          box-shadow: 0 0 0 1px #FFFFFF !important;
          z-index: 50 !important;
        }

        .tm-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 50%;
        }

        /* Luxury Floating Testimonial Popover */
        .tm-popover-card {
          position: absolute;
          width: 320px;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 14px 34px rgba(0, 24, 22, 0.18);
          z-index: 100;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-sizing: border-box;
        }

        .tm-popover-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tm-popover-name {
          font-family: 'Inter Tight', sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #0F766E;
          margin: 0;
        }

        .tm-popover-stars {
          color: #F59E0B;
          font-size: 13px;
          letter-spacing: 2px;
        }

        .tm-popover-treatment {
          display: inline-block;
          font-family: 'Inter Tight', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #0D9488;
          background: rgba(15, 118, 110, 0.08);
          padding: 3px 10px;
          border-radius: 9999px;
          align-self: flex-start;
        }

        .tm-popover-quote {
          font-family: 'Inter Tight', sans-serif;
          font-size: 14px;
          line-height: 20px;
          color: #334155;
          margin: 0;
          font-style: normal;
          font-weight: 400;
        }

        /* ================= MOBILE STYLES (< 860px) ================= */
        .tm-mobile-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 60px 18px 70px;
          box-sizing: border-box;
          background: #0F766E;
        }

        .tm-mobile-badge {
          box-sizing: border-box;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 8px 18px;
          border: 1px solid #FFFFFF;
          border-radius: 9999px;
          background: transparent;
          font-family: 'Inter Tight', sans-serif;
          font-size: 15px;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        .tm-mobile-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(32px, 8.5vw, 46px);
          line-height: 1.15;
          text-align: center;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0 0 28px 0;
          letter-spacing: -0.2px;
        }

        /* Mobile Avatars Flow */
        .tm-mobile-avatars-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          max-width: 520px;
          margin-bottom: 28px;
        }

        .tm-mobile-avatar-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .tm-mobile-avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Mobile Review Slider Cards */
        .tm-mobile-reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 480px;
        }

        .tm-mobile-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}),!m&&_jsxs("div",{style:{width:"1600px",height:"815px",position:"absolute",top:0,left:0,transform:`scale(${d})`,transformOrigin:"top left",backgroundColor:"#0F766E",overflow:"hidden",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box"},children:[_jsxs("div",{className:"tm-header-box",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"tm-badge-pill",initial:{y:"110%",opacity:0},animate:h?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,ease:[.16,1,.3,1]},children:_jsx("span",{className:"tm-badge-text",children:"Testimonials"})})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"tm-heading-text",initial:{y:"110%",opacity:0},animate:h?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.82,delay:.1,ease:[.16,1,.3,1]},children:"Stories From Our Patients"})})]},`tm-hdr-${g}`),_jsxs("div",{className:"tm-canvas-stage",children:[y.map((e,i)=>_jsx(motion.div,{className:"tm-avatar-node",style:{left:`${e.left}px`,top:`${e.top}px`,width:`${e.width}px`,height:`${e.height}px`,zIndex:e.zIndex},initial:{opacity:0,y:160,scale:.82},animate:h?{opacity:1,y:0,scale:1}:{opacity:0,y:160,scale:.82},transition:{duration:.85,delay:.2+.085*i,ease:[.16,1,.3,1]},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),children:e.imageSrc.endsWith(".mp4")?_jsx("video",{src:e.imageSrc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"tm-avatar-img"}):_jsx("img",{src:e.imageSrc,alt:e.name,className:"tm-avatar-img"})},`avatar-${e.id}-${g}`)),_jsx(AnimatePresence,{children:b&&(r=Math.max(24,Math.min(1256,(e=b.left+b.width/2)-160)),o=Math.max(20,b.top-170),s=Math.max(20,Math.min(300,e-r)),_jsxs(motion.div,{className:"tm-popover-card",initial:{opacity:0,scale:.95,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:8},transition:{duration:.2,ease:[.16,1,.3,1]},style:{left:`${r}px`,top:`${o}px`},children:[_jsxs("div",{className:"tm-popover-header",children:[_jsxs("div",{children:[_jsx("h4",{className:"tm-popover-name",children:b.name}),_jsx("span",{style:{fontSize:"12px",color:"#64748B"},children:b.role})]}),_jsx("div",{className:"tm-popover-stars",children:"★★★★★"})]}),_jsx("span",{className:"tm-popover-treatment",children:b.treatment}),_jsx("p",{className:"tm-popover-quote",children:b.quote}),_jsx("div",{style:{position:"absolute",bottom:"-6px",left:`${s}px`,transform:"translateX(-50%)",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #FFFFFF"}})]},`popover-${b.id}`))})]})]}),m&&_jsxs("div",{className:"tm-mobile-wrap",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"tm-mobile-badge",initial:{y:"110%",opacity:0},animate:h?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,ease:[.16,1,.3,1]},children:"Testimonials"})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"tm-mobile-heading",initial:{y:"110%",opacity:0},animate:h?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,delay:.1,ease:[.16,1,.3,1]},children:"Stories From Our Patients"})}),_jsx("div",{className:"tm-mobile-avatars-row",children:y.map((e,i)=>_jsx(motion.div,{className:"tm-mobile-avatar-circle",initial:{opacity:0,y:40,scale:.8},animate:h?{opacity:1,y:0,scale:1}:{opacity:0,y:40,scale:.8},transition:{duration:.6,delay:.15+.06*i,ease:[.16,1,.3,1]},children:e.imageSrc.endsWith(".mp4")?_jsx("video",{src:e.imageSrc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover"}}):_jsx("img",{src:e.imageSrc,alt:e.name})},`mob-avatar-${e.id}-${g}`))}),_jsx("div",{className:"tm-mobile-reviews-list",children:[y[5],y[7],y[9]].map(e=>_jsxs("div",{className:"tm-mobile-card",children:[_jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_jsxs("div",{children:[_jsx("h4",{style:{margin:0,fontSize:"16px",color:"#0F766E",fontWeight:600,fontFamily:"Inter Tight"},children:e.name}),_jsx("span",{style:{fontSize:"13px",color:"#64748B"},children:e.treatment})]}),_jsx("span",{style:{color:"#F59E0B",fontSize:"13px"},children:"★★★★★"})]}),_jsx("p",{style:{margin:"6px 0 0",fontSize:"14px",lineHeight:"20px",color:"#334155",fontStyle:"normal",fontWeight:400,fontFamily:"Inter Tight"},children:e.quote})]},e.id))})]},`tm-mob-${g}`)]})}

export default r;