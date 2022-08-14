export const createCountriesListMarkup = (data = []) => {
  console.log(data);
  return data
    .map(({ flags, name, capital, population, languages }) => {
      `
      <img src="${flags.svg}" alt="" /> <span>&nbsp;${data.name.official}</span>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Language: ${data.languages}</p>`;
    })
    .join('');
};

export const markupCountry = (data = []) => {
  console.log(data);
  return data
    .map(({ flags, name }) => {
      return `<li><img src="${flags.svg}" alt="flag" height="30" width="50"/><p>${name.common}</p>`;
    })
    .join('');
};
