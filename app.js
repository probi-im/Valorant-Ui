const leftSidebarToggleRef = document.querySelector(".left-sidebar__header");
const leftSidebarRef = document.querySelector(".left-sidebar");

leftSidebarToggleRef.addEventListener("click", () => {
  document.querySelector(".left-sidebar").classList.toggle("toggle");
});
leftSidebarRef.addEventListener("mouseleave", () => {
  setTimeout(() => {
    document.querySelector(".left-sidebar").classList.remove("toggle");
    clearTimeout();
  }, 500);
});
