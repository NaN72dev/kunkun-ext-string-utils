import { expose } from "@kksh/api/headless";
import { BaseExt } from "./base";

class ReverseExt extends BaseExt {
    constructor() {
        super((text: string) => text.split('').reverse().join(''));
    }
}

expose(new ReverseExt()); 