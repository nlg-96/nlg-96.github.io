// Chức năng mở và thu nhỏ Sidebar khi nhấn nút
document.getElementById("toggleSidebarBtn").addEventListener("click", function() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  
  // Toggling class 'hidden' trên sidebar và content
  sidebar.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
