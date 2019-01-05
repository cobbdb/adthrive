import googletag from 'gpt';

/**
 * # Slot
 * Basic display ad attached to the Publisher service.
 */
export default class Slot {
  constructor(adunit, sizes, divId) {
    // Generate and register the ad slot.
    const slot = googletag.defineSlot(`/18190176/${adunit}`, sizes, divId);
    slot.addService(googletag.pubads());

    // Store the reference for easy access.
    this.gpt = slot;
  }
}
