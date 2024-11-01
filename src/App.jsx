import Package from "./components/Order/Package"
import ConfirmPackage from "./components/Order/ConfirmPackage"
import TotalOrder from "./components/Order/TotalOrder"
import FilePreview from "./components/Order/FilePreview"
import Combo from "./components/Payment/Combo"
import PaymentMethod from "./components/Payment/PaymentMethod"
import TotalPayment from "./components/Payment/TotalPayment"
import Note from "./components/Payment/Note"
import OrderPage from "./pages/OrderPage"
import ConfirmOrderPage from "./pages/ConfirmOrderPage"
import PaymentPage from "./pages/PaymentPage"

function App() {

  return (
    <>
      <ConfirmOrderPage />
    </>
  )
}

export default App
