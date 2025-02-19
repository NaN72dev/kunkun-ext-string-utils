import { expose } from "@kksh/api/headless";
import snakeCase from "lodash/snakeCase";
import { BaseExt } from "./base";

class SnakeCaseExt extends BaseExt {
    constructor() {
        super(snakeCase);
    }
}

expose(new SnakeCaseExt()); 