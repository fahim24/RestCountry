const loadCountries = () => {
	fetch("https://restcountries.com/v3.1/all")
		.then((res) => res.json())
		.then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
	const allCountryHtml = countries.map((country) => getCountryHtml(country));
	const htmlDocuments = document.getElementById("countries");
	htmlDocuments.innerHTML = allCountryHtml.join(" ");
};

const getCountryHtml = ({ name, flags, continents }) => {
	return `
  <div class="country">
    <h2>${name.common}</h2>
		<h4>${continents[0]}</h4>
		<img src="${flags.png}">
  </div>
  `;
};

loadCountries();
