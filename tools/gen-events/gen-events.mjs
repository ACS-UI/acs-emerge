/*
 * Generates 8 example event detail pages under /events/ as full DA HTML
 * documents. Each page mirrors image 1: event-hero, event-highlights,
 * recording, photo-gallery (feature), agenda, session-resources — plus a
 * `.metadata` block carrying date/time/attendees/duration so the events
 * query-index populates. Grey section backgrounds come from bg-muted section
 * metadata. Dummy images use picsum.photos (survives EDS optimize params).
 *
 * Writes files to tools/gen-events/out/<slug>.html for upload.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'out');
mkdirSync(OUT, { recursive: true });

// picsum image helper — stable per-seed so pages look consistent across loads
const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}.jpg`;

/*
 * All events are the "All Hands Meet" (same title). all-hands-meet is left
 * untouched; the rest are named ahm-[DD-mon-YYYY] with slightly varied
 * description, attendees, duration and a distinct date per page.
 */
const EVENTS = [
  {
    slug: 'all-hands-meet', name: 'All Hands Meet', date: '2026-08-11', dateLabel: '11th August, Tuesday',
    time: '9 AM IST', attendees: '500', duration: '2 hours', speakers: '8', breakouts: '3',
    about: 'The premier gathering of product visionaries and UI architects. Experience a masterclass in digital craftsmanship, exploring the intersection of precision engineering, luxury aesthetics, and futuristic interaction models in the dark-mode era.',
  },
  {
    slug: 'ahm-03-sep-2026', name: 'All Hands Meet', date: '2026-09-03', dateLabel: '3rd September, Thursday',
    time: '10 AM IST', attendees: '320', duration: '3 hours', speakers: '6', breakouts: '4',
    about: 'Our September all-hands brings the whole team together to review Q3 progress, share customer wins, and align on the priorities shaping the quarter ahead.',
  },
  {
    slug: 'ahm-18-sep-2026', name: 'All Hands Meet', date: '2026-09-18', dateLabel: '18th September, Friday',
    time: '2 PM IST', attendees: '640', duration: '2.5 hours', speakers: '10', breakouts: '5',
    about: 'A packed all-hands focused on delivery excellence — platform reliability, developer experience, and the AI-assisted workflows reshaping how we build together.',
  },
  {
    slug: 'ahm-07-oct-2026', name: 'All Hands Meet', date: '2026-10-07', dateLabel: '7th October, Wednesday',
    time: '11 AM IST', attendees: '410', duration: '2 hours', speakers: '7', breakouts: '3',
    about: 'This all-hands walks through the quarter’s biggest launches, with live demos, roadmaps, and the customer stories behind each release.',
  },
  {
    slug: 'ahm-21-oct-2026', name: 'All Hands Meet', date: '2026-10-21', dateLabel: '21st October, Wednesday',
    time: '9:30 AM IST', attendees: '280', duration: '1.5 hours', speakers: '5', breakouts: '2',
    about: 'A focused all-hands where leaders align on strategy, share recent wins, and set the vision for the next horizon of growth across the GDC.',
  },
  {
    slug: 'ahm-05-nov-2026', name: 'All Hands Meet', date: '2026-11-05', dateLabel: '5th November, Thursday',
    time: '10 AM IST', attendees: '750', duration: '4 hours', speakers: '12', breakouts: '6',
    about: 'Our largest all-hands of the season — a full agenda of lightning talks, demos, and cross-team collaborations exploring what’s next in AI, design, and delivery.',
  },
  {
    slug: 'ahm-19-nov-2026', name: 'All Hands Meet', date: '2026-11-19', dateLabel: '19th November, Thursday',
    time: '3 PM IST', attendees: '360', duration: '2 hours', speakers: '6', breakouts: '3',
    about: 'This all-hands puts customers at the centre — the challenges we solved, the value delivered, and the partnership models driving measurable impact.',
  },
  {
    slug: 'ahm-10-dec-2026', name: 'All Hands Meet', date: '2026-12-10', dateLabel: '10th December, Thursday',
    time: '9 AM IST', attendees: '900', duration: '2 hours', speakers: '9', breakouts: '4',
    about: 'Our year-end all-hands reflects on the milestones we hit, celebrates the people behind them, and aligns on the ambitions carrying us into the new year.',
  },
];

// Shared agenda + resources (light per-event variation via the event name)
const AGENDA = [
  ['9:00 AM', 'Opening Remarks', 'Noor Mohamed, Principal Architect', '15 min'],
  ['9:15 AM', 'GDC Q3 Strategy & Vision', 'Leadership Team', '30 min'],
  ['9:45 AM', 'Client Spotlights — Q2 Wins', 'Account Teams', '30 min'],
  ['10:15 AM', 'Innovation Showcase', 'Hemant Jha, UX Lead', '20 min'],
  ['10:35 AM', 'Open Q&A', 'All Hands', '20 min'],
  ['10:55 AM', 'Closing & Recognition', 'Priya Singh, Senior PO', '5 min'],
];

