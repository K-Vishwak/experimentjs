let testObj = {
    test: 10,
    bar: function() {
      let x = (() => this);
      return x;
    }
  };

 console.log(testObj.bar()());