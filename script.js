var map = L.map('map').setView([13.0827, 80.2707], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const buses = [
{ name:"21A", lat:13.082, lng:80.270 },
{ name:"54B", lat:13.060, lng:80.249 },
{ name:"102", lat:13.090, lng:80.280 }
];

map.on('click', function(e){
    showBuses(e.latlng.lat, e.latlng.lng);
});

function showBuses(lat,lng){
let list = document.getElementById("buses");
list.innerHTML="";

buses.forEach(bus=>{
 let d = Math.sqrt(
  Math.pow(bus.lat-lat,2)+Math.pow(bus.lng-lng,2)
 );

 if(d<0.05){
   let li=document.createElement("li");
   li.innerText="Bus "+bus.name;
   list.appendChild(li);
 }
});

if(list.innerHTML==""){
 list.innerHTML="<li>No buses near this place</li>";
}
}
