/*
Sokcuri's Hide suggestion tweets
https://github.com/sokcuri/Hide-Suggestion-Tweets
Hide suggestion tweet on twitter.com and mobile.twitter.com
*/

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};