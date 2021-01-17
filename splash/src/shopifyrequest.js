
window.onload = function () {
  chrome.storage.local.get('profile', (data) => {
    this.profiles = data.profile.profile
    
    console.log(this.profiles)
    console.log(this.profiles.addressLine1)

      chrome.storage.local.get('modes', (data) => {
          this.modes = data.modes.modes
          console.log(this.modes)

      if (this.modes.shopifyRequest == true || this.modes.shopifyRequest == 'true') {
    
    let domaindoc =  document.domain
    let documentUrl = document.URL
    let item = {
      quantity: 1,
        profile : {
            address: this.profiles.addressLine1,
            apt: this.profiles.addressLine2,
            cardNumber: this.profiles.cardNumber,
            cardType: this.profiles.cardType,
            city: this.profiles.city,
            country: "US",
            countryCode: this.profiles.country, // country Name
            cvv: this.profiles.cvv,
            email: this.profiles.email, // put an actual email in
            expirationMonth: this.profiles.expirationMonth,
            expirationMonth1: this.profiles.expirationMonth ,
            expirationYear: this.profiles.expirationYear,
            firstName: this.profiles.firstName,
            lastName: this.profiles.lastName,
            nameOnCard: this.profiles.nameOnCard,
            phoneNumber: this.profiles.phoneNumber,
            state: this.profiles.state, // CA, NC, NY, etc...
            zipCode: this.profiles.zipCode,
        }
    }
    console.log(item)
// let property = document.getElementById('tags').value
var responseText = ''

async function getPaymentIds () {

  const paymentidReq = await fetch("https://deposit.us.shopifycs.com/sessions", {
    "headers": {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://checkout.shopifycs.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"credit_card\":{\"number\":\"${item.profile.cardNumber}\",\"name\":\"${item.profile.nameOnCard}\",\"month\":${item.profile.expirationMonth1},\"year\":${item.profile.expirationYear},\"verification_value\":\"${item.profile.cvv}\"}}`,
    "method": "POST",
    "mode": "cors"
  })
    responseText = await paymentidReq.text();
  console.log(responseText)
  return responseText
} getPaymentIds ()

var elem = document.getElementsByName('add')
elem[0].addEventListener('click', function(){
    if (true){
      // fetch(documentUrl).then((res)=>{
      //   window.setInterval(()=>{
      //     var $dom = $('<html>').html(`${res.text()}`)
      //   $dom(meta)[0].product.variants.map((data)=>{
      //     console.log(data.id)})
      // })
      //   }, 1000)
        
      // $(meta)[0].product.variants.map((data)=>{
      //   console.log(data.id)})
      let selectedVariant = document.getElementsByName('id')[0].value

      console.log(document.getElementsByName('id')[0].value)
  async function fetchCheckout (){
        fetch(`https://${domaindoc}/checkout/`, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
 // "redirect": "follow",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
  }).then((res)=>{
    return res
  })
      }


    fetch(`https://${domaindoc}/cart/${selectedVariant}:${item.quantity}`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then((res)=>{
    async function ab () {
       var newurl = res.url
       var realUrl = res.url
       console.log(newurl)
      async function getFormValues(url) {
      const response = await fetch(url);
      const response_html = await response.text();
     // console.log(response_html)
      return response_html
  } 
      const response_html = await getFormValues(newurl);
    //  const gateway = response_html.split('data-select-gateway="')[1].split('"')[0];
      const authenticity_token = response_html.split('name="authenticity_token" value="')[1].split('"')[0];
    //  console.log(gateway)
      console.log(authenticity_token)
   
   // let texRes =  res.text().then((res)=>{
  //  window.open = res.text.search('authenticity_token')
    // function posRes () {
    //   return res.text.search('authenticity_token')
    // }

 //   window.open(texRes[posRes() + 19])
   // window.open(res.text.split("authenticity_token"))

   // let actualUrl = newurl + "?previous_step=contact_information&step=shipping_method"

    console.log(newurl)
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
  "referrer": domaindoc,
  "referrerPolicy": "origin",
  "body": `_method=patch&authenticity_token=${authenticity_token}&previous_step=contact_information&step=shipping_method&checkout%5Bemail%5D=${item.profile.email}&checkout%5Bbuyer_accepts_marketing%5D=0&checkout%5Bbuyer_accepts_marketing%5D=1&checkout%5Bshipping_address%5D%5Bfirst_name%5D=${item.profile.firstName}&checkout%5Bshipping_address%5D%5Blast_name%5D=${item.profile.lastName}&checkout%5Bshipping_address%5D%5Baddress1%5D=${item.profile.address}&checkout%5Bshipping_address%5D%5Baddress2%5D=&checkout%5Bshipping_address%5D%5Bcity%5D=${item.profile.city}&checkout%5Bshipping_address%5D%5Bcountry%5D=${item.profile.country}&checkout%5Bshipping_address%5D%5Bprovince%5D=${item.profile.state}&checkout%5Bshipping_address%5D%5Bzip%5D=${item.profile.zipCode}&checkout%5Bshipping_address%5D%5Bphone%5D=${item.profile.phoneNumber}&checkout%5Bshipping_address%5D%5Bfirst_name%5D=${item.profile.firstName}&checkout%5Bshipping_address%5D%5Blast_name%5D=${item.profile.lastName}&checkout%5Bshipping_address%5D%5Baddress1%5D=${item.profile.address}&checkout%5Bshipping_address%5D%5Baddress2%5D=&checkout%5Bshipping_address%5D%5Bcity%5D=${item.profile.city}&checkout%5Bshipping_address%5D%5Bcountry%5D=${item.profile.countryCode}&checkout%5Bshipping_address%5D%5Bprovince%5D=${item.profile.state}&checkout%5Bshipping_address%5D%5Bzip%5D=${item.profile.zipCode}&checkout%5Bshipping_address%5D%5Bphone%5D=${item.profile.phoneNumber}&checkout%5Bremember_me%5D=&checkout%5Bremember_me%5D=0&checkout%5Bclient_details%5D%5Bbrowser_width%5D=974&checkout%5Bclient_details%5D%5Bbrowser_height%5D=952&checkout%5Bclient_details%5D%5Bjavascript_enabled%5D=1&checkout%5Bclient_details%5D%5Bcolor_depth%5D=24&checkout%5Bclient_details%5D%5Bjava_enabled%5D=false&checkout%5Bclient_details%5D%5Bbrowser_tz%5D=300`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((res)=>{
       // let htmlDoc = res.text()
      //  console.log(htmlDoc)

async function runIt () {

        async function getShippingRates(url) {
          const response1 = await fetch(url);
          const response_html1 = await response1.text();
       //   console.log(response_html1)
          return response_html1
      } 
          const response_html1 = await getShippingRates(res.url);
          console.log(response_html1)
          if (response_html1.includes('data-shipping-method="')){
             const shippingMethod = response_html1.split('div class="radio-wrapper" data-shipping-method="')[1].split('"')[0]
             let shippingMethodStep = await fetch(res.url, {
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
                "referrerPolicy": "origin",
                "body": `_method=patch&authenticity_token=${authenticity_token}&previous_step=shipping_method&step=payment_method&checkout%5Bshipping_rate%5D%5Bid%5D=${shippingMethod}&checkout%5Bclient_details%5D%5Bbrowser_width%5D=1920&checkout%5Bclient_details%5D%5Bbrowser_height%5D=969&checkout%5Bclient_details%5D%5Bjavascript_enabled%5D=1&checkout%5Bclient_details%5D%5Bcolor_depth%5D=24&checkout%5Bclient_details%5D%5Bjava_enabled%5D=false&checkout%5Bclient_details%5D%5Bbrowser_tz%5D=300`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
              })
        //.split('div class="radio-wrapper" data-shipping-method="')[1].split('"')[0]
        console.log(shippingMethod)
        } 
         
        var newurl = res.url
          console.log(newurl)
        
      async function getGateways(url) {
        const response2 = await fetch(url);
        const response_html2 = await response2.text();
     //   console.log(response_html2)
        return response_html2
    } 
    


        let gatewayUrl = `${realUrl}?step=payment_method`
        console.log(gatewayUrl)
        const response_html2 =  await getGateways(gatewayUrl);
       // console.log(response_html2)
      //  const responseText =  await getPaymentIds();
        var pay_gateway = response_html2.split('data-select-gateway=')[1].split('"')[1] 
        var final_price = response_html2.split('data-checkout-payment-due-target="')[1].split('>')[1].slice(1).split('<')[0]
        console.log(final_price)
        
        console.log(final_price)   
        let _price = final_price.split('.')
        var actual_final_price = _price[0] + _price[1]
        console.log(actual_final_price)
        const pay_id = responseText.split('{"id":"')[1].split('"')[0]
if (final_price == 0.00){
          var pay_gateway = 'free'
        } else {
          // Payment Request
          console.log('Payment Request')
          console.log('Payment Request')
       await fetch(realUrl, {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        },

        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `_method=patch&authenticity_token=${authenticity_token}&previous_step=payment_method&step=&s=${pay_id}&checkout%5Bpayment_gateway%5D=${pay_gateway}&checkout%5Bcredit_card%5D%5Bvault%5D=false&checkout%5Btotal_price%5D=${actual_final_price}&complete=1&checkout%5Bclient_details%5D%5Bbrowser_width%5D=991&checkout%5Bclient_details%5D%5Bbrowser_height%5D=969&checkout%5Bclient_details%5D%5Bjavascript_enabled%5D=1&checkout%5Bclient_details%5D%5Bcolor_depth%5D=24&checkout%5Bclient_details%5D%5Bjava_enabled%5D=false&checkout%5Bclient_details%5D%5Bbrowser_tz%5D=240`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
});
        }
        
      console.log(pay_gateway)

        // Place Order
        try {
           await fetch(realUrl, {
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
        "referrerPolicy": "origin",
        "body": `_method=patch&authenticity_token=${authenticity_token}&previous_step=payment_method&step=&s=&checkout%5Bcredit_card%5D%5Bvault%5D=false&checkout%5Bpayment_gateway%5D=${pay_gateway}&checkout%5Bdifferent_billing_address%5D=false&checkout%5Btotal_price%5D=${actual_final_price}&complete=1&checkout%5Bclient_details%5D%5Bbrowser_width%5D=1920&checkout%5Bclient_details%5D%5Bbrowser_height%5D=969&checkout%5Bclient_details%5D%5Bjavascript_enabled%5D=1&checkout%5Bclient_details%5D%5Bcolor_depth%5D=24&checkout%5Bclient_details%5D%5Bjava_enabled%5D=false&checkout%5Bclient_details%5D%5Bbrowser_tz%5D=300`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      }).then((res)=>{
        window.open(res.url)
      });
        } catch (error) {
          console.log(error)
          alert(error)
        }
     
        
        

     } runIt ()  })
      //  window.open(newurl)
     
    .catch((err)=>{
        alert(err)
    })
  } ab ()
     //  entireFunc(newurl)
  // window.open(newurl)
    
})} 
})

 function entireFunc(a) {
        let newurl = a
        let actualUrl = newurl + "?previous_step=contact_information&step=shipping_method"
    //    window.open(newurl)
    console.log(newurl)

        try {
            fetch(actualUrl, {
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
         // window.open(newurl)
    console.log(newurl)

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
            }).then((res)=>{
              let newurl = res.url
          //    window.open(newurl)
            })
      }).catch((err)=>{
          alert(err)
      })
        } catch (error) {
            alert(error)
        }
        
    }
   }
  })  
}

  )}