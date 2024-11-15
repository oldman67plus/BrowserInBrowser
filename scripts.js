function uwebsite() {
    document['write']('<style>*{margin:0;border:0;}</style><iframe src=\'https://www.google.com\' height=\'100%\' width=\'100%\'></iframe>');

}

function usweb() {
    var thevalue = document.getElementById("thesite").value;
  var const fixedUrl = 'https://'+thevalue+'/';
  document.write('<style>*{margin:0;border:0;}</style><iframe src=\'+fixedUrl+\' height=\'100%\' width=\'100%\'></iframe>');
}
