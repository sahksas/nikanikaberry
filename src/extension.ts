import * as vscode from "vscode";
import * as utils from "./modules/utils";
import * as constants from "./constants";

export function activate(context: vscode.ExtensionContext) {
  // console.log("Activate.");

  utils.startTimer(constants.countMS);
}

export function deactivate() {
  // console.log("Deactivate.");
}
