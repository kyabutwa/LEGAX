import { renderLegaXPage } from "./page";

export function renderLandingPage(): Response {
  return renderLegaXPage({
    title: "Welcome Home",
    active: "Overview",
    content: `
<section class="landing-hero">
  <img class="landing-logo" src="https://raw.githubusercontent.com/kyabutwa/LEGAX/main/legax-logo-transparent.png" alt="LegaX">
  <p class="landing-eyebrow">INTELLIGENT LIVING INFRASTRUCTURE</p>
  <h1>Who you are.<br>Where you belong.</h1>
  <p class="landing-lede">LegaX is building a trusted foundation for people to enter, identify themselves and participate in the places and communities they choose.</p>
  <div class="landing-actions">
    <a class="landing-primary" href="/account">Create your LegaX account</a>
    <a class="landing-secondary" href="/account">Sign in</a>
  </div>
  <div class="landing-trust"><span>Secure credentials</span><span>Protected sessions</span><span>Authentication stays separate from authority</span></div>
</section>
<section class="landing-product">
  <div class="landing-copy">
    <p class="landing-kicker">THE FEATURE WE ARE SHIPPING NOW</p>
    <h2>A real LegaX account.</h2>
    <p>Create an account, establish a protected session, and enter the platform. No fake dashboard. No fabricated records. No permission hidden inside a button.</p>
    <a class="landing-primary" href="/account">Open account</a>
  </div>
  <div class="landing-preview" aria-label="LegaX account interface preview">
    <div class="preview-bar"><span>LegaX</span><span>Account</span></div>
    <div class="preview-title">Create account</div>
    <div class="preview-field">Your name</div>
    <div class="preview-field">you@example.com</div>
    <div class="preview-field">Password · 10+ characters</div>
    <div class="preview-button">Create account</div>
  </div>
</section>
<section class="landing-steps" aria-label="Account journey">
  <article><b>01</b><h3>Create</h3><p>Name, email and password. The password is derived before storage.</p></article>
  <article><b>02</b><h3>Authenticate</h3><p>Sign in to a protected session. Authentication never becomes universal authority.</p></article>
  <article><b>03</b><h3>Continue</h3><p>Move into the next governed context only when that capability is implemented.</p></article>
</section>
<section class="landing-close">
  <h2>One real feature. Built like the beginning of a real platform.</h2>
  <a class="landing-primary" href="/account">Enter LegaX</a>
</section>
<style>
.landing-hero:before,.landing-hero:after{content:"";position:absolute;border-radius:999px;filter:blur(10px);pointer-events:none;z-index:-1;animation:legaxFloat 14s ease-in-out infinite alternate}.landing-hero:before{width:260px;height:260px;left:4%;top:18%;background:rgba(45,110,255,.16);box-shadow:0 0 120px rgba(45,110,255,.18)}.landing-hero:after{width:320px;height:320px;right:2%;bottom:6%;background:rgba(31,177,255,.10);box-shadow:0 0 140px rgba(31,177,255,.14)}.landing-hero{position:relative;isolation:isolate;min-height:calc(100svh - 72px);display:grid;place-items:center;align-content:center;text-align:center;padding:55px 0 90px}.landing-logo{width:118px;height:118px;object-fit:contain;margin-bottom:28px}.landing-eyebrow,.landing-kicker{font-size:11px;letter-spacing:.14em;font-weight:800;color:#9aa6b8}.landing-hero h1{font-size:clamp(52px,9vw,112px);line-height:.91;letter-spacing:-.065em;margin:15px 0 0}.landing-lede{max-width:720px;color:#aeb8c8;font-size:clamp(17px,2.1vw,22px);line-height:1.55;margin:28px auto 0}.landing-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:34px}.landing-primary,.landing-secondary{min-height:52px;padding:0 22px;border-radius:17px;display:inline-flex;align-items:center;justify-content:center;font-weight:760}.landing-primary{background:#f6f8fb;color:#071018}.landing-secondary{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.045)}.landing-trust{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:22px;color:#778297;font-size:12px}.landing-trust span:before{content:"✓";color:#b9f7d0;margin-right:7px}.landing-product{display:grid;grid-template-columns:1fr 1fr;gap:18px}.landing-copy,.landing-preview,.landing-steps article{border:1px solid rgba(255,255,255,.11);border-radius:30px;background:linear-gradient(145deg,rgba(10,35,82,.86),rgba(5,18,43,.84));box-shadow:0 30px 100px rgba(0,0,0,.32)}.landing-copy{padding:clamp(26px,4vw,48px);display:flex;flex-direction:column;justify-content:center}.landing-copy h2{font-size:clamp(34px,5vw,58px);letter-spacing:-.05em;margin:10px 0}.landing-copy p{color:#aeb8c8;line-height:1.65;max-width:560px}.landing-copy .landing-primary{align-self:flex-start;margin-top:18px}.landing-preview{padding:20px;min-height:390px}.preview-bar{display:flex;justify-content:space-between;color:#8f9bad;font-size:12px;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,.08)}.preview-title{font-size:28px;font-weight:760;letter-spacing:-.04em;margin:34px 0 14px}.preview-field{height:50px;border:1px solid rgba(255,255,255,.12);border-radius:14px;margin-top:10px;padding:0 14px;display:flex;align-items:center;color:#778297;background:rgba(255,255,255,.025)}.preview-button{height:50px;border-radius:14px;margin-top:14px;display:grid;place-items:center;background:#f6f8fb;color:#071018;font-weight:760}.landing-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}.landing-steps article{padding:28px}.landing-steps b{color:#b9f7d0;font-size:12px;letter-spacing:.12em}.landing-steps h3{font-size:22px;margin:18px 0 8px}.landing-steps p{color:#aeb8c8;line-height:1.6}.landing-close{text-align:center;padding:120px 10px 25px}.landing-close h2{max-width:800px;margin:0 auto 24px;font-size:clamp(36px,6vw,72px);line-height:.98;letter-spacing:-.055em}.landing-close .landing-primary{margin:auto}@keyframes legaxFloat{from{transform:translate3d(-14px,-10px,0) scale(1)}to{transform:translate3d(14px,12px,0) scale(1.06)}}@media(max-width:820px){.landing-product,.landing-steps{grid-template-columns:1fr}.landing-hero{padding-top:40px}.landing-hero h1{font-size:clamp(48px,14vw,78px)}.landing-actions a{width:min(340px,100%)}.landing-logo{width:94px;height:94px}.landing-close{padding-top:90px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
</style>`
  });
}
