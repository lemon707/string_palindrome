var firstCharacter = function(str) {
    return str.slice(0, 1);
};

var lastCharacter = function(str) {
    return str.slice(-1);
};

var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {

    if(str.length === 0 || str.length === 1) {
        return true;
    }

    if(firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    
    return isPalindrome(middleCharacters(str));
};
