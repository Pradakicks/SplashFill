window.onload = function () {
    chrome.storage.local.get('loginStatus', (data) => {
        this.loginStatus = data.loginStatus
        // console.log(this.loginStatus)
        if(this.loginStatus){
    var toggled = false
    var toggled1 = false
    var toggled2 = false
    var toggled3 = false
    var toggled4 = false
    var toggled5 = false
    var toggled6 = false
    chrome.storage.local.get('modes', (data) => {
        this.modes = data.modes.modes
        // console.log(this.modes)

        function shopifyAutofill () {
             if(this.modes.shopifyAutofill == true || this.modes.shopifyAutofill == 'true'){
      //      // console.log(`The value is ${this.modes.shopifyAutofill}`)
        document.getElementById('toggle-btn').value = this.modes.shopifyAutofill 
        document.getElementById('toggle-btn1').value = this.modes.shopifyAutofill 
        document.getElementById('toggle-btn').style = "display: none;"
        document.getElementById('toggle-btn1').style = "display: block;"
        } else {
       //     // console.log(`The value is ${this.modes.shopifyAutofill}`)

            document.getElementById('toggle-btn').value = this.modes.shopifyAutofill 
            document.getElementById('toggle-btn1').value = this.modes.shopifyAutofill 
            document.getElementById('toggle-btn').style = "display: block;"
            document.getElementById('toggle-btn1').style = "display: none;"
            }
        } shopifyAutofill ()
       
        function shopifyRequest () {
            if(this.modes.shopifyRequest == true || this.modes.shopifyRequest == 'true'){
             //   // console.log(`The value is ${this.modes.shopifyRequest}`)
            document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest 
            document.getElementById('req-toggle-btn1').value = this.modes.shopifyRequest 
            document.getElementById('req-toggle-btn').style = "display: none;"
            document.getElementById('req-toggle-btn1').style = "display: block;"
            } else {
             //   // console.log(`The value is ${this.modes.shopifyRequest}`)
             //   // console.log(`The value is ${this.modes.shopifyRequest}`)
    
                document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest 
                document.getElementById('req-toggle-btn1').value = this.modes.shopifyRequest 
                document.getElementById('req-toggle-btn').style = "display: block;"
                document.getElementById('req-toggle-btn1').style = "display: none;"
                }  
         } shopifyRequest ()
            
         function shopifyACO () {
            if(this.modes.shopifyNormalACO == true || this.modes.shopifyNormalACO == 'true'){
             //   // console.log(`The value is ${this.modes.shopifyNormalACO}`)
            document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO 
            document.getElementById('normal-aco-toggle1').value = this.modes.shopifyNormalACO 
            document.getElementById('normal-aco-toggle').style = "display: none;"
            document.getElementById('normal-aco-toggle1').style = "display: block;"
            } else {
             //   // console.log(`The value is ${this.modes.shopifyNormalACO}`)
             //   // console.log(`The value is ${this.modes.shopifyNormalACO}`)
    
                document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO 
                document.getElementById('normal-aco-toggle1').value = this.modes.shopifyNormalACO 
                document.getElementById('normal-aco-toggle').style = "display: block;"
                document.getElementById('normal-aco-toggle1').style = "display: none;"
                }  
         } shopifyACO ()
         function shopifyATC () {
            if(this.modes.shopifyATC == true || this.modes.shopifyATC == 'true'){
             //   // console.log(`The value is ${this.modes.shopifyATC}`)
            document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC 
            document.getElementById('atc-toggle-btn1').value = this.modes.shopifyATC 
            document.getElementById('atc-toggle-btn').style = "display: none;"
            document.getElementById('atc-toggle-btn1').style = "display: block;"
            } else {
             //   // console.log(`The value is ${this.modes.shopifyATC}`)
             //   // console.log(`The value is ${this.modes.shopifyATC}`)
    
                document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC 
                document.getElementById('atc-toggle-btn1').value = this.modes.shopifyATC 
                document.getElementById('atc-toggle-btn').style = "display: block;"
                document.getElementById('atc-toggle-btn1').style = "display: none;"
                }  
         } shopifyATC ()
         function supremeAutofill () {
            if(this.modes.supremeAutofill == true || this.modes.supremeAutofill == 'true'){
             //   // console.log(`The value is ${this.modes.supremeAutofill}`)
            document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill 
            document.getElementById('sup-autofill-btn1').value = this.modes.supremeAutofill 
            document.getElementById('sup-autofill-btn').style = "display: none;"
            document.getElementById('sup-autofill-btn1').style = "display: block;"
            } else {
             //   // console.log(`The value is ${this.modes.supremeAutofill}`)
             //   // console.log(`The value is ${this.modes.supremeAutofill}`)
    
                document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill 
                document.getElementById('sup-autofill-btn1').value = this.modes.supremeAutofill 
                document.getElementById('sup-autofill-btn').style = "display: block;"
                document.getElementById('sup-autofill-btn1').style = "display: none;"
                }  
         } supremeAutofill ()
         function supremeACO () {
            if(this.modes.supremeACO == true || this.modes.supremeACO == 'true'){
             //   // console.log(`The value is ${this.modes.supremeACO}`)
            document.getElementById('sup-aco-btn').value = this.modes.supremeACO 
            document.getElementById('sup-aco-btn1').value = this.modes.supremeACO 
            document.getElementById('sup-aco-btn').style = "display: none;"
            document.getElementById('sup-aco-btn1').style = "display: block;"
            } else {
             //   // console.log(`The value is ${this.modes.supremeACO}`)
             //   // console.log(`The value is ${this.modes.supremeACO}`)
    
                document.getElementById('sup-aco-btn').value = this.modes.supremeACO 
                document.getElementById('sup-aco-btn1').value = this.modes.supremeACO 
                document.getElementById('sup-aco-btn').style = "display: block;"
                document.getElementById('sup-aco-btn1').style = "display: none;"
                }  
         } supremeACO ()
         function supremeATCCart () {
            if(this.modes.supremeATCCart == true || this.modes.supremeATCCart == 'true'){
             //   // console.log(`The value is ${this.modes.supremeATCCart}`)
            document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart 
            document.getElementById('sup-atccart-btn1').value = this.modes.supremeATCCart 
            document.getElementById('sup-atccart-btn').style = "display: none;"
            document.getElementById('sup-atccart-btn1').style = "display: block;"
            } else {
             //   // console.log(`The value is ${this.modes.supremeATCCart}`)
             //   // console.log(`The value is ${this.modes.supremeATCCart}`)
    
                document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart 
                document.getElementById('sup-atccart-btn1').value = this.modes.supremeATCCart 
                document.getElementById('sup-atccart-btn').style = "display: block;"
                document.getElementById('sup-atccart-btn1').style = "display: none;"
                }  
         } supremeATCCart ()
      //  document.getElementById('toggle-btn').style = this.modes.shopifyAutofill
      //  document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest
      //  document.getElementById('req-toggle-btn').style = this.modes.shopifyRequest
     //   document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO
     //   document.getElementById('normal-aco-toggle').style = this.modes.shopifyNormalACO
        // document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC
     //   document.getElementById('atc-toggle-btn').style = this.modes.shopifyATC
      //  document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill
       // document.getElementById('sup-autofill-btn').style = this.modes.supremeAutofill1
    //    document.getElementById('sup-aco-btn').value = this.modes.supremeACO
      //  document.getElementById('sup-aco-btn').style = this.modes.supremeACO1
    //    document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart
      //  document.getElementById('sup-atccart-btn').style = this.modes.supremeATCCart1
        // for(var element in this.modes){
        //     // console.log(element)
        //     // console.log(this.modes[element])
        //   //  if()
        // }
        toggled = this.modes.shopifyAutofill
        toggled1 = this.modes.shopifyRequest
        toggled2 = this.modes.shopifyNormalACO
        toggled3 = this.modes.shopifyATC
        toggled4 = this.modes.supremeAutofill
        toggled5 = this.modes.supremeACO
        toggled6 = this.modes.supremeATCCart
    
    })

    
document.getElementById('toggle-btn').onclick = function toggle(){
				if(toggled == false || toggled == 'false'){
                    toggled = true;

					document.getElementById("toggle-btn").style.display = "none"
					document.getElementById("toggle-btn").value = true
					document.getElementById("toggle-btn1").style.display = "block"
					document.getElementById("toggle-btn1").value = true;
					return;
				}
				// if(toggled){
                //     toggled = false;
                //     // console.log(toggled)
                //     // console.log(toggled)
                //     // console.log(toggled)
                //     // console.log(toggled)
                //     document.getElementById("toggle-btn").style.display = "block";
                //     document.getElementById("toggle-btn").value = false
                //     document.getElementById("toggle-btn1").style.display = "none";
                //     document.getElementById("toggle-btn1").value = false;
				// 	return;
				// }
            } 
document.getElementById('toggle-btn1').onclick = function toggle(){
    // console.log(toggled)
    // if(!toggled){
    //     toggled = true;
    //     document.getElementById("toggle-btn").style.display = "none"
    //     document.getElementById("toggle-btn").value = true
    //     document.getElementById("toggle-btn1").style.display = "block"
    //     document.getElementById("toggle-btn1").value = true;
    //     return;
    // }
    if(toggled == true || toggled == 'true'){
        toggled = false;
        document.getElementById("toggle-btn").style.display = "block";
        document.getElementById("toggle-btn").value = false
        document.getElementById("toggle-btn1").style.display = "none";
        document.getElementById("toggle-btn1").value = false;
        return;
    }
} 

document.getElementById('req-toggle-btn').onclick = function toggle(){


    if(toggled1 == false || toggled1 == 'false'){
        toggled1 = true;
        document.getElementById("req-toggle-btn").style.display = "none"
        document.getElementById("req-toggle-btn").value = true
        document.getElementById("req-toggle-btn1").style.display = "block"
        document.getElementById("req-toggle-btn1").value = true;
        return;
    }
    // if(toggled1){
    //     toggled1 = false;
    //     document.getElementById("req-toggle-btn").style.display = "block";
    //     document.getElementById("req-toggle-btn").value = false
    //     document.getElementById("req-toggle-btn1").style.display = "none";
    //     document.getElementById("req-toggle-btn1").value = false;
    //     return;
    // }
} 
document.getElementById('req-toggle-btn1').onclick = function toggle(){
    // console.log(toggled1)

// if(!toggled1){
// toggled1 = true;
// document.getElementById("req-toggle-btn").style.display = "none"
// document.getElementById("req-toggle-btn").value = true
// document.getElementById("req-toggle-btn1").style.display = "block"
// document.getElementById("req-toggle-btn1").value = true;
// return;
// }
if(toggled1 == true || toggled1 == 'true'){
toggled1 = false;
document.getElementById("req-toggle-btn").style.display = "block";
document.getElementById("req-toggle-btn").value = false
document.getElementById("req-toggle-btn1").style.display = "none";
document.getElementById("req-toggle-btn1").value = false;
return;
}
} 

document.getElementById('normal-aco-toggle').onclick = function toggle(){
    if(toggled2 == false || toggled2 == 'false'){
        toggled2 = true;
        document.getElementById("normal-aco-toggle").style.display = "none"
        document.getElementById("normal-aco-toggle").value = true
        document.getElementById("normal-aco-toggle1").style.display = "block"
        document.getElementById("normal-aco-toggle1").value = true;
        return;
    }
    // if(toggled2){
    //     toggled2 = false;
    //     document.getElementById("normal-aco-toggle").style.display = "block";
    //     document.getElementById("normal-aco-toggle").value = false
    //     document.getElementById("normal-aco-toggle1").style.display = "none";
    //     document.getElementById("normal-aco-toggle1").value = false;
    //     return;
    // }
} 
document.getElementById('normal-aco-toggle1').onclick = function toggle(){
// if(!toggled2){
//     toggled2 = true;
// document.getElementById("normal-aco-toggle").style.display = "none"
// document.getElementById("normal-aco-toggle").value = true
// document.getElementById("normal-aco-toggle1").style.display = "block"
// document.getElementById("normal-aco-toggle1").value = true;
// return;
// }
if(toggled2 ==  true || toggled2 == 'true'){
    toggled2 = false;
document.getElementById("normal-aco-toggle").style.display = "block";
document.getElementById("normal-aco-toggle").value = false
document.getElementById("normal-aco-toggle1").style.display = "none";
document.getElementById("normal-aco-toggle1").value = false;
return;
}
}

document.getElementById('atc-toggle-btn').onclick = function toggle(){
    if(toggled3 == false  || toggled3 == 'false'){
        toggled3 = true;
        document.getElementById("atc-toggle-btn").style.display = "none"
        document.getElementById("atc-toggle-btn").value = true
        document.getElementById("atc-toggle-btn1").style.display = "block"
        document.getElementById("atc-toggle-btn1").value = true;
        return;
    }
    // if(toggled3){
    //     toggled3 = false;
    //     document.getElementById("atc-toggle-btn").style.display = "block";
    //     document.getElementById("atc-toggle-btn").value = false
    //     document.getElementById("atc-toggle-btn1").style.display = "none";
    //     document.getElementById("atc-toggle-btn1").value = false;
    //     return;
    // }
} 
document.getElementById('atc-toggle-btn1').onclick = function toggle(){
// if(!toggled3){
//     toggled3 = true;
// document.getElementById("atc-toggle-btn").style.display = "none"
// document.getElementById("atc-toggle-btn").value = true
// document.getElementById("atc-toggle-btn1").style.display = "block"
// document.getElementById("atc-toggle-btn1").value = true;
// return;
// }
if(toggled3 == true || toggled3 == 'true'){
    toggled3 = false;
document.getElementById("atc-toggle-btn").style.display = "block";
document.getElementById("atc-toggle-btn").value = false
document.getElementById("atc-toggle-btn1").style.display = "none";
document.getElementById("atc-toggle-btn1").value = false;
return;
}
}

document.getElementById('sup-autofill-btn').onclick = function toggle(){
    if(toggled4 == false || toggled4 == 'false'){
        toggled4 = true;
        document.getElementById("sup-autofill-btn").style.display = "none"
        document.getElementById("sup-autofill-btn").value = true
        document.getElementById("sup-autofill-btn1").style.display = "block"
        document.getElementById("sup-autofill-btn1").value = true;
        return;
    }
    // if(toggled4){
    //     toggled4 = false;
    //     document.getElementById("sup-autofill-btn").style.display = "block";
    //     document.getElementById("sup-autofill-btn").value = false
    //     document.getElementById("sup-autofill-btn1").style.display = "none";
    //     document.getElementById("sup-autofill-btn1").value = false;
    //     return;
    // }
} 
document.getElementById('sup-autofill-btn1').onclick = function toggle(){
// if(!toggled4){
//     toggled4 = true;
// document.getElementById("sup-autofill-btn").style.display = "none"
// document.getElementById("sup-autofill-btn").value = true
// document.getElementById("sup-autofill-btn1").style.display = "block"
// document.getElementById("sup-autofill-btn1").value = true;
// return;
// }
if(toggled4 == true || toggled4 == 'true'){
    toggled4 = false;
document.getElementById("sup-autofill-btn").style.display = "block";
document.getElementById("sup-autofill-btn").value = false
document.getElementById("sup-autofill-btn1").style.display = "none";
document.getElementById("sup-autofill-btn1").value = false;
return;
}
}	

document.getElementById('sup-aco-btn').onclick = function toggle(){
    if(toggled5 == false || toggled5 == 'false'){
        toggled5 = true;
        document.getElementById("sup-aco-btn").style.display = "none"
        document.getElementById("sup-aco-btn").value = true
        document.getElementById("sup-aco-btn1").style.display = "block"
        document.getElementById("sup-aco-btn1").value = true;
        return;
    }
    // if(toggled5){
    //     toggled5 = false;
    //     document.getElementById("sup-aco-btn").style.display = "block";
    //     document.getElementById("sup-aco-btn").value = false
    //     document.getElementById("sup-aco-btn1").style.display = "none";
    //     document.getElementById("sup-aco-btn1").value = false;
    //     return;
    // }
} 
document.getElementById('sup-aco-btn1').onclick = function toggle(){
// if(!toggled5){
//     toggled5 = true;
// document.getElementById("sup-aco-btn").style.display = "none"
// document.getElementById("sup-aco-btn").value = true
// document.getElementById("sup-aco-btn1").style.display = "block"
// document.getElementById("sup-aco-btn1").value = true;
// return;
// }
if(toggled5 == true || toggled5 == 'true'){
    toggled5 = false;
document.getElementById("sup-aco-btn").style.display = "block";
document.getElementById("sup-aco-btn").value = false
document.getElementById("sup-aco-btn1").style.display = "none";
document.getElementById("sup-aco-btn1").value = false;
return;
}
}	

document.getElementById('sup-atccart-btn').onclick = function toggle(){
    if(toggled6 == false || toggled6 == 'false'){
        toggled6 = true;
        document.getElementById("sup-atccart-btn").style.display = "none"
        document.getElementById("sup-atccart-btn").value = true
        document.getElementById("sup-atccart-btn1").style.display = "block"
        document.getElementById("sup-atccart-btn1").value = true;
        return;
    }
    // if(toggled6){
    //     toggled6 = false;
    //     document.getElementById("sup-atccart-btn").style.display = "block";
    //     document.getElementById("sup-atccart-btn").value = false
    //     document.getElementById("sup-atccart-btn1").style.display = "none";
    //     document.getElementById("sup-atccart-btn1").value = false;
    //     return;
    // }
} 
document.getElementById('sup-atccart-btn1').onclick = function toggle(){
// if(!toggled6){
//     toggled6 = true;
// document.getElementById("sup-atccart-btn").style.display = "none"
// document.getElementById("sup-atccart-btn").value = true
// document.getElementById("sup-atccart-btn1").style.display = "block"
// document.getElementById("sup-atccart-btn1").value = true;
// return;
// }
if(toggled6 == true || toggled6 == 'true'){
    toggled6 = false;
document.getElementById("sup-atccart-btn").style.display = "block";
document.getElementById("sup-atccart-btn").value = false
document.getElementById("sup-atccart-btn1").style.display = "none";
document.getElementById("sup-atccart-btn1").value = false;
return;
}

}				



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
      // console.log('Storage key "%s" in namespace "%s" changed. ' +
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
        // console.log(this.modes)
        function shopifyAutofill () {
            if(this.modes.shopifyAutofill == true || this.modes.shopifyAutofill == 'true'){
     //      // console.log(`The value is ${this.modes.shopifyAutofill}`)
       document.getElementById('toggle-btn').value = this.modes.shopifyAutofill 
       document.getElementById('toggle-btn1').value = this.modes.shopifyAutofill 
       document.getElementById('toggle-btn').style = "display: none;"
       document.getElementById('toggle-btn1').style = "display: block;"
       } else {
      //     // console.log(`The value is ${this.modes.shopifyAutofill}`)

           document.getElementById('toggle-btn').value = this.modes.shopifyAutofill 
           document.getElementById('toggle-btn1').value = this.modes.shopifyAutofill 
           document.getElementById('toggle-btn').style = "display: block;"
           document.getElementById('toggle-btn1').style = "display: none;"
           }
       } shopifyAutofill ()
      
       function shopifyRequest () {
           if(this.modes.shopifyRequest == true || this.modes.shopifyRequest == 'true'){
            //   // console.log(`The value is ${this.modes.shopifyRequest}`)
           document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest 
           document.getElementById('req-toggle-btn1').value = this.modes.shopifyRequest 
           document.getElementById('req-toggle-btn').style = "display: none;"
           document.getElementById('req-toggle-btn1').style = "display: block;"
           } else {
            //   // console.log(`The value is ${this.modes.shopifyRequest}`)
            //   // console.log(`The value is ${this.modes.shopifyRequest}`)
   
               document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest 
               document.getElementById('req-toggle-btn1').value = this.modes.shopifyRequest 
               document.getElementById('req-toggle-btn').style = "display: block;"
               document.getElementById('req-toggle-btn1').style = "display: none;"
               }  
        } shopifyRequest ()
           
        function shopifyACO () {
           if(this.modes.shopifyNormalACO == true || this.modes.shopifyNormalACO == 'true'){
            //   // console.log(`The value is ${this.modes.shopifyNormalACO}`)
           document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO 
           document.getElementById('normal-aco-toggle1').value = this.modes.shopifyNormalACO 
           document.getElementById('normal-aco-toggle').style = "display: none;"
           document.getElementById('normal-aco-toggle1').style = "display: block;"
           } else {
            //   // console.log(`The value is ${this.modes.shopifyNormalACO}`)
            //   // console.log(`The value is ${this.modes.shopifyNormalACO}`)
   
               document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO 
               document.getElementById('normal-aco-toggle1').value = this.modes.shopifyNormalACO 
               document.getElementById('normal-aco-toggle').style = "display: block;"
               document.getElementById('normal-aco-toggle1').style = "display: none;"
               }  
        } shopifyACO ()
        function shopifyATC () {
           if(this.modes.shopifyATC == true || this.modes.shopifyATC == 'true'){
            //   // console.log(`The value is ${this.modes.shopifyATC}`)
           document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC 
           document.getElementById('atc-toggle-btn1').value = this.modes.shopifyATC 
           document.getElementById('atc-toggle-btn').style = "display: none;"
           document.getElementById('atc-toggle-btn1').style = "display: block;"
           } else {
            //   // console.log(`The value is ${this.modes.shopifyATC}`)
            //   // console.log(`The value is ${this.modes.shopifyATC}`)
   
               document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC 
               document.getElementById('atc-toggle-btn1').value = this.modes.shopifyATC 
               document.getElementById('atc-toggle-btn').style = "display: block;"
               document.getElementById('atc-toggle-btn1').style = "display: none;"
               }  
        } shopifyATC ()
        function supremeAutofill () {
           if(this.modes.supremeAutofill == true || this.modes.supremeAutofill == 'true'){
            //   // console.log(`The value is ${this.modes.supremeAutofill}`)
           document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill 
           document.getElementById('sup-autofill-btn1').value = this.modes.supremeAutofill 
           document.getElementById('sup-autofill-btn').style = "display: none;"
           document.getElementById('sup-autofill-btn1').style = "display: block;"
           } else {
            //   // console.log(`The value is ${this.modes.supremeAutofill}`)
            //   // console.log(`The value is ${this.modes.supremeAutofill}`)
   
               document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill 
               document.getElementById('sup-autofill-btn1').value = this.modes.supremeAutofill 
               document.getElementById('sup-autofill-btn').style = "display: block;"
               document.getElementById('sup-autofill-btn1').style = "display: none;"
               }  
        } supremeAutofill ()
        function supremeACO () {
           if(this.modes.supremeACO == true || this.modes.supremeACO == 'true'){
            //   // console.log(`The value is ${this.modes.supremeACO}`)
           document.getElementById('sup-aco-btn').value = this.modes.supremeACO 
           document.getElementById('sup-aco-btn1').value = this.modes.supremeACO 
           document.getElementById('sup-aco-btn').style = "display: none;"
           document.getElementById('sup-aco-btn1').style = "display: block;"
           } else {
            //   // console.log(`The value is ${this.modes.supremeACO}`)
            //   // console.log(`The value is ${this.modes.supremeACO}`)
   
               document.getElementById('sup-aco-btn').value = this.modes.supremeACO 
               document.getElementById('sup-aco-btn1').value = this.modes.supremeACO 
               document.getElementById('sup-aco-btn').style = "display: block;"
               document.getElementById('sup-aco-btn1').style = "display: none;"
               }  
        } supremeACO ()
        function supremeATCCart () {
           if(this.modes.supremeATCCart == true || this.modes.supremeATCCart == 'true'){
            //   // console.log(`The value is ${this.modes.supremeATCCart}`)
           document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart 
           document.getElementById('sup-atccart-btn1').value = this.modes.supremeATCCart 
           document.getElementById('sup-atccart-btn').style = "display: none;"
           document.getElementById('sup-atccart-btn1').style = "display: block;"
           } else {
            //   // console.log(`The value is ${this.modes.supremeATCCart}`)
            //   // console.log(`The value is ${this.modes.supremeATCCart}`)
   
               document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart 
               document.getElementById('sup-atccart-btn1').value = this.modes.supremeATCCart 
               document.getElementById('sup-atccart-btn').style = "display: block;"
               document.getElementById('sup-atccart-btn1').style = "display: none;"
               }  
        } supremeATCCart ()
     //  document.getElementById('toggle-btn').style = this.modes.shopifyAutofill
     //  document.getElementById('req-toggle-btn').value = this.modes.shopifyRequest
     //  document.getElementById('req-toggle-btn').style = this.modes.shopifyRequest
    //   document.getElementById('normal-aco-toggle').value = this.modes.shopifyNormalACO
    //   document.getElementById('normal-aco-toggle').style = this.modes.shopifyNormalACO
       // document.getElementById('atc-toggle-btn').value = this.modes.shopifyATC
    //   document.getElementById('atc-toggle-btn').style = this.modes.shopifyATC
     //  document.getElementById('sup-autofill-btn').value = this.modes.supremeAutofill
      // document.getElementById('sup-autofill-btn').style = this.modes.supremeAutofill1
   //    document.getElementById('sup-aco-btn').value = this.modes.supremeACO
     //  document.getElementById('sup-aco-btn').style = this.modes.supremeACO1
   //    document.getElementById('sup-atccart-btn').value = this.modes.supremeATCCart
     //  document.getElementById('sup-atccart-btn').style = this.modes.supremeATCCart1
       // for(var element in this.modes){
       //     // console.log(element)
       //     // console.log(this.modes[element])
       //   //  if()
       // }
       toggled = this.modes.shopifyAutofill
       toggled1 = this.modes.shopifyRequest
       toggled2 = this.modes.shopifyNormalACO
       toggled3 = this.modes.shopifyATC
       toggled4 = this.modes.supremeAutofill
       toggled5 = this.modes.supremeACO
       toggled6 = this.modes.supremeATCCart


    })

    }


} else {
    window.location.replace('../../eyes/login.html')
}})
}
        
    