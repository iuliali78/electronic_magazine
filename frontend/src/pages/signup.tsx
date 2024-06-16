import { FormField, ResultFormObj } from "models/form";
import { useNavigate } from "react-router-dom";
import { register } from "services/userServise";
import Form from "components/ui/Form";
import { groupsTypes, userTypes } from "const";
import { defineRole } from "utils/other";
import { useCallback, useState } from "react";
import FITKB_LOGO from "assets/images/FITKB-LOGO.png";

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
  const [fields, setFields] = useState<FormField[]>(signupFields);

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

  const handleChangeFields = useCallback((obj: ResultFormObj) => {
    console.log(obj);
    if (defineRole(obj.roleUser?.text) === "user") {
      setFields(
        fields.concat([
          {
            id: 5,
            label: "Выберите группу",
            fieldType: "group",
            fieldComplextyType: "singleSelect",
            options: groupsTypes.options,
            placeholder: "Выберите группу",
          },
        ])
      );
    } else setFields(signupFields);
  }, []);

  return (
    <div className="signup max-w-[500px] mx-auto my-[20px]">
      <div className="signup__inner rounded-[25px] bg-[#CDE1FF] px-[60px] pt-[20px] pb-[45px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center">
          <div>
            <img src={FITKB_LOGO} alt="logo" />
          </div>
          <h1 className="signup__title text-[28px] text-center">Регистрация</h1>
          <div className="signup__text mb-[50px] mt-[3px] text-center">
            Заполните, чтобы зарегистрироваться
          </div>
        </div>
        <div className="signup__info max-w-full">
          <Form
            fields={fields}
            buttonText="Зарегистрироваться"
            onChange={(obj) => handleChangeFields(obj)}
            onClick={(obj) =>
              handleRegister(
                obj.email,
                obj.FIO,
                obj.password,
                obj.roleUser.text
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
