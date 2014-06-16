
console.log('alive, subscribing');
chrome.runtime.onMessage.addListener(function(message, sender, response_cb) {

  var blockedURL = message.url;
  console.log('blocked '+blockedURL);
});

chrome.runtime.sendMessage({message:'content script started'}, function(any) {
});
