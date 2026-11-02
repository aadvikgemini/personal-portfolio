/**
 * Campus Connect — Premium Animated Loading Screen Component
 * 
 * Reusable, lightweight, zero-dependency component designed specifically
 * for Campus Connect university ride-sharing and transportation platform.
 * 
 * Features:
 * - Pure white background (#FFFFFF) covering the full viewport
 * - Small, cute, colorful cartoon-style transportation animation
 * - Continuous, organic morphing transformation: CAR -> SCOOTER -> BICYCLE -> CAR
 * - Centered layout with clean, modern near-black typography and gentle animated ellipsis
 * - Responsive design (desktop, laptop, tablet, mobile)
 * - Accessibility (role="status", aria-live="polite", prefers-reduced-motion support)
 * - Lightweight SVG vectors + CSS keyframe animations
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var CC = factory();
    root.CampusConnectLoadingScreen = CC;
    root.renderCampusConnectLoadingScreen = CC.renderHTML;
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var STYLES = `
    /* Campus Connect Loading Screen — Pure White Full Viewport Layout */
    .campus-connect-loading-screen {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      min-height: 100vh !important;
      background-color: #FFFFFF !important;
      background: #FFFFFF !important;
      z-index: 9999999 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0 !important;
      padding: 16px !important;
      box-sizing: border-box !important;
      overflow: hidden !important;
      user-select: none !important;
      -webkit-user-select: none !important;
    }

    .campus-connect-loading-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      max-width: 380px;
      position: relative;
    }

    /* Small, Cute, Centered Vector Animation */
    .cc-animation-svg {
      display: block;
      width: 260px;
      height: 160px;
      max-width: 84vw;
      max-height: 46vh;
      margin: 0 auto;
      overflow: visible;
    }

    /* ==============================================================
       TRANSFORMATION KEYFRAMES (12.0s Loop: 4s Car -> 4s Bike -> 4s Bicycle)
       0% - 26.7%:  Car Active (Driving for 3.2s)
       26.7% - 33.3%: Car -> Bike Morph (Organic animatic squash/stretch, turns to bike at 4s)
       33.3% - 60.0%: Bike Active (Cruising for 3.2s)
       60.0% - 66.7%: Bike -> Bicycle Morph (Organic animatic squash/stretch, turns to bicycle at 8s)
       66.7% - 93.3%: Bicycle Active (Pedaling & Riding for 3.2s)
       93.3% - 100%:  Bicycle -> Car Morph (Organic animatic squash/stretch, loops to car at 12s)
       ============================================================== */

    @keyframes ccCarMorph {
      0% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
      26.67% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
      29.17% {
        opacity: 0.95;
        transform: scale(1.05, 0.95) translateY(-1px);
        visibility: visible;
      }
      31.67% {
        opacity: 0.45;
        transform: scale(0.94, 1.06) translateY(-3px);
        visibility: visible;
      }
      33.33% {
        opacity: 0;
        transform: scale(0.88, 0.90) translateY(4px);
        visibility: hidden;
      }
      33.34%, 93.33% {
        opacity: 0;
        visibility: hidden;
      }
      93.34% {
        opacity: 0;
        transform: scale(0.88, 0.90) translateY(4px);
        visibility: visible;
      }
      95.83% {
        opacity: 0.45;
        transform: scale(0.94, 1.06) translateY(-3px);
        visibility: visible;
      }
      98.33% {
        opacity: 0.95;
        transform: scale(1.05, 0.95) translateY(-1px);
        visibility: visible;
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
    }

    @keyframes ccScooterMorph {
      0%, 26.66% {
        opacity: 0;
        visibility: hidden;
        transform: scale(0.88, 0.90) translateY(4px);
      }
      26.67% {
        opacity: 0;
        visibility: visible;
        transform: scale(0.88, 0.90) translateY(4px);
      }
      29.17% {
        opacity: 0.45;
        transform: scale(0.94, 1.06) translateY(-3px);
        visibility: visible;
      }
      31.67% {
        opacity: 0.95;
        transform: scale(1.05, 0.95) translateY(-1px);
        visibility: visible;
      }
      33.33% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
      60.0% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
      62.5% {
        opacity: 0.95;
        transform: scale(1.05, 0.95) translateY(-1px);
        visibility: visible;
      }
      65.0% {
        opacity: 0.45;
        transform: scale(0.94, 1.06) translateY(-3px);
        visibility: visible;
      }
      66.67% {
        opacity: 0;
        transform: scale(0.88, 0.90) translateY(4px);
        visibility: hidden;
      }
      66.68%, 100% {
        opacity: 0;
        visibility: hidden;
      }
    }

    @keyframes ccBicycleMorph {
      0%, 60.0% {
        opacity: 0;
        visibility: hidden;
        transform: scale(0.88, 0.90) translateY(4px);
      }
      60.01% {
        opacity: 0;
        visibility: visible;
        transform: scale(0.88, 0.90) translateY(4px);
      }
      62.5% {
        opacity: 0.45;
        transform: scale(0.94, 1.06) translateY(-3px);
        visibility: visible;
      }
      65.0% {
        opacity: 0.95;
        transform: scale(1.05, 0.95) translateY(-1px);
        visibility: visible;
      }
      66.67% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
      93.33% {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
      }
      95.83% {
        opacity: 0.95;
        transform: scale(1.05, 0.95) translateY(-1px);
        visibility: visible;
      }
      98.33% {
        opacity: 0.45;
        transform: scale(0.94, 1.06) translateY(-3px);
        visibility: visible;
      }
      100% {
        opacity: 0;
        transform: scale(0.88, 0.90) translateY(4px);
        visibility: hidden;
      }
    }

    .cc-vehicle-car {
      transform-origin: 130px 100px;
      animation: ccCarMorph 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .cc-vehicle-scooter {
      transform-origin: 130px 100px;
      animation: ccScooterMorph 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .cc-vehicle-bicycle {
      transform-origin: 130px 100px;
      animation: ccBicycleMorph 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    /* Animatic Pop / Morph Burst Rings */
    @keyframes ccMorphBurst4s {
      0%, 29.5% { transform: scale(0.3); opacity: 0; }
      30.5%     { opacity: 0.7; }
      33.5%     { transform: scale(1.4); opacity: 0; }
      33.6%, 100% { opacity: 0; }
    }
    @keyframes ccMorphBurst8s {
      0%, 62.8% { transform: scale(0.3); opacity: 0; }
      63.8%     { opacity: 0.7; }
      66.8%     { transform: scale(1.4); opacity: 0; }
      66.9%, 100% { opacity: 0; }
    }
    @keyframes ccMorphBurst12s {
      0%, 96.1% { transform: scale(0.3); opacity: 0; }
      97.1%     { opacity: 0.7; }
      100%      { transform: scale(1.4); opacity: 0; }
    }

    .cc-burst-ring-1 {
      transform-origin: 130px 85px;
      animation: ccMorphBurst4s 12s ease-out infinite;
    }
    .cc-burst-ring-2 {
      transform-origin: 130px 85px;
      animation: ccMorphBurst8s 12s ease-out infinite;
    }
    .cc-burst-ring-3 {
      transform-origin: 130px 85px;
      animation: ccMorphBurst12s 12s ease-out infinite;
    }

    /* Soft Vehicle Suspension & Bouncing Motion */
    @keyframes ccCarSuspension {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-1.8px); }
    }
    @keyframes ccScooterSuspension {
      0%, 100% { transform: translateY(0); }
      40% { transform: translateY(-2px); }
      75% { transform: translateY(-0.8px); }
    }
    @keyframes ccBicycleSuspension {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-1.8px); }
    }

    .cc-chassis-car {
      animation: ccCarSuspension 0.7s ease-in-out infinite;
      transform-origin: 130px 100px;
    }
    .cc-chassis-scooter {
      animation: ccScooterSuspension 0.65s ease-in-out infinite;
      transform-origin: 130px 100px;
    }
    .cc-chassis-bicycle {
      animation: ccBicycleSuspension 0.75s ease-in-out infinite;
      transform-origin: 130px 100px;
    }

    /* Rotating Wheels */
    @keyframes ccWheelSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .cc-wheel-rear {
      transform-origin: 75px 100px;
      animation: ccWheelSpin 0.75s linear infinite;
    }
    .cc-wheel-front {
      transform-origin: 185px 100px;
      animation: ccWheelSpin 0.75s linear infinite;
    }

    /* Rotating Bicycle Pedal Crankset */
    @keyframes ccPedalRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .cc-pedal {
      transform-origin: 125px 100px;
      animation: ccPedalRotate 1.1s linear infinite;
    }

    /* Subtle Ground Speed Dashes & Shadow */
    @keyframes ccDashGlide {
      0% { transform: translateX(30px); opacity: 0; }
      25% { opacity: 0.75; }
      75% { opacity: 0.75; }
      100% { transform: translateX(-35px); opacity: 0; }
    }
    .cc-dash-1 { animation: ccDashGlide 0.8s linear infinite; }
    .cc-dash-2 { animation: ccDashGlide 0.8s linear infinite 0.28s; }
    .cc-dash-3 { animation: ccDashGlide 0.8s linear infinite 0.55s; }

    @keyframes ccShadowPulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(0.95); opacity: 0.45; }
    }
    .cc-ground-shadow {
      transform-origin: 130px 116px;
      animation: ccShadowPulse 0.7s ease-in-out infinite;
    }

    /* Cute Exhaust Smoke Puffs */
    @keyframes ccExhaustBubble {
      0% { transform: translate(0, 0) scale(0.5); opacity: 0.75; }
      50% { opacity: 0.5; }
      100% { transform: translate(-16px, -6px) scale(1.3); opacity: 0; }
    }
    .cc-puff-1 {
      transform-origin: 44px 98px;
      animation: ccExhaustBubble 0.85s ease-out infinite;
    }
    .cc-puff-2 {
      transform-origin: 36px 95px;
      animation: ccExhaustBubble 0.85s ease-out infinite 0.42s;
    }

    /* Polished Near-Black Loading Typography */
    .cc-loading-text {
      margin: 18px 0 0 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.4;
      letter-spacing: 0.06em;
      color: #111827;
      text-align: center;
      user-select: none;
    }

    .cc-ellipsis {
      display: inline-block;
    }

    .cc-dot {
      display: inline-block;
      opacity: 0;
      animation: ccDotFade 1.4s infinite ease-in-out;
    }
    .cc-dot-1 { animation-delay: 0.0s; }
    .cc-dot-2 { animation-delay: 0.28s; }
    .cc-dot-3 { animation-delay: 0.56s; }

    @keyframes ccDotFade {
      0%, 20% { opacity: 0; transform: translateY(0); }
      40% { opacity: 1; transform: translateY(-1.5px); }
      60%, 100% { opacity: 1; transform: translateY(0); }
    }

    /* Accessibility: Screen Reader Only Utility */
    .cc-sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* Accessibility: Respect Prefers-Reduced-Motion */
    @media (prefers-reduced-motion: reduce) {
      .cc-vehicle-car,
      .cc-vehicle-scooter,
      .cc-vehicle-bicycle,
      .cc-chassis-car,
      .cc-chassis-scooter,
      .cc-chassis-bicycle,
      .cc-wheel,
      .cc-pedal,
      .cc-ground-shadow,
      .cc-dash-1,
      .cc-dash-2,
      .cc-dash-3,
      .cc-puff-1,
      .cc-puff-2,
      .cc-dust-cloud,
      .cc-dot {
        animation: none !important;
      }
      .cc-vehicle-car {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
      }
      .cc-vehicle-scooter,
      .cc-vehicle-bicycle {
        opacity: 0 !important;
        visibility: hidden !important;
        display: none !important;
      }
      .cc-dot {
        opacity: 1 !important;
      }
    }
  `;

  var SVG_MARKUP = `
    <svg class="cc-animation-svg" viewBox="0 -25 260 160" width="260" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="Campus Connect Transportation Vehicles Animation">
      <defs>
        <!-- Ground glow gradient -->
        <radialGradient id="ccGroundGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#CBD5E1" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#CBD5E1" stop-opacity="0"/>
        </radialGradient>
        
        <!-- Car windshield gloss -->
        <linearGradient id="ccGlassGloss" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
          <stop offset="60%" stop-color="#E0F2FE" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#BAE6FD" stop-opacity="0.75"/>
        </linearGradient>

        <!-- Car vibrant cyan body gradient -->
        <linearGradient id="ccCarBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>

        <!-- Reference Scooter golden amber body gradient (matching reference picture) -->
        <linearGradient id="ccRefScooterBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FBAF37"/>
          <stop offset="100%" stop-color="#F9941F"/>
        </linearGradient>

        <!-- Reference Delivery parcel box gradient (#483E52) -->
        <linearGradient id="ccBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#554961"/>
          <stop offset="100%" stop-color="#3C3345"/>
        </linearGradient>
      </defs>

      <!-- 1. Ground Elements (Shadow + Speed Dashes) -->
      <g class="cc-ground-layer">
        <ellipse class="cc-ground-shadow" cx="130" cy="116" rx="68" ry="4.5" fill="url(#ccGroundGlow)" />
        <g class="cc-speed-dashes">
          <line class="cc-dash cc-dash-1" x1="30" y1="120" x2="60" y2="120" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" />
          <line class="cc-dash cc-dash-2" x1="105" y1="123" x2="140" y2="123" stroke="#E2E8F0" stroke-width="2" stroke-linecap="round" />
          <line class="cc-dash cc-dash-3" x1="190" y1="120" x2="225" y2="120" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" />
        </g>
      </g>

      <!-- 1B. Animatic Morph Burst Rings -->
      <circle class="cc-burst-ring cc-burst-ring-1" cx="130" cy="85" r="30" fill="none" stroke="#38BDF8" stroke-width="2" opacity="0" />
      <circle class="cc-burst-ring cc-burst-ring-2" cx="130" cy="85" r="30" fill="none" stroke="#FB923C" stroke-width="2" opacity="0" />
      <circle class="cc-burst-ring cc-burst-ring-3" cx="130" cy="85" r="30" fill="none" stroke="#10B981" stroke-width="2" opacity="0" />

      <!-- ============================================================== -->
      <!-- 2. VEHICLE A: CUTE RETRO CARTOON CAR                           -->
      <!-- ============================================================== -->
      <g class="cc-vehicle cc-vehicle-car">
        <g class="cc-chassis cc-chassis-car">
          <!-- Exhaust Puffs -->
          <circle class="cc-puff-1" cx="44" cy="98" r="3" fill="#E2E8F0" />
          <circle class="cc-puff-2" cx="36" cy="95" r="4.5" fill="#F1F5F9" />

          <!-- Rear Bumper -->
          <rect x="44" y="94" width="8" height="6" rx="3" fill="#94A3B8" />

          <!-- Main Car Body: Rounded retro shape -->
          <path d="M 52 94 C 52 82, 60 76, 75 76 L 185 76 C 200 76, 210 82, 210 94 C 210 102, 204 104, 196 104 L 64 104 C 56 104, 52 100, 52 94 Z" fill="url(#ccCarBodyGrad)" />
          
          <!-- Cabin / Roof Dome -->
          <path d="M 80 76 C 85 52, 102 44, 132 44 C 160 44, 175 52, 182 76 Z" fill="#F8FAFC" stroke="#0284C7" stroke-width="2.5" stroke-linejoin="round" />

          <!-- Windows (Dual rounded windows with divider pillar) -->
          <path d="M 88 73 C 92 57, 104 50, 126 50 L 126 73 Z" fill="url(#ccGlassGloss)" />
          <path d="M 134 73 L 134 50 C 154 50, 168 57, 174 73 Z" fill="url(#ccGlassGloss)" />

          <!-- Gloss reflections on window -->
          <line x1="102" y1="54" x2="95" y2="70" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.8" />
          <line x1="148" y1="54" x2="140" y2="70" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.8" />

          <!-- Window Center Pillar -->
          <line x1="130" y1="46" x2="130" y2="75" stroke="#0284C7" stroke-width="3" stroke-linecap="round" />

          <!-- Body Highlight Stripe -->
          <path d="M 60 85 Q 130 80 202 85" stroke="#7DD3FC" stroke-width="2.5" stroke-linecap="round" fill="none" />

          <!-- Door Line & Chrome Handle -->
          <line x1="130" y1="76" x2="130" y2="98" stroke="#0369A1" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
          <rect x="135" y="83" width="7" height="2.5" rx="1.25" fill="#F8FAFC" stroke="#0369A1" stroke-width="0.75" />

          <!-- Headlight (Rounded with warm yellow glow) -->
          <path d="M 206 82 C 206 77, 214 78, 214 83 C 214 88, 206 89, 206 82 Z" fill="#FEF08A" stroke="#CBD5E1" stroke-width="1.5" />
          <circle cx="209" cy="83" r="2" fill="#FDE047" />

          <!-- Taillight (Ruby red) -->
          <rect x="49" y="82" width="4" height="7" rx="2" fill="#EF4444" />

          <!-- Front Bumper -->
          <rect x="204" y="94" width="8" height="6" rx="3" fill="#94A3B8" />

          <!-- Wheel Arches (Fender cutouts) -->
          <path d="M 58 104 C 58 90, 92 90, 92 104 Z" fill="#FFFFFF" />
          <path d="M 168 104 C 168 90, 202 90, 202 104 Z" fill="#FFFFFF" />
          <path d="M 60 104 C 60 92, 90 92, 90 104 Z" fill="#0F172A" />
          <path d="M 170 104 C 170 92, 200 92, 200 104 Z" fill="#0F172A" />
        </g>

        <!-- Wheels for Car (Spinning around center) -->
        <g class="cc-wheel cc-wheel-rear">
          <circle cx="75" cy="100" r="14" fill="#1E293B" />
          <circle cx="75" cy="100" r="8.5" fill="#E2E8F0" />
          <circle cx="75" cy="100" r="4.5" fill="#38BDF8" />
          <circle cx="75" cy="100" r="2" fill="#FFFFFF" />
          <line x1="75" y1="92" x2="75" y2="95" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
          <line x1="75" y1="105" x2="75" y2="108" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
          <line x1="67" y1="100" x2="70" y2="100" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
          <line x1="80" y1="100" x2="83" y2="100" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
        </g>

        <g class="cc-wheel cc-wheel-front">
          <circle cx="185" cy="100" r="14" fill="#1E293B" />
          <circle cx="185" cy="100" r="8.5" fill="#E2E8F0" />
          <circle cx="185" cy="100" r="4.5" fill="#38BDF8" />
          <circle cx="185" cy="100" r="2" fill="#FFFFFF" />
          <line x1="185" y1="92" x2="185" y2="95" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
          <line x1="185" y1="105" x2="185" y2="108" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
          <line x1="177" y1="100" x2="180" y2="100" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
          <line x1="190" y1="100" x2="193" y2="100" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
        </g>
      </g>

      <!-- ============================================================== -->
      <!-- 3. VEHICLE B: CUTE CARTOON DELIVERY BIKE (4s to 8s)            -->
      <!-- Strictly adhering to the exact reference image provided!       -->
      <!-- ============================================================== -->
      <g class="cc-vehicle cc-vehicle-scooter">
        <g class="cc-chassis cc-chassis-scooter">
          <image href="bike-rider.png" xlink:href="bike-rider.png" x="14" y="-33" width="200" height="154" preserveAspectRatio="xMidYMid meet" />
        </g>
      </g>

      <!-- ============================================================== -->
      <!-- 4. VEHICLE C: CUTE CARTOON CAMPUS BICYCLE                      -->
      <!-- ============================================================== -->
      <g class="cc-vehicle cc-vehicle-bicycle">
        <g class="cc-chassis cc-chassis-bicycle">
          <!-- Mudguards/Fenders -->
          <path d="M 60 96 C 60 84, 86 82, 92 92" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" />
          <path d="M 172 90 C 176 82, 198 84, 198 96" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" />

          <!-- Frame Tubes (Emerald Green) -->
          <line x1="75" y1="100" x2="125" y2="100" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" />
          <line x1="75" y1="100" x2="108" y2="66" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" />
          <line x1="125" y1="100" x2="108" y2="66" stroke="#10B981" stroke-width="4" stroke-linecap="round" />
          <line x1="108" y1="66" x2="165" y2="60" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" />
          <line x1="125" y1="100" x2="165" y2="60" stroke="#10B981" stroke-width="4" stroke-linecap="round" />
          <line x1="168" y1="56" x2="185" y2="100" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" />

          <!-- Seat Post & Saddle -->
          <line x1="108" y1="66" x2="105" y2="58" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
          <path d="M 96 58 C 96 54, 105 52, 118 54 C 122 54, 120 58, 114 60 Z" fill="#1E293B" />
          <circle cx="102" cy="60" r="1.5" fill="#64748B" />

          <!-- Handlebar Stem & Bell -->
          <line x1="168" y1="56" x2="170" y2="46" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" />
          <path d="M 160 48 Q 171 44 178 50" fill="none" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" />
          <line x1="158" y1="49" x2="162" y2="47" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
          <circle cx="174" cy="44" r="2.5" fill="#FACC15" />

          <!-- Chain Line -->
          <line x1="75" y1="100" x2="125" y2="100" stroke="#64748B" stroke-width="1.5" stroke-dasharray="2 2" />
        </g>

        <!-- Wheels for Bicycle (Thin Spokes Rotating!) -->
        <g class="cc-wheel cc-wheel-rear">
          <circle cx="75" cy="100" r="14" fill="none" stroke="#1E293B" stroke-width="3" />
          <circle cx="75" cy="100" r="12" fill="none" stroke="#E2E8F0" stroke-width="1" />
          <line x1="75" y1="88" x2="75" y2="112" stroke="#94A3B8" stroke-width="1" />
          <line x1="64.6" y1="94" x2="85.4" y2="106" stroke="#94A3B8" stroke-width="1" />
          <line x1="64.6" y1="106" x2="85.4" y2="94" stroke="#94A3B8" stroke-width="1" />
          <circle cx="75" cy="100" r="3" fill="#64748B" />
        </g>

        <g class="cc-wheel cc-wheel-front">
          <circle cx="185" cy="100" r="14" fill="none" stroke="#1E293B" stroke-width="3" />
          <circle cx="185" cy="100" r="12" fill="none" stroke="#E2E8F0" stroke-width="1" />
          <line x1="185" y1="88" x2="185" y2="112" stroke="#94A3B8" stroke-width="1" />
          <line x1="174.6" y1="94" x2="195.4" y2="106" stroke="#94A3B8" stroke-width="1" />
          <line x1="174.6" y1="106" x2="195.4" y2="94" stroke="#94A3B8" stroke-width="1" />
          <circle cx="185" cy="100" r="3" fill="#64748B" />
        </g>

        <!-- Revolving Crankset & Pedals -->
        <g class="cc-pedal">
          <circle cx="125" cy="100" r="5" fill="#94A3B8" />
          <line x1="125" y1="100" x2="125" y2="90" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" />
          <rect x="121" y="88" width="8" height="3" rx="1.5" fill="#1E293B" />
          <line x1="125" y1="100" x2="125" y2="110" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" />
          <rect x="121" y="109" width="8" height="3" rx="1.5" fill="#1E293B" />
          <circle cx="125" cy="100" r="2" fill="#FFFFFF" />
        </g>
      </g>
    </svg>
  `;

  var VIDEO_MARKUP = `
    <div class="video-container" style="width:100%;max-width:250px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;margin:0 auto;background-color:#FFFFFF;overflow:hidden;">
      <video class="cc-transition-video" src="campus-connect-transition.mp4" autoplay loop muted playsinline preload="auto" style="width:100%;height:100%;object-fit:contain;display:block;border:none;outline:none;background-color:#FFFFFF;" aria-label="Campus Connect animated vehicle transformation"></video>
    </div>
  `;

  function renderHTML(options) {
    var opts = options || {};
    var mediaMarkup = (opts.useSvg === true) ? SVG_MARKUP : VIDEO_MARKUP;
    return `
      <style id="campus-connect-loading-styles">${STYLES}</style>
      <div id="CampusConnectLoadingScreen"
           class="campus-connect-loading-screen"
           role="status"
           aria-live="polite"
           aria-label="Loading Campus Connect">
        <div class="campus-connect-loading-center">
          ${mediaMarkup}
          <p class="cc-loading-text" aria-hidden="true">
            Loading<span class="cc-ellipsis"><span class="cc-dot cc-dot-1">.</span><span class="cc-dot cc-dot-2">.</span><span class="cc-dot cc-dot-3">.</span></span>
          </p>
          <span class="cc-sr-only">Loading Campus Connect transportation options...</span>
        </div>
      </div>
    `;
  }

  function show(targetElement) {
    var container = targetElement || document.body;
    var existing = document.getElementById('CampusConnectLoadingScreen');
    if (!existing) {
      var div = document.createElement('div');
      div.id = 'CampusConnectLoadingContainer';
      div.innerHTML = renderHTML();
      container.appendChild(div);
    }
  }

  function hide() {
    var existing = document.getElementById('CampusConnectLoadingScreen');
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }
    var container = document.getElementById('CampusConnectLoadingContainer');
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    var styles = document.getElementById('campus-connect-loading-styles');
    if (styles && styles.parentNode) {
      styles.parentNode.removeChild(styles);
    }
  }

  return {
    renderHTML: renderHTML,
    show: show,
    hide: hide,
    styles: STYLES,
    svg: SVG_MARKUP
  };
}));
