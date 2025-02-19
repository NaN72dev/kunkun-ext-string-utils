import { Action, expose, Form, Icon, IconEnum, List, TemplateUiCommand, ui, clipboard, toast } from "@kksh/api/ui/template";
import { isEmpty } from "lodash";
import truncate from "lodash/truncate";

class TruncateExt extends TemplateUiCommand {
    async onFormSubmit(value: Record<string, any>): Promise<void> {
        const options: Parameters<typeof truncate>[1] = { omission: value.omission }

        if (value.maxLength > 0)
            // cannot pass `length: undefined` directly to options, lodash treats it as 0
            options.length = value.maxLength + value.omission.length;

        if (!isEmpty(value.separator))
            // cannot pass `length: undefined` directly to options, lodash treats it as " " (space)
            options.separator = value.separator;

        const truncatedText = truncate(value.string, options);
        await clipboard.writeText(truncatedText);
        toast.success(`Copied "${truncatedText}"`);
    }

    async load() {
        const clipboardText = await clipboard.readText();

        return ui.render(
            new Form.Form({
                key: "truncateForm",
                fields: [
                    new Form.InputField({
                        key: "string",
                        label: "Text",
                        placeholder: "The text to truncate",
                        default: clipboardText,
                        component: "textarea",
                    }),
                    new Form.NumberField({
                        key: "maxLength",
                        label: "Maximum length (not including omission, non-positive will be treated as 30)",
                        placeholder: "Maximum length to be truncated",
                    }),
                    new Form.InputField({
                        key: "separator",
                        label: "Separator (leave blank for none)",
                        placeholder: "The separator (or regex pattern) to truncate to",
                    }),
                    new Form.InputField({
                        key: "omission",
                        label: "Omission (the text to show when the text is truncated)",
                        placeholder: "The string to indicate text is omitted",
                        default: "..."
                    }),
                ],
            })
        );
    }
}

expose(new TruncateExt())