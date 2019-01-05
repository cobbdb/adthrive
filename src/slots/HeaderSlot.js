import googletag from 'gpt';
import Slot from './Slot';

/**
 * # HeaderSlot
 * Leaderboard position that stalks the user during scroll.
 */
export default class HeaderSlot extends Slot {
  constructor() {
    super('AdThrive_Header_1/test', [320, 50], 'at-ad-header');

    // Generate and apply the responsive size map.
    const sizeMap = googletag.sizeMapping()
      .addSize([0, 0], [320, 50])
      .addSize([1000, 0], [728, 90])
      .build();
    this.gpt.defineSizeMapping(sizeMap);
  }

  /**
   * Even though it's easier to attach side-effects in the constructor,
   * it's better practice not to do work there and instead separate that
   * out into its own method.
   */
  bindListeners() {
    // Destroy the ad 5 seconds after render.
    googletag.pubads().addEventListener('slotRenderEnded', (event) => {
      if (event.slot === this.gpt) {
        window.setTimeout(() => {
          googletag.destroySlots([this.gpt]);
        }, 5000);
      }
    });

    /**
     * Destroy the ad after it's been viewed for 2 seconds. ActiveView
     * requires 1 second before this event will fire, so we only need to
     * wait an additional 1 second.
     */
    googletag.pubads().addEventListener('impressionViewable', (event) => {
      if (event.slot === this.gpt) {
        window.setTimeout(() => {
          googletag.destroySlots([this.gpt]);
        }, 1000);
      }
    });
  }
}
