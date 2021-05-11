export class Captain {
  static downLoadFile(data: any, type: string): void {
    const blob = new Blob([data], {type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
