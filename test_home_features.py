import unittest
import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

class LoginPage:
    """Page Object cho trang đăng nhập"""
    
    def __init__(self, driver):
        self.driver = driver
        
    def login(self, email, password):
        """Đăng nhập vào hệ thống"""
        # Điền email
        email_input = self.driver.find_element(By.XPATH, "//input[@type='text']")
        email_input.clear()
        email_input.send_keys(email)
        
        # Điền mật khẩu
        password_input = self.driver.find_element(By.XPATH, "//input[@type='password']")
        password_input.clear()
        password_input.send_keys(password)
        
        # Click nút đăng nhập - sửa selector để phù hợp với trang web
        login_button = self.driver.find_element(By.XPATH, "//button[@type='button']")
        login_button.click()

class HomePage:
    """Page Object cho trang Home"""
    
    def __init__(self, driver):
        self.driver = driver
        
    def get_products(self):
        """Lấy danh sách sản phẩm trên trang"""
        return self.driver.find_elements(By.CSS_SELECTOR, ".grid-cols-1 > div, .grid-cols-4 > div")
    
    def buy_now(self, product_index=0):
        """Nhấn nút Mua Ngay cho một sản phẩm"""
        products = self.get_products()
        if not products or len(products) <= product_index:
            raise Exception(f"Không tìm thấy sản phẩm thứ {product_index+1} trên trang")
        
        # Chọn sản phẩm theo index
        product = products[product_index]
        
        # Lấy tên sản phẩm trước khi click
        try:
            product_name = product.find_element(By.CSS_SELECTOR, "h2").text
        except:
            product_name = f"Sản phẩm #{product_index+1}"
        
        # Click nút "Mua Ngay"
        buy_button = product.find_element(By.XPATH, ".//button[contains(text(), 'Mua Ngay')]")
        buy_button.click()
        return product_name
    
    def open_support_chat(self):
        """Mở hộp thoại hỗ trợ"""
        try:
            chat_button = self.driver.find_element(By.CSS_SELECTOR, ".chat-bot-icon")
            chat_button.click()
            return True
        except:
            # Thử tìm theo cách khác nếu không tìm thấy
            try:
                support_link = self.driver.find_element(By.XPATH, "//a[contains(@href, '/support')]")
                support_link.click()
                return True
            except:
                return False

class OrderFormPage:
    """Page Object cho trang điền thông tin đặt hàng"""
    
    def __init__(self, driver):
        self.driver = driver
        
    def fill_order_form(self, full_name, email, phone, address):
        """Điền thông tin đặt hàng"""
        # Điền họ tên
        name_input = self.driver.find_element(By.XPATH, "//input[@value=''][@type='text'][1]")
        name_input.clear()
        name_input.send_keys(full_name)
        
        # Điền email
        email_input = self.driver.find_element(By.XPATH, "//input[@type='email']")
        email_input.clear()
        email_input.send_keys(email)
        
        # Điền số điện thoại
        phone_input = self.driver.find_element(By.XPATH, "//label[contains(text(), 'Số điện thoại')]/following-sibling::input")
        phone_input.clear()
        phone_input.send_keys(phone)
        
        # Điền địa chỉ
        address_input = self.driver.find_element(By.XPATH, "//label[contains(text(), 'Địa chỉ')]/following-sibling::input")
        address_input.clear()
        address_input.send_keys(address)
    
    def submit_order(self):
        """Gửi đơn hàng"""
        submit_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Xác Nhận Đặt Hàng')]")
        submit_button.click()

class SupportPage:
    """Page Object cho trang hỗ trợ"""
    
    def __init__(self, driver):
        self.driver = driver
    
    def fill_support_form(self, name, email, message):
        """Điền form hỗ trợ"""
        try:
            # Điền họ tên
            name_input = self.driver.find_element(By.NAME, "name")
            name_input.clear()
            name_input.send_keys(name)
            
            # Điền email
            email_input = self.driver.find_element(By.NAME, "email")
            email_input.clear()
            email_input.send_keys(email)
            
            # Chọn chủ đề (nếu có)
            try:
                topic_select = self.driver.find_element(By.NAME, "topic")
                # Chọn một option ngẫu nhiên hoặc giữ nguyên mặc định
            except:
                print("Không tìm thấy trường chọn chủ đề, bỏ qua")
            
            # Điền nội dung
            message_input = self.driver.find_element(By.NAME, "message")
            message_input.clear()
            message_input.send_keys(message)
            return True
        except Exception as e:
            print(f"Lỗi khi điền form: {str(e)}")
            return False
    
    def submit_support_request(self):
        """Gửi yêu cầu hỗ trợ"""
        try:
            # Tìm nút gửi theo nhiều cách khác nhau
            try:
                submit_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Gửi')]")
            except:
                try:
                    submit_button = self.driver.find_element(By.XPATH, "//button[@type='submit']")
                except:
                    submit_button = self.driver.find_element(By.CSS_SELECTOR, "form button")
            
            submit_button.click()
            return True
        except Exception as e:
            print(f"Lỗi khi gửi yêu cầu: {str(e)}")
            return False

