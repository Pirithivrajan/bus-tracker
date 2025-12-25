let map;

const busRoutes = [
    {
        name: "Bus 21A",
        lat: 13.0827,
        lng: 80.2707,
        places: ["Chennai", "T Nagar"]
    },
    {
        name: "Bus 54B",
        lat: 13.0604,
        lng: 80.2496,
        places: ["Guindy", "Velachery"]
    },
    {
        name: "Bus 102",
        lat: 13.0878,
        lng: 80.2785,
        places: ["Anna Nagar", "Central"]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.0827, lng: 80.2707 },
        zoom: 12,
    });

    map.addListener("click", function (e) {
        findBuses(e.latLng.lat(), e.latLng.lng());
    });
}

function findBuses(lat, lng) {
    const list = document.getElementById("buses");
    list.innerHTML = "";

    busRoutes.forEach(bus => {
        const distance = Math.sqrt(
            Math.pow(bus.lat - lat, 2) + Math.pow(bus.lng - lng, 2)
        );

        if (distance < 0.05) {
            let li = document.createElement("li");
            li.innerText = bus.name;
            list.appendChild(li);
        }
    });

    if (list.innerHTML === "") {
        list.innerHTML = "<li>No buses available for this area</li>";
    }
}
