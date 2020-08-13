const numberToReversedDigits = number => {
    const numberArray = Array.from(String(number), Number);
    return numberArray.reverse();
}
module.exports = numberToReversedDigits;
