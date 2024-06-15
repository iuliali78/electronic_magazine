import PageWrapper from "components/ui/PageWrapper";
import { useNavigate } from "react-router-dom";
import VTSU_LOGO from "../assets/images/VSTU-LOGO.png";
import { LIST_DEPARTMENTS_URL } from "const";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col max-w-[1586px] max-[1600px]:max-w-[1350px]">
        <div className="flex flex-col text-[33px] text-[#D1AF69] items-center my-[10px] max-[1600px]:text-[30px]">
          <h1>Воронежский Государственный Технический Университет</h1>
          <h2>
            Факультет информационных технологий и компьютерной безопасности
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center mt-[55px] mr-[25px]">
            <div className="text-[45px] mb-[38px] text-center whitespace-nowrap max-[1600px]:text-[35px]">
              “Электронный журнал”
              <br />
              поможет вам управлять учебным процессом!
            </div>
            <p className="text-[28px] mb-[92px] text-center max-w-[1050px] max-[1600px]:text-[20px] max-[1600px]:mb-[37px] max-[1620px]:max-w-[1060px]">
              Данный информационный веб-сервис предназначен для отслеживания
              посещаемости и успеваемости студентов факультета.
              <br />
              Все данные доступны в удобном онлайн формате
            </p>
            <button
              type="button"
              className="px-[30px] py-[12px] border-[1px] border-[#93A8F4] border-solid bg-[#FFFFFF] rounded-[15px] text-[40px] max-[1600px]:text-[30px] max-[1600px]:px-[25px] max-[1600px]:py-[7px]"
              onClick={() => navigate(LIST_DEPARTMENTS_URL)}
            >
              Перейти к журналу
            </button>
          </div>
          <div className="w-[511px] h-[649px]">
            <img className="object-cover" src={VTSU_LOGO} alt="VTSU" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
