import {expose} from "@kksh/api/headless";
import camelCase from "lodash/camelcase";
import {BaseExt} from "./base";

class CamelCaseExt extends BaseExt {
	constructor() {
		super(camelCase);
	}
}

expose(new CamelCaseExt())
