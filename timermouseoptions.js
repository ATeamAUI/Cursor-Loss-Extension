

//Cursor Variables
var idlePulse;
var idleGlow;
var permaTip;
var permaHalo;
var defaultCtrl;
var EnhancedCtrl;
var UltimateCtrl;
var userId;
var offoption;
var cursorptr = "https://i51.photobucket.com/albums/f361/enemeans/ultcontrol_zpsx3fqkrsv.png";
var alink = document.getElementsByTagName("A");
var x = 0;
var y = 0;
var barElement=document.createElement("DIV");
var permaElement = document.createElement("DIV");

// Cursor Styles

var pulseStyle = document.createElement('style'); // how can I change this for each mouse type??
pulseStyle.type = 'text/css';
pulseStyle.innerHTML = "body { }" 
//+ "a:hover{cursor:url("+cursorptr +"),auto;}"
//+ "input:hover{cursor:url("+cursorptr +"),auto;}"
+" .ff{ width: 18px; height:18px; border-radius:100%; border: 3px solid blue; position: absolute; left:-1S7px; top:-2px; z-index:99 !important; animation: pulsate 1.4s ease-out infinite;}"
+" @keyframes pulsate {0% {transform: scale(0.1, 0.1); opacity: 0.0;}50% {opacity: 1.0;}100% {transform: scale(2.3, 2.3); opacity: 0.0;}}";

var breathStyle = document.createElement('style');
breathStyle.type = 'text/css';
breathStyle.innerHTML = "body { }"
+ " .openclass{ }" 
+" .breath{border: 2px solid orange; border-radius:100%; -webkit-border-radius:30px;height:15px;width:15px;position: absolute; z-index:99 !important; left:-2px; top:-2px; box-shadow:0 0 5px gold,0 0 2px red;-webkit-animation: breathanim 2.7s ease-out;-webkit-animation-iteration-count: infinite; opacity: 0.1;}"
+" @keyframes breathanim {0% {-webkit-transform: scale(1.7, 1.7); opacity: 0.2;} 50% {-webkit-transform: scale(3.7, 3.7);opacity: 0.5;} 100% {-webkit-transform: scale(1.7, 1.7); opacity: 0.2;}}";

/*var MouseTipStyle = document.createElement('style');
MouseTipStyle.type = 'text/css';
MouseTipStyle.innerHTML = "body { }"
+ " .newclass{ }" 
+" .mousetip{border: solid blue; border-radius:100%;-webkit-border-radius:10px; height:5px;width:5px; position: absolute; z-index:99 !important; margin-left:-5px;margin-top:-9px; -webkit-animation: pulsate 1s ease-out; -webkit-animation-iteration-count: infinite; opacity: 0.0; cursor: none;}"
+" @-webkit-keyframes mouseanim {0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.2;} 50% {opacity: 1.0;} 100% {-webkit-transform:scale(1.2, 1.2); opacity: 0.0;}"
*/
var EnhancedStyle = document.createElement('style'); // how can I change this for each mouse type??
EnhancedStyle.type = 'text/css';
EnhancedStyle.innerHTML = "body { }" 
+ "a:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/enhanced_cursor.png),auto;}"
+ "input:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/enhanced_cursor.png),auto;}"

var UltimateStyle = document.createElement('style'); // how can I change this for each mouse type??
UltimateStyle.type = 'text/css';
UltimateStyle.innerHTML = "body { cursor:https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/ultimate_cursor.png),auto; }" 
+ "a:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/ultimate_cursor.png),auto;}"
+ "input:hover{cursor:url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/ultimate_cursor.png),auto;}"





//Add Cursors to webpages

document.getElementsByTagName('head')[0].appendChild(pulseStyle);
document.getElementsByTagName('head')[0].appendChild(breathStyle);
//document.getElementsByTagName('head')[0].appendChild(defaultCtrlStyle);

//document.getElementsByTagName('head')[0].appendChild(UltimateCtrlStyle);


$("input:submit").hide;
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
  //what happens when the UI is not idle

  console.log("The UI is not idle.");
  timerstatus = 1;
  

  startTimer();
}

function goInactive() {
  console.log("The UI is idle.");
  timerstatus = -1;

 
}

function checktimer() {
  console.log(timerstatus);
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
        //console.log("CursorAdapt = working");

            //if(timerstatus ==-1){
            console.log("CA + TS idle");
            //console.log("breathing");
            barElement.style.position = "fixed";
            barElement.style.display = "block"; // displaying 
            // Top of the page
            barElement.style.top = y;
            // Left of the page
            barElement.style.left = x;
            
            barElement.style.zIndex = "9998 !important";
            // Set the background 
            // barElement.style.background = "#fc2862";
            // Add blank text to the DIV so it would show
            barElement.className = "openclass";
            barElement.classList.add("breath");
            var tmp = document.createTextNode("");
            barElement.appendChild(tmp);
            // Add the DIV element to the body of the page
            document.body.appendChild(barElement);
            // Add the DIV element to the body of the page
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
            // barElement.style.width = "10px";
            // barElement.style.height= "10px";
            // z-index set to 999 so the DIV would appear on top of other elements of the page
            barElement.style.zIndex = "9998 !important";
            // Set the background 
            // barElement.style.background = "#fc2862";
            // Add blank text to the DIV so it would show
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

              document.body.style.cursor = "crosshair";
              console.log("what's up");
            }

            if (EnhancedCtrl == true){
            document.body.style.cursor = "url(https://raw.githubusercontent.com/ATeamAUI/AUI-images/master/enhanced_cursor.png),auto";
            document.getElementsByTagName('head')[0].appendChild(EnhancedStyle);
            console.log("here we are");   
          
       
            }

            if (UltimateCtrl ==true){

               // var elem = document.getElementsByTagName("A");

              document.getElementsByTagName('head')[0].appendChild(UltimateStyle);
              console.log("Ult Ctrl");
              
              

              //console.log(elem.length);
              
             
               
              
            }



           

            if (offoption == true){

            	permaElement.classList.remove("mousetip");
            	permaElement.classList.remove("breath");
            	barElement.classList.remove("breath");
            	barElement.classList.remove("ff");
            }
   });
};


function linkhover() {
    document.body.style.cursor = "crosshair";
}

$(document).ready(function() {
  //window.setInterval(checktimer, 2000);
  window.setInterval(getStorage,0000);
  window.setInterval(checktimer,1000);

   document.onmousemove = function(e){
                              x = e.pageX + "px";
                              y= e.pageY + "px";


                              barElement.style.display = "none";
                              permaElement.style.display = "block"; // hides barelement
                              document.body.style.cursor = "default";
                              var tmp = document.createTextNode("");
                              barElement.appendChild(tmp);
                              permaElement.appendChild(tmp);
                              // Add the DIV element to the body of the page
                              document.body.appendChild(barElement);
                              document.body.appendChild(permaElement);

                              // Add the DIV element to the body of the page
                              document.body.appendChild(barElement);
                              document.body.appendChild(permaElement);

                              //startTimer();
                                    
                              console.log("pos: " + y +", " +x);
                              // if (x==barElement.style.left && y==barElement.style.top) {

                              //    barElement.style.display = "none";
                              // }
                              
                              
                        }; // calls timer every 2 seconds
});


