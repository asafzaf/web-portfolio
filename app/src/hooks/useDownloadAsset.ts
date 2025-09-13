export const useDownloadAsset = (relativePath: string, filename?: string) => {
  const base = import.meta.env.BASE_URL;

  const download = () => {
    const link = document.createElement("a");
    link.href = base + relativePath;
    link.download = filename || relativePath.split("/").pop() || "Asaf Zafrir - CV";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return download;
};
