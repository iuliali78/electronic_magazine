import { FormField } from "models/form";
import { useNavigate } from "react-router-dom";
import { register } from "services/userServise";
import Form from "components/ui/Form";
import { userTypes } from "const";
import { defineRole } from "utils/other";

const signupFields: FormField[] = [
  {
    id: 0,
    label: "Фамилия, Имя, Отчество",
    fieldType: "FIO",
    placeholder: "Введите ФИО",
  },
  {
    id: 1,
    label: "Выберите тип пользователя",
    fieldType: "roleUser",
    fieldComplextyType: "singleSelect",
    options: userTypes.options,
    placeholder: "Выберите тип",
  },
  {
    id: 2,
    label: "Придумайте логин или введите почту",
    fieldType: "email",
    placeholder: "Введите email",
  },
  {
    id: 3,
    label: "Придумайте пароль",
    fieldType: "password",
    inputType: "password",
    placeholder: "Введите пароль",
  },
  {
    id: 4,
    label: "Подтвердите пароль",
    fieldType: "confirmPassword",
    inputType: "password",
    placeholder: "Повторите пароль",
  },
];

const Signup = () => {
  const navigate = useNavigate();

  const handleRegister = (
    email: string,
    username: string,
    password: string,
    role: string
  ) => {
    return register(email, username, password, [defineRole(role)]).then((res) =>
      navigate("/signin")
    );
  };

  return (
    <div className="signup max-w-[500px] mx-auto my-[20px]">
      <div className="signup__inner rounded-[25px] bg-[#CDE1FF] px-[60px] pt-[70px] pb-[45px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <h1 className="signup__title text-[28px] text-center">Регистрация</h1>
        <div className="signup__text mb-[50px] mt-[3px] text-center">
          Заполните, чтобы зарегистрироваться
        </div>
        <div className="signup__info max-w-full">
          <Form
            fields={signupFields}
            buttonText="Зарегистрироваться"
            onClick={(obj) =>
              handleRegister(obj.email, obj.FIO, obj.password, obj.roleUser.text)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
