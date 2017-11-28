import { flush, render } from '@stencil/core/testing';
import { Compass } from './compass';

describe('wr-compass', () => {
  it('should build', () => {
    expect(new Compass()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [Compass],
        html: '<wr-compass></wr-compass>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('NEWS° / °');
    });

    it('should work a bearing', async () => {
      element.bearing = 185;
      await flush(element);
      expect(element.textContent).toEqual('NEWS185° / °');
    });

    it('should work with a heading', async () => {
      element.heading = 95;
      await flush(element);
      expect(element.textContent).toEqual('NEWS° / 95°');
    });

    it('should work with both a bearing and a heading', async () => {
      element.bearing = 90
      element.heading = 45;
      await flush(element);
      expect(element.textContent).toEqual('NEWS90° / 45°');
    });
  });
});