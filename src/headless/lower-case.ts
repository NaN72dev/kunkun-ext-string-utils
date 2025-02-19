import { expose } from "@kksh/api/headless";
import lowerCase from "lodash/lowerCase";
import { BaseExt } from "./base";

class LowerCaseExt extends BaseExt {
    constructor() {
        super(lowerCase);
    }
}

expose(new LowerCaseExt()); 