function square_equation() {
  var a = document.square.square_a.value;
  var b = document.square.square_b.value;
  var c = document.square.square_c.value;
  var sol = document.getElementById("square_sol");

  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
   var result = "x1 = (";
    result += - b / ( 2 * a ) + ", " + Math.sqrt( -d ) / ( 2 * a ) + "), x2 = (" + (- b / ( 2 * a)) + ", " + (- Math.sqrt( -d ) / ( 2 * a )) +  ")."
  
  } else {
      if ( d == 0 ) {
        result = "x1 = x2 = " + (-b / ( 2 * a )) + "."

      } else {
        result = "x1 = " + (-b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a )) + ", x2 = " + (-b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a )) +  ".";
      }
  }
    alert(result)
}