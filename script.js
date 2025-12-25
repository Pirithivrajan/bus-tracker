const busDB = [

/* ========= NORTHERN REGION ========= */
{ start:"Chennai", end:"Vellore", bus:"TNSTC 501", type:"Government", dep:"06:30", arr:"09:30" },
{ start:"Chennai", end:"Vellore", bus:"SRM Travels", type:"Private", dep:"07:15", arr:"10:00" },

{ start:"Chennai", end:"Kanchipuram", bus:"TNSTC 12A", type:"Government", dep:"06:00", arr:"07:30" },
{ start:"Chennai", end:"Kanchipuram", bus:"Parveen Travels", type:"Private", dep:"08:00", arr:"09:15" },

{ start:"Villupuram", end:"Tiruvannamalai", bus:"TNSTC 78B", type:"Government", dep:"06:15", arr:"08:15" },
{ start:"Villupuram", end:"Tiruvannamalai", bus:"KPN Travels", type:"Private", dep:"07:30", arr:"09:00" },

/* ========= CENTRAL REGION ========= */
{ start:"Trichy", end:"Thanjavur", bus:"TNSTC 40A", type:"Government", dep:"06:45", arr:"08:00" },
{ start:"Trichy", end:"Thanjavur", bus:"SRS Travels", type:"Private", dep:"08:30", arr:"10:00" },

{ start:"Trichy", end:"Karur", bus:"TNSTC 75B", type:"Government", dep:"07:00", arr:"08:30" },

/* ========= WESTERN REGION ========= */
{ start:"Coimbatore", end:"Salem", bus:"TNSTC 333", type:"Government", dep:"06:30", arr:"10:00" },
{ start:"Coimbatore", end:"Salem", bus:"KPN Travels", type:"Private", dep:"07:45", arr:"11:00" },

{ start:"Tiruppur", end:"Coimbatore", bus:"TNSTC 47D", type:"Government", dep:"06:20", arr:"07:30" },

/* ========= SOUTHERN REGION ========= */
{ start:"Madurai", end:"Dindigul", bus:"TNSTC 10A", type:"Government", dep:"06:00", arr:"07:30" },
{ start:"Madurai", end:"Dindigul", bus:"SRM Travels", type:"Private", dep:"07:30", arr:"09:00" },

{ start:"Tirunelveli", end:"Thoothukudi", bus:"TNSTC 88A", type:"Government", dep:"07:00", arr:"08:30" },

{ start:"Kanyakumari", end:"Tirunelveli", bus:"SETC 1X", type:"Government", dep:"06:30", arr:"09:30" },
{ start:"Kanyakumari", end:"Tirunelveli", bus:"Parveen Travels", type:"Private", dep:"08:00", arr:"11:00" }

];

/* ===============================
   FUNCTION 1: Start → End → Time
================================ */
function findBus(){
 let s = document.getElementById("start").value.trim();
 let e = document.getElementById("end").value.trim();
 let t = document.getElementById("time").value;

 let list = document.getElementById("busList");
 list.innerHTML="";

 let found = false;

 busDB.forEach(b=>{
   if(b.start.toLowerCase()==s.toLowerCase() &&
      b.end.toLowerCase()==e.toLowerCase() &&
      b.dep >= t){

     let li = document.createElement("li");
     li.innerText = `${b.bus} (${b.type}) | Dep: ${b.dep} → Arr: ${b.arr}`;
     list.appendChild(li);
     found = true;
   }
 });

 if(!found){
   list.innerHTML = "<li>No buses available near this time</li>";
 }
}

/* ===============================
   FUNCTION 2: Only One Location
   (Show All Buses Arriving There)
================================ */
function findArrival(){
 let place = document.getElementById("start").value.trim();
 let list = document.getElementById("busList");
 list.innerHTML="";

 let found=false;

 busDB.forEach(b=>{
   if(b.end.toLowerCase() == place.toLowerCase()){
     let li = document.createElement("li");
     li.innerText = `${b.bus} from ${b.start} (${b.type}) | Arrives at ${b.arr}`;
     list.appendChild(li);
     found=true;
   }
 });

 if(!found){
   list.innerHTML="<li>No buses arriving to this location</li>";
 }
}
