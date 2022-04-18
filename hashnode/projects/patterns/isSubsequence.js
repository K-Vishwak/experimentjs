function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 > len2) {
        return false;
    }
    let i = 0;
    let j = 0;
    while(j <= len2) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
        }
        return false;
  }
  
  console.log(isSubsequence('hello', 'hello world'));