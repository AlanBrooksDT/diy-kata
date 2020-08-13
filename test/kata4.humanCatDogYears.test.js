const { humanCatDogYears } = require("../src");
    
    describe("Human years to cat and dog years via array", () => {
      test("returns cat and dog years based on human years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
      });
    });
// Look Ma, no handlebars!!!
