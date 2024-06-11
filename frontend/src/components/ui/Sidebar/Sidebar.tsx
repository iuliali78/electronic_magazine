import { HomeIcon, UserIcon, BoardIcon } from "components/icons";
import { createDynamicStyles } from "utils/other";
import { MAIN_URL, USER_PAGE_URL, LIST_DEPARTMENTS_URL } from "const";
import { useLocation, useNavigate } from "react-router-dom";

// Массив путей для сайдбара
export const navigationRoutes = [
  {
    url: MAIN_URL,
    text: "Главная",
    icon: <HomeIcon />,
  },
  {
    url: USER_PAGE_URL,
    text: "Моя страница",
    icon: <UserIcon />,
  },
  {
    url: LIST_DEPARTMENTS_URL,
    text: "Журнал",
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
    <nav className="group bg-[#ACD0FF8F] border-[1px] border-solid border-[#5972F7] rounded-[15px] px-[10px] inline-block fixed top-[120px] left-[60px]">
      <ul className="py-[30px] inline-flex flex-col justify-center">
        {navigationRoutes.map((route, index) => (
          <li
            key={index}
            className={createDynamicStyles(
              location.pathname.includes(route.url),
              "flex items-center p-[10px] rounded-[15px] cursor-pointer mb-[15px] last:mb-[0px] h-[58px] duration-[250ms] hover:bg-[#FFFFFF99]",
              "bg-[#FFFFFF99]"
            )}
            onClick={() => linkToUrl(route.url)}
          >
            <span className="duration-[250ms] group-hover:mr-[15px] w-[30px] h-[30px]">{route.icon}</span>
            <span className="text-[25px] text-nowrap hidden group-hover:block">{route.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
