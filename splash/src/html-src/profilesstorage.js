
window.onload = function () {
  document.getElementById('save-btn').onclick = function (){
    var value = {
        profile : {
        profileName : document.getElementById('profile-name').value,
        firstName : document.getElementById('first-name').value,
        lastName : document.getElementById('last-name').value,
        email : document.getElementById('email').value,
        phoneNumber : document.getElementById('phone-number').value,
        addressLine1 : document.getElementById('address-line-1').value,
        addressLine2 : document.getElementById('address-line-2').value,
        city : document.getElementById('city').value,
        nameOnCard : document.getElementById('name-on-card').value,
        cardNumber : document.getElementById('card-number').value,
        country : document.getElementById('country').value,
        state : document.getElementById('state').value,
        cvv : document.getElementById('cvv').value,
        cardType : document.getElementById('card-type').value,
        zipCode : document.getElementById('zip-code').value,
        expirationMonth : document.getElementById('expiration-month').value,
        expirationYear : document.getElementById('expiration-year').value,
        }
}
    function checkMissingNames () {

    
    if (!value.profileName){
        throw console.error('User Missing Profile Name!');
    }if (!value.firstName){
        throw console.error('User Missing First Name!');
    }if (!value.lastName){
        throw console.error('User Missing Last Name!');
    }if (!value.email){
        throw console.error('User Missing Email!');
    }if (!value.phoneNumber){
        throw console.error('User Missing Phone Number!');
    }if (!value.addressLine1){
        throw console.error('User Missing Address Line 1!');
    }if (!value.city){
        throw console.error('User Missing City!');
    }if (!value.nameOnCard){
        throw console.error('User Missing Name On Card!');
    }if (!value.cardNumber){
        throw console.error('User Missing Card Number!');
    }if (!value.country){
        throw console.error('User Missing Country!');
    }if (!value.state){
        throw console.error('User Missing State!');
    }if (!value.cvv){
        throw console.error('User Missing Cvv!');
    }
}
    var arrValue = []
    function addValues (value) {
        arrValue.push(value.profileName)
        arrValue.push(value.firstName)
        arrValue.push(value.lastName)
        arrValue.push(value.email)
        arrValue.push(value.addressLine1)
        arrValue.push(value.addressLine2)
        arrValue.push(value.nameOnCard)
        arrValue.push(value.cardNumber)
        arrValue.push(value.country)
        arrValue.push(value.state)
        arrValue.push(value.cvv)
    } 
    // addValues(value)
    function checkMissing () {
        for (let i = 0; i < arrValue.length; i++){
        if (arrValue[i] == ""){
            throw console.error(`User Missing Value at ${i} position!`);

        }
    }
    } 
    // checkMissing ()
    
   

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

chrome.storage.local.set({profile : value}, function() {

    console.log(`Profile ${value} Saved`);
    console.log(`${value}`);
  });



}  

document.getElementById('profile-load').onclick = function () {
        chrome.storage.local.get('profile', (data) => {
            this.profiles = data.profile.profile
            console.log(this.profiles)
            document.getElementById('profile-name').value = this.profiles.profileName,
            document.getElementById('first-name').value = this.profiles.firstName,
            document.getElementById('last-name').value = this.profiles.lastName,
            document.getElementById('email').value = this.profiles.email,
            document.getElementById('phone-number').value = this.profiles.phoneNumber,
            document.getElementById('address-line-1').value = this.profiles.addressLine1,
            document.getElementById('address-line-2').value = this.profiles.addressLine2,
            document.getElementById('city').value = this.profiles.city,
            document.getElementById('name-on-card').value = this.profiles.nameOnCard,
            document.getElementById('card-number').value = this.profiles.cardNumber,
            document.getElementById('country').value = this.profiles.country,
            document.getElementById('state').value = this.profiles.state,
            document.getElementById('cvv').value = this.profiles.cvv,
            document.getElementById('card-type').value = this.profiles.cardType,
            document.getElementById('zip-code').value = this.profiles.zipCode,
            document.getElementById('expiration-month').value = this.profiles.expirationMonth,
            document.getElementById('expiration-year').value = this.profiles.expirationYear
            
        })
    }
}

// document.getElementById('setting-save-btn').onclick = function () {

// }


