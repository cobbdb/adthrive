import Slot from './Slot';

/**
 * # MidpageSlot
 * Position that displays between article content. Any page may have
 * at most 9 of these and there may only be 1 visible at any time.
 * These should not be created immediately below an image.
 */
export default class MidpageSlot extends Slot {
  constructor(id) {
    super(`AdThrive_Content_${id}/test`, [[320, 50], [300, 250]], `at-ad-${id}`);

    // Store the id for easy reference.
    this.id = id;
  }
}
