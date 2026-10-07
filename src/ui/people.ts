import { renderLegaXPage } from "./page";

export function renderPeople(): Response {
  return renderLegaXPage({
    title: "People",
    active: "People",
    content: `
      <section class="page-hero" aria-labelledby="people-title">
        <p class="eyebrow">People & relationships</p>
        <h1 id="people-title">People</h1>
        <p class="lede">A governed people interface for discovering and understanding relationships in the active LegaX context. Identity, participation, visibility and authority remain distinct.</p>
      </section>
      <section class="panel" aria-labelledby="people-tools">
        <div class="panel-heading"><div><p class="kicker">People workspace</p><h2 id="people-tools">Find people within your permitted context</h2></div><span class="state state-neutral">Context required</span></div>
        <form class="filters" aria-label="People filters">
          <label>Search people<input name="q" type="search" placeholder="Name or identifier" autocomplete="off"></label>
          <label>Relationship<select name="relationship"><option>All relationships</option><option>Participant</option><option>Resident</option><option>Worker</option><option>Provider contact</option><option>Visitor</option></select></label>
          <button type="button" class="button secondary">Apply filters</button>
        </form>
        <div class="empty" role="status"><strong>No people are loaded into this view.</strong><p>People are shown only when an authoritative read establishes the active context and permitted visibility. The interface never treats a visible person as automatically authorized for an action.</p></div>
      </section>
      <section class="cards two" aria-label="People interface capabilities">
        <article class="card"><span class="card-index">01</span><h2>Identity</h2><p>Present verified or declared identity information according to its evidence state. Identity is not the same as an account, participant status or authority.</p></article>
        <article class="card"><span class="card-index">02</span><h2>Participation</h2><p>Show where a person participates and in what context, without turning participation or relationship into unrestricted permission.</p></article>
        <article class="card"><span class="card-index">03</span><h2>Relationships</h2><p>Expose governed relationships such as community, organization, provider or service relationships with clear scope.</p></article>
        <article class="card"><span class="card-index">04</span><h2>Privacy</h2><p>Minimize fields, respect visibility boundaries and avoid exposing sensitive information merely because it exists in the system.</p></article>
      </section>
    `
  });
}
