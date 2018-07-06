/// Populates list below text box filtering by substrings in box.
const SearchFilter = (list, text) => {
  return list.filter(el => {
    return el.indexOf(text) !== -1;
  });
};

module.exports = SearchFilter;
