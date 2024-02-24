// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several content scripts can be declared
// and injected into the same or different pages.

console.log(
  "This prints to the console of the page from content.js (injected only if the page url matched)"
);
