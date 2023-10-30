let textArea = document.querySelector("textarea");
if(localStorage.getItem("message")){
    textArea.value= localStorage.getItem("message");
}
function storeData(e) {
    let message = e.target.value;
    localStorage.setItem('message', message);
}
textArea.addEventListener("input", storeData)

function clearAll() {
    localStorage.clear();
    textArea.value = ""
}
// Function to toggle dark theme
let flag = true;
function toggleDarkTheme() {
  document.body.classList.toggle("dark");
  toggle.innerHTML = flag
    ? `
      <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32l-16 16a8 8 0 0 0 11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/>
      </svg>
      `
    : `
      <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/>
      </svg>
      `;
  flag = !flag;
}

// Add event listeners
document.querySelector("#toggle").addEventListener("click", toggleDarkTheme);