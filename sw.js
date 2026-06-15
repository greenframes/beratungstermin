:root{
  --rose:#ef7f9b;
  --rose-deep:#f39ca5;
  --mint:#f39ca5;
  --ink:#666666;
  --muted:#68717f;
  --line:#d8dee8;
  --paper:#ffffff;
  --wash:#f7f8fb;
  --shadow:0 18px 48px rgba(41, 49, 65, .14);
  --ui-font:ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --headline-font:"Brittany Signature", "Brittany", "Segoe Script", "Brush Script MT", cursive;
}

*{box-sizing:border-box}
html,body{min-height:100%}
body{
  margin:0;
  color:var(--ink);
  font-family:var(--ui-font);
  background:
    linear-gradient(180deg, rgba(243,156,165,.16), rgba(243,156,165,.06) 44%, #fff 100%);
}

button,input,textarea{font:inherit}
button{cursor:pointer}

.kiosk-shell{
  width:min(100%, 1024px);
  min-height:100svh;
  margin:0 auto;
  padding:18px;
  display:flex;
  justify-content:center;
  align-items:stretch;
}

.flow-panel{
  background:rgba(255,255,255,.88);
  border:1px solid rgba(255,255,255,.76);
  box-shadow:var(--shadow);
  backdrop-filter:blur(18px);
  --cari-size:176px;
  --lid-left-x:39.2%;
  --lid-left-y:33.3%;
  --lid-left-w:24px;
  --lid-left-h:26px;
  --lid-right-x:64.2%;
  --lid-right-y:36.7%;
  --lid-right-w:25px;
  --lid-right-h:26px;
}

.brand{
  display:flex;
  align-items:center;
  gap:12px;
  justify-content:space-between;
}

.brand__logo{
  width:82px;
  height:auto;
  object-fit:contain;
  flex:0 0 auto;
}

.eyebrow,
.kicker{
  margin:0 0 4px;
  color:var(--rose-deep);
  font-size:12px;
  line-height:1.2;
  font-weight:900;
  letter-spacing:.08em;
  text-transform:uppercase;
}

.kicker:empty{
  display:none;
}

h1,h2,p{letter-spacing:0}
h1{
  margin:0;
  font-family:var(--headline-font);
  font-size:34px;
  line-height:1.05;
  font-weight:700;

}

.flow-hero{
  display:flex;
  flex-direction:column;
  gap:18px;
  margin-bottom:22px;
}

.cari-row{
  display:grid;
  grid-template-columns:180px minmax(0, 1fr);
  gap:18px;
  align-items:center;
}

.cari-stage{
  position:relative;
  min-height:176px;
  display:grid;
  place-items:center;
  overflow:hidden;
}

/* ---- Cari image wrapper: carries the animation so lids follow ---- */
.cari-wrap{
  position:relative;
  width:min(100%, var(--cari-size));
  display:inline-block;
  animation:cariFloat 3.8s ease-in-out infinite;
  filter:drop-shadow(0 20px 22px rgba(203,77,114,.20));
}

/* Individual eyelids — each fully independently positionable */
.cari-lid{
  position:absolute;
  z-index:4;
  border-radius:54% 54% 48% 48%;
  background:linear-gradient(180deg, #fff8ff 0%, #f4e2f6 72%, #eecfea 100%);
  box-shadow:0 2px 6px rgba(121, 75, 145, .14) inset, 0 2px 0 rgba(139, 90, 150, .10);
  transform-origin:top center;
  animation:cariBlink 4.8s infinite;
}

.cari-lid--left{
  left:var(--lid-left-x);
  top:var(--lid-left-y);
  width:var(--lid-left-w);
  height:var(--lid-left-h);
}

.cari-lid--right{
  left:var(--lid-right-x);
  top:var(--lid-right-y);
  width:var(--lid-right-w);
  height:var(--lid-right-h);
  animation-delay:.015s;
}



.cari{
  position:relative;
  z-index:2;
  width:100%;
  height:auto;
  display:block;
  /* animation + filter moved to .cari-wrap so lids follow */
}

.pulse{
  position:absolute;
  border-radius:999px;
  border:2px solid rgba(239,127,155,.34);
  animation:pulse 2.8s ease-out infinite;
}

.pulse--one{width:148px;height:148px}
.pulse--two{width:198px;height:198px;animation-delay:.55s}

.speech-card{
  position:relative;
  border-radius:8px;
  padding:16px;
  background:#fff;
  border:1px solid var(--line);
}

.speech-card__label{
  margin:0 0 8px;
  color:#f39ca5;
  font-weight:900;
  font-size:13px;
}

.speech-card__text{
  margin:0;
  min-height:56px;
  color:#3a414d;
  font-size:18px;
  line-height:1.35;
  font-weight:750;
}

.voice-dots{
  display:flex;
  gap:5px;
  margin-top:12px;
}

.voice-dots span{
  width:8px;
  height:8px;
  border-radius:999px;
  background:var(--rose);
  animation:voiceDot 1.15s ease-in-out infinite;
}

.voice-dots span:nth-child(2){animation-delay:.16s;background:var(--mint)}
.voice-dots span:nth-child(3){animation-delay:.32s}

.cari-stage.is-nod .cari-wrap{
  animation:cariNod .62s ease, cariFloat 3.8s ease-in-out .62s infinite;
}

.cari-stage.is-happy .cari-wrap{
  animation:cariHappy .9s ease-in-out infinite;
}

.flow-panel{
  border-radius:8px;
  padding:24px;
  width:min(100%, 880px);
  min-height:calc(100svh - 36px);
  display:flex;
  flex-direction:column;
}

.flow-panel.is-start{
  background:
    linear-gradient(135deg, rgba(255,255,255,.95), rgba(255,255,255,.86)),
    radial-gradient(circle at 16% 18%, rgba(239,127,155,.22), transparent 32%),
    radial-gradient(circle at 90% 84%, rgba(243,156,165,.18), transparent 34%);
}

.flow-panel.is-start .flow-hero{
  gap:24px;
  margin-bottom:26px;
}

.flow-panel.is-start .cari-row{
  grid-template-columns:260px minmax(0, 1fr);
  min-height:286px;
  padding:18px;
  border:1px solid rgba(216,222,232,.9);
  border-radius:8px;
  background:rgba(255,255,255,.72);
}

.flow-panel.is-start{
  --cari-size:250px;
  --lid-left-x:38.8%;
  --lid-left-y:33.2%;
  --lid-left-w:30px;
  --lid-left-h:33px;
  --lid-right-x:64.0%;
  --lid-right-y:37.2%;
  --lid-right-w:33px;
  --lid-right-h:33px;
}

.flow-panel.is-start .cari-stage{
  min-height:260px;
}

.flow-panel.is-start .speech-card{
  padding:22px;
}

.flow-panel.is-start .speech-card__label{
  font-size:14px;
}

.flow-panel.is-start .speech-card__text{
  font-size:25px;
  line-height:1.22;
  min-height:70px;
}

.flow-panel.is-start .topbar{
  align-items:center;
}

.flow-panel.is-start .progress-text,
.flow-panel.is-start .progress-track{
  display:none;
}

.flow-panel.is-start .topbar h2{
  font-size:54px;
  line-height:1.06;
  color:#f39ca5;
}

.flow-panel.is-start .prompt{
  color:#666666;
  font-size:24px;
  font-weight:800;
  text-align:center;
}

.start-card{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  justify-content:center;
}

.start-card__line{
  margin:0;
  padding:13px 20px;
  border-radius:99px;
  color:#fff;
  background:#f39ca5;
  border:none;
  font-size:18px;
  line-height:1.1;
  font-weight:700;
  opacity:0;
  animation:chipPop .4s cubic-bezier(.34,1.56,.64,1) forwards;
}
.start-card__line:nth-child(1){animation-delay:.05s}
.start-card__line:nth-child(2){animation-delay:.18s}
.start-card__line:nth-child(3){animation-delay:.31s}

.flow-panel.is-start .nav-row{
  justify-content:center;
}

.flow-panel.is-start #btnNext{
  min-width:260px;
  min-height:70px;
  font-size:22px;
  padding:18px 40px;
  border-radius:12px;
}

.flow-panel.is-start #btnBack{
  display:none;
}

