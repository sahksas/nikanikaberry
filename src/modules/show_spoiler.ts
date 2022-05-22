import * as vscode from "vscode";
import { spoilers } from "./spoilers";
import * as utils from "./utils";
import * as constants from "../constants";

export function showSpoiler() {
  utils.stopTimer();
  const lastCommitDateTime = utils.showFileStats(
    constants.workspacePath + "/.git/COMMIT_EDITMSG"
  )["mtime"];
  const now = new Date();
  const diff = now.getTime() - lastCommitDateTime.getTime();
  // 1hour
  if (diff >= 60 * 60 * 1000) {
    vscode.window
      .showInformationMessage(
        spoilers[Math.floor(Math.random() * spoilers.length)],
        { modal: true },
        { title: "わかった!!!", isCloseAffordance: true }
      )
      .then((_) => utils.startTimer(60000));
  } else {
    utils.startTimer(60000 - diff);
  }
}
