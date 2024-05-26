import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logOut } from "../../redux/slices/userSlice";
import { AUTH_URL } from "../../const";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.userSlice.user);

  const clickLink = (route: string) => {
    navigate(route);
  };

  const clickLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <header className="header bg-[#CDE1FF]">
      <div className="header__inner flex max-w-[1750px] mx-auto justify-between items-center max-2xl:max-w-[1336px]">
        <div
          className="header__logo cursor-pointer"
          onClick={() => clickLink("/")}
        >
          {/* <img src={logo} alt="logo" /> */}
        </div>
        {userInfo.isAuth ? (
          <div className="header__content flex items-center py-[22px]">
            <div className="header__content-user mr-[25px]">
              {userInfo.username}/{userInfo.roles}
            </div>
            <div className="header__content-exit">
              <button
                className="header__content-btn py-[4px] px-[8px] bg-[#ffffff] rounded-[5px] hover:bg-[#86b6f8] duration-[200ms] ease-in-out"
                type="button"
                onClick={clickLogout}
              >
                Выйти
              </button>
            </div>
          </div>
        ) : (
          <Link
            to={AUTH_URL}
            className="text-[#000000] py-[22px] hover:text-[#86b6f8] duration-[200ms] ease-in-out"
          >
            Войти в аккаунт
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
