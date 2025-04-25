function isAnagram(agr1, arg2) {
    if (agr1.length !== arg2.length) return false;

    str1 = agr1.toLowerCase().split("").sort().join("");
    str2 = arg2.toLowerCase().split("").sort().join("");

    return str1 === str2;     
}

// 🔍 Test
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("DebitCard", "BadCredit")); // true (case-insensitive)
