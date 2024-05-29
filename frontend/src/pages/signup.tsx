import Form from 'components/ui/Form';
import { initialValuesMessage } from 'const';
import { FormField } from 'models/form';
import React from 'react'
import { Link } from 'react-router-dom';
import { register } from 'services/user';

interface State {
    username: string;
    email: string;
    password: string;
    roles: string[];
    successful: boolean;
    message: string;
  }
  
  const initialValues = {
    username: "",
    email: "",
    password: "",
    roles: [],
    successful: false,
    message: "",
  };

  const signupFields: FormField[] = [
    {
      label: "Фамилия, Имя, Отчество",
      fieldType: "FIO",
      placeholder: "Введите ФИО",
    },
    {
      label: "Выберите тип пользователя",
      fieldType: "roleUser",
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
  const [user, setUser] = React.useState<State>(initialValues);
  const [message, setMessage] = React.useState(initialValuesMessage);
  
  const handleRegister = async (
    username: string,
    email: string,
    password: string,
    roles: string[]) => {

    setUser((prevState) => {
      return {
        ...prevState,
        message: "",
        successful: false,
      };
    });

    register(username, email, password, roles).then(
      (data) => {
        setUser((prevState) => {
          return {
            ...prevState,
            message: data.message,
            successful: true,
          };
        });
      },
      ({ response }) => {
        const resMessage =
          (response && response.data && response.data.message) ||
          response.message ||
          response.toString();
        console.log(response);

        setUser((prevState) => {
          return {
            ...prevState,
            message: resMessage,
            successful: false,
          };
        });
      }
    );
  };

  return (
    <div className="auth max-w-[500px] mx-auto mt-[150px]">
    <div className="signup__inner rounded-[25px] bg-[#CDE1FF] px-[60px] pt-[70px] pb-[45px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
      <h1 className="signup__title text-[28px] text-center">Регистрация</h1>
      <div className="signup__text mb-[50px] mt-[3px] text-center">
        Заполните, чтобы войти
      </div>
      {!message.success && (
        <div className="signup__info max-w-full">
          <Form
            fields={signupFields}
            buttonText="Зарегистрироваться"
            onClick={(obj) => handleRegister(obj.FIO, obj.email, obj.password, obj.roles)}
          />
        </div>
      )}
      {message.message && (
        <div className="message__succes">{message.message}</div>
      )}
    </div>
  </div>
  )
}

export default Signup;