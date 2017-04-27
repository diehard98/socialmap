document.getElementById("LexingtonKY").addEventListener("click", function() {
  googleMapChange('LEXKY');
}, false);

document.getElementById("LouisvilleKY").addEventListener("click", function() {
  googleMapChange('LOUKY');
}, false);

function googleMapChange(inputParam)
{
  // Get google iframe first
  var googleMap_iframe = document.getElementById('goolemapiframe');

  // Change src of google iframe
  if(inputParam == 'LEXKY')
  {
    googleMap_iframe.src = "https://www.google.com/maps/d/u/0/embed?mid=121X_RaowULLQdA8ySvHQuDG5Tp8";
  }
  else if(inputParam == 'LOUKY')
  {
    googleMap_iframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1p0YKhBNY-DzVSqy2PFc-_nh4WQ8";
  }
}
