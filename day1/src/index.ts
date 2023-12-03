import fs from "fs";
import { getCalibrationNumbers, getCombinedNumber, getStrings } from "./work";
const file = fs.readFileSync(__dirname + "\\input.txt", "utf8");
const lines = file.split("\n");

let result = 0;
lines.forEach((line) => {
	const stringArray = getStrings(line);
	const calibrationNumbers = getCalibrationNumbers(stringArray);
	const combinedNumber = getCombinedNumber(calibrationNumbers);
	result += combinedNumber;
});
console.log(result);
