window.onload = function () {


    document.getElementById('sign-in').onclick = function () {
        chrome.runtime.sendMessage({message: 'login'} , function(response) {
            if(response === 'success') window.location.replace('./home.html')
        });
     }



   } 

  