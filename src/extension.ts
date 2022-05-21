import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Activate.');

	let disposable = vscode.commands.registerCommand('nikanikaberry.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from NikaNikaBerry!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	console.log('Deactivate.');
}
