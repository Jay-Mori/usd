fetch('http://localhost:3000/regional')
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
        <div class="state-card">
            <h1>${store.loc}</h1>
            <p><strong>Confirmed (Indian):</strong> ${store.confirmedCasesIndian}</p>
            <p><strong>Confirmed (Foreign):</strong> ${store.confirmedCasesForeign}</p>
            <p><strong>Discharged:</strong> ${store.discharged}</p>
            <p><strong>Deaths:</strong> ${store.deaths}</p>
            <p><strong>Total Confirmed:</strong> ${store.totalConfirmed}</p>
        </div>
        `).join("");

    document.getElementById('container').innerHTML = store;
}
