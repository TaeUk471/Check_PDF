export function filterUnicodeWords(input: string, filterList: string[]): string[] {
  const decodedStr = decodeUnicode(input);
  return filterList.filter(word => decodedStr.includes(word));
}

function decodeUnicode(str: string): string {
  return str.replace(/\\u([\dA-Fa-f]{4})/g, (_, grp) => {
    return String.fromCharCode(parseInt(grp, 16));
  });
}
