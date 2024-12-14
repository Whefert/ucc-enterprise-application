import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import Students from "./pages/Student/Students";
import { loader as studentsLoader } from "./pages/Student/Students";
import AuthContextProvider from "./store/auth-context";
import EnrolledCourses from "./pages/EnrolledCourses";
import StudentLayout from "./layout/StudentLayout";
import ContactDetails from "./components/ContactDetails";
import NextOfKin from "./components/NextOfKin";
import AllFaculty from "./pages/AllFaculty";
import { loader as studentLoader } from "./layout/StudentLayout";
import { loader as allFacultyLoader } from "./pages/AllFaculty";
import { loader as facultyLoader } from "./layout/FacultyLayout";
import { loader as courseLoader } from "./pages/Courses";
import Courses from "./pages/Courses";
import FacultyLayout from "./layout/FacultyLayout";

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
        <Route path="faculty">
          <Route index element={<AllFaculty />} loader={allFacultyLoader} />
          <Route
            path=":id"
            element={<FacultyLayout />}
            loader={facultyLoader}
          />
        </Route>
        <Route path="courses" element={<Courses />} loader={courseLoader} />
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
