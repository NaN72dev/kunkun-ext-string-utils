import { expose } from "@kksh/api/headless";
import trimStart from "lodash/trimStart";
import { BaseExt } from "./base";

class TrimStartExt extends BaseExt {
    constructor() {
        super(trimStart);
    }
}

expose(new TrimStartExt()); 