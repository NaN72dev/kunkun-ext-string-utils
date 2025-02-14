import { expose } from "@kksh/api/headless";
import trim from "lodash/trim";
import { BaseExt } from "./base";

class TrimExt extends BaseExt {
    constructor() {
        super(trim);
    }
}

expose(new TrimExt()); 