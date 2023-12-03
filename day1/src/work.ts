const convert = {
	one: "1",
	two: "2",
	three: "3",
	four: "4",
	five: "5",
	six: "6",
	seven: "7",
	eight: "8",
	nine: "9",
};
const combo = {
	oneight: ["1", "8"],
	twone: ["2", "1"],
	threeight: ["3", "8"],
	fiveight: ["5", "8"],
	eightwo: ["8", "2"],
	eighthree: ["8", "3"],
	sevenine: ["7", "9"],
	nineight: ["9", "8"],
};

export const getStrings = (str: string): string[] => {
	const result = str.match(/(?:oneight|twone|threeight|fiveight|eightwo|eighthree|sevenine|nineight|one|two|three|four|five|six|seven|eight|nine|\d)/gi);
	if (result === null) return [];
	let final: string[] = [];
	result.forEach((item) => {
		if (item in convert) {
			final.push(convert[item as keyof typeof convert]);
		} else if (item in combo) {
			final.push(...combo[item as keyof typeof combo]);
		} else {
			final.push(item);
		}
	});
	return final;
};

export const getCalibrationNumbers = (numbers: string[]) => {
	if (numbers.length === 0) return [];
	return [numbers[0], numbers[numbers.length - 1]];
};

export const getCombinedNumber = (numbers: string[]) => {
	const result = parseInt(numbers.join(""));
	return result;
};
