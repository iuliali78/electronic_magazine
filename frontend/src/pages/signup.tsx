import Form from "components/ui/Form";
import { defineRole } from "components/utils/signup";
import { FormField, IRoleUser } from "models/form";
import { useNavigate } from "react-router-dom";
import { register } from "services/user";

const signupFields: FormField[] = [
  {
    label: "Фамилия, Имя, Отчество",
    fieldType: "FIO",
    placeholder: "Введите ФИО",
  },
  {
    label: "Выберите тип пользователя",
    fieldType: "rolesUser",
    fieldComplextyType: "multiselect",
    placeholder: "Выберите тип",
  },
  {
    label: "Придумайте логин или введите почту",
    fieldType: "email",
    placeholder: "Введите email",
  },
  {
    label: "Придумайте пароль",
    fieldType: "password",
    inputType: "password",
    placeholder: "Введите пароль",
  },
  {
    label: "Подтвердите пароль",
    fieldType: "confirmPassword",
    inputType: "password",
    placeholder: "Повторите пароль",
  },
];

const Signup = () => {
  const navigate = useNavigate();

  const handleRegister = async (
    username: string,
    email: string,
    password: string,
    roles: IRoleUser[]
  ) => {
    const mappedRoles = roles.map((role) => defineRole(role.name));

    register(username, email, password, mappedRoles).then((res) =>
      navigate("/signin")
    );
  };

  return (
    <div className="auth max-w-[500px] mx-auto mt-[150px]">
      <div className="signup__inner rounded-[25px] bg-[#CDE1FF] px-[60px] pt-[70px] pb-[45px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <h1 className="signup__title text-[28px] text-center">Регистрация</h1>
        <div className="signup__text mb-[50px] mt-[3px] text-center">
          Заполните, чтобы зарегистрироваться
        </div>
        <div className="signup__info max-w-full">
          <Form
            fields={signupFields}
            buttonText="Зарегистрироваться"
            onClick={(obj) => handleRegister(obj.FIO, obj.email, obj.password, obj.rolesUser)}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
