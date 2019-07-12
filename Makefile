install:
	npm install
start: 
	rm -rf dist
	npm run build
	npm publish --dry-run
	npm link
run:
	npx babel-node src/games/brain-prime.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .