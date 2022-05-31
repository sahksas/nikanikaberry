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
  // 3hours
  if (diff >= constants.countMS) {
    vscode.window
      .showInformationMessage(
        spoilers[Math.floor(Math.random() * spoilers.length)],
        { modal: true },
        { title: "わかった!!!", isCloseAffordance: true }
      )
      .then((_) => utils.startTimer(constants.countMS));
  } else {
    utils.startTimer(constants.countMS - diff);
  }
}