class AdminPage:
    """Page Object cho trang Admin"""
    
    def __init__(self, driver):
        self.driver = driver
    
    def login(self, username, password):
        """Đăng nhập vào trang Admin"""
        # Điền thông tin đăng nhập
        username_input = self.driver.find_element(By.XPATH, "//input[@type='text']")
        password_input = self.driver.find_element(By.XPATH, "//input[@type='password']")
        
        username_input.clear()
        username_input.send_keys(username)
        password_input.clear()
        password_input.send_keys(password)
        
        # Click nút đăng nhập
        login_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Đăng nhập')]")
        login_button.click()
    
    def go_to_orders_tab(self):
        """Chuyển đến tab quản lý đơn hàng"""
        orders_tab = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Quản lý đơn hàng')]")
        orders_tab.click()
    
    def get_latest_order(self):
        """Lấy thông tin đơn hàng mới nhất"""
        # Đợi bảng đơn hàng hiển thị
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "table"))
        )
        
        # Lấy hàng đầu tiên trong bảng (đơn hàng mới nhất)
        try:
            first_row = self.driver.find_element(By.CSS_SELECTOR, "tbody tr:first-child")
            
            # Lấy thông tin từ các cột
            customer_name = first_row.find_element(By.XPATH, "./td[2]").text
            product_name = first_row.find_element(By.XPATH, "./td[4]").text
            status = first_row.find_element(By.XPATH, "./td[9]").text
            
            return {
                "customer_name": customer_name,
                "product_name": product_name,
                "status": status
            }
        except:
            return None

