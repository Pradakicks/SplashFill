window.onload = function () {
  chrome.storage.local.get('loginStatus', (data) => {
    this.loginStatus = data.loginStatus
   // // console.log(this.loginStatus)
    if(this.loginStatus){
//   chrome.storage.local.get('modes', (data) => {
//     this.modes = data.modes.modes

//     document.getElementById('toggle-btn').value = this.modes.shopifyAutofill
//    // document.getElementById('toggle-btn').style = this.modes.shopifyAutofill
//     document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest
//     //document.getElementById('req-toggle-btn').style = this.modes.shopifyRequest
//     document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO
// //    document.getElementById('normal-aco-toggle').style = this.modes.shopifyNormalACO
//     document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC
//   //  document.getElementById('atc-toggle-btn').style = this.modes.shopifyATC
//     document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill
//   //  document.getElementById('sup-autofill-btn').style = this.modes.supremeAutofill1
//     document.getElementById('sup-aco-btn').value = this.modes.supremeACO
//     //document.getElementById('sup-aco-btn').style = this.modes.supremeACO1
//     document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart
//     //document.getElementById('sup-atccart-btn').style = this.modes.supremeATCCart1
// })

document.getElementById('home-save-btn').onclick = function () {
var mode = {
    modes : {
        shopifyAutofill : document.getElementById('toggle-btn').value,
        shopifyRequest: document.getElementById('req-toggle-btn').value,
        shopifyNormalACO : document.getElementById('normal-aco-toggle').value,
        shopifyATC : document.getElementById('atc-toggle-btn').value,
        supremeAutofill : document.getElementById('sup-autofill-btn').value,
        supremeACO : document.getElementById('sup-aco-btn').value,
        supremeATCCart : document.getElementById('sup-atccart-btn').value,
    }
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
for (var key in changes) {
  var storageChange = changes[key];
   console.log('Storage key "%s" in namespace "%s" changed. ' +
              'Old value was "%s", new value is "%s".',
              key,
              namespace,
              storageChange.oldValue,
              storageChange.newValue);
}
});

// console.log(mode)
chrome.storage.local.set({modes : mode}, function() {
// console.log(`Settings Saved`);
// console.log(`${mode}`);
});
}  


document.getElementById('home-load-btn').onclick = function () {
chrome.storage.local.get('modes', (data) => {
    this.modes = data.modes.modes
   // // console.log(this.modes)
    document.getElementById('toggle-btn').value = this.modes.shopifyAutofill
  //  document.getElementById('toggle-btn').style = this.modes.shopifyAutofill
    document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest
  //  document.getElementById('req-toggle-btn').style = this.modes.shopifyRequest
    document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO
 //   document.getElementById('normal-aco-toggle').style = this.modes.shopifyNormalACO
    document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC
 //   document.getElementById('atc-toggle-btn').style = this.modes.shopifyATC
    document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill
   // document.getElementById('sup-autofill-btn').style = this.modes.supremeAutofill1
    document.getElementById('sup-aco-btn').value = this.modes.supremeACO
  //  document.getElementById('sup-aco-btn').style = this.modes.supremeACO1
    document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart
  //  document.getElementById('sup-atccart-btn').style = this.modes.supremeATCCart1
})
}
  

    }else {
      window.location.replace('../../eyes/login.html')
    }})
}