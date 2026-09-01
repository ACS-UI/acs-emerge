import { createOptimizedPicture } from '../../scripts/aem.js';

/** Builds one team-member card (photo + "Name | Role" text) from an authored row. */
function buildCard(row) {
  const cells = [...row.children];
  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const textCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  const card = document.createElement('div');
  card.className = 'team-card';

  const media = document.createElement('div');
  media.className = 'team-card-image';
  const img = imageCell?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }]));
  }
  card.append(media);

  const name = textCell?.querySelector('p') || textCell;
  if (name) {
    name.className = 'team-card-name';
    card.append(name);
  }

  return card;
}

/** Decorates the team block: a responsive grid of member photo + name/role. */
export default function decorate(block) {
  const cards = [...block.children]
    .filter((row) => row.querySelector('picture, img') || row.textContent.trim())
    .map(buildCard);

  const grid = document.createElement('div');
  grid.className = 'team-grid';
  cards.forEach((card) => grid.append(card));

  block.replaceChildren(grid);
}
