import BalanceSection from "./components/BalanceSection";
import Expenditure from "./components/Expenditure";
import Form from "./components/Form";
import Income from "./components/Income";
import ListGroup from "./components/ListGroup";
import Nav from "./components/Nav";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <>
        <Nav />
        <div className="container">
          {/* <h1>Expense Manager</h1> */}

          <div className="balance-input-section">
            <BalanceSection />
            <div className="input-section">
              <Form />
            </div>
          </div>


          <div className="income-expenditure">
            <Income />
            <Expenditure />

          </div>



          <div className="transactions">
            <ListGroup />
          </div>
        </div>
      </>
    </GlobalProvider>
  );
}

export default App;
