const DISCORD_URL = 'https://discord.com/api/oauth2/authorize';
const CLIENT_ID = encodeURIComponent('797969424752836608');
const RESPONSE_TYPE = encodeURIComponent('token');
const REDIRECT_URI = encodeURIComponent(chrome.identity.getRedirectURL());

const STATE = encodeURIComponent('waterff99');
const SCOPE = encodeURIComponent('identify email guilds');

let user_signed_in = false;



function get_discord_uri() {
    const nonce = encodeURIComponent(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const url =
        `${DISCORD_URL}
?client_id=${CLIENT_ID}
&response_type=${RESPONSE_TYPE}
&redirect_uri=${REDIRECT_URI}
&state=${STATE}
&scope=${SCOPE}
&none=${nonce}`
    return url
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'login') {
        chrome.identity.launchWebAuthFlow({
            url: get_discord_uri(),
            interactive: true
        }, function (redirect_uri) {
            console.log(redirect_uri)
            if (chrome.runtime.lastError || redirect_uri.includes('access_denied')) {
                sendResponse('fail');
                return;
            } else {
                user_signed_in = true;
                sendResponse('success')
            }
        });

        return true;
    } else if (request.message === 'logout') {
        user_signed_in = false;
        sendResponse('success')

        return false;
    }
});