.topbar{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;
}

.topbar h2,
.summary-head h2{
  margin:0;
  font-family:var(--headline-font);
  font-size:32px;
  line-height:1.12;
  font-weight:700;
   color: #f39ca5;
 
}

.progress-text{
  flex:0 0 auto;
  color:var(--muted);
  font-weight:850;
  font-size:15px;
}

.progress-track{
  height:10px;
  margin:18px 0 26px;
  border-radius:999px;
  background:#edf0f5;
  overflow:hidden;
}

.progress-track__bar{
  width:0%;
  height:100%;
  border-radius:999px;
  background:linear-gradient(90deg, var(--rose), var(--mint));
  transition:width .25s ease;
}

.prompt{
  margin:0 0 24px;
  color:#3d4450;
  font-size:22px;
  line-height:1.3;
  font-weight:780;
}

.answer-area{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:14px;
}

.field-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}

.field-grid--single{grid-template-columns:1fr}

.field{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.field span,
.choice-label{
  color:var(--muted);
  font-size:14px;
  line-height:1.2;
  font-weight:850;
}

.field input,
.field textarea{
  width:100%;
  border:2px solid var(--line);
  border-radius:8px;
  background:#fff;
  color:var(--ink);
  padding:17px 16px;
  min-height:58px;
  outline:none;
  font-size:20px;
}

.field textarea{
  min-height:126px;
  resize:none;
  line-height:1.35;
}

.field input:focus,
.field textarea:focus{
  border-color:var(--rose);
  box-shadow:0 0 0 4px rgba(239,127,155,.15);
}

.choice-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}

