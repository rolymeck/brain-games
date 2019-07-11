install:
	npm install
startG:
	npx babel-node src/games/brain-games.js
startE:
	npx babel-node src/games/brain-even.js
startC:
	npx babel-node src/games/brain-calc.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .