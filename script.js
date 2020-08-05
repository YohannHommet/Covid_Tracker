//* Variables
const url = 'https://api.covid19api.com/summary'
var countries = [];


//* Requête AJAX
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let response = request.response;
            countries = response.Countries;
            updateTable(countries);

        } else {
            alert('Un problême est survenu, veuillez réessayer plus tard')
        }
    }


    function updateTable(countries) {

        for (country of countries) {

            var newRow = '<tr><td>' + country.Country + '</td><td>' + country.TotalConfirmed + '</td><td>' + country.NewConfirmed + '</td><td>' + country.TotalRecovered + '</td><td>' + country.TotalDeaths + '</td></tr>';

            $('#tablebody').append(newRow)
        }

        $('#covidTable').DataTable();

    };

};