.choice{
  position:relative;
  min-height:92px;
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px;
  border:2px solid var(--line);
  border-radius:8px;
  background:#fff;
  color:var(--ink);
  text-align:left;
}

.choice input{
  position:absolute;
  opacity:0;
  pointer-events:none;
}

.choice__mark{
  width:28px;
  height:28px;
  border-radius:8px;
  border:2px solid var(--line);
  display:grid;
  place-items:center;
  flex:0 0 auto;
}

.choice__body strong{
  display:block;
  font-size:20px;
  line-height:1.15;
}

.choice__body small{
  display:block;
  margin-top:5px;
  color:var(--muted);
  font-size:14px;
  line-height:1.25;
}

.choice.is-selected{
  border-color:var(--rose);
  background:#fff5f8;
}

.choice.is-selected .choice__mark{
  border-color:var(--rose);
  background:var(--rose);
}

.choice.is-selected .choice__mark::after{
  content:"";
  width:12px;
  height:7px;
  border-left:3px solid #fff;
  border-bottom:3px solid #fff;
  transform:rotate(-45deg) translate(1px, -1px);
}

.signature-box{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.sig-wrap{
  height:260px;
  border:2px solid var(--line);
  border-radius:8px;
  overflow:hidden;
  background:#fff;
}

.sig-wrap canvas{
  display:block;
  width:100%;
  height:100%;
  touch-action:none;
}

.signature-actions{
  display:flex;
  justify-content:flex-end;
}

.review-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.review-item{
  border:1px solid var(--line);
  border-radius:8px;
  padding:12px;
  background:#fff;
}

.review-item dt{
  margin:0 0 4px;
  color:var(--muted);
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
}

.review-item dd{
  margin:0;
  font-size:18px;
  line-height:1.25;
  font-weight:800;
}

.nav-row{
  display:flex;
  justify-content:space-between;
  gap:14px;
  margin-top:24px;
}

.btn{
  min-height:58px;
  border-radius:8px;
  border:0;
  padding:15px 22px;
  font-size:18px;
  line-height:1.1;
  font-weight:900;
}

.btn--primary{
  color:#fff;
  background:var(--rose);
  box-shadow:0 10px 22px rgba(203,77,114,.20);
}

.btn--ghost{
  color:var(--ink);
  background:#eef2f6;
}

.btn--quiet{
  min-height:46px;
  color:var(--ink);
  background:#eef2f6;
  font-size:15px;
}

.btn:disabled{
  opacity:.45;
  cursor:not-allowed;
}

.toast{
  position:fixed;
  inset:0;
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:rgba(18, 22, 28, .44);
  z-index:20;
}

.toast.is-open{display:flex}

.toast__box{
  width:min(520px, 94vw);
  padding:22px;
  border-radius:8px;
  background:#fff;
  box-shadow:var(--shadow);
}

.toast__title{
  margin:0 0 8px;
  font-size:25px;
  line-height:1.1;
  font-weight:950;
}

.toast__text{
  margin:0 0 18px;
  color:var(--muted);
  font-size:17px;
  line-height:1.35;
}

.cari-stage.is-welcome .cari-wrap{
  animation:cariWelcome 2.4s ease-in-out infinite;
}

@keyframes cariWelcome{
  0%,100%{transform:translateY(0) rotate(0) scale(1)}
  15%{transform:translateY(-16px) rotate(-4deg) scale(1.05)}
  35%{transform:translateY(-8px) rotate(4deg) scale(1.03)}
  55%{transform:translateY(-18px) rotate(-3deg) scale(1.06)}
  75%{transform:translateY(-6px) rotate(3deg) scale(1.02)}
}

@keyframes chipPop{
  0%{opacity:0;transform:scale(.6)}
  100%{opacity:1;transform:scale(1)}
}

@keyframes cariFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-12px)}
}

