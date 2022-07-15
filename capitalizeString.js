const capitalizeString = (str) => {
    let strArr;
    let newStr;
    const firstChar = str[0].toUpperCase();
    str = str.toLowerCase();
    strArr = str.split('')
    strArr.shift();
    strArr.unshift(firstChar);
    newStr = strArr.join('');
    return newStr;
}

module.exports = capitalizeString;