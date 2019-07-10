install:
	npm install
startG:
	npx babel-node src/bin/brain-games.js
startE:
	npx babel-node src/bin/brain-even.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .