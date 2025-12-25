var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Sample India bus database
const busDB = [
{ route:"Chennai → Coimbatore", city:"Chennai", bus:"TNSTC 21A", time:"07:00" },
{ route:"Chennai → Madurai", city:"Chennai", bus:"SETC 45X", time:"09:00" },
{ route:"Bangalore → Mysore", city:"Bangalore", bus:"KSRTC 120", time:"08:00" },
{ route:"Delhi → Agra", city:"Delhi", bus:"UPSRTC 55", time:"06:30" }
];

async function searchBuses(){
let place = document.getElementById("place").value;
let time = document.getElementById("time").value;
let list = document.getElementById("busList");
list.innerHTML="";

let url = `https://nominatim.openstreetmap.org/search?format=json&q=${place}`;
let res = await fetch(url);
let data = await res.json();

if(data.length==0){ alert("Place not found"); return; }

let lat = data[0].lat;
let lon = data[0].lon;

map.setView([lat,lon],12);
L.marker([lat,lon]).addTo(map).bindPopup(place).openPopup();

busDB.forEach(b=>{
 if(b.city.toLowerCase()==place.toLowerCase() && b.time>=time){
  let li=document.createElement("li");
  li.innerText=`${b.bus} (${b.route}) at ${b.time}`;
  list.appendChild(li);
 }
});

if(list.innerHTML==""){
 list.innerHTML="<li>No buses found</li>";
}
}
