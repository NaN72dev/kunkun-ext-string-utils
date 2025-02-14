import { expose } from "@kksh/api/headless";
import trimEnd from "lodash/trimEnd";
import { BaseExt } from "./base";

class TrimEndExt extends BaseExt {
    constructor() {
        super(trimEnd);
    }
}

expose(new TrimEndExt()); 