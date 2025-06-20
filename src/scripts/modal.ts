// selectors
const dialog = document.getElementById("dialog") as HTMLDialogElement;
const dialogOpen = document.getElementById("open-dialog");
const dialogClose = document.getElementById("close-dialog");

// event listeners
dialogOpen?.addEventListener("click", openDialog);

dialogClose?.addEventListener("click", closeDialog);

// functions
function openDialog() {
  dialog.showModal();
  dialog.addEventListener("click", closeDialogOnClickOutside);
}

function closeDialog() {
  dialog.close();
  dialog.removeEventListener("click", closeDialogOnClickOutside);
}

function closeDialogOnClickOutside(event: Event) {
  event?.target === dialog && closeDialog();
  console.log(event);
}
