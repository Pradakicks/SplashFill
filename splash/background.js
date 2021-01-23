// const DISCORD_URL = 'https://discord.com/api/oauth2/authorize';
// const CLIENT_ID = encodeURIComponent('797969424752836608');
// const RESPONSE_TYPE = encodeURIComponent('token');
// const REDIRECT_URI = encodeURIComponent(chrome.identity.getRedirectURL());



// const STATE = encodeURIComponent('waterff99');
// const SCOPE = encodeURIComponent('identify email guilds');

// let user_signed_in = false;



// function get_discord_uri() {
//     const nonce = encodeURIComponent(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
//     const url =
//         `${DISCORD_URL}
// ?client_id=${CLIENT_ID}
// &response_type=${RESPONSE_TYPE}
// &redirect_uri=${REDIRECT_URI}
// &state=${STATE}
// &scope=${SCOPE}
// &none=${nonce}`
//     return url
// }


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'login') {
//         chrome.identity.launchWebAuthFlow({
//             url: get_discord_uri(),
//             interactive: true
//         }, function (redirect_uri) {
//            // console.log(redirect_uri)
//             if (chrome.runtime.lastError || redirect_uri.includes('access_denied')) {
//                 sendResponse('fail');
//                 return;
//             } else {
//                 user_signed_in = true;
//                 sendResponse('success')
//             }
//         });

//         return true;
//     } else if (request.message === 'logout') {
//         user_signed_in = false;
//         sendResponse('success')

//         return false;
//     }
// });

function checkValid() {
    chrome.storage.local.get('keys', async (data) => {
       // console.log(data.keys)
        await fetch(`https://splash-fill-default-rtdb.firebaseio.com/users/${data.keys}/loginStatus/.json`).then((response) =>{ 
    response.text().then((res) =>{
        let parsedData = JSON.parse(res)
        let parsedTime = (parsedData?.loginDate)
        let parsedStatus = (parsedData?.status)
        let currentTime = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}`
       // console.log(currentTime)
        let splittedCurrenTime = currentTime.split('-')
        let splittedParsedTime = parsedTime?.split('-')
       // console.log(splittedCurrenTime)
       // console.log(splittedParsedTime)

        function setFalse () {
            chrome.storage.local.set({loginStatus : false}, function() {
               // console.log(`Status False`);
                });
        }
        function setTrue () {
            chrome.storage.local.set({loginStatus : true}, function() {
               // console.log(`Status True`);
                });
        }
        function getStatus () {
            chrome.storage.local.get('loginStatus', (data) => {
               // console.log(data.loginStatus)
                })   
        }
        if (splittedCurrenTime[0] == splittedParsedTime[0]){
                if(splittedCurrenTime[1] == splittedParsedTime[1]){
                    if(splittedCurrenTime[2] == splittedParsedTime[2]){
                       // console.log(splittedCurrenTime[3] - splittedParsedTime[3])
                        if(splittedCurrenTime[3] - splittedParsedTime[3] < 12) {
                            setTrue()
                           // console.log('Testing Works')
                        } else {
                            setFalse()
                        }
                    } else {
                        setFalse()
                    }
                } else {
                    setFalse()
                }
        } else {
            setFalse()
        }
    })

        })
    })
} checkValid ()

window.setInterval(function(){
    checkValid ()
  }, 10000);



  // Fix when you restart
  // Keep testing