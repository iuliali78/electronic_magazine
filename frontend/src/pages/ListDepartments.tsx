import { DownArrowIcon, RightArrowIcon } from "components/icons";
import PageWrapper from "components/ui/PageWrapper";
import { listDepartments, listGroupsDisciplines } from "data/staticData";
import { useState } from "react";

const ListDepartments = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeListDiscipline, setActiveListDiscipline] = useState<
    string | null
  >(null);

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

  return (
    <PageWrapper
      customStyles
      classNames="h-[100vh] flex justify-center items-start"
    >
      <div className="flex justify-between w-[1550px] max-[1800px]:w-[1350px] max-[1655px]:w-[1250px] mx-auto mt-[80px]">
        <ul className="mr-[150px] flex-[0_1_60%]">
          {listDepartments.map((item) => (
            <div
              key={item.id}
              className="flex items-center cursor-pointer"
              onClick={() => handleClickItem(item.id)}
            >
              <span>
                {item.id !== activeItem ? (
                  <RightArrowIcon />
                ) : (
                  <DownArrowIcon />
                )}
              </span>
              <li className="text-[22px] relative">
                {item.name}
                <ul
                  className={
                    item.id !== activeItem
                      ? "absolute top-[0] left-[45px] opacity-0 invisible z-[0] duration-[250ms]"
                      : "absolute top-[0] left-[45px] transform  duration-[250ms] translate-y-[70px] opacity-100 visible z-[1]"
                  }
                >
                  {item.groups.map((groupObj) => (
                    <li
                      key={groupObj.id}
                      className="py-[8px] text-[18px] px-[25px] bg-[#FFFFFF] rounded-[15px] border-[1px] border-solid border-[#93A8F4] mb-[5px] last:mb-0"
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
