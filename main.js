function pigLatin(str) {
    str.toLowerCase
    // converts string to toLowerCase

    // array of vowels
    const vowels = ["a","e","i","o","u"]
    // vowelIndex to 0
    let vowelIndex = 0;

    if (vowels.include(str[0])) {

        // if the first letter is a vowel
        return str + "way"
    } else {
        //If the first letter isn't a vowel
        for(let char of str){
            // loop until the vowel is found
            if(vowels.include(char)) {
                // stores the index at which the vowel exists
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        // compose final string

        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
}