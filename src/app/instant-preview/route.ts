import { NextResponse } from "next/server";

export const dynamic = "force-static";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>2FLY — See your website live. Pay only if you love it.</title>
<meta name="description" content="2FLY builds a real, custom landing page for your business in 48 hours. Explore it privately, pay $100 only if you love it. No card, no contract, no catch." />
<meta property="og:title" content="2FLY — See it live. Pay only if you love it." />
<meta property="og:description" content="A finished page, zero upfront risk. We build your custom landing page in 48 hours — you only pay $100 if you love it." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,500,400&f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{-webkit-text-size-adjust:none;text-size-adjust:none;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;scroll-behavior:smooth;scroll-padding-top:88px;overflow-x:hidden;}
body{min-height:100dvh;line-height:1.6;font-family:var(--font-body);font-size:var(--text-base);color:var(--color-text);background:var(--color-bg);transition:background .3s,color .3s;overflow-x:hidden;}
img,svg{display:block;max-width:100%;}
ul[role="list"]{list-style:none;}
input,button,textarea,select{font:inherit;color:inherit;}
h1,h2,h3,h4{text-wrap:balance;line-height:1.1;font-family:var(--font-display);color:var(--color-text);}
p,li{text-wrap:pretty;}
::selection{background:color-mix(in oklab, var(--color-primary) 30%, transparent);}
:focus-visible{outline:2px solid var(--color-primary);outline-offset:3px;border-radius:6px;}
button{cursor:pointer;background:none;border:none;}
a{color:inherit;text-decoration:none;}
@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important;}}

