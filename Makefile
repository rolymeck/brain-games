install:
	npm install
start:
	npx babel-node src/games/brain-prime.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .