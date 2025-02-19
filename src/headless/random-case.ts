import {expose} from "@kksh/api/headless";
import {BaseExt} from "./base";

class RandomCaseExt extends BaseExt {
	constructor() {
		super(string => {
			return string.split("").map(char => {
				return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
			}).join("");
		});
	}
}

expose(new RandomCaseExt())
