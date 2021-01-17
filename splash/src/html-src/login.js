window.onload = function () {


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
        let res = response.text().then((data) =>{
            console.log(data)
        })
        console.log(response.status)
        if(response.status == 404 || response.status == 400 || response.status == 401){
            const newDiv = document.createElement('div');
            const newContent = document.createTextNode('Authentication Failed')
            console.log('Auth Failed')
            
            newDiv.appendChild(newContent)
            newDiv.setAttribute("id", "authorization-fail")
            newDiv.setAttribute("class", "important-btn home-btn baseOne")
         //   newDiv.id('authorization-fail')
            const currentDiv = document.getElementById('div1');
            document.body.insertBefore(newDiv, currentDiv)
        } else if(response.status == 200) {
            window.location.replace('./home.html')
        }
    }).catch(error => console.log('error', error));
	
	
        console.log(authKey)
        
     }



   } 

  