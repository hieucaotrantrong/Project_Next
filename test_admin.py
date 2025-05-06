import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class AdminTest(unittest.TestCase):
    def setUp(self):
        print("\n----- Bắt đầu test trang Admin -----")
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.base_url = "http://localhost:5173"  # Cập nhật port đúng
        self.admin_email = "admin@gmail.com"  # Tài khoản admin
        self.admin_password = "admin123"  # Mật khẩu admin
        print("Đã khởi tạo trình duyệt Chrome")
    
    def test_admin_login_invalid(self):
        driver = self.driver
        print("\n----- Bắt đầu test đăng nhập admin với thông tin không hợp lệ -----")
        
        # Mở trang đăng nhập
        print(f"Đang mở trang đăng nhập: {self.base_url}/login")
        driver.get(f"{self.base_url}/login")
        time.sleep(2)
        
        # Test case 1: Tài khoản admin sai
        print("\nTest case 1: Tài khoản admin sai")
        # Tìm input field cho email/username - sử dụng XPath thay vì CSS selector
        username_field = driver.find_element(By.XPATH, "//input[@type='text']")
        password_field = driver.find_element(By.XPATH, "//input[@type='password']")
        
        username_field.send_keys("wrong_admin")
        password_field.send_keys(self.admin_password)
        time.sleep(1)
        
        # Click nút đăng nhập
        login_button = driver.find_element(By.XPATH, "//button[@type='button']")
        login_button.click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            alert = driver.switch_to.alert
            print(f"✓ Hiển thị lỗi đúng (alert): '{alert.text}'")
            alert.accept()
        except:
            try:
                error_message = driver.find_element(By.CSS_SELECTOR, ".text-red-500")
                print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
            except:
                print("✗ Không hiển thị thông báo lỗi cho tài khoản admin sai")
        
        # Xóa form để test case tiếp theo
        username_field.clear()
        password_field.clear()
        
        # Test case 2: Mật khẩu admin sai
        print("\nTest case 2: Mật khẩu admin sai")
        username_field.send_keys(self.admin_email)
        password_field.send_keys("wrong_password")
        time.sleep(1)
        
        # Click nút đăng nhập
        login_button.click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            alert = driver.switch_to.alert
            print(f"✓ Hiển thị lỗi đúng (alert): '{alert.text}'")
            alert.accept()
        except:
            try:
                error_message = driver.find_element(By.CSS_SELECTOR, ".text-red-500")
                print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
            except:
                print("✗ Không hiển thị thông báo lỗi cho mật khẩu admin sai")
        
        # Test case 3: Nhập chữ "Admin" lớn
        print("\nTest case 3: Nhập chữ 'Admin' lớn")
        username_field.clear()
        password_field.clear()
        
        username_field.send_keys("Admin@gmail.com")
        password_field.send_keys("Admin123")
        time.sleep(1)
        
        # Click nút đăng nhập
        login_button.click()
        time.sleep(2)
        
        # Kiểm tra xem có thông báo lỗi không
        try:
            alert = driver.switch_to.alert
            print(f"✓ Hiển thị lỗi đúng (alert): '{alert.text}'")
            alert.accept()
        except:
            try:
                error_message = driver.find_element(By.CSS_SELECTOR, ".text-red-500")
                print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
            except:
                print("✗ Không hiển thị thông báo lỗi khi nhập chữ 'A' lớn")
        
        # Test case 4: Nhập ký tự đặc biệt
        print("\nTest case 4: Nhập ký tự đặc biệt")
        username_field.clear()
        password_field.clear()

        username_field.send_keys("!@#$%")
        password_field.send_keys("!@#$%")
        time.sleep(1)

        # Click nút đăng nhập
        login_button.click()
        time.sleep(2)

        # Kiểm tra xem có thông báo lỗi không
        try:
            alert = driver.switch_to.alert
            print(f"✓ Hiển thị lỗi đúng (alert): '{alert.text}'")
            alert.accept()
        except:
            try:
                error_message = driver.find_element(By.CSS_SELECTOR, ".text-red-500")
                print(f"✓ Hiển thị lỗi đúng: '{error_message.text}'")
            except:
                print("✗ Không hiển thị thông báo lỗi khi nhập ký tự đặc biệt")
    
    def test_admin_login_and_features(self):
        driver = self.driver
        print("\n----- Bắt đầu test đăng nhập admin và các chức năng -----")
        
        # Đăng nhập với tài khoản admin
        print(f"Đang mở trang đăng nhập: {self.base_url}/login")
        driver.get(f"{self.base_url}/login")
        time.sleep(2)
        
        print("Đang đăng nhập với tài khoản admin...")
        # Tìm input field cho email/username và password
        username_field = driver.find_element(By.XPATH, "//input[@type='text']")
        password_field = driver.find_element(By.XPATH, "//input[@type='password']")
        
        username_field.send_keys(self.admin_email)
        password_field.send_keys(self.admin_password)
        time.sleep(1)
        
        # Click nút đăng nhập
        login_button = driver.find_element(By.XPATH, "//button[@type='button']")
        login_button.click()
        
        # Kiểm tra chuyển hướng đến trang admin
        print("Đang kiểm tra chuyển hướng đến trang admin...")
        WebDriverWait(driver, 10).until(
            lambda driver: driver.current_url == f"{self.base_url}/admin"
        )
        print(f"✓ Đăng nhập admin thành công! URL hiện tại: {driver.current_url}")
        time.sleep(2)
        
        # Kiểm tra các tab chức năng
        print("\nĐang kiểm tra các tab chức năng...")
        
        # 1. Kiểm tra tab Quản lý sản phẩm (mặc định)
        print("1. Kiểm tra tab Quản lý sản phẩm")
        try:
            # Kiểm tra form thêm sản phẩm
            product_form = driver.find_element(By.TAG_NAME, "form")
            print("✓ Form thêm/sửa sản phẩm hiển thị")
            
            # Kiểm tra danh sách sản phẩm
            products_title = driver.find_element(By.XPATH, "//h2[contains(text(), 'Danh sách sản phẩm')]")
            products = driver.find_elements(By.CSS_SELECTOR, "div.grid > div.bg-white")
            print(f"✓ Danh sách sản phẩm hiển thị với {len(products)} sản phẩm")
            
            # Kiểm tra các trường nhập liệu trong form
            input_fields = product_form.find_elements(By.TAG_NAME, "input")
            print(f"✓ Form có {len(input_fields)} trường nhập liệu")
            
            # Kiểm tra nút thêm/cập nhật sản phẩm
            submit_button = product_form.find_element(By.CSS_SELECTOR, "button[type='submit']")
            print(f"✓ Nút '{submit_button.text}' hiển thị trong form")
        except Exception as e:
            print(f"✗ Không hiển thị đúng tab Quản lý sản phẩm: {str(e)}")
        
        # 2. Chuyển sang tab Quản lý đơn hàng
        print("\n2. Kiểm tra tab Quản lý đơn hàng")
        try:
            # Tìm và click vào tab Quản lý đơn hàng
            order_tab = driver.find_element(By.XPATH, "//button[contains(text(), 'Quản lý đơn hàng')]")
            order_tab.click()
            time.sleep(2)
            
            # Kiểm tra nội dung tab đơn hàng
            # Dựa vào component OrderManagement, có thể có bảng hoặc danh sách đơn hàng
            try:
                orders_table = driver.find_element(By.TAG_NAME, "table")
                print(f"✓ Bảng đơn hàng hiển thị")
            except:
                try:
                    orders_list = driver.find_element(By.CSS_SELECTOR, "div.overflow-x-auto")
                    print(f"✓ Danh sách đơn hàng hiển thị")
                except:
                    print("✗ Không tìm thấy bảng hoặc danh sách đơn hàng")
                    raise
        except Exception as e:
            print(f"✗ Không thể chuyển hoặc hiển thị tab Quản lý đơn hàng: {str(e)}")
        
        # 3. Chuyển sang tab Quản lý hỗ trợ
        print("\n3. Kiểm tra tab Quản lý hỗ trợ")
        try:
            # Tìm và click vào tab Quản lý hỗ trợ
            support_tab = driver.find_element(By.XPATH, "//button[contains(text(), 'Quản lý hỗ trợ')]")
            support_tab.click()
            time.sleep(2)
            
            # Kiểm tra nội dung tab hỗ trợ
            # Dựa vào component SupportManagement
            try:
                # Kiểm tra tiêu đề
                support_title = driver.find_element(By.XPATH, "//h2[contains(text(), 'Quản lý yêu cầu hỗ trợ')]")
                print(f"✓ Tiêu đề '{support_title.text}' hiển thị")
                
                # Kiểm tra danh sách yêu cầu hỗ trợ hoặc thông báo chưa có yêu cầu
                try:
                    # Trường hợp có yêu cầu hỗ trợ
                    support_items = driver.find_elements(By.CSS_SELECTOR, "div.grid > div.bg-white, div.space-y-6 > div.bg-white")
                    print(f"✓ Danh sách yêu cầu hỗ trợ hiển thị với {len(support_items)} yêu cầu")
                except:
                    # Trường hợp không có yêu cầu hỗ trợ
                    try:
                        no_requests_message = driver.find_element(By.XPATH, "//p[contains(text(), 'Chưa có yêu cầu hỗ trợ')]")
                        print(f"✓ Thông báo '{no_requests_message.text}' hiển thị")
                    except:
                        print("✗ Không tìm thấy danh sách yêu cầu hỗ trợ hoặc thông báo")
                        raise
            except Exception as e:
                print(f"✗ Không hiển thị đúng nội dung tab Quản lý hỗ trợ: {str(e)}")
                raise
        except Exception as e:
            print(f"✗ Không thể chuyển hoặc hiển thị tab Quản lý hỗ trợ: {str(e)}")
        # 5. Kiểm tra chức năng thêm sản phẩm
        print("\n4. Kiểm tra chức năng thêm sản phẩm")
        try:
            # Quay lại tab Quản lý sản phẩm
            product_tab = driver.find_element(By.XPATH, "//button[contains(text(), 'Quản lý sản phẩm')]")
            product_tab.click()
            time.sleep(2)
            
            # Điền thông tin sản phẩm mới
            import random
            random_num = random.randint(1000, 9999)
            test_product = f"Test Product {random_num}"
            
            # Tìm các trường nhập liệu - sử dụng index hoặc name thay vì placeholder
            inputs = driver.find_elements(By.TAG_NAME, "input")
            title_input = inputs[0]  # Giả sử input đầu tiên là title
            original_price_input = inputs[1]  # Giả sử input thứ hai là original price
            price_input = inputs[2]  # Giả sử input thứ ba là price
            discount_input = inputs[3]  # Giả sử input thứ tư là discount
            tag_input = inputs[4]  # Giả sử input thứ năm là tag
            
            # Điền thông tin
            title_input.send_keys(test_product)
            original_price_input.send_keys("1000000")
            price_input.send_keys("800000")
            discount_input.send_keys("20")
            tag_input.send_keys("test")
            time.sleep(1)
            
            # Submit form
            submit_button = driver.find_element(By.CSS_SELECTOR, "form button[type='submit']")
            submit_button.click()
            time.sleep(3)
            
            # Kiểm tra sản phẩm đã được thêm
            products = driver.find_elements(By.CSS_SELECTOR, "div.grid > div.bg-white")
            product_titles = [p.find_element(By.TAG_NAME, "h3").text for p in products]
            
            if test_product in product_titles:
                print(f"✓ Sản phẩm '{test_product}' đã được thêm thành công")
            else:
                print(f"✗ Không tìm thấy sản phẩm '{test_product}' sau khi thêm")
        except Exception as e:
            print(f"✗ Lỗi khi thêm sản phẩm: {str(e)}")
        
        # 5. Kiểm tra chức năng đăng xuất
        print("\n5. Kiểm tra chức năng đăng xuất")
        try:
            logout_button = driver.find_element(By.XPATH, "//button[contains(text(), 'Đăng xuất')]")
            print("✓ Nút đăng xuất hiển thị")
            
            # Không thực sự click để đăng xuất vì có thể cần confirm
            # Chỉ kiểm tra sự hiện diện của nút
        except Exception as e:
            print(f"✗ Không tìm thấy nút đăng xuất: {str(e)}")
        
        # Đợi để xem trang admin
        print("\nĐã kiểm tra xong các chức năng admin! Đợi 5 giây để xem trang...")
        time.sleep(5)
    
    def test_admin_product_crud(self):
        driver = self.driver
        print("\n----- Bắt đầu test CRUD sản phẩm -----")
        
        # Đăng nhập với tài khoản admin
        print(f"Đang mở trang đăng nhập: {self.base_url}/login")
        driver.get(f"{self.base_url}/login")
        time.sleep(2)
        
        print("Đang đăng nhập với tài khoản admin...")
        # Tìm input field cho email/username và password
        username_field = driver.find_element(By.XPATH, "//input[@type='text']")
        password_field = driver.find_element(By.XPATH, "//input[@type='password']")
        
        username_field.send_keys(self.admin_email)
        password_field.send_keys(self.admin_password)
        time.sleep(1)
        
        # Click nút đăng nhập
        login_button = driver.find_element(By.XPATH, "//button[@type='button']")
        login_button.click()
        
        # Đợi chuyển hướng đến trang admin
        WebDriverWait(driver, 10).until(
            lambda driver: driver.current_url == f"{self.base_url}/admin"
        )
        time.sleep(2)
        
        # 1. Tạo sản phẩm mới
        print("\n1. Tạo sản phẩm mới")
        try:
            # Tạo dữ liệu ngẫu nhiên
            import random
            random_num = random.randint(1000, 9999)
            test_product = f"Test Product {random_num}"
            
            # Tìm các trường nhập liệu - sử dụng index hoặc name thay vì placeholder
            inputs = driver.find_elements(By.TAG_NAME, "input")
            title_input = inputs[0]  # Giả sử input đầu tiên là title
            original_price_input = inputs[1]  # Giả sử input thứ hai là original price
            price_input = inputs[2]  # Giả sử input thứ ba là price
            discount_input = inputs[3]  # Giả sử input thứ tư là discount
            tag_input = inputs[4]  # Giả sử input thứ năm là tag
            
            # Điền thông tin
            title_input.send_keys(test_product)
            original_price_input.send_keys("1000000")
            price_input.send_keys("800000")
            discount_input.send_keys("20")
            tag_input.send_keys("test")
            time.sleep(1)
            
            # Submit form
            submit_button = driver.find_element(By.CSS_SELECTOR, "form button[type='submit']")
            submit_button.click()
            time.sleep(3)
            
            # Kiểm tra sản phẩm đã được thêm
            products = driver.find_elements(By.CSS_SELECTOR, "div.grid > div.bg-white")
            product_titles = [p.find_element(By.TAG_NAME, "h3").text for p in products]
            
            if test_product in product_titles:
                print(f"✓ Sản phẩm '{test_product}' đã được thêm thành công")
            else:
                print(f"✗ Không tìm thấy sản phẩm '{test_product}' sau khi thêm")
                raise Exception("Thêm sản phẩm thất bại")
            
            # Lưu lại sản phẩm để sử dụng trong các bước tiếp theo
            for product in products:
                if product.find_element(By.TAG_NAME, "h3").text == test_product:
                    test_product_element = product
                    break
            
            # 2. Sửa sản phẩm
            print("\n2. Sửa sản phẩm")
            # Tìm và click nút sửa
            edit_button = test_product_element.find_element(By.XPATH, ".//button[contains(text(), 'Sửa')]")
            edit_button.click()
            time.sleep(2)
            
            # Sửa thông tin sản phẩm
            updated_product = f"{test_product} Updated"
            inputs = driver.find_elements(By.TAG_NAME, "input")
            title_input = inputs[0]  # Giả sử input đầu tiên là title
            title_input.clear()
            title_input.send_keys(updated_product)
            
            # Submit form
            submit_button = driver.find_element(By.CSS_SELECTOR, "form button[type='submit']")
            submit_button.click()
            time.sleep(3)
            
            # Kiểm tra sản phẩm đã được cập nhật
            products = driver.find_elements(By.CSS_SELECTOR, "div.grid > div.bg-white")
            product_titles = [p.find_element(By.TAG_NAME, "h3").text for p in products]
            
            if updated_product in product_titles:
                print(f"✓ Sản phẩm đã được cập nhật thành '{updated_product}'")
            else:
                print(f"✗ Không tìm thấy sản phẩm '{updated_product}' sau khi cập nhật")
                raise Exception("Cập nhật sản phẩm thất bại")
            
            # Cập nhật lại biến test_product_element
            for product in products:
                if product.find_element(By.TAG_NAME, "h3").text == updated_product:
                    test_product_element = product
                    break
            
            # 3. Xóa sản phẩm
            print("\n3. Xóa sản phẩm")
            # Tìm và click nút xóa
            delete_button = test_product_element.find_element(By.XPATH, ".//button[contains(text(), 'Xóa')]")
            delete_button.click()
            time.sleep(3)
            
            # Kiểm tra sản phẩm đã bị xóa
            products = driver.find_elements(By.CSS_SELECTOR, "div.grid > div.bg-white")
            product_titles = [p.find_element(By.TAG_NAME, "h3").text for p in products]
            
            if updated_product not in product_titles:
                print(f"✓ Sản phẩm '{updated_product}' đã được xóa thành công")
            else:
                print(f"✗ Vẫn còn sản phẩm '{updated_product}' sau khi xóa")
                raise Exception("Xóa sản phẩm thất bại")
            
        except Exception as e:
            print(f"✗ Lỗi trong quá trình CRUD sản phẩm: {str(e)}")
    
    def tearDown(self):
        print("\n----- Kết thúc test -----")
        self.driver.quit()
        print("Đã đóng trình duyệt")

if __name__ == "__main__":
    unittest.main(verbosity=2)






