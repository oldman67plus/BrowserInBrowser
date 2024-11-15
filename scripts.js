function usweb() {
  const thevalue = document.getElementById("thesite").value;

  // Basic URL validation and sanitization
  if (!isValidURL(thevalue)) {
    alert("Please enter a valid URL.");
    return;
  }

  // Create a new iframe element
  const iframe = document.createElement('iframe');
  iframe.src = thevalue;
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  // Append the iframe to the document body
  document.body.appendChild(iframe);
}

function isValidURL(urlString) {
  var urlPattern = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(:[0-9]+)?(\/.*)?$/;
  return urlPattern.test(urlString);
}
