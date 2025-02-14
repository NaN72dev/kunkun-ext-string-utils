import { clipboard, expose, HeadlessCommand, toast } from "@kksh/api/headless"
import _ from "lodash"

class CamelCaseExt extends HeadlessCommand {
	async load() {
		if (!await clipboard.hasText()) return;

		const clipboardText = await clipboard.readText();
		const convertedText = _.camelCase(clipboardText);

		await clipboard.writeText(convertedText);
		await toast.success(`Copied: "${convertedText}"`);
		return
	}
}

expose(new CamelCaseExt())
