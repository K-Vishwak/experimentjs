let promise = new Promise(function (myResolve, myReject) {
    let x = 0;

    if (x === 0) {
        myResolve('Ok');
    } else {
        myReject('Error');
    }
});

promise.then(
    function (value) {
        myDisplay(value);
    },
    function (error) {
        myDisplay(error)
    });

function myDisplay(value) {
    console.log(value);
}