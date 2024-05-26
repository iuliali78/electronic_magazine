import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RootState } from './redux/store';
import { AUTH_URL } from './const';
import Header from './components/ui/header';
import Auth from './pages/auth';

function App() {
  const location = useLocation();
  //const navigate =useNavigate();

  const isAuthUser = useSelector(
    (state: RootState) => state.userSlice.user.isAuth
  );

  // React.useEffect(() => {
  //   if (!isAuthUser) {
  //     navigate(AUTH_URL);
  //   }
  // }, [isAuthUser, navigate]);

  return (
    <div className="wrapper mb-[64px]">
        {!location.pathname.includes("signin") ? <Header /> : ""}
        <Routes>
          {isAuthUser ? (
            <>
            </>
          ) : (
            <Route key="login-key" path={AUTH_URL} element={<Auth />} />
          )}
        </Routes>
    </div>
  );
}

export default App;
