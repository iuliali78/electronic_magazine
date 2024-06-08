import PageWrapper from "components/ui/PageWrapper";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { splitUsernameToFio } from "utils/other";
import USER_AVATAR from 'assets/images/USER.png';

type TConvertedInfoUser = {
  [key: string]: any;
};

const User = () => {
  const { id, email, isAuth, username, ...restInfo } = useSelector(
    (state: RootState) => state.userSlice.user
  );

  // Данные пользователя для отображения в личном кабинете. Модели, в котором данные хранятся в сторе
  // и отображаются, отличаются, поэтому их нужно преобразовать перед рендером
  const convertedInfoUser: TConvertedInfoUser = Object.assign({}, splitUsernameToFio(username!), restInfo);

  return (
    <PageWrapper>
      <div className="bg-[#ACD0FF36] border-[1px] border-solid border-[#93A8F4] rounded-[15px]">
        <div className="flex flex-col pl-[43px] pr-[165px] py-[25px] items-center">
          <div className="flex justify-between items-center mb-[86px]">
            <div className="w-[380px] h-[420px] border-[1px] border-solid border-[#93A8F4] rounded-[50px] flex justify-center items-center mr-[124px] p-[20px] bg-[#FFFFFF]">
              <img src={USER_AVATAR} className="object-cover" alt="USER_AVATAR" />
            </div>
            <ul>
              {Object.keys(convertedInfoUser).map((keyInfoObj, index) => {
                return (
                  convertedInfoUser[keyInfoObj] && (
                    <li
                      key={index}
                      className="px-[180px] py-[5px] border-[1px] border-solid border-[#93A8F4] bg-[#FFFFFF] rounded-[10px] mb-[15px] last:mb-0"
                    >
                      {convertedInfoUser[keyInfoObj]}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
          <div>
            <p>Описание</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default User;
