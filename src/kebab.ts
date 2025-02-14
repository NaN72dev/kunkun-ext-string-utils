import {expose} from "@kksh/api/headless";
import kebabCase from "lodash/kebabCase";
import {BaseExt} from "./base";

class KebabExt extends BaseExt {
    constructor() {
        super(kebabCase);
    }
}

expose(new KebabExt());
