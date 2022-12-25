import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ApiCalling from "./Components/ApiCalling";
import { Routes, Route, Navigate } from "react-router-dom";
import ListDetail from "./Components/ListDetail";
import AddUserForm from "./Components/AddUserForm";
import StopWatch from "./Components/StopWatch";
import InputFocus from "./Components/InputFocus";
import ReducerForm from "./Components/Form";
import EditForm from "./Components/EditForm"
const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      {/* <ApiCalling /> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />}></Route>
        <Route path="/AddUserForm" element={<AddUserForm />} />
        <Route path="/posts" element={<ApiCalling />} />
        <Route path="/stopWatch" element={<StopWatch />} />
        <Route path="/inputFocus" element={<InputFocus />} />
        <Route path="/reducerForm" element={<ReducerForm />} />
        <Route path="/editForm/:id" element={<EditForm />} />
        <Route path="/posts/:id" element={<ListDetail />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
