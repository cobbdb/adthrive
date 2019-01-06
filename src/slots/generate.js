import HeaderSlot from './HeaderSlot';
import MidpageSlot from './MidpageSlot';

export default function generate() {
  // Setup the leaderboard stalker.
  const header = new HeaderSlot();
  header.bindListeners();

  // Grab all the article's paragraph nodes.
  let nodes = document.querySelectorAll('article.main > p');

  // Convert NodeList to proper array.
  nodes = [...nodes];

  // Filter out all the nodes with image children.
  nodes = nodes.filter(p => !p.querySelector('img'));

  // Retain slot references for easy access if needed.
  const slots = [];
  // Last ad position successfully generated.
  let last = false;

  nodes.forEach((p) => {
    // Next available position id.
    const id = slots.length;

    // Max of 9 positions and no trailing at end of page.
    if (id < 9 && p.nextElementSibling) {
      // Offset below which no ad is visible in viewport.
      const minOffset = last.offsetTop + window.innerHeight;

      if (!last || p.offsetTop > minOffset) {
        // This position is safe to generate an ad under.
        last = document.createElement('p');
        last.className = 'at-ad at-ad-midpage';
        last.id = `at-ad-${id + 1}`;
        p.parentNode.insertBefore(last, p.nextElementSibling);
        slots.push(new MidpageSlot(id + 1));
      }
    }
  });
}