:root, [data-theme="light"]{
  --color-bg:#f7f3ea;
  --color-surface:#ffffff;
  --color-surface-2:#f0e8d8;
  --color-surface-3:#e7dabf;
  --color-border:#e3d7bd;
  --color-divider:#ebe1cb;
  --color-text:#1a1611;
  --color-text-muted:#6b6153;
  --color-text-faint:#a2957e;
  --color-text-inverse:#fbf7ee;
  --color-primary:#b5750f;
  --color-primary-hover:#96600c;
  --color-primary-active:#7a4f0a;
  --color-primary-highlight:#f1e0b8;
  --color-success:#1f9d67;
  --shadow-sm:0 1px 2px rgba(30,20,5,.08);
  --shadow-md:0 8px 24px rgba(30,20,5,.12);
  --shadow-lg:0 24px 60px rgba(30,20,5,.18);
  --grad-primary:linear-gradient(135deg,#e0a53f,#a5650f);
  --font-display:'Cabinet Grotesk','General Sans',sans-serif;
  --font-body:'Satoshi','Inter',sans-serif;
}
[data-theme="dark"]{
  --color-bg:#0c0a07;
  --color-surface:#171310;
  --color-surface-2:#1e1811;
  --color-surface-3:#261f15;
  --color-border:#332a1b;
  --color-divider:#241d14;
  --color-text:#f6efe1;
  --color-text-muted:#b6a891;
  --color-text-faint:#7a6d58;
  --color-text-inverse:#171310;
  --color-primary:#e6ab48;
  --color-primary-hover:#efbd67;
  --color-primary-active:#c99332;
  --color-primary-highlight:#3a2c14;
  --color-success:#3fd18a;
  --shadow-sm:0 1px 2px rgba(0,0,0,.4);
  --shadow-md:0 8px 24px rgba(0,0,0,.45);
  --shadow-lg:0 24px 60px rgba(0,0,0,.55);
  --grad-primary:linear-gradient(135deg,#f0c064,#c1791f);
}
:root{
  --text-xs:clamp(.75rem,.7rem + .25vw,.875rem);
  --text-sm:clamp(.875rem,.8rem + .35vw,1rem);
  --text-base:clamp(1rem,.95rem + .25vw,1.125rem);
  --text-lg:clamp(1.125rem,1rem + .75vw,1.5rem);
  --text-xl:clamp(1.5rem,1.2rem + 1.25vw,2.25rem);
  --text-2xl:clamp(2rem,1.2rem + 2.5vw,3.25rem);
  --text-3xl:clamp(2.5rem,1rem + 4vw,4.5rem);
  --space-1:.25rem;--space-2:.5rem;--space-3:.75rem;--space-4:1rem;--space-5:1.25rem;
  --space-6:1.5rem;--space-8:2rem;--space-10:2.5rem;--space-12:3rem;--space-16:4rem;
  --space-20:5rem;--space-24:6rem;--space-32:8rem;
  --radius-sm:.5rem;--radius-md:.875rem;--radius-lg:1.25rem;--radius-xl:1.75rem;--radius-full:9999px;
  --content-wide:1180px;
  --ease:cubic-bezier(.16,1,.3,1);
}

.wrap{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,4vw,2.5rem);}
section{padding-block:clamp(var(--space-16),8vw,var(--space-24));}
.eyebrow{font-size:var(--text-xs);font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--color-primary);}
.section-title{font-size:var(--text-xl);font-weight:600;text-align:center;margin-bottom:var(--space-4);}
.section-sub{font-size:var(--text-base);color:var(--color-text-muted);text-align:center;max-width:44ch;margin:0 auto var(--space-12);}
.btn{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-sm);font-weight:600;padding:.85rem 1.5rem;border-radius:var(--radius-full);transition:transform .25s var(--ease),box-shadow .25s var(--ease),background .25s var(--ease);}
.btn-primary{background:var(--grad-primary);color:#fff;box-shadow:var(--shadow-md);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg);}
.btn-ghost{background:var(--color-surface);border:1px solid var(--color-border);color:var(--color-text);}
.btn-ghost:hover{border-color:var(--color-primary);color:var(--color-primary);}

header{position:sticky;top:0;z-index:50;background:color-mix(in oklab, var(--color-bg) 88%, transparent);backdrop-filter:blur(14px);border-bottom:1px solid var(--color-divider);transition:transform .3s var(--ease);}
header.hidden{transform:translateY(-100%);}
.nav{display:flex;align-items:center;justify-content:space-between;padding-block:var(--space-4);}
.logo{display:flex;align-items:center;gap:.5rem;font-family:var(--font-display);font-weight:700;font-size:1.15rem;letter-spacing:-.01em;}
.logo svg{width:28px;height:28px;color:var(--color-primary);}
.nav-links{display:flex;gap:var(--space-8);font-size:var(--text-sm);font-weight:500;color:var(--color-text-muted);}
.nav-links a:hover{color:var(--color-primary);}
.nav-right{display:flex;align-items:center;gap:var(--space-4);}
.theme-toggle{width:38px;height:38px;border-radius:var(--radius-full);border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);}
.theme-toggle:hover{border-color:var(--color-primary);color:var(--color-primary);}
.nav-mobile-toggle{display:none;width:38px;height:38px;border:1px solid var(--color-border);border-radius:var(--radius-md);align-items:center;justify-content:center;}
@media (max-width:820px){.nav-links{display:none;}.nav-mobile-toggle{display:flex;}}

.hero{padding-top:clamp(var(--space-20),10vw,var(--space-32));text-align:center;position:relative;overflow:hidden;}
.hero::before{content:"";position:absolute;inset:-20% -10% auto -10%;height:600px;background:radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%);pointer-events:none;z-index:0;}
.hero-inner{position:relative;z-index:1;}
.hero h1{font-size:var(--text-3xl);font-weight:700;letter-spacing:-.02em;margin-bottom:var(--space-5);}
.hero h1 .accent{color:var(--color-primary);}
.hero p.lead{font-size:var(--text-lg);color:var(--color-text-muted);max-width:36ch;margin:0 auto var(--space-8);}
.hero-cta{margin-bottom:var(--space-8);}
.proof-row{display:flex;align-items:center;justify-content:center;gap:var(--space-3);font-size:var(--text-sm);color:var(--color-text-muted);}
.proof-icon{width:26px;height:26px;border-radius:50%;background:var(--color-primary-highlight);color:var(--color-primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;}

.showcase-band{width:100vw;margin-left:calc(50% - 50vw);margin-top:clamp(var(--space-14),7vw,var(--space-20));padding:var(--space-8) 0 var(--space-9);overflow:hidden;}
.showcase-caption{text-align:center;font-size:var(--text-xs);letter-spacing:.06em;text-transform:uppercase;color:var(--color-primary);margin:0 0 var(--space-6);}
.showcase-stage{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);}
.showcase-track{display:flex;gap:16px;width:max-content;animation:marquee-scroll 38s linear infinite;}
.showcase-stage:hover .showcase-track{animation-play-state:paused;}
@keyframes marquee-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@media (prefers-reduced-motion: reduce){.showcase-track{animation:none;}}
.showcase-card{flex-shrink:0;width:min(300px,72vw);height:clamp(360px,52vw,540px);border-radius:12px;overflow:hidden;border:1px solid var(--color-border);box-shadow:var(--shadow-md);}
.showcase-card img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}

