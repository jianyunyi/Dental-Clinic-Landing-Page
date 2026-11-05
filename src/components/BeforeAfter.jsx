// @ts-nocheck
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

let r=()=>{let e=useRef(null),r=useRef(null),n=useRef(null),[o,s]=useState(50),[l,p]=useState(!1),d=useRef(!1),[c,x]=useState(()=>window.innerWidth/1600),[b,g]=useState(()=>window.innerWidth<860),[h,f]=useState(!1),[m,u]=useState(0);useEffect(()=>{let e=()=>{let e=window.innerWidth;x(e/1600),g(e<860)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),useEffect(()=>{let t=setTimeout(()=>{f(!0),u(e=>e+1)},60),i=new IntersectionObserver(([e])=>{e.isIntersecting&&(f(!0),u(e=>e+1))},{threshold:.08});return e.current&&i.observe(e.current),()=>{clearTimeout(t),i.disconnect()}},[]);let y=useCallback((e,t)=>{if(!t)return;let i=t.getBoundingClientRect();s(Math.max(0,Math.min(100,(e-i.left)/i.width*100)))},[]),w=(e,t)=>{d.current=!0,p(!0);let i=t?n.current:r.current;y(e.clientX,i)};return useEffect(()=>{let e=e=>{if(!d.current)return;let t=b?n.current:r.current;y(e.clientX,t)},t=()=>{d.current&&(d.current=!1,p(!1))};return window.addEventListener("pointermove",e),window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",t),window.removeEventListener("pointercancel",t)}},[b,y]),_jsxs("section",{ref:e,id:"before-after",style:{width:"100%",height:b?"auto":`${1180*c}px`,overflow:"hidden",position:"relative",backgroundColor:"#F0FDFA",boxSizing:"border-box",order:6,flex:"none",flexGrow:0},children:[_jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap');

        /* ================= DESKTOP STYLES (Fixed 1600px Canvas) ================= */

        /* Top Header Frame (Frame 2147226796) */
        .ba-header-box {
          position: absolute;
          width: 631px;
          height: 144px;
          left: calc(50% - 631px/2 + 0.5px);
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
        .ba-badge-pill {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          gap: 10px;
          width: 125px;
          height: 44px;
          border: 1px solid #0F766E;
          border-radius: 9999px;
          background: transparent;
          cursor: default;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ba-badge-pill:hover {
          background-color: rgba(15, 118, 110, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(15, 118, 110, 0.1);
        }

        .ba-badge-text {
          width: 83px;
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

        /* Heading (Smiles We’ve Transformed) */
        .ba-heading-text {
          width: 631px;
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

        /* Comparison Card (Frame 2147226833) */
        .ba-showcase-card {
          position: absolute;
          width: 1380.34px;
          height: 756px;
          left: calc(50% - 1380.34px/2);
          top: 264px;
          background: #FFFFFF;
          border-radius: 42.4719px;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(15, 118, 110, 0.14), 0 0 0 1px rgba(15, 118, 110, 0.08);
          touch-action: none;
          user-select: none;
          cursor: ew-resize;
        }

        /* Teeth Comparison Images */
        .ba-img-base {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          object-position: center;
          display: block;
          user-select: none;
          pointer-events: none;
        }

        .ba-img-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          object-position: center;
          display: block;
          user-select: none;
          pointer-events: none;
          will-change: clip-path;
        }

        /* Draggable Divider Line */
        .ba-divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #FFFFFF;
          box-shadow: 0 0 12px rgba(0, 34, 31, 0.5), 0 0 4px rgba(255, 255, 255, 0.8);
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 20;
          will-change: left;
        }

        /* Draggable Center Arrow Handle */
        .ba-slider-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2.5px solid #0F766E;
          box-shadow: 0 8px 30px rgba(0, 34, 31, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: ew-resize;
          z-index: 25;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          user-select: none;
          will-change: left, transform;
        }

        .ba-slider-handle:hover,
        .ba-slider-handle.ba-dragging {
          transform: translate(-50%, -50%) scale(1.12);
          box-shadow: 0 12px 35px rgba(0, 34, 31, 0.4), 0 0 0 6px rgba(15, 118, 110, 0.25);
        }

        /* Floating Luxury Status Badges */
        .ba-tag-pill {
          position: absolute;
          top: 28px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 8px 24px rgba(0, 34, 31, 0.12);
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          z-index: 15;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }

        .ba-tag-before {
          left: 32px;
          color: #92400E;
        }
        .ba-tag-before .ba-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #D97706;
          box-shadow: 0 0 8px rgba(217, 119, 6, 0.6);
        }

        .ba-tag-after {
          right: 32px;
          color: #0F766E;
        }
        .ba-tag-after .ba-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0F766E;
          box-shadow: 0 0 8px rgba(15, 118, 110, 0.6);
        }

        /* Bottom Floating Guidance Pill */
        .ba-drag-hint {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 9999px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          background: rgba(15, 118, 110, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 25px rgba(15, 118, 110, 0.3);
          color: #FFFFFF;
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          z-index: 15;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.3s ease;
        }

        /* ================= MOBILE STYLES (< 860px) ================= */
        .ba-mobile-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 60px 20px 80px;
          box-sizing: border-box;
        }

        .ba-mobile-badge {
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

        .ba-mobile-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(34px, 8.5vw, 48px);
          line-height: 1.15;
          text-align: center;
          text-transform: uppercase;
          color: #0F766E;
          margin: 0 0 28px 0;
          letter-spacing: -0.2px;
        }

        .ba-mobile-card {
          width: 100%;
          max-width: 620px;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #FFFFFF;
          box-shadow: 0 16px 40px -10px rgba(15, 118, 110, 0.16), 0 0 0 1px rgba(15, 118, 110, 0.08);
          aspect-ratio: 1380 / 756;
          touch-action: none;
          user-select: none;
          cursor: ew-resize;
        }

        .ba-mobile-tag {
          position: absolute;
          top: 14px;
          padding: 5px 12px;
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.6);
          font-family: 'Inter Tight', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          z-index: 15;
          pointer-events: none;
        }

        .ba-mobile-tag-before {
          left: 14px;
          color: #92400E;
        }

        .ba-mobile-tag-after {
          right: 14px;
          color: #0F766E;
        }

        .ba-mobile-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid #0F766E;
          box-shadow: 0 6px 20px rgba(0, 34, 31, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 25;
          pointer-events: none;
        }

        .ba-mobile-hint {
          margin-top: 14px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 13px;
          color: #0F766E;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-align: center;
        }

        /* Bottom Statement Text */
        .ba-footer-text-wrap {
          position: absolute;
          width: 860px;
          left: calc(50% - 860px / 2);
          top: 1045px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          z-index: 5;
        }

        .ba-footer-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 34px;
          line-height: 46px;
          text-align: center;
          color: #0F766E;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .ba-mobile-footer-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: clamp(22px, 5.8vw, 28px);
          line-height: 1.35;
          text-align: center;
          color: #0F766E;
          margin: 22px 0 0;
          max-width: 520px;
        }
      `}),!b&&_jsxs("div",{style:{width:"1600px",height:"1180px",position:"absolute",top:0,left:0,transform:`scale(${c})`,transformOrigin:"top left",backgroundColor:"#F0FDFA",overflow:"hidden",fontFamily:"'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",boxSizing:"border-box"},children:[_jsxs("div",{className:"ba-header-box",children:[_jsx("div",{style:{overflow:"hidden"},children:_jsx(motion.div,{className:"ba-badge-pill",initial:{y:"110%",opacity:0},animate:h?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.65,ease:[.16,1,.3,1]},children:_jsx("span",{className:"ba-badge-text",children:"Real Results"})})}),_jsx("div",{style:{overflow:"hidden",width:"100%"},children:_jsx(motion.h2,{className:"ba-heading-text",initial:{y:"110%",opacity:0},animate:h?{y:"0%",opacity:1}:{y:"110%",opacity:0},transition:{duration:.75,delay:.1,ease:[.16,1,.3,1]},children:"Smiles We’ve Transformed"})})]},`ba-hdr-${m}`),_jsxs(motion.div,{ref:r,className:"ba-showcase-card",initial:{opacity:0,y:35,scale:.97},animate:h?{opacity:1,y:0,scale:1}:{opacity:0,y:35,scale:.97},transition:{duration:.85,delay:.2,ease:[.16,1,.3,1]},onPointerDown:e=>w(e,!1),children:[_jsx("img",{src:"https://cdn.jiro.build/Dentis/Image/after.png",alt:"After Dental Whitening",className:"ba-img-base"}),_jsx("img",{src:"https://cdn.jiro.build/Dentis/Image/before.png",alt:"Before Dental Whitening",className:"ba-img-overlay",style:{clipPath:`inset(0 ${100-o}% 0 0)`}}),_jsx("div",{className:"ba-divider-line",style:{left:`${o}%`}}),_jsx("div",{className:`ba-slider-handle ${l?"ba-dragging":""}`,style:{left:`${o}%`},"aria-label":"Drag to compare before and after whitening",children:_jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#0F766E",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round",children:[_jsx("polyline",{points:"8 7 3 12 8 17"}),_jsx("polyline",{points:"16 7 21 12 16 17"}),_jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19",stroke:"#0F766E",strokeWidth:"1.6",opacity:"0.4"})]})}),_jsxs("div",{className:"ba-tag-pill ba-tag-before",style:{opacity:o<12?0:1},children:[_jsx("span",{className:"ba-dot"}),_jsx("span",{children:"Before"})]}),_jsxs("div",{className:"ba-tag-pill ba-tag-after",style:{opacity:o>88?0:1},children:[_jsx("span",{className:"ba-dot"}),_jsx("span",{children:"After"})]}),_jsxs("div",{className:"ba-drag-hint",style:{opacity:l?.3:.95},children:[_jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:_jsx("polyline",{points:"15 18 9 12 15 6"})}),_jsx("span",{children:"Drag handle to compare Before & After"}),_jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:_jsx("polyline",{points:"9 18 15 12 9 6"})})]})]},`ba-card-${m}`),_jsx("div",{className:"ba-footer-text-wrap",children:_jsxs(motion.p,{className:"ba-footer-text",initial:{opacity:0,y:22},animate:h?{opacity:1,y:0}:{opacity:0,y:22},transition:{duration:.8,delay:.35,ease:[.16,1,.3,1]},children:["See the difference gentle, expert care can make. Every",_jsx("br",{}),"result below is from a real patient at our clinic."]})},`ba-foot-text-${m}`)]}),b&&_jsxs("div",{className:"ba-mobile-wrap",children:[_jsx("div",{className:"ba-mobile-badge",children:"Real Results"}),_jsx("h2",{className:"ba-mobile-heading",children:"Smiles We’ve Transformed"}),_jsxs("div",{ref:n,className:"ba-mobile-card",onPointerDown:e=>w(e,!0),children:[_jsx("img",{src:"https://cdn.jiro.build/Dentis/Image/after.png",alt:"After Dental Whitening",className:"ba-img-base"}),_jsx("img",{src:"https://cdn.jiro.build/Dentis/Image/before.png",alt:"Before Dental Whitening",className:"ba-img-overlay",style:{clipPath:`inset(0 ${100-o}% 0 0)`}}),_jsx("div",{className:"ba-divider-line",style:{left:`${o}%`}}),_jsx("div",{className:"ba-mobile-handle",style:{left:`${o}%`},children:_jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#0F766E",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round",children:[_jsx("polyline",{points:"8 7 3 12 8 17"}),_jsx("polyline",{points:"16 7 21 12 16 17"})]})}),_jsx("div",{className:"ba-mobile-tag ba-mobile-tag-before",style:{opacity:o<15?0:1},children:"Before"}),_jsx("div",{className:"ba-mobile-tag ba-mobile-tag-after",style:{opacity:o>85?0:1},children:"After"})]}),_jsx("div",{className:"ba-mobile-hint",children:"◂ Drag handle to compare Before & After ▸"}),_jsxs(motion.p,{className:"ba-mobile-footer-text",initial:{opacity:0,y:16},animate:h?{opacity:1,y:0}:{opacity:0,y:16},transition:{duration:.75,delay:.3,ease:[.16,1,.3,1]},children:["See the difference gentle, expert care can make. Every",_jsx("br",{}),"result below is from a real patient at our clinic."]})]})]})}

export default r;