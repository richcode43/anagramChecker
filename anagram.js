function anagram(a, b) {

    len1 = a.length;
    len2 = b.length;

    // let str1;
    let str1 = a.toLowerCase().split('').sort().join('');
    let str2 = b.toLowerCase().split('').sort().join('');

    // return console.log(str1 === str2)

    if (len1 === len2) {
        if (str1 === str2) {
            console.log("True");
            // returns true;
        } else {
            console.log("False");
        }
    } else {
        console.log("Length of both strings does not match");
    }

}
anagram("ritchy", "yhctir");
anagram("india", "nidia");
anagram("hackathon", "achcthoon");




const areAnagram = function(a, b) {
    let one = a.toLowerCase().split('').sort().join('');
    let two = b.toLowerCase().split('').sort().join('');

    console.log(one === two)
}

areAnagram('listen', 'silent');
areAnagram('inidia', 'diaini');