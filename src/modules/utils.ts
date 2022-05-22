import * as fs from "fs";
import { showSpoiler } from "./show_spoiler";

let counter: NodeJS.Timeout;

export function startTimer(ms: number, func = showSpoiler) {
  counter = setInterval(func, ms);
}
export function stopTimer() {
  clearInterval(counter);
}
export function resetTimer(ms: number) {
  stopTimer();
  startTimer(ms);
}

export function showFileStats(filePath: string) {
  const { ctime, mtime, atime } = fs.statSync(filePath);
  return {
    ctime: ctime,
    mtime: mtime,
    atime: atime,
  };
}
