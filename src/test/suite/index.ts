import * as path from 'path';
import * as Mocha from 'mocha';
import { glob } from 'glob';

export async function run(): Promise<void> {
	// Create the mocha test
	const mocha = new Mocha({
		ui: 'tdd',
		color: true
	});

	const testsRoot = path.resolve(__dirname, '..');

	let files: string[];
	try {
		files = await glob('**/**.test.js', { cwd: testsRoot });
	} catch (err) {
		console.error('Error while globbing test files:', err);
		throw err;
	}

	// Add files to the test suite
	files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

	try {
		// Run the mocha test
		const failures = await new Promise<number>((resolve) => {
			mocha.run(resolve);
		});
		if (failures > 0) {
			throw new Error(`${failures} tests failed.`);
		}
	} catch (err) {
		console.error(err);
		throw err;
	}
}
