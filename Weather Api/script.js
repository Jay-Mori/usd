fetch('http://localhost:3001/weather')
    .then(res => res.json())
    .then(data => {
        display(data);
    })
    .catch(err => {
        console.log("error");
    });

function display(el) {
    console.log(el);

    let store = el.map(store => `
    <div class="weather-card">
        <h1>${store.city}</h1>
        <p><strong>Temperature:</strong> ${store.temperature}°C</p>
        <p><strong>Condition:</strong> ${store.condition}</p>
        <p><strong>Humidity:</strong> ${store.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${store.wind_speed} km/h</p>
        <p><strong>Visibility:</strong> ${store.visibility} km</p>
    </div>
        `).join("");

    document.getElementById('container').innerHTML = store;
}