import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import random
import time

class AuthTest(unittest.TestCase):
    def setUp(self):
        print("\n----- Bắt đầu test -----")
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.base_url = "http://localhost:5173"
        print("Đã khởi tạo trình duyệt Chrome")
        
    def test_signup_invalid_cases(self):
        driver = self.driver
        print("\n----- Bắt đầu test đăng ký với dữ liệu không hợp lệ -----")
        
        # Mở trang đăng ký
        print(f"Đang mở trang đăng ký: {self.base_url}/signup")
        driver.get(f"{self.base_url}/signup")
        time.sleep(2)
        
        # Test case 1: Email không hợp lệ (thiếu @)
        print("\nTest case 1: Email không hợp lệ (thiếu @)")
        driver.find_element(By.NAME, "name").send_keys("Test")
        driver.find_element(By.NAME, "lname").send_keys("User")
        driver.find_element(By.NAME, "email").send_keys("testuser.example.com")
        driver.find_element(By.NAME, "password").send_keys("Test@123")
        driver.find_element(By.NAME, "cpassword").send_keys("Test@123")
        time.sleep(1)
        
        # Submit form
        driver.find_element(By.XPATH, "//button[@type='submit']").click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            error_message = driver.find_element(By.CLASS_NAME, "bg-red-100")
            print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
        except:
            print("✗ Không hiển thị thông báo lỗi cho email không hợp lệ")
            
        # Xóa form để test case tiếp theo
        driver.find_element(By.NAME, "name").clear()
        driver.find_element(By.NAME, "lname").clear()
        driver.find_element(By.NAME, "email").clear()
        driver.find_element(By.NAME, "password").clear()
        driver.find_element(By.NAME, "cpassword").clear()
        
        # Test case 2: Mật khẩu quá ngắn
        print("\nTest case 2: Mật khẩu quá ngắn")
        driver.find_element(By.NAME, "name").send_keys("Test")
        driver.find_element(By.NAME, "lname").send_keys("User")
        driver.find_element(By.NAME, "email").send_keys("testuser@example.com")
        driver.find_element(By.NAME, "password").send_keys("123")
        driver.find_element(By.NAME, "cpassword").send_keys("123")
        time.sleep(1)
        
        # Submit form
        driver.find_element(By.XPATH, "//button[@type='submit']").click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            error_message = driver.find_element(By.CLASS_NAME, "bg-red-100")
            print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
        except:
            print("✗ Không hiển thị thông báo lỗi cho mật khẩu quá ngắn")
            
        # Xóa form để test case tiếp theo
        driver.find_element(By.NAME, "name").clear()
        driver.find_element(By.NAME, "lname").clear()
        driver.find_element(By.NAME, "email").clear()
        driver.find_element(By.NAME, "password").clear()
        driver.find_element(By.NAME, "cpassword").clear()
        
        # Test case 3: Mật khẩu không khớp
        print("\nTest case 3: Mật khẩu không khớp")
        driver.find_element(By.NAME, "name").send_keys("Test")
        driver.find_element(By.NAME, "lname").send_keys("User")
        driver.find_element(By.NAME, "email").send_keys("testuser@example.com")
        driver.find_element(By.NAME, "password").send_keys("Test@123")
        driver.find_element(By.NAME, "cpassword").send_keys("Test@456")
        time.sleep(1)
        
        # Submit form
        driver.find_element(By.XPATH, "//button[@type='submit']").click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            error_message = driver.find_element(By.CLASS_NAME, "bg-red-100")
            print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
        except:
            print("✗ Không hiển thị thông báo lỗi cho mật khẩu không khớp")
    
    def test_login_invalid_cases(self):
        driver = self.driver
        print("\n----- Bắt đầu test đăng nhập với dữ liệu không hợp lệ -----")
        
        # Mở trang đăng nhập
        print(f"Đang mở trang đăng nhập: {self.base_url}/login")
        driver.get(f"{self.base_url}/login")
        time.sleep(2)
        
        # Test case 1: Email không tồn tại
        print("\nTest case 1: Email không tồn tại")
        driver.find_element(By.XPATH, "//input[@type='text']").send_keys("nonexistent@example.com")
        driver.find_element(By.XPATH, "//input[@type='password']").send_keys("Test@123")
        time.sleep(1)
        
        # Click nút đăng nhập
        driver.find_element(By.XPATH, "//button[@type='button']").click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            # Tùy thuộc vào cách hiển thị lỗi của ứng dụng
            # Có thể là alert hoặc element trên trang
            alert = driver.switch_to.alert
            print(f"✓ Hiển thị lỗi đúng (alert): '{alert.text}'")
            alert.accept()
        except:
            try:
                error_message = driver.find_element(By.CLASS_NAME, "text-red-500")
                print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
            except:
                print("✗ Không hiển thị thông báo lỗi cho email không tồn tại")
        
        # Xóa form để test case tiếp theo
        driver.find_element(By.XPATH, "//input[@type='text']").clear()
        driver.find_element(By.XPATH, "//input[@type='password']").clear()
        
        # Test case 2: Mật khẩu sai
        print("\nTest case 2: Mật khẩu sai")
        # Sử dụng một tài khoản đã tồn tại
        driver.find_element(By.XPATH, "//input[@type='text']").send_keys("testuser@example.com")
        driver.find_element(By.XPATH, "//input[@type='password']").send_keys("WrongPassword")
        time.sleep(1)
        
        # Click nút đăng nhập
        driver.find_element(By.XPATH, "//button[@type='button']").click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            alert = driver.switch_to.alert
            print(f"✓ Hiển thị lỗi đúng (alert): '{alert.text}'")
            alert.accept()
        except:
            try:
                error_message = driver.find_element(By.CLASS_NAME, "text-red-500")
                print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
            except:
                print("✗ Không hiển thị thông báo lỗi cho mật khẩu sai")
    
    def test_signup_and_login_success(self):
        driver = self.driver
        
        # Tạo dữ liệu test ngẫu nhiên
        random_num = random.randint(1000, 9999)
        test_first_name = "Test"
        test_last_name = "User"
        test_email = f"testuser{random_num}@example.com"
        test_password = "Test@123"
        print(f"Dữ liệu test: Email={test_email}, Password={test_password}")
        
        # 1. Test đăng ký thành công
        print("\n----- Bắt đầu test đăng ký thành công -----")
        print(f"Đang mở trang đăng ký: {self.base_url}/signup")
        driver.get(f"{self.base_url}/signup")
        time.sleep(2)  # Đợi để xem trang
        
        print("Đang điền form đăng ký...")
        driver.find_element(By.NAME, "name").send_keys(test_first_name)
        time.sleep(0.5)
        driver.find_element(By.NAME, "lname").send_keys(test_last_name)
        time.sleep(0.5)
        driver.find_element(By.NAME, "email").send_keys(test_email)
        time.sleep(0.5)
        driver.find_element(By.NAME, "password").send_keys(test_password)
        time.sleep(0.5)
        driver.find_element(By.NAME, "cpassword").send_keys(test_password)
        time.sleep(1)
        
        print("Đang submit form đăng ký...")
        driver.find_element(By.XPATH, "//button[@type='submit']").click()
        
        print("Đang kiểm tra thông báo thành công...")
        success_message = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "bg-green-100"))
        )
        self.assertIn("Đăng ký thành công", success_message.text)
        print(f"✓ Đăng ký thành công! Thông báo: '{success_message.text}'")
        
        print("Đợi chuyển hướng tự động...")
        time.sleep(3)
        
        # 2. Test đăng nhập thành công
        print("\n----- Bắt đầu test đăng nhập thành công -----")
        if driver.current_url != f"{self.base_url}/login":
            print(f"Đang mở trang đăng nhập: {self.base_url}/login")
            driver.get(f"{self.base_url}/login")
        else:
            print("Đã chuyển hướng đến trang đăng nhập")
        time.sleep(2)  # Đợi để xem trang
        
        print("Đang điền form đăng nhập...")
        driver.find_element(By.XPATH, "//input[@type='text']").send_keys(test_email)
        time.sleep(0.5)
        driver.find_element(By.XPATH, "//input[@type='password']").send_keys(test_password)
        time.sleep(1)
        
        print("Đang click nút đăng nhập...")
        driver.find_element(By.XPATH, "//button[@type='button']").click()
        
        print("Đang kiểm tra chuyển hướng đến trang home...")
        WebDriverWait(driver, 10).until(
            lambda driver: driver.current_url == f"{self.base_url}/home"
        )
        print(f"✓ Đăng nhập thành công! URL hiện tại: {driver.current_url}")
        
        print("Đang kiểm tra token trong localStorage...")
        token = driver.execute_script("return localStorage.getItem('token');")
        self.assertIsNotNone(token)
        print(f"✓ Token đã được lưu trong localStorage: {token[:10]}...")
        
        # Đợi để xem trang home
        print("\nĐã đăng nhập thành công! Đợi 5 giây để xem trang home...")
        time.sleep(5)
        
    def tearDown(self):
        print("\n----- Kết thúc test -----")
        self.driver.quit()
        print("Đã đóng trình duyệt")

if __name__ == "__main__":
    unittest.main(verbosity=2)

