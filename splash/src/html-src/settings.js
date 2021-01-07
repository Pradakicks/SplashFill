 window.onload = function () {
   document.getElementById('setting-save-btn').onclick = function () {
    var set = {
        settings : {
            webhook : document.getElementById('webhook').value,
            monitorDelay : document.getElementById('monitor-delay').value,
            errorDelay : document.getElementById('error-delay').value,
            keywords : document.getElementById('keywords').value,
            twitterHandle : document.getElementById('twitter-handle').value,
            discordHandle : document.getElementById('discord-handle').value
        }
    }
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

chrome.storage.local.set({setting : set}, function() {

    console.log(`Settings Saved`);
    console.log(`${set}`);
  });
 }  


 document.getElementById('setting-load-btn').onclick = function () {
    chrome.storage.local.get('setting', (data) => {
        this.settings = data.setting.settings
        console.log(this.settings)
        document.getElementById('webhook').value = this.settings.webhook,
        document.getElementById('monitor-delay').value = this.settings.monitorDelay,
        document.getElementById('error-delay').value = this.settings.errorDelay,
        document.getElementById('keywords').value = this.settings.keywords,
        document.getElementById('twitter-handle').value = this.settings.twitterHandle,
        document.getElementById('discord-handle').value = this.settings.discordHandle
        
        
    })
}

 
 }
 
 