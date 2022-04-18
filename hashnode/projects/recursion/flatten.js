function capitalizeFirst (array) {
    if (array.length === 1) {
            return [array[0][0].toUpperCase() + array[0].substr(1)];
        }
        const newArr = capitalizeFirst(array.slice(0,-1));
        newArr.push(array[array.length - 1][0].toUpperCase() + array[array.length - 1].substr(1));
        return newArr;
    }
    
  console.log(capitalizeFirst(['car','taco','banana']));