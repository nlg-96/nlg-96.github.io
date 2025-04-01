// Đảm bảo khi click vào nút toggle sẽ thu/ mở sidebar
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// Xử lý thu/ mở sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Lắng nghe các sự kiện click vào các mục dropdown trong sidebar
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        // Ngừng sự kiện truyền lên các phần tử cha
        event.stopPropagation();

        // Đóng tất cả các dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('open');
            }
        });

        // Toggle dropdown hiện tại
        dropdown.classList.toggle('open');
    });
});

// Đảm bảo khi click ngoài sidebar, các dropdown sẽ đóng lại
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
    });
});

// Hàm tải nội dung vào phần content mà không reload toàn bộ trang
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Chèn nội dung vào phần content
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Có lỗi khi tải nội dung:', error);
        });
}
