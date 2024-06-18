import { DownArrowIcon, RightArrowIcon } from "components/icons";
import PageWrapper from "components/ui/PageWrapper";
import { JOURNAL_URL } from "const";
import { listDepartments, listGroupsDisciplines } from "data/staticData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveDiscipline } from "redux/slices/tableDataSlice";

const ListDepartments = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeListDiscipline, setActiveListDiscipline] = useState<string | null>(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Обработка клика по пункту из списка кафедр
  const handleClickItem = (id: number) => {
    if (id === activeItem) setActiveItem(null);
    else setActiveItem(id);
  };

  const handleClickGroup = (
    event: React.MouseEvent<HTMLLIElement>,
    relationId: string | null
  ) => {
    event.stopPropagation();

    if (relationId === activeListDiscipline) setActiveListDiscipline(null);
    else setActiveListDiscipline(relationId);
  };

  const handleClickDiscipline = (disciplineId: string, disciplineName: string) => {
    dispatch(setActiveDiscipline(disciplineName));
    navigate(JOURNAL_URL + "/" + disciplineId);
  }

  return (
    <PageWrapper
      customStyles
      classNames="h-[100vh] flex justify-center items-start"
    >
      <div className="flex justify-between w-[1550px] max-[1800px]:w-[1350px] max-[1655px]:w-[1250px] mx-auto mt-[80px]">
        <ul className="mr-[150px] flex-[0_1_60%] max-h-[600px] overflow-y-auto">
          {listDepartments.map((item) => (
            <div
              key={item.id}
              className="flex cursor-pointer"
              onClick={() => handleClickItem(item.id)}
            >
              <span className="mt-[20px]">
                {item.id !== activeItem ? (
                  <RightArrowIcon />
                ) : (
                  <DownArrowIcon />
                )}
              </span>
              <li className="text-[22px] relative mb-[50px]">
                {item.name}
                <ul
                  className={
                    item.id !== activeItem
                      ? "absolute flex items-center top-[0] left-[45px] opacity-0 invisible z-[0] duration-[250ms]"
                      : "absolute flex items-center top-[0] left-[45px] transform  duration-[250ms] translate-y-[70px] opacity-100 visible z-[1]"
                  }
                >
                  {item.groups.map((groupObj) => (
                    <li
                      key={groupObj.id}
                      className="py-[8px] text-[18px] px-[25px] bg-[#FFFFFF] rounded-[15px] border-[1px] border-solid border-[#93A8F4] mr-[10px] last:mr-0"
                      onClick={(e) =>
                        handleClickGroup(e, `${item.id}_${groupObj.id}`)
                      }
                    >
                      {groupObj.group}
                    </li>
                  ))}
                </ul>
              </li>
            </div>
          ))}
        </ul>
        <div className="flex-[0_0_40%]">
          {listGroupsDisciplines.map((groupDisciplines) => (
            <div
              className={
                groupDisciplines.groupId !== activeListDiscipline
                  ? "flex flex-col items-center opacity-0 invisible duration-[250ms] translate-y-[70px]"
                  : "flex flex-col items-center opacity-100 visible duration-[250ms] translate-y-[0]"
              }
            >
              <h2 className="text-[22px] mb-[30px]">Список дисциплин группы</h2>
              <div className="grid grid-cols-3 max-w-full gap-[10px]">
                {groupDisciplines.dicsiplines.map((disciplineObj) => (
                  <div
                    key={disciplineObj.id}
                    className="border-[1px] bg-[#ACD0FF8F] rounded-[15px] border-solid border-[#5972F7] p-[10px] flex justify-center items-center cursor-pointer hover:bg-[#5778f1] hover:text-[#FFFFFF] duration-[250ms] ease-in-out"
                    onClick={() => handleClickDiscipline(`${groupDisciplines.groupId}_${disciplineObj.id}`, disciplineObj.discipline)}
                  >
                    <span className="text-center">
                      {disciplineObj.discipline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ListDepartments;
