

//Cursor Variables
var idlePulse;
var idleGlow;
var defaultCtrl;
var EnhancedCtrl;
var UltimateCtrl;
var userId;
var offoption;
var x = 0;
var y = 0;
var barElement=document.createElement("DIV");
var permaElement = document.createElement("DIV");

// IDLE STYLES//
// Pulse CSS
var pulseStyle = document.createElement('style'); 
pulseStyle.type = 'text/css';
pulseStyle.innerHTML = "body { }" 
+" .ff{ width: 18px; height:18px; border-radius:100%; border: 3px solid blue; position: absolute; left:-1S7px; top:-2px; z-index:99 !important; animation: pulsate 1.4s ease-out infinite;}"
+" @keyframes pulsate {0% {transform: scale(0.1, 0.1); opacity: 0.0;}50% {opacity: 1.0;}100% {transform: scale(2.3, 2.3); opacity: 0.0;}}";
// Halo CSS
var breathStyle = document.createElement('style');
breathStyle.type = 'text/css';
breathStyle.innerHTML = "body { }"
+ " .openclass{ }" 
+" .breath{border: 2px solid orange; border-radius:100%; -webkit-border-radius:30px;height:15px;width:15px;position: absolute; z-index:99 !important; left:-2px; top:-2px; box-shadow:0 0 5px gold,0 0 2px red;-webkit-animation: breathanim 2.7s ease-out;-webkit-animation-iteration-count: infinite; opacity: 0.1;}"
+" @keyframes breathanim {0% {-webkit-transform: scale(1.7, 1.7); opacity: 0.2;} 50% {-webkit-transform: scale(3.7, 3.7);opacity: 0.5;} 100% {-webkit-transform: scale(1.7, 1.7); opacity: 0.2;}}";
//CONSTANT CURSOR STYLES//
var EnhancedStyle = document.createElement('style'); 
EnhancedStyle.type = 'text/css';
EnhancedStyle.innerHTML = "body { }" 
+ "a:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/enhanced_cursor.png),auto;}"
+ "input:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/enhanced_cursor.png),auto;}"

var UltimateStyle = document.createElement('style'); 
UltimateStyle.type = 'text/css';
UltimateStyle.innerHTML = "body { }" 
+ "a:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/ultimate_cursor.png),auto;}"
+ "input:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/ultimate_cursor.png),auto;}"

//Add Cursor CSS to HTML DOM

document.getElementsByTagName('head')[0].appendChild(pulseStyle);
document.getElementsByTagName('head')[0].appendChild(breathStyle);

//TIMER SECTION FOR IDLE CURSORS//
//Timer Variables
var TimeoutID;
var timerstatus = 0; 
function inputdetect() {

  this.addEventListener("mousemove", resetTimer, false);
  this.addEventListener("mousedown", resetTimer, false);
  this.addEventListener("mousewheel", resetTimer, false);
  //this.addEventListener("keypress", resetTimer, false);
  this.addEventListener("touchmove", resetTimer, false);
  this.addEventListener("DOMmousescroll", resetTimer, false);
  this.addEventListener("MSpointermove", resetTimer, false);

  startTimer();
}

inputdetect();

function startTimer() {
  //waits two seconds before calling inactive
  TimeoutID = window.setTimeout(goInactive, 2000); // does it need to take the window variable??
}

function resetTimer(e) {
  window.clearTimeout(TimeoutID);
  goActive();
}

function goActive() {
  console.log("The UI is not idle.");
  timerstatus = 1;
  startTimer();
}

function goInactive() {
  console.log("The UI is idle.");
  timerstatus = -1;
}


function getStorage() {

  chrome.storage.sync.get({


  theId: 'default',
  idleGlow: false,
  idlePulse:false,
  permaTip:false,
  permaHalo:false,
  offoption: false,
  EnhancedCtrl: false,
  UltimateCtrl:false,
  defaultCtrl: false


  }, function(items) {

  // Set the options to local variables to this 
  userId 		    = items.theId;
  idleGlow 	    = items.idleGlow;
  idlePulse       = items.idlePulse;
  permaTip        = items.permaTip;
  permaHalo       = items.permaHalo;
  offoption       = items.offoption;
  defaultCtrl     = items.defaultCtrl;
  EnhancedCtrl    = items.EnhancedCtrl;
  UltimateCtrl    = items.UltimateCtrl;
  //console.log("AUI began.."); // checks to see if this point was reached

  // checks if settings were stored
  if (idleGlow == true && timerstatus ==-1){

    barElement.style.position = "fixed";
    barElement.style.display = "block"; // displaying 
    barElement.style.top = y;
    barElement.style.left = x;
    barElement.style.zIndex = "9998 !important";
    barElement.className = "openclass";
    barElement.classList.add("breath");
    var tmp = document.createTextNode("");
    barElement.appendChild(tmp);
    document.body.appendChild(barElement);
    document.body.appendChild(barElement);
  }


  if (idlePulse== true && timerstatus ==-1){
    // Fixed position
    barElement.style.position = "fixed";
    barElement.style.display = "block"; // displaying 
    // Top of the page
    barElement.style.top = y;
    // Left of the page
    barElement.style.left = x;
    barElement.style.zIndex = "9998 !important";
    barElement.className = "ff";
    var tmp = document.createTextNode("");
    barElement.appendChild(tmp);
    // Add the DIV element to the body of the page
    document.body.appendChild(barElement);
    // Add the DIV element to the body of the page
    document.body.appendChild(barElement);
    console.log("New Position: "+ barElement.style.top);
    console.log("New Position: "+ barElement.style.left);
  }

  if (defaultCtrl == true){

    document.body.style.cursor = "auto";
    console.log("Default Ctrl");
  }

  if (EnhancedCtrl == true){
    document.body.style.cursor = "url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/enhanced_cursor.png),auto";
    document.getElementsByTagName('head')[0].appendChild(EnhancedStyle);
    console.log("Enhanced Ctrl");   
  }

  if (UltimateCtrl ==true){
    document.body.style.cursor = "url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/ultimate_cursor.png),auto";
    document.getElementsByTagName('head')[0].appendChild(UltimateStyle);
    console.log("Ultimate Ctrl");
  }

  if (offoption == true){
    barElement.classList.remove("breath");
    barElement.classList.remove("ff");
    }
  });
  };



$(document).ready(function() {
window.setInterval(getStorage,0000);
//calls storage constantly - this affects some lagtime
// changing how frequently it is called reduces lag in the browser
// but adds small pause each time the cursor image replaces the default mouse 

document.onmousemove = function(e){
  //attaches css elements to cursor position
  x = e.pageX + "px";
  y= e.pageY + "px";
  //attach bar to page
  barElement.style.display = "none";
  permaElement.style.display = "block"; 
  document.body.style.cursor = "default";
  var tmp = document.createTextNode("");
  barElement.appendChild(tmp);
  document.body.appendChild(barElement);
  document.body.appendChild(barElement);
  console.log("pos: " + y +", " +x);
 
  }; 
});


