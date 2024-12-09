}

function usweb() {
  const website = document.getElementById("thesite").value;
  const url = new URL(website, window.location.origin);

  // Open the website in a new window or tab
  window.open(url.toString(), '_blank');
}
