import Home from './pages/home'
import Register from './pages/register'
import Upload from './components/upload'
import ChangePassword from './pages/changePassword'
import ForgotPassword from './pages/forgotPassword'
import Admin from './pages/admin'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={"/"} element={<Navigate to="/home"/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/upload"} element={<Upload/>}/>
                <Route path={"/changePassword"} element={<ChangePassword/>}/>
                <Route path={"/forgotPassword"} element={<ForgotPassword/>}/>
                <Route path={"/admin"} element={<Admin/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App