class TestHomeFeatures(unittest.TestCase):
    """Test các chức năng chính trên trang Home"""
    
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.base_url = "http://localhost:5173"  # Thay đổi URL nếu cần
        
        # Thông tin đăng nhập người dùng
        self.user_email = "caohieu241210@gmail.com"  # Thay đổi email
        self.user_password = "hieu@1010"  # Thay đổi password
        
        # Thông tin test
        self.test_name = "Cao Tran Trong Hieu"
        self.test_email = "caohieu241210@gmail.com"
        self.test_phone = "0987654321"
        self.test_address = "123 Đường Test, Quận Test, TP Test"
        
        # Thông tin admin
        self.admin_username = "admin@gmail.com"
        self.admin_password = "admin123"
        
    def test_buy_now_and_support(self):
        driver = self.driver
        print("\n----- Bắt đầu test chức năng mua hàng và hỗ trợ -----")
        
        # 1. Đăng nhập
        print("1. Đăng nhập vào hệ thống")
        driver.get(f"{self.base_url}/login")
        time.sleep(3)
        
        login_page = LoginPage(driver)
        login_page.login(self.user_email, self.user_password)
        print(f"✓ Đã đăng nhập với tài khoản: {self.user_email}")
        time.sleep(3)
        
        # Kiểm tra đã đăng nhập thành công
        if "/home" in driver.current_url:
            print(f"✓ Đăng nhập thành công, đã chuyển đến trang Home: {driver.current_url}")
        else:
            print(f"! Đăng nhập có thể không thành công. URL hiện tại: {driver.current_url}")
        
        # 2. Mua hàng
        print("\n2. Test chức năng mua hàng")
        home_page = HomePage(driver)
        
        try:
            # Lấy số lượng sản phẩm
            products = home_page.get_products()
            print(f"✓ Tìm thấy {len(products)} sản phẩm trên trang")
            
            if len(products) > 0:
                # Chọn sản phẩm ngẫu nhiên
                product_index = random.randint(0, min(len(products)-1, 5))
                product_name = home_page.buy_now(product_index)
                print(f"✓ Đã nhấn Mua Ngay cho sản phẩm: '{product_name}'")
                
                # Đợi chuyển hướng đến trang điền thông tin
                time.sleep(3)
                
                # Kiểm tra đã chuyển đến trang điền thông tin
                if "/cartpay" in driver.current_url:
                    print(f"✓ Đã chuyển đến trang điền thông tin: {driver.current_url}")
                    
                    # Điền thông tin đặt hàng
                    print("\n3. Điền thông tin đặt hàng")
                    order_form = OrderFormPage(driver)
                    order_form.fill_order_form(
                        self.test_name, 
                        self.test_email, 
                        self.test_phone, 
                        self.test_address
                    )
                    print("✓ Đã điền thông tin đặt hàng")
                    time.sleep(2)
                    
                    # Gửi đơn hàng
                    order_form.submit_order()
                    print("✓ Đã nhấn nút Xác Nhận Đặt Hàng")
                    time.sleep(3)
                    
                    # Kiểm tra thông báo thành công
                    try:
                        alert = driver.switch_to.alert
                        alert_text = alert.text
                        print(f"✓ Thông báo: '{alert_text}'")
                        alert.accept()
                        print("✓ Đã xác nhận thông báo")
                    except:
                        print("! Không tìm thấy thông báo alert")
                else:
                    print(f"✗ Không chuyển đến trang điền thông tin. URL hiện tại: {driver.current_url}")
            else:
                print("✗ Không tìm thấy sản phẩm nào trên trang")
        except Exception as e:
            print(f"✗ Lỗi khi test chức năng mua hàng: {str(e)}")
        
        # 4. Quay lại trang chủ
        print("\n4. Quay lại trang chủ")
        driver.get(f"{self.base_url}/home")  # Sử dụng /home thay vì / vì đã đăng nhập
        time.sleep(3)
        
        # 5. Kiểm tra chức năng hỗ trợ
        print("\n5. Kiểm tra chức năng hỗ trợ")
        try:
            # Truy cập trang hỗ trợ
            driver.get(f"{self.base_url}/support")
            time.sleep(3)
            print(f"✓ Đã truy cập trang hỗ trợ: {driver.current_url}")
            
            # Điền form hỗ trợ
            support_page = SupportPage(driver)
            support_message = f"Đây là tin nhắn test #{random.randint(1000, 9999)}"
            
            if support_page.fill_support_form(self.test_name, self.test_email, support_message):
                print(f"✓ Đã điền form hỗ trợ với tin nhắn: '{support_message}'")
                time.sleep(2)
                
                # Gửi yêu cầu hỗ trợ
                try:
                    support_page.submit_support_request()
                    print("✓ Đã gửi yêu cầu hỗ trợ")
                    time.sleep(3)
                    
                    # Kiểm tra thông báo thành công
                    try:
                        alert = driver.switch_to.alert
                        alert_text = alert.text
                        print(f"✓ Thông báo: '{alert_text}'")
                        alert.accept()
                    except:
                        print("! Không tìm thấy thông báo alert")
                except Exception as e:
                    print(f"✗ Lỗi khi gửi yêu cầu hỗ trợ: {str(e)}")
            else:
                print("✗ Không thể điền form hỗ trợ")
        except Exception as e:
            print(f"✗ Lỗi khi test chức năng hỗ trợ: {str(e)}")
        
        # 6. Kiểm tra đơn hàng trong trang Admin
        print("\n6. Kiểm tra đơn hàng trong trang Admin")
        try:
            # Đăng xuất tài khoản người dùng hiện tại
            print("Đang đăng xuất tài khoản người dùng...")
            try:
                # Tìm nút đăng xuất trên trang
                logout_button = driver.find_element(By.XPATH, "//button[contains(text(), 'Đăng xuất')]")
                logout_button.click()
                time.sleep(2)
                
                # Xác nhận đăng xuất nếu có hộp thoại xác nhận
                try:
                    confirm_dialog = driver.switch_to.alert
                    confirm_dialog.accept()
                    time.sleep(2)
                except:
                    # Không có hộp thoại xác nhận
                    pass
            except:
                # Nếu không tìm thấy nút đăng xuất, truy cập trực tiếp trang đăng nhập
                print("Không tìm thấy nút đăng xuất, truy cập trực tiếp trang đăng nhập...")
            
            # Truy cập trang đăng nhập
            driver.get(f"{self.base_url}/login")
            time.sleep(3)
            
            # Đăng nhập với tài khoản admin
            print("Đang đăng nhập với tài khoản admin...")
            login_page = LoginPage(driver)
            login_page.login(self.admin_username, self.admin_password)
            time.sleep(3)
            
            # Kiểm tra đã chuyển đến trang admin
            if "/admin" in driver.current_url:
                print(f"✓ Đăng nhập admin thành công, đã chuyển đến trang Admin: {driver.current_url}")
            else:
                print(f"! Đăng nhập admin có thể không thành công. URL hiện tại: {driver.current_url}")
                # Truy cập trực tiếp trang admin
                driver.get(f"{self.base_url}/admin")
                time.sleep(3)
            
            # Chuyển đến tab quản lý đơn hàng
            admin_page = AdminPage(driver)
            admin_page.go_to_orders_tab()
            print("✓ Đã chuyển đến tab quản lý đơn hàng")
            time.sleep(3)
            
            # Kiểm tra đơn hàng mới nhất
            latest_order = admin_page.get_latest_order()
            if latest_order:
                print(f"✓ Đơn hàng mới nhất:")
                print(f"  - Khách hàng: {latest_order['customer_name']}")
                print(f"  - Sản phẩm: {latest_order['product_name']}")
                print(f"  - Trạng thái: {latest_order['status']}")
                
                # Kiểm tra thông tin đơn hàng
                if self.test_name in latest_order['customer_name']:
                    print("✓ Đơn hàng của người dùng test đã được ghi nhận")
                else:
                    print("! Đơn hàng mới nhất không phải của người dùng test")
            else:
                print("! Không tìm thấy đơn hàng nào trong hệ thống")
        except Exception as e:
            print(f"! Không thể kiểm tra đơn hàng trong trang Admin: {str(e)}")
        
        print("\n----- Kết thúc test chức năng mua hàng và hỗ trợ -----")
    
    def tearDown(self):
        print("\nĐóng trình duyệt...")
        self.driver.quit()

if __name__ == "__main__":
    unittest.main(verbosity=2)




