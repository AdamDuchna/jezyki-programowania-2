let ciag="Ala ma kota";
const slowo=(function(string){
    var str = string.split(" ");
    var maxlen = 0;
    var maxword = null;
    for (var i = 0; i < str.length ; i++) {
        if ( maxlen < str[i].length) 
        {
            maxlen = str[i].length;
            maxword = str[i];
        }
        }
    return maxword
  })(ciag);
  console.log(slowo);