const p = (s) => `<p>${s}</p>`;
const cell = (html) => `<div>${html}</div>`;
const row = (...cells) => `<div>${cells.map(cell).join('')}</div>`;
const picture = (src, alt = '', eager = false) => `<picture><source srcset="${src}"><source srcset="${src}" media="(min-width: 600px)"><img src="${src}" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}"></picture>`;

function heroSection(e) {
  const block = `<div class="event-hero">`
    + row(`<h1>${e.name}</h1>${p(e.dateLabel)}`)
    + row(`${p('About the Event')}${p(e.about)}`)
    + row(`${p(`Timing : ${e.time}`)}${p(`Duration : ${e.duration}`)}${p(`Community : ${e.attendees} attending`)}`)
    + row(`${p('<a href="#register">Register Now</a>')}`)
    + row(picture(img(`${e.slug}-hero`, 1200, 900), `${e.name} hero`, true))
    + `</div>`;
  return `<div>${block}</div>`;
}

function highlightsSection(e) {
  const stat = (icon, value, label) => row(icon, `${p(value)}${p(label)}`);
  const block = `<div class="event-highlights">`
    + row(`${p('Key Highlights')}<h2>What made this event special</h2>`)
    + stat(p('👥'), `${e.attendees}+`, 'Attendees')
    + stat(p('🎤'), e.speakers, 'Speakers')
    + stat(p('☕'), e.breakouts, 'Breakout Sessions')
    + stat(p('🕒'), e.duration.replace(' hours', ' hrs').replace(' hour', ' hr'), 'Duration')
    + `</div>`;
  return `<div>${block}</div>`;
}

function recordingSection(e) {
  const block = `<div class="recording">`
    + row(`${p('Recording')}<h3>${e.name} — Full Recording</h3>${p('Duration: 1 hr 58 min · Uploaded ' + e.dateLabel)}${p('<a href="https://example.com/recording/' + e.slug + '">Watch Recording</a>')}`)
    + `</div>`;
  return sectionWithMuted(`<div>${block}</div>`);
}

function gallerySection(e) {
  const imgs = [
    picture(img(`${e.slug}-g1`, 1000, 1200)),
    picture(img(`${e.slug}-g2`, 800, 800)),
    picture(img(`${e.slug}-g3`, 800, 800)),
    picture(img(`${e.slug}-g4`, 800, 800)),
    picture(img(`${e.slug}-g5`, 800, 800)),
  ];
  const block = `<div class="photo-gallery spotlight">${imgs.map((i) => row(i)).join('')}</div>`;
  return `<div>${p('Photo Gallery')}<h2>Moments from the event</h2>${block}</div>`;
}

function agendaSection() {
  const rows = AGENDA.map(([t, title, who, dur]) => row(t, `<h4>${title}</h4>${p(who)}`, dur)).join('');
  const block = `<div class="agenda">`
    + row(`${p('Agenda')}<h2>Schedule at a glance</h2>`)
    + rows
    + `</div>`;
  return sectionWithMuted(`<div>${block}</div>`);
}

function resourcesSection(e) {
  const card = () => row(`<h3>${e.name} — Strategy & Vision</h3>${p('Leadership team • presentation deck covering roadmap and priorities.')}${p('<a href="https://example.com/deck/' + e.slug + '">Open</a>')}`);
  const block = `<div class="session-resources carousel">`
    + row(`${p('Presentation Slides')}<h2>Session Resources</h2>`)
    + card() + card() + card() + card()
    + `</div>`;
  return sectionWithMuted(`<div>${block}</div>`);
}

// wraps a section's inner HTML, injecting a bg-muted section-metadata block
function sectionWithMuted(sectionInnerDiv) {
  // sectionInnerDiv is "<div>...blocks...</div>"; add the metadata inside it
  const meta = `<div class="section-metadata">${row('Style', 'bg-muted')}</div>`;
  return sectionInnerDiv.replace(/<\/div>\s*$/, `${meta}</div>`);
}

function metadataBlock(e) {
  const block = `<div class="metadata">`
    + row('title', e.name)
    + row('description', e.about)
    + row('date', e.date)
    + row('time', e.time)
    + row('attendees', e.attendees)
    + row('duration', e.duration)
    + row('image', picture(img(`${e.slug}-hero`, 1200, 900), e.name))
    + `</div>`;
  return `<div>${block}</div>`;
}

function page(e) {
  const main = [
    heroSection(e),
    highlightsSection(e),
    recordingSection(e),
    gallerySection(e),
    agendaSection(e),
    resourcesSection(e),
    metadataBlock(e),
  ].join('\n');
  return `<body>\n  <header></header>\n  <main>\n${main}\n  </main>\n  <footer></footer>\n</body>\n`;
}

EVENTS.forEach((e) => {
  writeFileSync(join(OUT, `${e.slug}.html`), page(e));
});

// eslint-disable-next-line no-console
console.log(`generated ${EVENTS.length} pages to ${OUT}`);
EVENTS.forEach((e) => console.log(` - /events/${e.slug}`)); // eslint-disable-line no-console
