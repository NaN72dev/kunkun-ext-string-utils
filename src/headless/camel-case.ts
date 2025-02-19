import {expose} from "@kksh/api/headless";
import camelCase from "lodash/camelCase";
import {BaseExt} from "./base";

class CamelCaseExt extends BaseExt {
	constructor() {
		super(camelCase);
	}
}

expose(new CamelCaseExt())
