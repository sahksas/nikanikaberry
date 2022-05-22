import * as vscode from "vscode";

export const workspacePath = vscode.workspace.workspaceFolders![0].uri.fsPath;

export const countMS = 3 * 60 * 60 * 1000; // 3hours
