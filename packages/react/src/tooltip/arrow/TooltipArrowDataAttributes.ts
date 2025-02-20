export enum TooltipArrowDataAttributes {
  /**
   * Present when the tooltip is open.
   */
  open = 'data-open',
  /**
   * Present when the tooltip is closed.
   */
  closed = 'data-closed',
  /**
   * Present when the anchor is hidden.
   */
  anchorHidden = 'data-anchor-hidden',
  /**
   * Indicates which side the tooltip is positioned relative to the trigger.
   * @type {'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
   */
  side = 'data-side',
  /**
   * Present when the tooltip arrow is uncentered.
   */
  uncetered = 'data-uncentered',
}
