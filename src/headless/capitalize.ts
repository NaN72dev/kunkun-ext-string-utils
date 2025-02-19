import {expose} from "@kksh/api/headless";
import capitalize from "lodash/capitalize";
import {BaseExt} from "./base";

class CapitalizeExt extends BaseExt {
    constructor() {
        super(capitalize);
    }
}

expose(new CapitalizeExt());
