// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let a=({text:e,isHovered:t})=>_jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",height:"26px",lineHeight:"26px"},children:e.split("").map((e,a)=>{let n=" "===e;return _jsxs("span",{style:{display:"inline-block",position:"relative",overflow:"hidden",height:"26px",lineHeight:"26px",width:n?"0.34em":"auto"},children:[_jsx(motion.span,{style:{display:"inline-block",willChange:"transform"},animate:{y:t?"-100%":"0%"},transition:{duration:.28,delay:.015*a,ease:[.33,1,.68,1]},children:n?" ":e}),_jsx(motion.span,{style:{display:"inline-block",position:"absolute",left:0,top:0,willChange:"transform"},initial:{y:"100%"},animate:{y:t?"0%":"100%"},transition:{duration:.28,delay:.015*a,ease:[.33,1,.68,1]},children:n?" ":e})]},a)})}),n=()=>{let e=useRef(null),[n,o]=useState(()=>window.innerWidth/1600),[s,l]=useState(()=>window.innerWidth<860),[p,d]=useState(!1),[c,x]=useState(0),[m,h]=useState(null);useEffect(()=>{let e=()=>{let e=window.innerWidth;o(e/1600),l(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let i=setTimeout(()=>{d(!0),x(e=>e+1)},60),t=new IntersectionObserver(([e])=>{e.isIntersecting&&(d(!0),x(e=>e+1))},{threshold:.1});return e.current&&t.observe(e.current),()=>{clearTimeout(i),t.disconnect()}},[]);let g=[{id:"basic-checkup",name:"Preventive Wellness Suite",price:"$49",period:"/visit",description:"Comprehensive oral cancer screening, 3D digital bite mapping, and spa airflow polish.",btnText:"Book Now",isDark:!1,btnWidth:"113px",features:["Comprehensive 3D bite & posture analysis","Spa-level Swiss airflow biofilm polish","Ultra-low dose HD panoramic digital radiography","Personalized oral microbiome & nutritional regimen","1 Content Calendar"]},{id:"family-care",name:"Family Care",price:"$999",period:"/ Year",description:"Year-round care for up to 4 family members.",btnText:"Book Now",isDark:!1,btnWidth:"113px",features:["Fluoride care for kids","10–15% off all treatments","Digital X-rays","Spa-level Swiss airflow biofilm polish","2 checkups a year"]},{id:"smile-makeover",name:"Smile Makeover",price:"$1999",period:"/ package",description:"A brighter, more confident smile, start to finish.",btnText:"Book an Appointment",isDark:!0,btnWidth:"193px",features:["Personalized oral microbiome & nutritional regimen","Smile design consultation","Spa-level Swiss airflow biofilm polish","Professional teeth whitening","Follow-up visit included"]}];return _jsxs("section",{ref:e,id:"pricing",style:{width:"100%",height:s?"auto":`${1200*n}px`,overflow:"hidden",position:"relative",backgroundColor:"#F0FDFA",boxSizing:"border-box",order:7,flex:"none",flexGrow:0},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* ================= DESKTOP STYLES (Fixed 1600px Canvas) ================= */

        /* Header Frame (Frame 2147226796) */
        .pr-header-box {
          position: absolute;
          width: 340px;
          height: 144px;
          left: calc(50% - 340px/2 + 0.5px);
          top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 20px;
          box-sizing: border-box;
          z-index: 5;
        }

        /* Pill Badge (Frame 2147226743) */
        .pr-badge-pill {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          gap: 10px;
          width: 93px;
          height: 44px;
          border: 1px solid #0F766E;
          border-radius: 9999px;
          background: transparent;
          cursor: default;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pr-badge-pill:hover {
          background-color: rgba(15, 118, 110, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(15, 118, 110, 0.1);
        }

        .pr-badge-text {
          width: 51px;
          height: 22px;
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #0F766E;
          white-space: nowrap;
          user-select: none;
        }

        /* Heading (Honest Prices) */
        .pr-heading-text {
          width: 340px;
          height: 80px;
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          line-height: 80px;
          text-align: center;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0;
          letter-spacing: -0.2px;
          white-space: nowrap;
        }

        /* Stacked Cards Container (Frame 454) */
        .pr-cards-stack {
          position: absolute;
          width: 899px;
          height: 856px;
          left: calc(50% - 899px/2 + 0.5px);
          top: 264px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          box-sizing: border-box;
        }

        /* Pricing Card */
        .pr-card {
          width: 899px;
          height: 272px;
          border-radius: 24px;
          position: relative;
          box-sizing: border-box;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pr-card-light {
          background: #FFFFFF;
          box-shadow: 0 8px 30px rgba(15, 118, 110, 0.05), 0 0 0 1px rgba(15, 118, 110, 0.04);
        }

        .pr-card-light:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px -10px rgba(15, 118, 110, 0.12), 0 0 0 1px rgba(15, 118, 110, 0.08);
        }

        .pr-card-dark {
          background: #0F766E;
          box-shadow: 0 16px 40px -10px rgba(15, 118, 110, 0.28);
        }

        .pr-card-dark:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 55px -10px rgba(15, 118, 110, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.15);
        }

        /* Left Content Block (Frame 448) */
        .pr-left-block {
          position: absolute;
          left: 30px;
          top: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          box-sizing: border-box;
        }

        .pr-tier-name {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          text-transform: capitalize;
          margin: 0;
        }

        .pr-tier-name-light {
          color: #0F766E;
        }

        .pr-tier-name-dark {
          color: #FFFFFF;
        }

        /* Price & Description Group (Frame 447) */
        .pr-price-desc-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 16px;
        }

        /* Price Row (Frame 446) */
        .pr-price-row {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-end;
          padding: 0px;
          height: 50px;
        }

        .pr-amount {
          font-family: 'Goudy Old Style', 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 50px;
          letter-spacing: -0.02em;
        }

        .pr-amount-light {
          color: #0F766E;
        }

        .pr-amount-dark {
          color: #FFFFFF;
        }

        .pr-period {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 6px;
          margin-left: 2px;
          text-transform: capitalize;
        }

        .pr-period-light {
          color: #698682;
        }

        .pr-period-dark {
          color: #A9C4C1;
        }

        .pr-desc {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          margin: 0;
        }

        .pr-desc-light {
          color: #0F766E;
        }

        .pr-desc-dark {
          color: #FFFFFF;
        }

        /* Action Buttons with Header-Style Rolling Animation (Frame 126 / Frame 454) */
        .pr-btn {
          position: absolute;
          left: 30px;
          top: 194px;
          height: 44px;
          border-radius: 9999px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px 20px;
          cursor: pointer;
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          text-decoration: none;
          box-sizing: border-box;
          transition: background-color 0.28s ease, color 0.28s ease, border-color 0.28s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* Right Features Block (Frame 453) */
        .pr-right-block {
          position: absolute;
          left: 621px;
          top: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          box-sizing: border-box;
        }

        .pr-included-title {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          text-transform: capitalize;
          margin: 0;
        }

        .pr-included-light {
          color: #0F766E;
        }

        .pr-included-dark {
          color: #FFFFFF;
        }

        /* Feature List (Frame 450) */
        .pr-features-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 6px;
        }

        .pr-feature-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 8px;
          height: 24px;
        }

        /* Rectangle 40 (Square Bullet) */
        .pr-bullet {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          flex: none;
        }

        .pr-bullet-light {
          background: #0F766E;
        }

        .pr-bullet-dark {
          background: #FFFFFF;
        }

        .pr-feature-text {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          white-space: nowrap;
        }

        .pr-feature-text-light {
          color: #0F766E;
        }

        .pr-feature-text-dark {
          color: #FFFFFF;
        }

        /* ================= MOBILE STYLES (< 860px) ================= */
        .pr-mobile-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 60px 20px 80px;
          box-sizing: border-box;
        }

        .pr-mobile-badge {
          box-sizing: border-box;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 8px 18px;
          border: 1px solid #0F766E;
          border-radius: 9999px;
          background: transparent;
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 15px;
          line-height: 20px;
          color: #0F766E;
          margin-bottom: 16px;
        }

        .pr-mobile-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(34px, 8.5vw, 48px);
          line-height: 1.15;
          text-align: center;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0 0 32px 0;
          letter-spacing: -0.2px;
        }

        .pr-mobile-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          max-width: 500px;
        }

        .pr-mobile-card {
          width: 100%;
          border-radius: 20px;
          padding: 24px 22px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pr-mobile-card-light {
          background: #FFFFFF;
          box-shadow: 0 10px 30px rgba(15, 118, 110, 0.08);
        }

        .pr-mobile-card-dark {
          background: #0F766E;
          box-shadow: 0 14px 35px rgba(15, 118, 110, 0.28);
        }

        .pr-mobile-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin: 6px 0 8px;
        }

        .pr-mobile-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(15, 118, 110, 0.15);
        }

        .pr-mobile-features-dark {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .pr-mobile-btn {
          height: 44px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 24px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          text-decoration: none;
          align-self: flex-start;
          margin-top: 6px;
          transition: background-color 0.28s ease, color 0.28s ease, border-color 0.28s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
      `}),!s&&_jsxs("div",{style:{width:"1600px",height:"1200px",position:"absolute",top:0,left:0,transform:`scale(${n})`,transformOrigin:"top left",backgroundColor:"#F0FDFA",overflow:"hidden",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box"},children:[_jsxs("div",{className:"pr-header-box",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"pr-badge-pill",initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,ease:[.16,1,.3,1]},children:_jsx("span",{className:"pr-badge-text",children:"Pricing"})})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"pr-heading-text",initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.82,delay:.1,ease:[.16,1,.3,1]},children:"Transparent Concierge Plans"})})]},`pr-hdr-${c}`),_jsx("div",{className:"pr-cards-stack",children:g.map((e,t)=>{let n=.22+.22*t,o=m===e.id;return _jsxs(motion.div,{className:`pr-card ${e.isDark?"pr-card-dark":"pr-card-light"}`,initial:{opacity:0,y:140},animate:p?{opacity:1,y:0}:{opacity:0,y:140},transition:{duration:.85,delay:n,ease:[.16,1,.3,1]},children:[_jsxs("div",{className:"pr-left-block",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h3,{className:`pr-tier-name ${e.isDark?"pr-tier-name-dark":"pr-tier-name-light"}`,initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,delay:n+.12,ease:[.16,1,.3,1]},children:e.name})}),_jsxs("div",{className:"pr-price-desc-group",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:"pr-price-row",initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,delay:n+.18,ease:[.16,1,.3,1]},children:[_jsx("span",{className:`pr-amount ${e.isDark?"pr-amount-dark":"pr-amount-light"}`,children:e.price}),_jsx("span",{className:`pr-period ${e.isDark?"pr-period-dark":"pr-period-light"}`,children:e.period})]})}),_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.p,{className:`pr-desc ${e.isDark?"pr-desc-dark":"pr-desc-light"}`,initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.7,delay:n+.24,ease:[.16,1,.3,1]},children:e.description})})]})]}),_jsx(motion.button,{className:"pr-btn",style:{width:e.btnWidth,backgroundColor:e.isDark?o?"#14B8A6":"#FFFFFF":o?"#14B8A6":"#0F766E",color:e.isDark?o?"#FFFFFF":"#14B8A6":"#FFFFFF",border:e.isDark&&o?"1px solid #FFFFFF":"1px solid transparent",transform:o?"translateY(-2px)":"none",boxShadow:e.isDark?o?"0 8px 22px rgba(0, 0, 0, 0.25)":"0 4px 14px rgba(0, 0, 0, 0.1)":o?"0 8px 22px rgba(20, 184, 166, 0.4)":"0 4px 14px rgba(15, 118, 110, 0.2)"},initial:{opacity:0,y:15,scale:.94},animate:p?{opacity:1,y:0,scale:1}:{opacity:0,y:15,scale:.94},transition:{duration:.6,delay:n+.3,ease:[.16,1,.3,1]},onMouseEnter:()=>h(e.id),onMouseLeave:()=>h(null),children:_jsx(a,{text:e.btnText,isHovered:o})}),_jsxs("div",{className:"pr-right-block",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.h4,{className:`pr-included-title ${e.isDark?"pr-included-dark":"pr-included-light"}`,initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,delay:n+.16,ease:[.16,1,.3,1]},children:"What’s included"})}),_jsx("div",{className:"pr-features-list",children:e.features.map((t,a)=>_jsx("div",{style:{overflow:"hidden"},children:_jsxs(motion.div,{className:"pr-feature-item",initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.6,delay:n+.22+.05*a,ease:[.16,1,.3,1]},children:[_jsx("span",{className:`pr-bullet ${e.isDark?"pr-bullet-dark":"pr-bullet-light"}`}),_jsx("span",{className:`pr-feature-text ${e.isDark?"pr-feature-text-dark":"pr-feature-text-light"}`,children:t})]})},a))})]})]},`pr-card-${e.id}-${c}`)})})]}),s&&_jsxs("div",{className:"pr-mobile-wrap",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"pr-mobile-badge",initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,ease:[.16,1,.3,1]},children:"Pricing"})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"pr-mobile-heading",initial:{y:"110%",opacity:0},animate:p?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,delay:.1,ease:[.16,1,.3,1]},children:"Transparent Concierge Plans"})}),_jsx("div",{className:"pr-mobile-stack",children:g.map((e,t)=>{let n=m===`mob-${e.id}`;return _jsxs(motion.div,{className:`pr-mobile-card ${e.isDark?"pr-mobile-card-dark":"pr-mobile-card-light"}`,initial:{opacity:0,y:80},animate:p?{opacity:1,y:0}:{opacity:0,y:80},transition:{duration:.75,delay:.2+.2*t,ease:[.16,1,.3,1]},children:[_jsxs("div",{children:[_jsx("h3",{className:`pr-tier-name ${e.isDark?"pr-tier-name-dark":"pr-tier-name-light"}`,children:e.name}),_jsxs("div",{className:"pr-mobile-price-row",children:[_jsx("span",{className:`pr-amount ${e.isDark?"pr-amount-dark":"pr-amount-light"}`,children:e.price}),_jsx("span",{className:`pr-period ${e.isDark?"pr-period-dark":"pr-period-light"}`,children:e.period})]}),_jsx("p",{className:`pr-desc ${e.isDark?"pr-desc-dark":"pr-desc-light"}`,children:e.description})]}),_jsxs("div",{className:`pr-mobile-features ${e.isDark?"pr-mobile-features-dark":""}`,children:[_jsx("h4",{className:`pr-included-title ${e.isDark?"pr-included-dark":"pr-included-light"}`,style:{fontSize:"16px",marginBottom:"4px"},children:"What’s included"}),e.features.map((t,r)=>_jsxs("div",{className:"pr-feature-item",children:[_jsx("span",{className:`pr-bullet ${e.isDark?"pr-bullet-dark":"pr-bullet-light"}`}),_jsx("span",{className:`pr-feature-text ${e.isDark?"pr-feature-text-dark":"pr-feature-text-light"}`,style:{fontSize:"15px"},children:t})]},r))]}),_jsx("button",{className:"pr-mobile-btn",style:{backgroundColor:e.isDark?n?"#14B8A6":"#FFFFFF":n?"#14B8A6":"#0F766E",color:e.isDark?n?"#FFFFFF":"#14B8A6":"#FFFFFF",border:e.isDark&&n?"1px solid #FFFFFF":"1px solid transparent",transform:n?"translateY(-2px)":"none",boxShadow:e.isDark?n?"0 8px 20px rgba(0, 0, 0, 0.25)":"0 4px 12px rgba(0, 0, 0, 0.1)":n?"0 8px 20px rgba(20, 184, 166, 0.4)":"0 4px 12px rgba(15, 118, 110, 0.2)"},onMouseEnter:()=>h(`mob-${e.id}`),onMouseLeave:()=>h(null),children:_jsx(a,{text:e.btnText,isHovered:n})})]},`pr-mob-card-${e.id}-${c}`)})})]},`pr-mob-${c}`)]})}

export default n;