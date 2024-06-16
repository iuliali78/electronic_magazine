import React, { useState } from "react";
import PageWrapper from "components/ui/PageWrapper";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import USER_AVATAR from "assets/images/USER.png";
import { OkIcon, PenIcon } from "components/icons";
import { IPersonalInfo } from "models/user";
const User = () => {
  const { username, role, email } = useSelector(
    (state: RootState) => state.userSlice.user
  );

  const [activeEditField, setActiveEditField] = useState<number | null>(null);
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo[]>([
    {
      id: 0,
      type: "date",
      header: "День рождения",
      value: null,
    },
    {
      id: 1,
      type: "text",
      header: "Телефон",
      value: null,
    },
    {
      id: 2,
      type: "text",
      header: "Почта (E-mail)",
      value: email ?? null,
    },
  ]);

  const setField = (id: number, value: string) => {
    setPersonalInfo((ps) =>
      ps.map((item) => (item.id === id ? { ...item, value: value } : item))
    );
  };

  const clickEditInfo = (id: number) => {
    if(activeEditField === id) setActiveEditField(null);
    else setActiveEditField(id);
  };

  return (
    <PageWrapper customStyles classNames="max-w-[1240px] mx-auto">
      <div className="flex flex-col mt-[60px] max-[1600px]:mt-[30px] h-full">
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
                <h2 className="text-[30px] font-semibold text-center mb-[10px] max-[1600px]:text-[26px]">
                  {username}
                </h2>
                <div className="text-center text-[24px] mb-[40px] max-[1600px]:text-[20px]">{role}</div>
                <div className="flex">
                  <div className="mr-[34px] text-[22px] max-[1600px]:text-[20px]">Кафедра:</div>
                  <div className="text-[22px] max-[1600px]:text-[20px]">
                    Автоматизированных и вычислительных систем
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[22px] border-b-[1px] border-solid border-[#93A8F4] mb-[8px] mt-[24px] max-[1600px]:text-[18px]">
            Дополнительная информация:
          </div>
          <div className="grid grid-cols-3 grid-rows-[50px_50px_50px] mt-[33px] px-[38px] w-full">
            {personalInfo.map((item) => (
              <React.Fragment key={item.id}>
                <div className="text-[22px] max-[1600px]:text-[18px]">{item.header}</div>
                <div className="text-[22px] max-[1600px]:text-[18px] grow">
                  {item.id === activeEditField ? (
                    <input
                      className="outline-none w-full p-[5px] rounded-[5px] text-[22px]"
                      type={item.type}
                      value={item.value || ""}
                      onChange={(e) => setField(item.id, e.target.value)}
                    />
                  ) : (
                    <span className="block max-w-[800px] text-center">
                      {item.value ?? "-"}
                    </span>
                  )}
                </div>
                <div className="flex justify-end items-center">
                  <span
                    className="cursor-pointer rounded-[50px] hover:bg-[#000] hover:bg-opacity-10 p-[7px] transition duration-300 ease-in-out"
                    onClick={() => clickEditInfo(item.id)}
                  >
                    {item.id === activeEditField ? <OkIcon/> : <PenIcon />}
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
