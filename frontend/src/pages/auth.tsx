import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/userServise";
import { MAIN_URL, ROLES, SINGUP_URL, initialValuesMessage } from "const";
import { useDispatch } from "react-redux";
import { saveUser, setIsAuth } from "../redux/slices/userSlice";
import { FormField } from "models/form";
import Form from "components/ui/Form";

const authFields: FormField[] = [
  {
    label: "Email",
    fieldType: "email",
    placeholder: "Введите email",
  },
  {
    label: "Пароль",
    fieldType: "password",
    inputType: "password",
    placeholder: "Введите пароль",
  },
];

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState(initialValuesMessage);

  const clickLink = (route: string) => {
    navigate(route);
  };

  const handleLogin = (email: string, password: string) => {
    return signIn(email, password).then(
      (data) => {
        setMessage((prevState) => {
          return {
            ...prevState,
            message: "Успех",
            success: true,
          };
        });

        //определение роли
        let role = '';

        switch (data.roles[0]) {
          case "ROLE_USER":
            role = ROLES.ROLE_STUDENT;
            break;
          case "ROLE_MODERATOR":
            role = ROLES.ROLE_TEACHER;
            break;
          case "ROLE_ADMIN":
            role = ROLES.ROLE_DEAN;
            break;
        }

        // Сохраняем некоторые данные в localStorage для отбоажения в шапке сайта
        // email - это имя пользователя, username - это почта. На бекенде данные сверяются по username, а на клиенте нужно отправлять почту
        localStorage.setItem('FIO', data.email);
        localStorage.setItem('role', role);
        if(data.group) localStorage.setItem('group', data.group);

        //заносим данные в redux
        dispatch(
          saveUser({
            id: data.id,
            username: data.email, // Тут та же самая причина
            email: data.username, // 
            roles: role,
            group: data.group,
          })
        );
        dispatch(setIsAuth(true));
        clickLink(MAIN_URL);
      },
      (error) =>
        setMessage((prevState) => {
          return {
            ...prevState,
            message: error.message,
            success: false,
          };
        })
    );
  };
  return (
    <div className="auth max-w-[500px] mx-auto mt-[150px]">
      <div className="auth__inner rounded-[25px] bg-[#CDE1FF] px-[60px] pt-[70px] pb-[45px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <h1 className="auth__title text-[28px] text-center">Авторизация</h1>
        <div className="auth__text mb-[50px] mt-[3px] text-center">
          Заполните, чтобы войти
        </div>
        {!message.success && (
          <div className="auth__info max-w-full">
            <Form
              fields={authFields}
              buttonText="Войти"
              onClick={(obj) => handleLogin(obj.email, obj.password)}
            />
            <div className="auth__info-link text-center text-[14px]">
              Нет аккаунта? <br />
              <Link
                to={SINGUP_URL}
                className="auth__info-link__text pl-[3px] text-[#010F58] hover:text-[#4d69f3] duration-[200ms] ease-in-out"
              >
                Зарегистрируйтесь
              </Link>
            </div>
          </div>
        )}
        {message.message && (
          <div className="message__succes">{message.message}</div>
        )}
      </div>
    </div>
  );
}

export default Auth;
