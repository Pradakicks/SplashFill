async function depositReq () {
    const res = await await fetch("https://deposit.us.shopifycs.com/sessions", {
        "headers": {
          "accept": "application/json",
          "content-type": "application/json",
        },
        "body": `{\"credit_card\":{\"number\":\"${item.profile.cardNumber}\",\"name\":\"${item.profile.nameOnCard}\",\"month\":${item.profile.expirationMonth},\"year\":${item.profile.expirationYear},\"verification_value\":\"${item.profile.cvv}\"}}`,
        "method": "POST",
      }).then((res)=>{
        console.log(res)
        console.log(res.id)
} 