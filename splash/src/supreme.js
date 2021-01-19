let settings;


window.onload = function () {
	chrome.storage.local.get('loginStatus', (data) => {
		this.loginStatus = data.loginStatus
		// console.log(this.loginStatus)
	if(this.loginStatus){
	// chrome.storage.local.get({ profiles: [], selectedProfile: null, enabled: false, settings: {} }, (results) => {
	// 	profile = results.profiles.find(profile => profile.id === results.selectedProfile);
	// 	settings = results.settings;
	chrome.storage.local.get('profile', (data) => {
		this.profiles = data.profile.profile
		
		// console.log(this.profiles)
		// console.log(this.profiles.addressLine1)
		chrome.storage.local.get('modes', (data) => {
			  this.modes = data.modes.modes
			  // console.log(this.modes)
			  if (this.profiles) {
				if (this.modes.supremeACO == true || this.modes.supremeACO == 'true') {

					let fields = {
						'order_billing_name': `${item.profile.firstName} ${item.profile.lastName}`,
						'order_email': item.profile.email,
						'order_tel': item.profile.phoneNumber ,
						'bo': item.profile.address,
						'oba3': item.profile.address2,
						'order_billing_address_3': item.profile.apt,
						'order_billing_city': item.profile.city,
						'order_billing_zip': item.profile.zipCode,
						'cnb': item.profile.cardNumber,
						'rnsnckrn': item.profile.cardNumber,
						'vval': item.profile.cvv,
						'orcer': item.profile.cvv,
					}
	
					Object.keys(fields).forEach(id => {
						fillField(id, fields[id]);
					});
	
					fillField('order_billing_country', getCountryCode(item.profile.country), true);
					fillField('order_billing_state', item.profile.state, true);
					fillField('credit_card_type', item.profile.cardType, true);
					fillField('credit_card_month', item.profile.expirationMonth, true);
					fillField('credit_card_year', item.profile.expirationYear, true);
					document.getElementsByClassName('icheckbox_minimal')[1].click();
				 //   document.querySelector('#cart-cc > fieldset > p > label > div > ins').click()
					document.querySelector('.terms .icheckbox_minimal').classList.add('checked');
					
					if(item.supremeACO) {
						document.querySelector('.button, .checkout').click();
					}
				}
			}

		})})
		}	
	})


	};


function fillField(id, value, select = false) {
	let element = document.getElementById(id);
	if (element) {
		element.focus();

			element.value = value;
			element.dispatchEvent(new Event('change'));

		element.blur();
	}
}

// function simulateTyping(element, value, i) {
// 	if(i < value.length){
// 		element.value += value.charAt(i);
// 		element.dispatchEvent(new Event('change'));
// 		setTimeout(() => {
// 			i++;
// 			simulateTyping(element, value, i);
// 		}, 10);
// 	}
// }

function check(name, index=0) {
	let element = document.getElementsByName(name)[index];
	if (element) {
		let event = document.createEvent("HTMLEvents");
		event.initEvent('change', true, false);
		element.checked = true;
		element.dispatchEvent(event);
	}
}

function getCountryCode(country) {
	let countries = {
		"united kingdom": "GB",
		"northern ireland": "NB",
		"united states": "USA",
		"canada": "CANADA",
		"austria": "AT",
		"belarus": "BY",
		"belgium": "BE",
		"bulgaria": "BG",
		"croatia": "HR",
		"czech republic": "CZ",
		"denmark": "DK",
		"estonia": "EE",
		"finland": "FI",
		"france": "FR",
		"germany": "DE",
		"greece": "GR",
		"hungary": "HU",
		"iceland": "IS",
		"ireland": "IE",
		"italy": "IT",
		"latvia": "LV",
		"lithuania": "LT",
		"luxembourg": "LU",
		"monaco": "MC",
		"netherlands": "NL",
		"norway": "NO",
		"poland": "PL",
		"portugal": "PT",
		"romania": "RO",
		"russia": "RU",
		"slovakia": "SK",
		"slovenia": "SI",
		"spain": "ES",
		"sweden": "SE",
		"switzerland": "CH",
		"turkey": "TR",
	}

	return countries[country.toLowerCase()];
}









