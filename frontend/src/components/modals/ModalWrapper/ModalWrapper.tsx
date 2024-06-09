import { CloseIcon } from "components/icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisible } from "redux/slices/modalSlice";
import { RootState } from "redux/store";

const ModalWrapper = () => {
  const { isVisible, children, title, props } = useSelector(
    (state: RootState) => state.modalSlice
  );

  const dispatch = useDispatch();

  const Children = children;

  const closeModal = () => {
    dispatch(setIsVisible(false));
  }

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 backdrop-blur flex justify-center items-center" onClick={closeModal}>
          <div className="min-h-[200px] bg-[#D5E5FF] rounded-[15px] relative" onClick={e => e.stopPropagation()}>
            <h1 className="text-[#000] px-[70px] py-[15px] text-[25px]">{title}</h1>
            <span className="absolute top-[10px] right-[10px] cursor-pointer" onClick={closeModal}><CloseIcon/></span>
            <div className="mt-[30px]">
              {Children && <Children {...props} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWrapper;
