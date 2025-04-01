// Chức năng mở và thu nhỏ Sidebar khi nhấn nút
document.getElementById("toggleSidebarBtn").addEventListener("click", function() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");

  // Toggling class 'hidden' trên sidebar và content
  sidebar.classList.toggle("hidden");
  content.classList.toggle("hidden");
});

// Chức năng toggle các mục con khi click vào mục chính
const menuItems = document.querySelectorAll('.toggle-menu > a');

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    const submenu = this.nextElementSibling; // lấy menu con tương ứng

    // Đóng tất cả các menu con khác
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(submenuItem => {
      if (submenuItem !== submenu) {
        submenuItem.style.display = 'none'; // Ẩn các menu con khác
      }
    });

    // Toggle hiển thị menu con của mục vừa bấm
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
