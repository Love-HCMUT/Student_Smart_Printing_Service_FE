//The helpers folder contains utilities functions.
// You should be store pure functions on this folder.
// This mean is each function will have its own responsibilities.
import { Navigate } from "react-router-dom";
const checkPermission = (requiredRole) => {
    // Giả sử bạn lưu thông tin role người dùng trong localStorage hoặc context
    const userRole = localStorage.getItem("roles"); // Lấy role từ localStorage
    return userRole === requiredRole;
  };

  const ProtectedRoute = ({ element, requiredRole }) => {
    const hasPermission = checkPermission(requiredRole);
  
    if (!hasPermission) {
      // Chuyển hướng về trang login nếu không có quyền
      return <Navigate to="/login" replace/> ;
    }
  
    // Hiển thị nội dung được bảo vệ nếu có quyền
    return element;
  };
  
  export default ProtectedRoute;
    