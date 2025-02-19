import { expose } from "@kksh/api/headless";
import toUpper from "lodash/toUpper";
import { BaseExt } from "./base";

class ToUpperExt extends BaseExt {
    constructor() {
        super(toUpper);
    }
}

expose(new ToUpperExt()); 