@keyframes cariNod{
  0%,100%{transform:translateY(0) rotate(0)}
  35%{transform:translateY(8px) rotate(-2deg)}
  70%{transform:translateY(-6px) rotate(2deg)}
}

@keyframes cariHappy{
  0%,100%{transform:translateY(0) rotate(0) scale(1)}
  30%{transform:translateY(-10px) rotate(-2deg) scale(1.02)}
  60%{transform:translateY(-4px) rotate(2deg) scale(1.01)}
}

@keyframes cariBlink{
  0%, 84%, 92%, 100%{opacity:0;transform:translate(-50%, -50%) scaleY(.02)}
  86%, 89%{opacity:1;transform:translate(-50%, -50%) scaleY(1)}
}

@keyframes voiceDot{
  0%,100%{transform:translateY(0);opacity:.45}
  45%{transform:translateY(-7px);opacity:1}
}

@keyframes pulse{
  0%{transform:scale(.84);opacity:.68}
  100%{transform:scale(1.18);opacity:0}
}

@media (max-width:900px){
  .kiosk-shell{
    min-height:100svh;
    padding:14px;
  }

  .flow-panel{
    min-height:calc(100svh - 26px);
    --cari-size:148px;
    --lid-left-w:14px;
    --lid-left-h:14px;
    --lid-right-w:14px;
    --lid-right-h:14px;
  }
  .cari-row{grid-template-columns:150px minmax(0,1fr)}
  .cari-stage{min-height:150px}
  .pulse--one{width:126px;height:126px}
  .pulse--two{width:166px;height:166px}
  .flow-panel.is-start{
    --cari-size:210px;
    --lid-left-w:48px;
    --lid-left-h:55px;
    --lid-right-w:48px;
    --lid-right-h:55px;
  }
  .flow-panel.is-start .cari-row{
    grid-template-columns:220px minmax(0,1fr);
    min-height:244px;
  }
  .flow-panel.is-start .cari-stage{min-height:218px}
  .flow-panel.is-start .topbar h2{font-size:48px}
  .flow-panel.is-start .speech-card__text{font-size:22px}

  .speech-card__text{
    min-height:0;
    font-size:17px;
  }

  .answer-area{flex:0}
}

@media (max-width:680px){
  .kiosk-shell{padding:10px}
  .flow-panel{border-radius:8px}
  .flow-panel{padding:18px}
  .topbar h2{font-size:26px}
  .prompt{font-size:19px}
  .field-grid,
  .choice-grid,
  .review-grid{grid-template-columns:1fr}
  .cari-row{grid-template-columns:112px 1fr}
  .flow-panel{
    --cari-size:112px;
    --lid-left-w:26px;
    --lid-left-h:30px;
    --lid-right-w:26px;
    --lid-right-h:30px;
  }
  .brand__logo{width:68px}
  h1{font-size:28px}
  .cari-stage{min-height:120px}
  .flow-panel.is-start .cari-row{
    grid-template-columns:1fr;
    min-height:0;
    text-align:center;
  }
  .flow-panel.is-start{
    --cari-size:190px;
    --lid-left-w:43px;
    --lid-left-h:50px;
    --lid-right-w:43px;
    --lid-right-h:50px;
  }
  .flow-panel.is-start .cari-stage{min-height:198px}
  .flow-panel.is-start .topbar h2{font-size:38px}
  .flow-panel.is-start .speech-card__text{font-size:20px}
  .start-card__line{font-size:16px;flex:1 1 auto;text-align:center}
  .sig-wrap{height:210px}
}

@media print{
  body{background:#fff}
  .kiosk-shell{display:block;padding:0;width:auto;min-height:auto}
  .flow-panel,.toast{display:none !important}
}
