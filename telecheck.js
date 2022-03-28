function telephoneCheck(str) {
    //regex to check for correct format
    const regPhoneNoBrackets = /^1?[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}/
    const regPhoneBrackets = /^1?[- ]?\(\d{3}\)[- ]?\d{3}[- ]?\d{4}/
    const regNum = /\d/
    const strArr = str.split('');
    const removedArr = [];
  
    let number = false;
  
    //create an array with only numbers
    for (let i in strArr){ 
      if (regNum.test(strArr[i])){
        removedArr.push(strArr[i]);
      }
    }
  
    //if number starts with 1 and the length is correct
    if (removedArr[0] === '1' && removedArr.length === 11 || removedArr.length === 10){
      //do regex check for formats
      if (regPhoneNoBrackets.test(str) || regPhoneBrackets.test(str)){
        number = true;
      }
    }
  
    return number;
  }
  
  telephoneCheck("555-555-5555");