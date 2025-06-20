let linkText = document.getElementById("share-link").getAttribute("href");
let showSuccess = document.querySelector(".show-success");
let showFailed = document.querySelector(".show-failed");
const copyBtn = document.querySelector("#copy-btn");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(linkText);
    console.log("Content copied to clipboard!");
    showSuccess.classList.add("visible");
    setTimeout(() => showSuccess.classList.remove("visible"), 2000);
  } catch (error) {
    console.error("Failed to copy", error);
    showFailed.classList.add("visible");
    setTimeout(() => showFailed.classList.remove("visible"), 2000);
  }
});
