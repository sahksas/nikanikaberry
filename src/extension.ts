import * as vscode from "vscode";
import * as utils from "./modules/utils";

export function activate(context: vscode.ExtensionContext) {
  // console.log("Activate.");

  utils.startTimer(60000);
}

export function deactivate() {
  // console.log("Deactivate.");
}
