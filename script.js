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

/* ========= RASIPURAM ROUTE HUB ========= */

// Rasipuram ↔ Salem
{ start:"Rasipuram", end:"Salem", bus:"TNSTC RS-SLM 1", type:"Government", dep:"05:30", arr:"06:45" },
{ start:"Rasipuram", end:"Salem", bus:"RRS Travels", type:"Private", dep:"07:00", arr:"08:15" },

// Rasipuram ↔ Namakkal
{ start:"Rasipuram", end:"Namakkal", bus:"TNSTC RS-NKL 3", type:"Government", dep:"06:00", arr:"06:40" },
{ start:"Rasipuram", end:"Namakkal", bus:"SK Travels", type:"Private", dep:"08:00", arr:"08:40" },

// Rasipuram ↔ Erode
{ start:"Rasipuram", end:"Erode", bus:"TNSTC RS-ERD 5", type:"Government", dep:"06:30", arr:"09:00" },
{ start:"Rasipuram", end:"Erode", bus:"KPN Travels", type:"Private", dep:"09:00", arr:"11:30" },

// Rasipuram ↔ Attur
{ start:"Rasipuram", end:"Attur", bus:"TNSTC RS-ATR 2", type:"Government", dep:"05:45", arr:"07:30" },
{ start:"Rasipuram", end:"Attur", bus:"Green Bus", type:"Private", dep:"08:15", arr:"10:00" },

// Rasipuram ↔ Coimbatore
{ start:"Rasipuram", end:"Coimbatore", bus:"TNSTC RS-CBE 8", type:"Government", dep:"06:15", arr:"11:00" },
{ start:"Rasipuram", end:"Coimbatore", bus:"SRM Travels", type:"Private", dep:"09:30", arr:"14:00" },

// Rasipuram ↔ Kolli Hills
{ start:"Rasipuram", end:"Kolli Hills", bus:"TNSTC Hill 1", type:"Government", dep:"07:00", arr:"08:30" },
{ start:"Rasipuram", end:"Kolli Hills", bus:"Hill Travels", type:"Private", dep:"10:00", arr:"11:30" },

// Rasipuram ↔ Chennai
{ start:"Rasipuram", end:"Chennai", bus:"SETC RS-CHN 1X", type:"Government", dep:"20:00", arr:"05:00" },
{ start:"Rasipuram", end:"Chennai", bus:"KPN Travels", type:"Private", dep:"21:30", arr:"05:30" },

// Rasipuram ↔ Tiruchengode
{ start:"Rasipuram", end:"Tiruchengode", bus:"TNSTC RS-TGD 4", type:"Government", dep:"06:20", arr:"07:30" },
{ start:"Rasipuram", end:"Tiruchengode", bus:"SRT Travels", type:"Private", dep:"09:00", arr:"10:15" },

// Rasipuram Local Buses
{ start:"Rasipuram", end:"Anangur", bus:"TNSTC Local 1", type:"Government", dep:"06:00", arr:"06:30" },
{ start:"Rasipuram", end:"Singalandapuram", bus:"TNSTC Local 2", type:"Government", dep:"07:30", arr:"08:00" },
{ start:"Rasipuram", end:"Mangalapuram", bus:"TNSTC Local 3", type:"Government", dep:"09:00", arr:"09:30" }

   
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
