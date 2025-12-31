const API_KEY = import.meta.env.VITE_DRIVE_API_KEY;

export async function fetchFiles(folderId) {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType)&key=${API_KEY}`
  );
  const data = await res.json();
  return data.files || [];
}
