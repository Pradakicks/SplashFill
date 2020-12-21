let settings;
// import { Profiles } from './profiles';
let item = {
    profile : {
        address: "123 main street",
        apt: "",
        cardNumber: "4242424242424242",
        cardType: "visa",
        city: "Wallkill",
        country: "United States", // country Name
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
window.onload = function () {
	//  chrome.storage.local.get({ profiles: [], selectedProfile: null, enabled: false, settings: {} }, (results) => {		
	//  	profile = results.profiles.find(profile => profile.id === results.selectedProfile);
	//  	settings = results.settings;

		if (true) {
			if (item) {
				if (currentStep() == 'contact_information') {
					let fields = {
						'[name="checkout[email_or_phone]"]': item.profile.email,
						'[name="checkout[email]"]': item.profile.email,
						'#checkout_email': item.profile.email,
						'#checkout_email_or_phone': item.profile.email,
						'#checkout_shipping_address_first_name': item.profile.firstName,
						'#checkout_shipping_address_last_name': item.profile.lastName,
						'#checkout_shipping_address_address1': item.profile.address,
						'#checkout_shipping_address_address2': item.profile.apt,
						'#checkout_shipping_address_city': item.profile.city,
						'#checkout_shipping_address_zip': item.profile.zipCode,
						'#checkout_shipping_address_phone': item.profile.phoneNumber,
						'#checkout_billing_address_first_name': item.profile.firstName,
						'#checkout_billing_address_last_name': item.profile.lastName,
						'#checkout_billing_address_address1': item.profile.address,
						'#checkout_billing_address_address2': item.profile.apt,
						'#checkout_billing_address_city': item.profile.city,
						'#checkout_billing_address_zip': item.profile.zipCode,
                        '#checkout_billing_address_phone': item.profile.phoneNumber,
                        // '#checkout_shipping_address_country': item.profile.country,
                        // '#checkout_billing_address_country': item.profile.country,
                        // '#checkout_billing_address_province': item.profile.state,
                        // '#checkout_shipping_address_province': item.profile.state
					}

					Object.keys(fields).forEach(id => {
						fillField(id, fields[id]);
					});
						
					fillField('#checkout_shipping_address_country', item.profile.country, true);
					fillField('#checkout_shipping_address_province', item.profile.state, true);

					fillField('#checkout_billing_address_country', item.profile.country, true);
					fillField('#checkout_billing_address_province', item.profile.state, true);

					console.log(hasCaptcha());
					

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
//	});
}



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
