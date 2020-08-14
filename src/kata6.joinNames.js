const joinNames = namesObj => {;
    let nameString = "";
    for (let i = 0; i < namesObj.length - 1; i++){
        if (i != namesObj.length -2) {
            nameString += (namesObj[i].name + ", ");}
        else {
            nameString += (namesObj[i].name + " & ")
        }
    }
    nameString += (namesObj[namesObj.length - 1].name);
    return nameString;
}
module.exports = joinNames;
