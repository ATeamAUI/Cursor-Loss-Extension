// Mouse functions content script
// jquery included in json
// running this based on  mouse box input from options.js
// 
      
      function inputdetect() {
            // attaches event handler to specified event
            // takes event as string, function to run, and optional boolean
            // to indicate when the event propogates
            // these are false, so events "bubble up"
            this.addEventListener("mousemove");
            this.addEventListener("mousedown");
            this.addEventListener("mousewheel");
            
            this.addEventListener("touchmove");
            // I have removed all key functions but it's still deativating when keys are pressed
            // is this connected to the focus problem
            

            
            
      }

      inputdetect();






var idlePulse;
var idleGlow;
var permaTip;
var permaHalo;
var userId;
var x = 0;
var y = 0;
var barElement=document.createElement("DIV");
var permaElement = document.createElement("DIV");

var pulseStyle = document.createElement('style');
pulseStyle.type = 'text/css';
pulseStyle.innerHTML = "body { }" 
+" .ff{ width: 18px; height:18px; border-radius:100%; border: 3px solid blue; position: absolute; left:-1S7px; top:-2px; animation: pulsate 1.4s ease-out infinite;}"
+" @keyframes pulsate {0% {transform: scale(0.1, 0.1); opacity: 0.0;}50% {opacity: 1.0;}100% {transform: scale(2.3, 2.3); opacity: 0.0;}}";

var breathStyle = document.createElement('style');
breathStyle.type = 'text/css';
breathStyle.innerHTML = "body { }"
+ " .openclass{ }" 
+" .breath{border: 2px solid orange; border-radius:100%; -webkit-border-radius:30px;height:15px;width:15px;position: absolute; z-index:-1; left:-2px; top:-2px; box-shadow:0 0 5px gold,0 0 2px red;-webkit-animation: breathanim 2.7s ease-out;-webkit-animation-iteration-count: infinite; opacity: 0.1;}"
+" @keyframes breathanim {0% {-webkit-transform: scale(1.7, 1.7); opacity: 0.2;} 50% {-webkit-transform: scale(3.7, 3.7);opacity: 0.5;} 100% {-webkit-transform: scale(1.7, 1.7); opacity: 0.2;}}";

var MouseTipStyle = document.createElement('style');
MouseTipStyle.type = 'text/css';
MouseTipStyle.innerHTML = "body { }"
+ " .newclass{ }" 
+" .mousetip{border: 2px solid blue;-webkit-border-radius:100px;  height:5px;width:5px; position: absolute; z-index:-1; margin-left:-5px;margin-top:-9px; -webkit-animation: pulsate 1s ease-out; -webkit-animation-iteration-count: infinite; opacity: 0.0; cursor: none;}"
+" @-webkit-keyframes mouseanim {0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;} 50% {opacity: 1.0;} 100% {-webkit-transform:scale(1.2, 1.2); opacity: 0.0;}"





document.getElementsByTagName('head')[0].appendChild(pulseStyle);
document.getElementsByTagName('head')[0].appendChild(breathStyle);
document.getElementsByTagName('head')[0].appendChild(MouseTipStyle);


//IdleGlow - Breathing Element 


console.log("AUI is starting...");
      chrome.storage.sync.get({
            theId: 'default',
          
            idlePulse: false,
            idleGlow: false,
            permaTip: false,
            permaHalo: false,
            

      }, function(items) {

            // Set the options to local variables to this 
            userId              = items.theId;
            
            idlePulse           = items.idlePulse;

            idleGlow            = items.idleGlow;

            permaTip            = items.permaTip;

            permaHalo           = items.permaHalo;
            
            // If the pilot study mode is activated 
            //if (idlePulse === true) {
            
                 

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

                              startTimer();
                                    
                              console.log("pos: " + y +", " +x);
                              // if (x==barElement.style.left && y==barElement.style.top) {

                              //    barElement.style.display = "none";
                              // }
                              
                              
                        };
                        
               

                  function startTimer() {
                  console.log("starting timer");
                  //waits two seconds before calling inactive
                  TimeoutID = window.setTimeout(goInactive,3000); // does it need to take the window variable??

      }

      function resetTimer(e) {
            window.clearTimeout(TimeoutID);
            goActive();

      }

      function goActive() {
            console.log("Activating");
            startTimer();
      }

      function goInactive() {
            console.log("Going INACTIVE!");
            
            
            if(idlePulse===true){
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

          if(idleGlow===true) {

            console.log("breathing");
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
            barElement.className = "breath";
            //barElement.className +=" breath";
            var tmp = document.createTextNode("");
            barElement.appendChild(tmp);
            // Add the DIV element to the body of the page
            document.body.appendChild(barElement);
            // Add the DIV element to the body of the page
            document.body.appendChild(barElement);
            console.log("New Position: "+ barElement.style.top);
            console.log("New Position: "+ barElement.style.left);
          }

          if(permaHalo===true){

            console.log("bb i can c ur halo");
            // Fixed position
            permaElement.style.position = "fixed";
             // displaying 
            // Top of the page
            permaElement.style.top = y;
            // Left of the page
            permaElement.style.left = x;
            // barElement.style.width = "10px";
            // barElement.style.height= "10px";
            // z-index set to 999 so the DIV would appear on top of other elements of the page
            permaElement.style.zIndex = "9998 !important";
            // Set the background 
            // barElement.style.background = "#fc2862";
            // Add blank text to the DIV so it would show
            permaElement.className = "breath";
            var tmp = document.createTextNode("");
            permaElement.appendChild(tmp);
            // Add the DIV element to the body of the page
            document.body.appendChild(permaElement);
            // Add the DIV element to the body of the page
            document.body.appendChild(permaElement);
            console.log("New Position: "+ permaElement.style.top);
            console.log("New Position: "+ permaElement.style.left);
          }

          if(permaTip===true){

            console.log("mouse tip");
            // Fixed position
            permaElement.style.position = "fixed";
             // displaying 
            // Top of the page
            permaElement.style.top = y;
            // Left of the page
            permaElement.style.left = x;
            // barElement.style.width = "10px";
            // barElement.style.height= "10px";
            // z-index set to 999 so the DIV would appear on top of other elements of the page
            permaElement.style.zIndex = "9998 !important";
            // Set the background 
            // barElement.style.background = "#fc2862";
            // Add blank text to the DIV so it would show
            permaElement.className = "mousetip";
            var tmp = document.createTextNode("");
            permaElement.appendChild(tmp);
            // Add the DIV element to the body of the page
            document.body.appendChild(permaElement);
            // Add the DIV element to the body of the page
            document.body.appendChild(permaElement);
            console.log("New Position: "+ permaElement.style.top);
            console.log("New Position: "+ permaElement.style.left);
          }


}
                  
             //}

      });
