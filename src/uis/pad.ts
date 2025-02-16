import { expose, Form,  TemplateUiCommand, ui, clipboard, toast } from "@kksh/api/ui/template";
import { isEmpty } from "lodash";
import padStart from "lodash/padStart";
import padEnd from "lodash/padEnd";

class PaddingExt extends TemplateUiCommand {
    async onFormSubmit(value: Record<string, any>): Promise<void> {
        const func = value.padStart ? padStart : padEnd;

        if (value.length <= 0) {
            await toast.error("Length must be greater than 0");
            return;
        }

        if (isEmpty(value.char)) {
            await toast.error("Padding character(s) must not be empty");
            return;
        }

        const paddedText = func(value.string, value.length, value.char);
        await clipboard.writeText(paddedText);
        await toast.success(`Copied padded text "${paddedText}"`);
        return;
    }

    async load() {
        const clipboardText = await clipboard.readText();

        return ui.render(
            new Form.Form({
                key: "paddingForm",
                fields: [
                    new Form.InputField({
                        key: "string",
                        label: "Text",
                        placeholder: "The text to pad",
                        default: clipboardText,
                        component: "textarea",
                    }),
                    new Form.BooleanField({
                        key: "padStart",
                        label: "Pad start",
                        default: true,
                    }),
                    new Form.NumberField({
                        key: "length",
                        label: "Length - pad if the string length is shorter, truncate if longer",
                        placeholder: "The length to pad to",
                        default: clipboardText.length,
                    }),
                    new Form.InputField({
                        key: "char",
                        label: "Padding characters - pad with these characters",
                        placeholder: "The character to pad with",
                        default: "0",
                    }),
                ],
            })
        );
    }
}

expose(new PaddingExt())
