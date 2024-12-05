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
import { loader as studentsLoader } from "./pages/Students";
import AuthContextProvider from "./store/auth-context";
import EnrolledCourses from "./pages/EnrolledCourses";
import StudentLayout from "./layout/StudentLayout";
import ContactDetails from "./components/ContactDetails";
import NextOfKin from "./components/NextOfKin";
import { loader as studentLoader } from "./layout/StudentLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="students">
          <Route index element={<Students />} loader={studentsLoader} />
          <Route path=":id" element={<StudentLayout />} loader={studentLoader}>
            <Route index element={<EnrolledCourses />} />
            <Route path="contact_details" element={<ContactDetails />} />
            <Route path="next_of_kin" element={<NextOfKin />} />
          </Route>
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
