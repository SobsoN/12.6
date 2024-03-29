$(function(){


	const url = 'https://restcountries.eu/rest/v1/name/',
		countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
		let countryName = $('#country-name').val();
		if(!countryName.length) countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item){
   			$('<li>').text(item.name).appendTo(countriesList);
		});
	}

});