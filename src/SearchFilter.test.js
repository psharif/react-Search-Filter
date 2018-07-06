const SearchFilter = require("./FilterInput/SearchFilter");
const JsonList = require("./FilterInput/list.json");
const List = JsonList.map(el => el.text);

///Checks to make sure the function exists
test("SearchFilter function exists", () => {
  expect(typeof SearchFilter).toEqual("function");
});

///Checks for the two list items with the word speedy in them
test('Filters for the substring "speedy"', () => {
  expect(SearchFilter(List, "speedy")).toContain("speedy gonzalez");
  expect(SearchFilter(List, "speedy")).toContain("speedy rush buddhist");
});

///Checks all the list items with the substring 'dd'
test('Filters for the substring "dd"', () => {
  expect(SearchFilter(List, "dd")).toContain("Eighty Five Year Old Buddhist");
  expect(SearchFilter(List, "dd")).toContain("eighty five Year old buddhist");
  expect(SearchFilter(List, "dd")).toContain("speedy rush buddhist");
});

///Checks for the two list items with the substring '?'
test('Filters for the substring "?"', () => {
  expect(SearchFilter(List, "?")).toContain("coffee bagels?");
});

///Checks for the two list items with the substring 'w'
test('Filters for the substring "w"', () => {
  expect(SearchFilter(List, "w")).toContain("what the rush coffee");
  expect(SearchFilter(List, "w")).toContain("random words are they");
  expect(SearchFilter(List, "w")).toContain("what piggy rush");
  expect(SearchFilter(List, "w")).toContain("cameras two hundred eighty");
});

///Checks all the list items with the substring 'random'
test('Filters for the substring "random"', () => {
  expect(SearchFilter(List, "random")).toContain("randomness");
  expect(SearchFilter(List, "random")).toContain("random words are they");
});

///Checks all the list items with the substring 'q' returns an empty array
test('Filters for the substring "q" to return empty list', () => {
  expect(SearchFilter(List, "q").length === 0).toBeTruthy();
});

///Checks all the list items with the substring 'q' returns an empty array
test('Filters for the substring "eighty three" to return empty list', () => {
  expect(SearchFilter(List, "eighty three").length === 0).toBeTruthy();
});

/// Checks to see that the input of eighty does not include 'Eighty Five Year Old Buddhist'
test('Checks that the input of "eighty" does not return a list including "Eighty Five Year Old Buddhist"', () => {
  expect(SearchFilter(List, "eighty").includes("Eighty Five Year Old Buddhist")).toBeFalsy();
});


