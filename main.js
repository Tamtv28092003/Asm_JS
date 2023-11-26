
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var myIndex = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// add
// <!-- Đặt đoạn mã JavaScript sau đoạn mã HTML form -->

    function addToCart() {
        // Lấy thông tin từ form
        var size = document.querySelector('.content-form1 button.selected').innerText;
        var quantity = document.querySelector('.content-form2 input').value;
        var price = 50000; // Giá cứng là 50.000 đ

        // Tính giá theo số lượng
        var totalPrice = quantity * price;

        // Tạo đối tượng chứa thông tin sản phẩm
        var product = {
            size: size,
            quantity: quantity,
            price: totalPrice
        };

        // Lấy danh sách sản phẩm từ localStorage (nếu có)
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Thêm sản phẩm mới vào danh sách
        cart.push(product);

        // Lưu danh sách sản phẩm vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Chuyển hướng đến trang cart.html
        window.location.href = 'cart.html';
    }

    // Thêm sự kiện khi form được submit
    document.getElementById('orderForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn form submit mặc định
        addToCart(); // Gọi hàm thêm vào giỏ hàng
    });

