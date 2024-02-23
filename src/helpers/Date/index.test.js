/**
 *
 */

import { getMonth } from ".";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      const month = getMonth(new Date("2022-01-01"));
      expect(month).toBe("janvier");
    });
    it("the function return mars for 2022-03-29 as date", () => {
      const month = getMonth(new Date("2022-03-29"));
      expect(month).toBe("mars"); // test ajouter
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      const month = getMonth(new Date("2022-07-08"));
      expect(month).toBe("juillet"); // test ajouter
    });
    it("the function return août 2022-08-29 as date", () => {
      const month = getMonth(new Date("2022-08-29"));
      expect(month).toBe("août"); // test ajouter
    });
  });
});
