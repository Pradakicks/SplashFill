window.onload = function () {

    var d = new Date()
    let getYear = d.getFullYear()
    let getMonth = d.getMonth()
    let getDate = d.getDate()
    let getHours = d.getHours()
    let getMinutes = d.getMinutes()
    let realTime =  (`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()} - ${new Date().getMilliseconds()}`)
    // document.getElementById('sign-in').onclick = function () {
    //     chrome.runtime.sendMessage({message: 'login'} , function(response) {
    //         if(response === 'success') window.location.replace('./home.html')
    //     });
    //  }
     document.getElementById('auth-btn').onclick = function () {

        let authKey = document.getElementById('metalabs-keys').value

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic pk_ebIsbQgrOMmtplmvDmcKAP0RCicjvOPa");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
         //   body: raw,
            redirect: 'follow'
        };

    fetch(`https://api.metalabs.io/v2/licenses/${authKey}`, requestOptions)
    // .then(response => {
    //     response.text()
        
    // })
    .then((response) => {
        let res = response.text().then(async (data) => {
          // // console.log(data)
           // // console.log(response.status)
            if(response.status == 404 || response.status == 400 || response.status == 401){
                const newDiv = document.createElement('div');
                const newContent = document.createTextNode('Authentication Failed')
                // console.log('Auth Failed')
                // console.log(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()} - ${new Date().getMilliseconds()}`)
                newDiv.appendChild(newContent)
                newDiv.setAttribute("id", "authorization-fail")
                newDiv.setAttribute("class", "important-btn home-btn baseOne")
             //   newDiv.id('authorization-fail')
                const currentDiv = document.getElementById('div1');
                document.body.insertBefore(newDiv, currentDiv)
            } else if(response.status == 200) {
            let parsedData = JSON.parse(data)
            let key = parsedData.key
       //     // console.log(key)
            let email = parsedData.email
       //     // console.log(email)
            let customerId = parsedData.customer
       //     // console.log(customerId)
            let createdAt = parsedData.created
        //    // console.log(createdAt)
            let discordInfo = parsedData.member.discord
       //     // console.log(discordInfo)
            let planInfo = parsedData.plan
       //     // console.log(planInfo)
            let statusOfKey = parsedData.status
            let userInfo = parsedData.user
       //     // console.log(statusOfKey)
       //     // console.log(userInfo)
            var firebaseCheck = {
                method : "POST",
                body : JSON.stringify({
                    "name" : "Adrian",
                    "time" : `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}-${new Date().getMilliseconds()}`,
                    "Login_Status" : "Successful",
                    "key" : key,
                    "email" : email,
                    "customerId" : customerId,
                    "creadtedAt" : createdAt,
                    "discord" :  discordInfo,
                    "plan" : planInfo,
                    "StatusOfKey" : statusOfKey,
                    "userInfo" : userInfo
                    })
            }
            var statusFire = {
                method : "PATCH",
                body : JSON.stringify({
                    "status" : true,
                    "loginDate" : `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}`        
                    })
            }
            await fetch(`https://splash-fill-default-rtdb.firebaseio.com/users/${key}/loginData/${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}-${new Date().getMilliseconds()}.json`, firebaseCheck).then((response) =>{console.log(response)})
            await fetch(`https://splash-fill-default-rtdb.firebaseio.com/users/${key}/loginStatus/.json`, statusFire).then((response) =>{console.log(response)})
            chrome.storage.local.set({loginStatus : true}, function() {
               // // console.log(`Status True`);
                });
            chrome.storage.local.set({keys : key}, function() {
            //    // console.log(`Key Saved`);
             //   // console.log(`${key}`);
                });
               window.location.replace('./home.html')
                }
        })
      //  // console.log(response.status)
        
    }).catch(error => // console.log('error', error));
	
	
      //  // console.log(authKey)
        
     }



   } 

  