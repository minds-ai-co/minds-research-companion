chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "send-to-minds",
      title: "Send selection to Minds",
      contexts: ["selection"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "send-to-minds" || !info.selectionText) return;

  const params = new URLSearchParams({
    text: info.selectionText,
    url: tab?.url || ""
  });

  chrome.tabs.create({
    url: chrome.runtime.getURL(`capture.html?${params.toString()}`)
  });
});
