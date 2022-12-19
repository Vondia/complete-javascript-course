// let js = "amazing";
// console.log(40 + 8 + 23 - 10);


// First coding challenge

const testData1 = {Mark: {weight: 78, height: 1.69}, John: {weight: 92, height: 1.95}};
const testData2 = {Mark: {weight: 95, height: 1.88}, John: {weight: 85, height: 1.76}};

const calcBMI1 = function(weight, height)   {
    return weight / height ** 2;
}

const calcBMI2 = function(weight, height)   {
    return weight / (height * height);
}

const markBMI1 = calcBMI1(testData1.Mark.weight, testData1.Mark.height);
const johnBMI1 = calcBMI1(testData1.John.weight, testData1.John.height);
const markBMI2 = calcBMI1(testData2.Mark.weight, testData2.Mark.height);
const johnBMI2 = calcBMI1(testData2.John.weight, testData2.John.height);

const markBMI3 = calcBMI2(testData1.Mark.weight, testData1.Mark.height);
const johnBMI3 = calcBMI2(testData1.John.weight, testData1.John.height);
const markBMI4 = calcBMI2(testData2.Mark.weight, testData2.Mark.height);
const johnBMI4 = calcBMI2(testData2.John.weight, testData2.John.height);

const markHigherBMI = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;
const markHigherBMI3 = markBMI3 > johnBMI3;
const markHigherBMI4 = markBMI4 > johnBMI4;

console.log(`does mark have a higher BMI than john? ${markHigherBMI}`);
console.log(`does mark have a higher BMI than john? pt. 2 ${markHigherBMI2}`);
console.log(`does mark have a higher BMI than john? pt. 3 ${markHigherBMI3}`);
console.log(`does mark have a higher BMI than john? pt. 4 ${markHigherBMI4}`);


const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({
    name: `${first} ${last}`,
    age: 0
})
