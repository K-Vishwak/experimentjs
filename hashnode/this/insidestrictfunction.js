function thisInsideFunction() {
    'use strict'; // see strict mode
    return this;
  }
  
 console.log(thisInsideFunction());