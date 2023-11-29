const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
    it(`case orange light`, () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
    it(`case green light`, () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
    it(`case other light`, () => {
        expect(app.trafficLight("hello")).toBe(undefined);
    });
    it(`case undefined light`, () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });
});
