import { clipboard, expose, HeadlessCommand, toast } from "@kksh/api/headless"
import camelCase from "lodash/camelcase"

class CamelCaseExt extends HeadlessCommand {
	async load() {
		if (!await clipboard.hasText()) return;

		const clipboardText = await clipboard.readText();
		const convertedText = camelCase(clipboardText);

		await clipboard.writeText(convertedText);
		await toast.success(`Copied: "${convertedText}"`);
		return
	}
}

expose(new CamelCaseExt())
