/*

Parses README.md into a JSON data structure for use in other projects.

```json
{
  tags: [
    "components and libraries",
    // ...
  ],
  resources: [
    {
      "name": "`@sveltejs/svelte-virtual-list`",
      "url": "https://github.com/sveltejs/svelte-virtual-list",
      "description": "A virtual list component for Svelte apps",
      "tags": [
        "components and libraries",
        "layout and structure"
      ]
    },
    // ...
  ]
}
```

Usage:

```bash
npm run parse
# or
node parse.js some_filename.json SOME_README.md
```

The motivating use case is to deprecate `awesome-svelte-resources`
in favor of an official Svelte resources website.
https://github.com/ryanatkn/awesome-svelte-resources/issues/18

Additional parsing and transformation will be done downstream -
the purpose of this script is to just get everything in a programmable form.

*/

const fs = require('fs');

const args = process.argv.slice(2);
const outputPath = args[0];
const inputPath = args[1] || 'README.md';

const omittedTags = ['contents', 'license'];

const parseReadme = readme => {
	const lines = readme.split('\n');

	// result vars
	const resources = [];
	const tags = [];

	// parsing state vars
	const currentTags = [];
	let skipThisTag = false;

	// open a tag at some depth, first closing any tags at equal or greater depth
	// depth is 0 for top-level tags
	const beginTag = (tag, depth) => {
		tags.push(tag);
		while (currentTags.length > depth) {
			currentTags.pop();
		}
		currentTags.push(tag);
	};

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];

		// begin tag
		const tagMatches = line.match(/^(#+) (.+)/);
		if (tagMatches) {
			const tag = tagMatches[2];
			const depth = tagMatches[1].length - 2; // `- 2` because `##` is the top level
			skipThisTag = depth < 0 || omittedTags.includes(tag);
			if (skipThisTag) continue;
			beginTag(tag, depth);
			continue;
		}

		if (skipThisTag) continue; // line is a skipped tag

		// resource
		if (isResource(line)) {
			const resourceLines = [line];
			// resources are only 1 or 2 lines right now, so this only handles that case
			const nextLine = lines[i + 1];
			if (nextLine && nextLine.startsWith('  ') && !isResource(nextLine)) {
				resourceLines.push(nextLine);
				i++;
			}
			resources.push(createResource(resourceLines, currentTags));
			continue;
		}
	}

	return {tags, resources};
};

const isResource = line => /^\W*-/.test(line);

const createResource = (lines, currentTags) => {
	if (lines.length > 2) {
		throw Error(`Resources are expected to have max 2 lines - ${line1}`);
	}
	const [line1, line2] = lines;
	const [_, name, url] = line1.match(/\[(.+)\]\((.+)\)/);
	return {
		name,
		url,
		description: line2 && line2.trim(),
		tags: currentTags.slice(),
	};
};

const main = () => {
	const readme = fs.readFileSync(inputPath, 'utf8');
	const parsed = parseReadme(readme);
	console.log(
		`parsed ${parsed.resources.length} resources and ${parsed.tags.length} tags`,
	);
	const outputString = JSON.stringify(parsed, null, 2);
	fs.writeFileSync(outputPath, outputString, 'utf8');
	console.log(`wrote to ${outputPath}`);
	console.log('all done :)');
};

main();
