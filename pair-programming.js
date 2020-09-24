const transpose = require(`./transpose`);
const wordSearch = (letters, word) => {
    let reverse = word.split('').reverse().join('');
    let output = false;
    if (test(letters, word)) {
        return true;
    }
    if (test(letters, reverse)) {
        return true;
    }
    let flip = transpose(letters);

    if (test(flip, word)) {
        return true;
    }
    if (test(flip, reverse)) {
        return true;
    }
};

const test = (letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch;