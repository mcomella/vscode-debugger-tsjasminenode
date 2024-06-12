import "jasmine"
import { getWorld } from "../index.js";

describe('the server', () => {
    it('should return world', () => {
        expect(getWorld()).toBe('world');
    });
});
