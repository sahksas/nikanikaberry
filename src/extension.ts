import * as vscode from "vscode";
import * as utils from "./modules/utils";

export function activate(context: vscode.ExtensionContext) {
  // console.log("Activate.");

  let start = vscode.commands.registerCommand("nikanikaberry.start", () => {
    utils.startTimer(60000);
  });
  let stop = vscode.commands.registerCommand("nikanikaberry.stop", () => {
    utils.stopTimer();
    vscode.window.showInformationMessage("ストップしました");
  });

  context.subscriptions.push(start);
  context.subscriptions.push(stop);
}

export function deactivate() {
  // console.log("Deactivate.");
}
