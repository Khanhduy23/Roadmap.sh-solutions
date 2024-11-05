// Hàm để đóng popup khi nhấn nút "I like Cookies"
function acceptCookies() {
    document.getElementById("cookiePopup").style.display = "none";
    // Bạn có thể lưu trạng thái vào localStorage để không hiển thị lại popup
    localStorage.setItem("cookiesAccepted", "true");
}

// Kiểm tra xem người dùng đã chấp nhận cookie chưa
window.onload = function() {
    if (localStorage.getItem("cookiesAccepted") !== "true") {
        document.getElementById("cookiePopup").style.display = "flex";
    }
};

// Đóng popup khi nhấn nút đóng
function closePopup() {
    document.getElementById("cookiePopup").style.display = "none";
}
