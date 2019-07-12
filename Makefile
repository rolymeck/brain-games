install:
	npm install
startG:
	npx babel-node src/games/brain-gcd.js
startE:
	npx babel-node src/games/brain-even.js
startC:
	npx babel-node src/games/brain-calc.js
startP:
	npx babel-node src/games/brain-progression.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .