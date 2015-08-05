// Options.js: Handels saving the options to local storage
// Author: Abdullah Ali
// Contact: @xyleques, xyleques@me.com

// Saves options to chrome.storage.sync.
function save_options() {


  var theId = document.getElementById('myName').value;  
  //var pulseAdapt = document.getElementById('pulseAdapt').checked;
  var idleGlow = document.getElementById('idleGlow').checked;
  var idlePulse = document.getElementById('idlePulse').checked;
  //var permaTip = document.getElementById('permaTip').checked;
  //var permaHalo = document.getElementById('permaHalo').checked;
  var UltimateCtrl = document.getElementById('UltimateCtrl').checked;
  var EnhancedCtrl = document.getElementById('EnhancedCtrl').checked;
  var defaultCtrl =document.getElementById('defaultCtrl').checked;
  var offoption  = document.getElementById('offoption').checked;

  

  chrome.storage.sync.set({
   
    theId: theId,
    idleGlow: idleGlow,
    idlePulse: idlePulse,
    //permaHalo: permaHalo,
    //permaTip: permaTip,
    offoption: offoption,
    UltimateCtrl: UltimateCtrl,
    EnhancedCtrl: EnhancedCtrl,
    defaultCtrl: defaultCtrl
   
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.





function restore_options() {
  
  chrome.storage.sync.get({
    
    //pulseAdapt: false,
    //cursorAdapt: false,
    //permaHalo: false,
    //permaTip: false,
    idlePulse: false,
    idleGlow: false,
    offoption: false,
    EnhancedCtrl: false,
    UltimateCtrl: false,
    defaultCtrl: false
    
  }, 
  function(items) {
    
        document.getElementById('myName').value = items.theId;
       // document.getElementById('pulseAdapt').checked= items.pulseAdapt;
        document.getElementById('idleGlow').checked= items.idleGlow;
        document.getElementById('idlePulse').checked= items.idlePulse;
        //document.getElementById('permaTip').checked= items.permaTip;
        //document.getElementById('permaHalo').checked= items.permaHalo;
        document.getElementById('offoption').checked = items.offoption;
        document.getElementById('defaultCtrl').checked = items.defaultCtrl;
        document.getElementById('EnhancedCtrl').checked = items.EnhancedCtrl;
        document.getElementById('UltimateCtrl').checked = items.UltimateCtrl;
 
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);