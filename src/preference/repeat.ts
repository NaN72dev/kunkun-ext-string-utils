import { expose, Form,  TemplateUiCommand, ui, clipboard, toast } from "@kksh/api/ui/template";

class PaddingExt extends TemplateUiCommand {
    async onFormSubmit(value: Record<string, any>): Promise<void> {
        value.separator = value.separator || "";
        const repeatedText = new Array(value.count).fill(value.input).join(value.separator);
        await clipboard.writeText(repeatedText);
        await toast.success(`Copied repeated text "${repeatedText}"`);
    }

    async load() {
        const clipboardText = await clipboard.readText();

        return ui.render(
            new Form.Form({
                key: "loremForm",
                fields: [
                    new Form.InputField({
                        key: "input",
                        label: "Input",
                        placeholder: "The text to repeat",
                        default: clipboardText,
                    }),
                    new Form.NumberField({
                        key: "count",
                        label: "Count",
                        placeholder: "The number of times to repeat the text",
                        default: 1,
                    }),
                    new Form.InputField({
                        key: "separator",
                        label: "Separator (default space)",
                        placeholder: "The separator between the repeated text",
                        default: " ",
                    }),
                ]
            })
        );
    }
}

expose(new PaddingExt())
