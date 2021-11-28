export const createAndDownloadFile = (
  element: HTMLElement,
  content: string,
  condition: any,
  filename?: string
): void => {
  if (!condition) {
    alert("Anything to download");
    return;
  }

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(content)
  );
  element.setAttribute("download", filename ? filename : `${Date.now()}`);
};
