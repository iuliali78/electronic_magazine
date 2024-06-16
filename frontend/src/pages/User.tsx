import React, { useState } from "react";
import PageWrapper from "components/ui/PageWrapper";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { defineRole } from "utils/other";
import USER_AVATAR from "assets/images/USER.png";
import { PenIcon } from "components/icons";
import { IPersonalInfo } from "models/user";
const User = () => {
  const { username, role, email } = useSelector(
    (state: RootState) => state.userSlice.user
  );

  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo[]>([
    {
      id: 0,
      header: "День рождения",
      value: null,
    },
    {
      id: 1,
      header: "Телефон",
      value: null,
    },
    {
      id: 2,
      header: "Почта (E-mail)",
      value: email ?? null,
    },
  ]);

  const setField = (field: string, value: string) => {
    setPersonalInfo((ps) => ({ ...ps, [field]: value }));
  };

  return (
    <PageWrapper customStyles classNames="max-w-[1240px] mx-auto">
      <div className="flex flex-col mt-[60px] h-full">
        <div className="bg-[#ACD0FF36] border-[1px] border-solid border-[#93A8F4] rounded-[15px]">
          <div className="flex flex-col px-[43px] py-[15px] items-center">
            <div className="flex justify-between items-center">
              <div className="w-[330px] h-[360px] rounded-[50px] flex justify-center items-center mr-[124px]">
                <img
                  src={USER_AVATAR}
                  className="object-cover"
                  alt="USER_AVATAR"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[30px] font-semibold text-center mb-[10px]">
                  {username}
                </h2>
                {defineRole(role!) !== "user" && (
                  <div className="text-center text-[24px] mb-[40px]">
                    {role}
                  </div>
                )}
                <div className="flex">
                  <div className="mr-[34px] text-[22px]">Кафедра:</div>
                  <div className="text-[22px]">
                    Автоматизированных и вычислительных систем
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[22px] border-b-[1px] border-solid border-[#93A8F4] mb-[8px] mt-[24px]">
            Дополнительная информация:
          </div>
          <div className="grid grid-cols-3 mt-[33px] px-[38px] w-full">
            {personalInfo.map((item) => (
              <React.Fragment key={item.id}>
                <div className="text-[22px]">{item.header}</div>
                <div className="text-[22px] grow">
                  <span className="block max-w-[800px] text-center">
                    {item.value ?? "-"}
                  </span>
                </div>
                <div className="flex justify-end items-center">
                  <span className="cursor-pointer rounded-[50px] hover:bg-[#000] hover:bg-opacity-10 p-[7px] transition duration-300 ease-in-out">
                    <PenIcon />
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default User;
