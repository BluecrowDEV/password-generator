export const copyToClipboard = (toCopy: any): void => {
  if (!toCopy) {
    alert('Anything to copy');
    return;
  }
  navigator.clipboard.writeText(toCopy);
  alert('Copied to clipboard');
  return;
};
