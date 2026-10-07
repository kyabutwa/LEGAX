import { renderLegaXPage } from "./page";

export function renderAppShell(): Response {
  return renderLegaXPage({
    title: "Welcome Home",
    active: "Overview",
    content: `
      <section class="hero" id="overview" aria-labelledby="welcome">
        <div class="eyebrow"><span class="dot" aria-hidden="true"></span> Living infrastructure</div>
        <h1 id="welcome">Welcome Home<span class="fr">Bienvenue chez vous</span></h1>
        <p class="lede">LegaX connects identity, participation, places, services, commerce and the physical world while keeping people and communities in control of what they authorize.</p>
      </section>
      <section class="grid" aria-label="LegaX experiences">
        <article class="card" id="services"><h2>Services</h2><p>Discover and operate LegaServices through governed requests, authorization, execution, outcomes and evidence.</p></article>
        <article class="card" id="places"><h2>Places</h2><p>Understand the places, units, facilities and resources that form the physical context of participation.</p></article>
        <article class="card" id="activity"><h2>Activity</h2><p>Follow meaningful events and outcomes with clear state, provenance and recovery paths.</p></article>
      </section>
      <section class="status" aria-label="Platform status"><span class="status-label">Canonical runtime foundation</span><span class="status-value">Operational</span></section>
    `
  });
}
