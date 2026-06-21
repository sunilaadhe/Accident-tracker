import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import  LoginPage  from "./pages/Login"
import  Navbar  from "./components/Navbar"
import  SignUpPage  from "./pages/SignUp"
import  AboutPage  from "./pages/Aboutpage"
import  HomePage  from "./pages/HomePage";
import ReportPage from "./pages/ReportPage";
import DashboardPage from "./pages/DashboardPage";
import UpdatePage from "./pages/UpdatePage";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/" element={<></>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/Aboutpage" element={<AboutPage/>}/>
        <Route  path="/report"  element={<PrivateRoute>
        <ReportPage />
        </PrivateRoute>
       }
      />        
        <Route path="/dashboard" element={<PrivateRoute>
        <DashboardPage />
        </PrivateRoute>
       }
      />        

        <Route path="/update/:id" element={<PrivateRoute>
         <UpdatePage />
        </PrivateRoute>
      }
    />

         <Route path="/profile" element={
         <PrivateRoute>
         <ProfilePage />
         </PrivateRoute>
     }
   />
        

      </Routes>
    </Router>
  )
}

export default App
