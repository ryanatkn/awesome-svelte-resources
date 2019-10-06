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
      "repo": "https://github.com/sveltejs/svelte-virtual-list",
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

TODO consider these changes
- add an npm field if name is in `backticks`
- change "repo" field to "url" if `<sub>` isn't detected

*/

const fs = require('fs');

const args = process.argv.slice(2);
const outputPath = args[0];
const inputPath = args[1] || 'README.md';

const omittedTags = ['contents', 'license'];

const BEGIN_TAG_MATCHER = /^(#+) (.+)/;
const BEGIN_RESOURCE_MATCHER = /^\W*-/;

const parseReadme = readme => {
	const lines = readme.split('\n');

	const resources = [];
	const tags = [];
	const currentTags = [];
	let skipThisTag = false;

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
		const tagMatches = line.match(BEGIN_TAG_MATCHER);
		if (tagMatches) {
			const tag = tagMatches[2];
			const depth = tagMatches[1].length - 2; // `- 2` because `##` is the top level
			skipThisTag = depth < 0 || omittedTags.includes(tag);
			if (skipThisTag) continue;
			beginTag(tag, depth);
			continue;
		}

		if (skipThisTag) continue;

		// resource
		const isResource = BEGIN_RESOURCE_MATCHER.test(line);
		if (isResource) {
			const resourceLines = [line];
			// resources are only 1 or 2 lines right now, so this only handles that case
			const nextLine = lines[i + 1];
			if (
				nextLine &&
				nextLine.startsWith('  ') &&
				!BEGIN_RESOURCE_MATCHER.test(nextLine)
			) {
				resourceLines.push(nextLine);
				i++;
			}
			resources.push(createResource(resourceLines, currentTags));
			continue;
		}
	}

	return {tags, resources};
};

const createResource = (lines, currentTags) => {
	const [line1, line2] = lines;
	if (lines[2]) {
		throw Error(`Resources are expected to have max 2 lines - ${line1}`);
	}
	const matches = line1.match(/\[(.+)\]\((.+)\)/);
	const description = line2 && line2.trim();
	return {
		name: matches[1],
		repo: matches[2],
		description,
		tags: currentTags.slice(),
	};
};

const transform = parsed => parsed;

const main = () => {
	const readme = fs.readFileSync(inputPath, 'utf8');
	const parsed = parseReadme(readme);
	const data = transform(parsed);
	console.log(`parsed ${data.resources.length} resources`);
	const outputData = JSON.stringify(data, null, 2);
	fs.writeFileSync(outputPath, outputData, 'utf8');
	console.log(`wrote to ${outputPath}`);
	console.log('all done');
};

main();
