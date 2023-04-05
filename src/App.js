import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/addEmployee/AddEmployee";
import Employee from "./components/employee/Employee";
import LinkNotFound from "./components/error/LinkNotFound";
import Header from "./components/header/Header";
import UpdateEmployee from "./components/updateEmployee/UpdateEmployee";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employees/:id" element={<UpdateEmployee />} />
          <Route path="*" element={<LinkNotFound />} />
          <Route path="/create" element={<AddEmployee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
