function caesarCipher(s, k) {
    // Write your code here
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let encryptedString=""
for(let i of s){
    let lowerLetterIndex=lowerCase.indexOf(i);
    let upperLetterIndex=upperCase.indexOf(i);
    if(lowerLetterIndex != -1){
        encryptedString+= lowerCase[(lowerLetterIndex+k)%26];
    }else if(upperLetterIndex!=-1){
        encryptedString+=upperCase[(upperLetterIndex+k)%26]
        
    }else{
        encryptedString+=i;
    }
}
return encryptedString;
}
