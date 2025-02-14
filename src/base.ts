import {clipboard, HeadlessCommand, toast} from "@kksh/api/headless";

export class BaseExt extends HeadlessCommand {
    _func: Function;

    constructor(func: (text: string) => string) {
        super();

        this._func = func;
    }

    async load() {
        if (!await clipboard.hasText()) {
            await toast.error("Clipboard is empty");
            return;
        }

        const clipboardText = await clipboard.readText();
        const convertedText = this._func(clipboardText);

        await clipboard.writeText(convertedText);
        await toast.success(`Copied "${convertedText}"`);
        return;
    }
}
