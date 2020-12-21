let settings;
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
	// chrome.storage.local.get({ profiles: [], selectedProfile: null, enabled: false, settings: {} }, (results) => {
	// 	profile = results.profiles.find(profile => profile.id === results.selectedProfile);
	// 	settings = results.settings;

		if (true) {
			if (item) {
				let fields = {
					'number': item.profile.cardNumber,
					'name': item.profile.nameOnCard,
					'expiry': `${item.profile.expirationMonth}/${item.profile.expirationYear}`,
					'verification_value': item.profile.cvv,
				}

				Object.keys(fields).forEach(id => {
					console.log(fields[id])
					fillField(id, fields[id]);
				});

				chrome.runtime.sendMessage({action: 'completeCheckout'});
			}
		}
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
