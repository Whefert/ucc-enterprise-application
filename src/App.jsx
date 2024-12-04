import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import Students from "./pages/Students";
import { loader as studentLoader } from "./pages/Students";
import AuthContextProvider from "./store/auth-context";
import Student from "./pages/Student";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="students">
          <Route index element={<Students />} loader={studentLoader} />
          <Route path=":id" element={<Student />} />
        </Route>
      </Route>
    </Route>
  )
);
function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />;
    </AuthContextProvider>
  );
}

export default App;
