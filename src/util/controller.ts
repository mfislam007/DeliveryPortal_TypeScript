export function doesFileExist(urlToFile: string): boolean {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", urlToFile, false);
  xhr.send();

  return xhr.status !== 404;
}
