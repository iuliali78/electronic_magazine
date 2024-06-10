import { HomeIcon, UserIcon, BoardIcon } from "components/icons";
import { createDynamicStyles } from "utils/other";
import { MAIN_URL, USER_PAGE_URL, LIST_DEPARTMENTS_URL } from "const";
import { useLocation, useNavigate } from "react-router-dom";

// Массив путей для сайдбара
export const navigationRoutes = [
  {
    url: MAIN_URL,
    icon: <HomeIcon />,
  },
  {
    url: USER_PAGE_URL,
    icon: <UserIcon />,
  },
  {
    url: LIST_DEPARTMENTS_URL,
    icon: <BoardIcon />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Перенаправляем пользователя на переданный путь (url)
  const linkToUrl = (url: string) => {
    navigate(url);
  };

  return (
    <nav className="bg-[#ACD0FF8F] border-[1px] border-solid border-[#5972F7] rounded-[15px] px-[10px] inline-block fixed top-[120px] left-[60px]">
      <ul className="py-[30px] inline-flex flex-col justify-center items-center">
        {navigationRoutes.map((route, index) => (
          <li
            key={index}
            className={createDynamicStyles(
              location.pathname.includes(route.url),
              "p-[10px] rounded-[15px] hover:bg-[#FFFFFF99] duration-[200ms] cursor-pointer mb-[15px] last:mb-[0px]",
              "bg-[#FFFFFF99]"
            )}
            onClick={() => linkToUrl(route.url)}
          >
            {route.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
