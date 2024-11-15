function uwebsite() {
    document['write']('<style>*{margin:0;border:0;}</style><iframe src=\'https://www.google.com\' height=\'100%\' width=\'100%\'></iframe>');

}

function usweb() {
  var thevalue = document.getElementById("thesite").value;

  // Create a new iframe element
  var iframe = document.createElement('iframe');
  iframe.src = thevalue;
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  // Add an event listener to prevent navigation
  iframe.addEventListener('load', function() {
    iframe.contentWindow.addEventListener('beforeunload', function(e) {
      e.preventDefault();
      e.returnValue = '';
    });
  });

  // Append the iframe to the document body
  document.body.appendChild(iframe);
}
