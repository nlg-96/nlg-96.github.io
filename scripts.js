document.querySelectorAll('.sidebar ul li a').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Ngừng hành vi mặc định (không tải lại trang)
  
      // Kiểm tra nếu link không phải là các trang thực tế (chỉ cập nhật nội dung cho menu)
      const page = item.getAttribute('href');
      if (page === 'index.htm' || page === 'tbl4.html' || page === 'tbl6.html' || page === 'irat.html' || page === 'cls.html') {
        document.querySelector('.content').innerHTML = `<h1>${item.innerText}</h1><p>Đây là nội dung của ${item.innerText}</p>`;
      } else {
        window.location.href = page; // Nếu là trang thực tế, điều hướng người dùng đến trang đó
      }
    });
  });
  