import {watch} from "fs";
import {join} from "path";
import {refreshTemplateWorkerCommand} from "@kksh/api/dev";
import {$} from "bun";

const entrypoints = [
	"./src/camel-case.ts",
	"./src/capitalize.ts",
	"./src/kebab.ts",
	"./src/lower-case.ts",
	"./src/snake-case.ts",
	"./src/start-case.ts",
	"./src/to-upper.ts",
	"./src/trim.ts",
	"./src/trim-end.ts",
	"./src/trim-start.ts",
	"./src/random-case.ts",
	"./src/uis/truncate.ts",
	"./src/uis/pad.ts",
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
