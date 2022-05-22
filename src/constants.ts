import * as vscode from "vscode";

export const workspacePath = vscode.workspace.workspaceFolders![0].uri.fsPath;
