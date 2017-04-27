document.getElementById("LexingtonKY").addEventListener("click", function() {
  googleMapChange('LEXKY');
}, false);

document.getElementById("LouisvilleKY").addEventListener("click", function() {
  googleMapChange('LOUKY');
}, false);

function googleMapChange(inputParam)
{
  if(inputParam == 'LEXKY')
  {
    console.log("LEXINGTON KY");
    document.getElementById("KY_Lexington").style.display = 'block';
    document.getElementById("KY_Louisville").style.display = 'none';
  }
  else if(inputParam == 'LOUKY')
  {
    console.log("LOUISVILLE KY");
    document.getElementById("KY_Lexington").style.display = 'none';
    document.getElementById("KY_Louisville").style.display = 'block';
  }
}
