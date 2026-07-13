const params = new URLSearchParams(location.search);
const text = params.get("text") || "";
const sourceUrl = params.get("url") || "";

document.querySelector("#selection").textContent = text;

document.querySelector("#copy").addEventListener("click", async () => {
  const source = sourceUrl ? `\n\nSource: ${sourceUrl}` : "";
  await navigator.clipboard.writeText(`${text}${source}`);
  document.querySelector("#status").textContent = "Copied. Paste it into a Minds chat or panel.";
  window.open("https://getminds.ai/", "_blank", "noopener,noreferrer");
});
