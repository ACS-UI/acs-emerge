/**
 * A column is "intro" shaped when it's just an eyebrow paragraph + heading
 * (no image, nothing else) — e.g. "Why Now" / "Scoped delivery is no longer
 * the ask." — as opposed to a column of regular body copy.
 * @param {Element} col A column cell.
 * @returns {boolean}
 */
function isIntroCol(col) {
  return !col.querySelector('picture')
    && !!col.querySelector('h1, h2, h3, h4, h5, h6')
    && col.children.length <= 2;
}

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  [...block.children].forEach((row) => {
    const rowCols = [...row.children];

    // setup image columns
    rowCols.forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });

    // Narrow "intro" column (see isIntroCol) sized to its content instead of
    // splitting evenly with its sibling — only when exactly one of the two
    // columns has that shape, so a row of two regular text columns is
    // unaffected.
    if (rowCols.length === 2) {
      const [colA, colB] = rowCols;
      if (isIntroCol(colA) !== isIntroCol(colB)) {
        (isIntroCol(colA) ? colA : colB).classList.add('columns-intro-col');
      }
    }
  });
}
