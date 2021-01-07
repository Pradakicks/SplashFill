window.onload = function () {

document.getElementById('home-save-btn').onclick = function (){
    var modes = {
        modes : {
        shopifyAutofill : document.getElementById("toggle-btn").value,
        }
}
console.log(modes)
    
   

// chrome.storage.onChanged.addListener(function(changes, namespace) {
//         for (var key in changes) {
//           var storageChange = changes[key];
//           console.log('Storage key "%s" in namespace "%s" changed. ' +
//                       'Old value was "%s", new value is "%s".',
//                       key,
//                       namespace,
//                       storageChange.oldValue,
//                       storageChange.newValue);
//         }
//       });

chrome.storage.local.set({modes : modes}, function() {

    console.log(`Profile ${modes} Saved`);

  });



} 
}