.process-grid{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-5);max-width:1080px;margin:var(--space-10) auto 0;}
.process-grid::before{content:"";position:absolute;top:56px;left:9%;right:9%;height:2px;background-image:linear-gradient(to right, var(--color-border) 50%, transparent 50%);background-size:14px 2px;z-index:0;}
.process-step{position:relative;z-index:1;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-6) var(--space-5);box-shadow:var(--shadow-sm);transition:transform .25s var(--ease),box-shadow .25s var(--ease);}
.process-step:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);}
.step-badge{width:42px;height:42px;border-radius:50%;background:var(--grad-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;font-size:var(--text-sm);margin-bottom:var(--space-4);box-shadow:var(--shadow-sm);}
.process-step h3{font-size:var(--text-base);font-weight:700;margin-bottom:var(--space-2);}
.process-step p{font-size:var(--text-sm);color:var(--color-text-muted);line-height:1.55;}
@media (max-width:820px){.process-grid{grid-template-columns:1fr 1fr;}.process-grid::before{display:none;}}
@media (max-width:520px){.process-grid{grid-template-columns:1fr;}}

.price-flow{display:flex;align-items:stretch;gap:var(--space-5);max-width:760px;margin:0 auto;}
.price-step{flex:1;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-8) var(--space-6);position:relative;box-shadow:var(--shadow-sm);}
.price-step.highlight{background:var(--color-primary-highlight);border-color:var(--color-primary);box-shadow:var(--shadow-md);}
.price-step .step-num{position:absolute;top:-14px;left:var(--space-6);width:28px;height:28px;border-radius:50%;background:var(--grad-primary);color:#fff;font-weight:700;font-size:.75rem;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);}
.price-step .pop-tag{position:absolute;top:-13px;right:var(--space-6);background:var(--grad-primary);color:#fff;font-size:.66rem;font-weight:700;padding:.3rem .7rem;border-radius:var(--radius-full);letter-spacing:.02em;}
.price-step .icon{width:44px;height:44px;border-radius:50%;background:var(--color-surface-2);display:flex;align-items:center;justify-content:center;color:var(--color-primary);margin-bottom:var(--space-4);}
.price-step .icon svg{width:20px;height:20px;}
.price-step h3{font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2);}
.price-step .desc{font-size:var(--text-sm);color:var(--color-text-muted);margin-bottom:var(--space-6);min-height:2.6em;}
.price-step .btn{width:100%;justify-content:center;}
.price-arrow{display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);flex-shrink:0;opacity:.6;}
.capacity-note{text-align:center;font-size:var(--text-sm);color:var(--color-text-muted);max-width:520px;margin:var(--space-8) auto 0;}
.custom-line{text-align:center;font-size:var(--text-sm);color:var(--color-text-muted);margin-top:var(--space-4);}
.custom-line a{color:var(--color-primary);font-weight:600;}
.founder-card{display:flex;gap:var(--space-6);align-items:flex-start;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-xl);padding:clamp(var(--space-6),4vw,var(--space-10));box-shadow:var(--shadow-sm);}
.founder-avatar{width:60px;height:60px;border-radius:50%;background:var(--grad-primary);color:#fff;font-family:var(--font-display);font-weight:700;font-size:1rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
@media (max-width:700px){.price-flow{flex-direction:column;}.price-arrow{transform:rotate(90deg);padding:var(--space-1) 0;}.price-step .pop-tag{right:auto;left:var(--space-6);top:-13px;}.founder-card{flex-direction:column;align-items:center;text-align:center;}}

.why-band{width:100vw;margin-left:calc(50% - 50vw);background:#0f0c07;padding-block:clamp(var(--space-16),8vw,var(--space-24));}
.why-band .eyebrow{color:#e6ab48;}
.why-band .section-title{color:#f6efe1;}
.why-band .section-sub{color:#b6a891;}
.compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;max-width:900px;margin:var(--space-10) auto 0;border-radius:var(--radius-lg);overflow:hidden;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.1);}
.compare-head{padding:var(--space-4) var(--space-5);font-weight:700;font-size:var(--text-sm);}
.compare-head.them{background:#171310;color:#8d8071;}
.compare-head.us{background:var(--grad-primary);color:#1a1611;}
.compare-cell{display:flex;align-items:flex-start;gap:.65rem;padding:var(--space-4) var(--space-5);font-size:var(--text-sm);line-height:1.45;background:#141009;}
.compare-cell.them{color:#8d8071;}
.compare-cell.us{color:#f3ead9;font-weight:500;background:#181209;}
.compare-cell .ico{flex-shrink:0;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.compare-cell.them .ico{background:rgba(255,255,255,.08);color:#8d8071;}
.compare-cell.us .ico{background:#e6ab48;color:#1a1611;}
.compare-cell .ico svg{width:10px;height:10px;}
@media (max-width:640px){.compare-cell{font-size:var(--text-xs);padding:var(--space-3) var(--space-4);}.compare-head{font-size:var(--text-xs);padding:var(--space-3) var(--space-4);}}

.faq-list{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:var(--space-3);}
.faq-item{border:1px solid var(--color-border);border-radius:var(--radius-md);background:var(--color-surface);overflow:hidden;}
.faq-item summary{list-style:none;display:flex;align-items:center;justify-content:space-between;padding:var(--space-5);font-weight:600;font-size:var(--text-base);cursor:pointer;}
.faq-item summary::-webkit-details-marker{display:none;}
.faq-item summary .plus{width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--color-primary);transition:transform .25s var(--ease);}
.faq-item[open] summary .plus{transform:rotate(45deg);}
.faq-item .answer{padding:0 var(--space-5) var(--space-5);color:var(--color-text-muted);font-size:var(--text-sm);}

.form-card{max-width:760px;margin:0 auto;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-xl);padding:clamp(var(--space-6),5vw,var(--space-10));box-shadow:var(--shadow-md);}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);}
.form-grid .full{grid-column:1/-1;}
.field label{display:block;font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--color-text-muted);margin-bottom:var(--space-2);}
.field input,.field textarea{width:100%;padding:.75rem 1rem;border-radius:var(--radius-md);border:1px solid var(--color-border);background:var(--color-surface-2);font-size:var(--text-sm);}
.field input:focus,.field textarea:focus{outline:none;border-color:var(--color-primary);background:var(--color-surface);}
.field textarea{resize:vertical;min-height:80px;}
.form-card .btn-primary{width:100%;justify-content:center;margin-top:var(--space-4);}
.form-note{text-align:center;font-size:var(--text-xs);color:var(--color-text-faint);margin-top:var(--space-3);}
@media (max-width:640px){.form-grid{grid-template-columns:1fr;}}

footer{border-top:1px solid var(--color-divider);padding-block:var(--space-10);}
.footer-inner{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-4);}
.footer-links{display:flex;gap:var(--space-6);font-size:var(--text-sm);color:var(--color-text-muted);}
.footer-links a:hover{color:var(--color-primary);}
.footer-tag{font-size:var(--text-xs);color:var(--color-text-faint);width:100%;text-align:center;margin-top:var(--space-6);}
.social{display:flex;gap:var(--space-3);}
.social a{width:34px;height:34px;border-radius:50%;border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);}
.social a:hover{border-color:var(--color-primary);color:var(--color-primary);}
.social svg{width:16px;height:16px;}

.status-msg{max-width:760px;margin:0 auto var(--space-4);padding:var(--space-4) var(--space-5);border-radius:var(--radius-md);font-size:var(--text-sm);font-weight:600;display:none;}
.status-msg.success{display:block;background:color-mix(in oklab, var(--color-success) 15%, transparent);color:var(--color-success);border:1px solid color-mix(in oklab, var(--color-success) 30%, transparent);}
.status-msg.error{display:block;background:rgba(220,60,40,.1);color:#c0392b;border:1px solid rgba(220,60,40,.25);}
</style>
</head>
<body>

<header id="siteHeader">
  <div class="wrap nav">
    <a href="/" class="logo" aria-label="2FLY home">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 18 L28 6 L20 28 L16 18 L4 18Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" fill="none"/></svg>
      2FLY
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#process">How it works</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <div class="nav-right">
      <button class="theme-toggle" data-theme-toggle aria-label="Switch to dark mode">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <a href="#start" class="btn btn-primary">Start Preview</a>
    </div>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap hero-inner">
      <p class="eyebrow" style="margin-bottom:var(--space-4);">A finished page. Zero upfront risk.</p>
      <h1>See it live.<br /><span class="accent">Pay only if you love it.</span></h1>
      <p class="lead">We build a real, custom landing page for your business. Don't love it? It expires — you owe nothing.</p>
      <div class="hero-cta">
        <a href="#start" class="btn btn-primary" style="padding:1rem 2rem;font-size:var(--text-base);">
          Build My Preview
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div class="proof-row">
        <span class="proof-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span>No card charged, ever &mdash; until you personally approve the page</span>
      </div>
    </div>
  </section>

  <div class="showcase-band">
    <p class="showcase-caption">A few of the styles we build</p>
    <div class="showcase-stage" aria-hidden="true">
      <div class="showcase-track">
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-1.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-2.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-3.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-4.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-1.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-2.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-3.jpg" alt="" loading="lazy"></div>
        <div class="showcase-card"><img src="/instant-preview-assets/showcase-4.jpg" alt="" loading="lazy"></div>
      </div>
    </div>
  </div>

  <section id="process">
    <div class="wrap">
      <p class="eyebrow" style="text-align:center;">The whole process</p>
      <h2 class="section-title">A simpler way to a better website.</h2>
      <p class="section-sub">From blank brief to live preview in four moves.</p>
      <div class="process-grid">
        <div class="process-step">
          <div class="step-badge">01</div>
          <h3>Brief</h3>
          <p>Tell us what you sell &mdash; your business, offer, audience, and the visual direction you have in mind.</p>
        </div>
        <div class="process-step">
          <div class="step-badge">02</div>
          <h3>Build</h3>
          <p>Within 48 hours, we turn your answers into a real, custom, conversion-focused landing page.</p>
        </div>
        <div class="process-step">
          <div class="step-badge">03</div>
          <h3>Preview</h3>
          <p>We send a private, password-protected link. Click around and see the page working before deciding.</p>
        </div>
        <div class="process-step">
          <div class="step-badge">04</div>
          <h3>Unlock</h3>
          <p>Pay $100 to remove the preview lock and watermark. Not for you? Walk away, you owe nothing.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" style="background:var(--color-surface-2);">
    <div class="wrap">
      <p class="eyebrow" style="text-align:center;">No fine print</p>
      <h2 class="section-title">Simple, transparent pricing.</h2>
      <p class="section-sub">No card. No contract. No catch.</p>
      <div class="price-flow">
        <div class="price-step">
          <span class="step-num">1</span>
          <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></span>
          <h3>Free Preview</h3>
          <p class="desc">We build your custom page and send a private link. Nothing to pay upfront, no card required.</p>
          <a href="#start" class="btn btn-ghost">Get started</a>
        </div>
        <div class="price-arrow" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <div class="price-step highlight">
          <span class="step-num">2</span>
          <span class="pop-tag">Only if you love it</span>
          <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>
          <h3>$100 Unlock</h3>
          <p class="desc">Pay once to remove the watermark and take the page live. Not for you? Walk away &mdash; you're never charged.</p>
          <a href="#start" class="btn btn-primary">Build My Preview</a>
        </div>
      </div>
      <p class="capacity-note">Every preview is built by hand, one at a time &mdash; we keep the queue small on purpose, to protect quality over volume.</p>
      <div class="custom-line">Need a multi-page site or ongoing edits? <a href="#start">Talk to us about a custom scope &rarr;</a></div>
    </div>
  </section>

  <section>
    <div class="wrap" style="max-width:760px;">
      <div class="founder-card">
        <div class="founder-avatar" aria-hidden="true">BL</div>
        <div>
          <p class="eyebrow" style="margin-bottom:var(--space-2);">Who's building this</p>
          <h3 style="font-family:var(--font-display);font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-3);">Bruno Lima &mdash; Founder, 2FLY Digital</h3>
          <p style="font-size:var(--text-sm);color:var(--color-text-muted);line-height:1.6;">2FLY is a small, hands-on studio &mdash; every preview is built and reviewed personally before it reaches your inbox. No account managers, no outsourced templates. If something's off, tell us directly and we'll fix it before you ever see a bill.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="why-band">
    <div class="wrap">
      <p class="eyebrow" style="text-align:center;">Why choose 2FLY</p>
      <h2 class="section-title">Built different, on purpose.</h2>
      <p class="section-sub">We're a small studio betting on quality over volume. Here's what that actually changes for you.</p>
      <div class="compare-grid">
        <div class="compare-head them">Typical agencies</div>
        <div class="compare-head us">2FLY</div>

        <div class="compare-cell them"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg></span>Pay upfront, hope it works out</div>
        <div class="compare-cell us"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>See the real page first &mdash; pay only if you love it</div>

        <div class="compare-cell them"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg></span>2&ndash;6 week turnaround</div>
        <div class="compare-cell us"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>48-hour build, most weeks</div>

        <div class="compare-cell them"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg></span>Template with your logo swapped in</div>
        <div class="compare-cell us"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>Built around your brand, offer, and audience</div>

        <div class="compare-cell them"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg></span>Routed through account managers</div>
        <div class="compare-cell us"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>Every preview reviewed personally by the founder</div>

        <div class="compare-cell them"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg></span>Locked into contracts and retainers</div>
        <div class="compare-cell us"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>One flat $100 &mdash; no contract, no retainer</div>

        <div class="compare-cell them"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg></span>Vague, slow revision process</div>
        <div class="compare-cell us"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>Direct feedback with us, before you ever pay</div>
      </div>
    </div>
  </div>

  <section id="faq" style="background:var(--color-surface-2);">
    <div class="wrap">
      <p class="eyebrow" style="text-align:center;">No fine print</p>
      <h2 class="section-title">Questions, answered.</h2>
      <div class="faq-list">
        <details class="faq-item" open>
          <summary>How fast will I see my page?<span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span></summary>
          <div class="answer">Your first finished preview is typically ready within 48 hours after we receive a clear brief. We'll email the private link and password directly to you.</div>
        </details>
        <details class="faq-item">
          <summary>What is included?<span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span></summary>
          <div class="answer">A fully custom, conversion-focused landing page built around your business, offer, and brand direction — private link, hosting, and revisions before you decide.</div>
        </details>
        <details class="faq-item">
          <summary>What happens if I do not pay?<span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span></summary>
          <div class="answer">Nothing. The private preview simply expires. No card was ever on file, so there's nothing to cancel and nothing you owe.</div>
        </details>
        <details class="faq-item">
          <summary>Can I request changes?<span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span></summary>
          <div class="answer">Yes — share feedback on your private preview and we'll refine it before you decide whether to unlock it.</div>
        </details>
        <details class="faq-item">
          <summary>Why is it only $100?<span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span></summary>
          <div class="answer">$100 covers the time it takes to build and host your preview — it's not meant to be a profit line. We'd rather prove the work first and earn the bigger conversation about your site later, once you've already seen we deliver.</div>
        </details>
      </div>
    </div>
  </section>

  <section id="start">
    <div class="wrap">
      <p class="eyebrow" style="text-align:center;">Your turn</p>
      <h2 class="section-title">Give us the raw material.</h2>
      <p class="section-sub">A few useful details are enough to start. We'll turn them into a page you can actually see, use, and judge.</p>
      <div id="formStatus" class="status-msg"></div>
      <form class="form-card" id="intakeForm">
        <div class="form-grid">
          <div class="field"><label for="contactName">Your name</label><input id="contactName" name="contactName" type="text" required /></div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required /></div>
          <div class="field full"><label for="businessName">Business / brand</label><input id="businessName" name="businessName" type="text" /></div>
          <div class="field full"><label for="description">What do you sell?</label><input id="description" name="description" type="text" /></div>
          <div class="field full"><label for="vibe">Brand colors or vibe</label><textarea id="vibe" name="vibe"></textarea></div>
          <div class="field full"><label for="mustInclude">Must-include copy or offer details (optional)</label><textarea id="mustInclude" name="mustInclude"></textarea></div>
        </div>
        <button type="submit" class="btn btn-primary" id="submitBtn">Build My Preview</button>
        <p class="form-note">No payment details required. We'll only use this information to create and deliver your preview.</p>
      </form>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <div class="footer-inner">
      <a href="/" class="logo" aria-label="2FLY home">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 18 L28 6 L20 28 L16 18 L4 18Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" fill="none"/></svg>
        2FLY
      </a>
      <div class="footer-links">
        <a href="#process">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </div>
      <div class="social">
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zM10 8.98h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.31h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12z"/></svg></a>
        <a href="#" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H21l-6.6 7.54L22 21h-6.3l-4.94-6.46L4.9 21H2.8l7.06-8.07L2 3h6.4l4.47 5.9L18.9 3z"/></svg></a>
        <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.4s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16 5 12 5 12 5s-4 0-7.1.1c-.4 0-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S1.8 10.3 1.8 12.2v1.6C1.8 15.7 2 17.6 2 17.6s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1C7 21 12 21 12 21s4 0 7.1-.1c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-1.6c0-1.9-.2-3.8-.2-3.8zM9.9 15.5V8.9l6 3.3-6 3.3z"/></svg></a>
      </div>
    </div>
    <p class="footer-tag">© 2026 2FLY Digital · Build first. Commit only if you love it.</p>
  </div>
</footer>

<script>
(function(){
  const t = document.querySelector('[data-theme-toggle]'), r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  function render(){
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = d === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  render();
  t.addEventListener('click', function(){
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    render();
  });

  const header = document.getElementById('siteHeader');
  let lastY = window.scrollY;
  window.addEventListener('scroll', function(){
    const y = window.scrollY;
    if (y > lastY && y > 120) header.classList.add('hidden');
    else header.classList.remove('hidden');
    lastY = y;
  });

  const form = document.getElementById('intakeForm');
  const statusEl = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending your brief…';
    statusEl.className = 'status-msg';
    statusEl.textContent = '';
    const data = Object.fromEntries(new FormData(form).entries());
    fetch('/api/instant-preview/intake', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function(res){
      return res.json().then(function(body){ return { ok: res.ok, body: body }; });
    }).then(function(result){
      if (result.ok) {
        statusEl.className = 'status-msg success';
        statusEl.textContent = 'Brief received. We\\'ll have your private preview ready within 48 hours.';
        form.reset();
      } else {
        statusEl.className = 'status-msg error';
        statusEl.textContent = (result.body && result.body.error) || 'Please check your details and try again.';
      }
    }).catch(function(){
      statusEl.className = 'status-msg error';
      statusEl.textContent = 'We could not send your brief. Please try again.';
    }).finally(function(){
      submitBtn.disabled = false;
      submitBtn.textContent = 'Build My Preview';
    });
  });
})();
</script>
</body>
</html>`;

export async function GET() {
  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
