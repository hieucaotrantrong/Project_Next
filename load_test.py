from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)  # Thời gian chờ giữa các task (1-5 giây)
    
    def on_start(self):
        """Hàm này chạy khi user bắt đầu"""
        # Đăng nhập
        self.client.post("/api/auth/login", json={
            "email": "testuser@example.com",
            "password": "Test@123"
        })
    
    @task(2)
    def view_home(self):
        """Xem trang chủ (trọng số 2)"""
        self.client.get("/home")
    
    @task(1)
    def view_product(self):
        """Xem chi tiết sản phẩm (trọng số 1)"""
        self.client.get("/product/1")  # Giả sử sản phẩm có ID 1
    
    @task(1)
    def add_to_cart(self):
        """Thêm sản phẩm vào giỏ hàng (trọng số 1)"""
        self.client.post("/api/cart/add", json={
            "productId": 1,
            "quantity": 1
        })
    
    @task(0.5)
    def checkout(self):
        """Thanh toán (trọng số 0.5 - ít thực hiện hơn)"""
        self.client.post("/api/order/create", json={
            "name": "Test User",
            "email": "testuser@example.com",
            "phone": "0987654321",
            "address": "123 Test Street"
        })