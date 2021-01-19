window.onload = function () {

	// chrome.storage.local.get({ profiles: [], selectedProfile: null, enabled: false, settings: {} }, (results) => {
	// 	profile = results.profiles.find(profile => profile.id === results.selectedProfile);
	// 	settings = results.settings;
	chrome.storage.local.get('loginStatus', (data) => {
		this.loginStatus = data.loginStatus
		// console.log(this.loginStatus)
		if(this.loginStatus){
	chrome.storage.local.get('profile', (data) => {
		this.profiles = data.profile.profile
		
		// console.log(this.profiles)
		// console.log(this.profiles.addressLine1)
		chrome.storage.local.get('modes', (data) => {
			  this.modes = data.modes.modes
			  // console.log(this.modes)
		if (this.profiles) {
				if (this.modes.shopifyNormalACO) {
				let fields = {
					'number': this.profiles.cardNumber,
					'name': this.profiles.nameOnCard,
					'expiry': `${this.profiles.expirationMonth}/${this.profiles.expirationYear}`,
					'verification_value': this.profiles.cvv,
				}

				Object.keys(fields).forEach(id => {
					// console.log(fields[id])
					fillField(id, fields[id]);
				});

				chrome.runtime.sendMessage({action: 'completeCheckout'});
			}
		}

		})
	})
		
		
		}})
//	});
}

function fillField(id, value) {
	let element = document.getElementById(id);
	if (element) {
		element.focus();
			element.value = value;
			element.dispatchEvent(new Event('change'));
		element.blur();
	}
}
