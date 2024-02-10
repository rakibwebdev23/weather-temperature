const API_KEY = `1346412c3e2529f34ee903645f9e57bc`;
const loadTemperature = city => {
    const API_KEY = `1346412c3e2529f34ee903645f9e57bc`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}
const displayData = (temps) => {
    setInnerText('city', temps.name);
    setInnerText('temperature', temps.main.temp);
    setInnerText('condition', temps.weather[0].main)
}
const setInnerText = (id, text) => {
    const temperatures = document.getElementById(id);
    temperatures.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    searchField.value = '';
    loadTemperature(city);
});
// loadTemperature('dhaka');