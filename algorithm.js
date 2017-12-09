// return masked string
function maskify(cc) {

  var lastFour;
  var first;
  var connect;
  var pond = "#"

  first = cc.slice(0, -4);


  if(first.length > 0){

    pond = pond.repeat(first.length);

  }

  lastFour = cc.slice(-4);

 if(first.length === 0){
   return lastFour;

  }
  else {
    connect = pond + lastFour;
    return connect;
  }



}
