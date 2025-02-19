import { expose } from "@kksh/api/headless";
import startCase from "lodash/startCase";
import { BaseExt } from "./base";

class StartCaseExt extends BaseExt {
    constructor() {
        super(startCase);
    }
}

expose(new StartCaseExt()); 