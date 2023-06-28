/**
 * Exemplo 1
 */
var x;
console.log(x === undefined); // exibe "true"
x = 3;

/**
 * Exemplo 2
 */
var myvar = "um valor";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "valor local";
})();