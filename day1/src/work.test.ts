import { describe, expect, it } from "vitest";
import { getStrings, getCalibrationNumbers, getCombinedNumber } from "./work";

describe("getStrings", () => {
	it("should return an array of strings", () => {
		const result = getStrings("123");
		expect(result).toBeInstanceOf(Array);
	});
	it("should strip out characters that are not numbers", () => {
		const result = getStrings("1abc2");
		expect(result).toEqual(["1", "2"]);
	});
	it("should parse strings of numbers into number strings", () => {
		const result = getStrings("onetwothreefourfivesixseveneightnine");
		expect(result).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
	});
	it("should split strings properly even if the numbers are in order", () => {
		const result = getStrings("123");
		expect(result).toEqual(["1", "2", "3"]);
	});
	it("should match combined words", () => {
		const result = getStrings("oneighttwonethreeightfiveighteightwoeighthreeseveninenineight");
		expect(result).toEqual(["1", "8", "2", "1", "3", "8", "5", "8", "8", "2", "8", "3", "7", "9", "9", "8"]);
	});
});
describe("getCalibrationNumbers", () => {
	it("should return an array of numbers", () => {
		const result = getCalibrationNumbers(["1", "2"]);
		expect(result).toBeInstanceOf(Array);
	});
	it("should only return the first and last array elements", () => {
		const result = getCalibrationNumbers(["1", "2", "3"]);
		expect(result).toEqual(["1", "3"]);
	});
	it("should return an empty array if the input array is empty", () => {
		const result = getCalibrationNumbers([]);
		expect(result).toEqual([]);
	});
});

describe("getCombinedNumber", () => {
	it("should return a number", () => {
		const result = getCombinedNumber(["1", "2"]);
		expect(result).not.toBeNaN();
	});
	it("should return the combined number", () => {
		const result = getCombinedNumber(["1", "2"]);
		expect(result).toEqual(12);
	});
});

describe("All Together", () => {
	it("should return the correct result", () => {
		const result = getCombinedNumber(getCalibrationNumbers(getStrings("one two three four five six seven eight nine")));
		expect(result).toEqual(19);
	});
	it("should return the correct result from an example", () => {
		const result = getCombinedNumber(getCalibrationNumbers(getStrings("abcone2threexyz")));
		expect(result).toEqual(13);
	});
});
