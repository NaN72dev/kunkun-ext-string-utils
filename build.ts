import {watch} from "fs";
import {join} from "path";
import {refreshTemplateWorkerCommand} from "@kksh/api/dev";
import {$} from "bun";

const entrypoints = [
	"./src/headless/camel-case.ts",
	"./src/headless/capitalize.ts",
	"./src/headless/kebab.ts",
	"./src/headless/lower-case.ts",
	"./src/headless/snake-case.ts",
	"./src/headless/start-case.ts",
	"./src/headless/to-upper.ts",
	"./src/headless/trim.ts",
	"./src/headless/trim-end.ts",
	"./src/headless/trim-start.ts",
	"./src/headless/random-case.ts",
	"./src/headless/lorem.ts",
	"./src/headless/reverse.ts",
	"./src/preference/truncate.ts",
	"./src/preference/pad.ts",
	"./src/preference/repeat.ts",
];

async function build() {
	try {
		for (const entrypoint of entrypoints) {
			await $`bun build --minify --target=browser --outdir=./dist ${entrypoint}`
		}
		if (Bun.argv.includes("dev")) {
			await refreshTemplateWorkerCommand()
		}
	} catch (error) {
		console.error(error)
	}
}

const srcDir = join(import.meta.dir, "src")

await build()

if (Bun.argv.includes("dev")) {
	console.log(`Watching ${srcDir} for changes...`)
	watch(srcDir, { recursive: true }, async (event, filename) => {
		await build()
	})
}
