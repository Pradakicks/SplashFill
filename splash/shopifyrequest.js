window.onload = function () {
    let domaindoc =  document.domain
    console.log('testing')
    let item = {
        profile : {
            address: "123 main street",
            apt: "",
            cardNumber: "4242424242424242",
            cardType: "visa",
            city: "Wallkill",
            country: "US",
            countryCode: "United Sate", // country Name
            cvv: "430",
            email: "test@gmail.com", // put an actual email in
            loginEmail: "arielpradashady@gmail.com", // put an actual email in
            loginPass: "RgBiv123PradaUpNext", // put an actual email in
            expirationMonth: 8,
            expirationYear: 26,
            firstName: "Tim",
            id: "ID19573F",
            lastName: "Smithson",
            name: "Home",
            nameOnCard: "Mr Tim Smithson",
            phoneNumber: "8455416789",
            state: "NY", // CA, NC, NY, etc...
            zipCode: "12589",
        }
    }
   // let property = document.getElementById('tags').value
//    let mprod = meta.product.variants
//     if (mprod.length > 1){
//         let variants = mprod[1].id
//     } else {
//        let variants = mprod[0].id 
//     }
    
var elem = document.getElementsByName('add')
elem[0].addEventListener('click', function(){
    if (true){
        fetch(`https://${domaindoc}/checkout/`, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "redirect": "follow",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then((res)=>{
    let newurl = res.url
    if (res.url.includes('/cart')){
        fetch(`https://${domaindoc}/checkout/`, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then((res)=>{
    let newurl = res.url
    entireFunc(newurl)
})
        
    } else {
       entireFunc(newurl) 
    }
  //  window.open(newurl)
    
});
    }
})
    // if (true){
    //     fetch(`https://${domaindoc}/cart/add.js`, {
    //     "headers": {
    //         "accept": "application/json, text/javascript, */*; q=0.01",
    //         "accept-language": "en-US,en;q=0.9",
    //         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //         "sec-fetch-dest": "empty",
    //         "sec-fetch-mode": "cors",
    //         "sec-fetch-site": "same-origin",
    //         "x-requested-with": "XMLHttpRequest"
    //     },
    //     "referrerPolicy": "strict-origin-when-cross-origin",
    //     "body": `properties%5Bupsell%5D=${property}&option-0=S&id=${variants}&quantity=1`,
    //     "method": "POST",
    //     "mode": "cors",
    //     "credentials": "include"
    //     });
    // }
 function entireFunc(a) {
        let newurl = a
        try {
            fetch(newurl, {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1"
        },
        "body": `_method=patch&authenticity_token=&previous_step=contact_information&step=shipping_method&checkout%5Bemail%5D=${item.profile.address}&checkout%5Bbuyer_accepts_marketing%5D=0&checkout%5Bbuyer_accepts_marketing%5D=1&checkout%5Bshipping_address%5D%5Bfirst_name%5D=${item.profile.firstName}&checkout%5Bshipping_address%5D%5Blast_name%5D=${item.profile.lastName}&checkout%5Bshipping_address%5D%5Baddress1%5D=${item.profile.address}&checkout%5Bshipping_address%5D%5Baddress2%5D=&checkout%5Bshipping_address%5D%5Bcity%5D=${item.profile.city}&checkout%5Bshipping_address%5D%5Bcountry%5D=${item.profile.country}&checkout%5Bshipping_address%5D%5Bprovince%5D=${item.profile.state}&checkout%5Bshipping_address%5D%5Bzip%5D=${item.profile.zipCode}&checkout%5Bshipping_address%5D%5Bphone%5D=${item.profile.phoneNumber}&checkout%5Bshipping_address%5D%5Bfirst_name%5D=${item.profile.firstName}&checkout%5Bshipping_address%5D%5Blast_name%5D=${item.profile.lastName}&checkout%5Bshipping_address%5D%5Baddress1%5D=${item.profile.address}&checkout%5Bshipping_address%5D%5Baddress2%5D=&checkout%5Bshipping_address%5D%5Bcity%5D=${item.profile.city}&checkout%5Bshipping_address%5D%5Bcountry%5D=${item.profile.countryCode}&checkout%5Bshipping_address%5D%5Bprovince%5D=${item.profile.state}&checkout%5Bshipping_address%5D%5Bzip%5D=${item.profile.zipCode}&checkout%5Bshipping_address%5D%5Bphone%5D=${item.profile.phoneNumber}&checkout%5Bremember_me%5D=&checkout%5Bremember_me%5D=0&checkout%5Bclient_details%5D%5Bbrowser_width%5D=1903&checkout%5Bclient_details%5D%5Bbrowser_height%5D=969&checkout%5Bclient_details%5D%5Bjavascript_enabled%5D=1&checkout%5Bclient_details%5D%5Bcolor_depth%5D=24&checkout%5Bclient_details%5D%5Bjava_enabled%5D=false&checkout%5Bclient_details%5D%5Bbrowser_tz%5D=300`,
        "method": "post",
        "mode": "cors",
        "credentials": "include"
      
      }).then((res)=>{
          let newurl = res.url
          window.open(newurl)
          fetch(newurl, {
              "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
              },
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
            })
      }).catch((err)=>{
          alert(err)
      })
        } catch (error) {
            alert(error)
        }
        
    }
   

}