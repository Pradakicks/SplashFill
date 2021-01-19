let settings;
window.onload = function () {
	chrome.storage.local.get('loginStatus', (data) => {
		this.loginStatus = data.loginStatus
		// console.log(this.loginStatus)
		if(this.loginStatus){
	//  chrome.storage.local.get({ profiles: [], selectedProfile: null, enabled: false, settings: {} }, (results) => {		
	//  	profile = results.profiles.find(profile => profile.id === results.selectedProfile);
	//  	settings = results.settings;
	chrome.storage.local.get('profile', (data) => {
		this.profiles = data.profile.profile
		
		// console.log(this.profiles)
		// console.log(this.profiles.addressLine1)
		chrome.storage.local.get('modes', (data) => {
			  this.modes = data.modes.modes
			  // console.log(this.modes)
			  const currentStep = () => {
				let element = document.querySelector('[data-step]');
				return element.dataset.step;
			}
			
			function fillField(id, value, select = false) {
				let element = document.querySelector(id);
			
				if (element) {
					element.focus();
						element.value = value;
						element.dispatchEvent(new Event('change'));
					element.blur();
				}
			}
			
			
			function hasCaptcha() {
				return document.getElementById('g-recaptcha');
			}
			
			function continueToNextStep() {
				let continueButton = document.querySelector('.step__footer__continue-btn');
				continueButton.click();
			};
			  if (this.profiles) {
				if (this.modes.shopifyNormalACO == true || this.modes.shopifyNormalACO == 'true') {
					if (currentStep() == 'contact_information') {
						let fields = {
							'[name="checkout[email_or_phone]"]': this.profiles.email,
							'[name="checkout[email]"]': this.profiles.email,
							'#checkout_email': this.profiles.email,
							'#checkout_email_or_phone': this.profiles.email,
							'#checkout_shipping_address_first_name': this.profiles.firstName,
							'#checkout_shipping_address_last_name': this.profiles.lastName,
							'#checkout_shipping_address_address1': this.profiles.addressLine1,
							'#checkout_shipping_address_address2': this.profiles.addressLine2,
							'#checkout_shipping_address_city': this.profiles.city,
							'#checkout_shipping_address_zip': this.profiles.zipCode,
							'#checkout_shipping_address_phone': this.profiles.phoneNumber,
							'#checkout_billing_address_first_name': this.profiles.firstName,
							'#checkout_billing_address_last_name': this.profiles.lastName,
							'#checkout_billing_address_address1': this.profiles.addressLine1,
							'#checkout_billing_address_address2': this.profiles.addressLine2,
							'#checkout_billing_address_city': this.profiles.city,
							'#checkout_billing_address_zip': this.profiles.zipCode,
							'#checkout_billing_address_phone': this.profiles.phoneNumber,
							// '#checkout_shipping_address_country': item.profile.country,
							// '#checkout_billing_address_country': item.profile.country,
							// '#checkout_billing_address_province': item.profile.state,
							// '#checkout_shipping_address_province': item.profile.state
						}
	
						Object.keys(fields).forEach(id => {
							fillField(id, fields[id]);
						});
							
						fillField('#checkout_shipping_address_country', this.profiles.country, true);
						fillField('#checkout_shipping_address_province', this.profiles.state, true);
	
						fillField('#checkout_billing_address_country', this.profiles.country, true);
						fillField('#checkout_billing_address_province', this.profiles.state, true);
	
						// console.log(hasCaptcha());
						
	
						if (true) {
							if (!hasCaptcha()) {
								continueToNextStep();
							}
						}
					} else if (currentStep() == 'shipping_method') {
							continueToNextStep();
					} else if (currentStep() == 'payment_method') {
						continueToNextStep();
				}
				}


		  }
	})
			} )
	//	});
	
	
	
	
	
	
		  
		}})

		}
