import {clipboard, expose} from "@kksh/api/headless";
import camelCase from "lodash/camelCase";
import {BaseExt} from "./base";
import { LoremIpsum } from "lorem-ipsum";

class CamelCaseExt extends BaseExt {
	constructor() {
		super(()=>{
            const lorem = new LoremIpsum();
            const generated = lorem.generateSentences(1);
            clipboard.writeText(generated);
            return generated;
        });
	}
}

expose(new CamelCaseExt())
