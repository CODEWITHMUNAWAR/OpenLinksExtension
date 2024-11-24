document.getElementById("openLinks").addEventListener("click", () => {
    const links = document.getElementById("links").value.split("\n").filter(link => link.trim() !== "");
  
    links.forEach(link => {
      chrome.tabs.create({ url: link });
    });
  });