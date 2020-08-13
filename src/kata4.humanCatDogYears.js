const humanCatDogYears = number => {;
    let catYears = 0;
    let dogYears = 0;
    if (number === 1) {
        catYears = dogYears = 15;
    }
    else if (number === 2) {
        catYears = dogYears = 24;
    }
    else if (number > 2) {
        const numYearsOverTwo = number - 2;
        catYears = 24 + numYearsOverTwo * 4;
        dogYears = 24 + numYearsOverTwo * 5;
    }
    let arrayOfYears = [];
    arrayOfYears.push(number, catYears, dogYears);
    return arrayOfYears;
}
module.exports = humanCatDogYears;
