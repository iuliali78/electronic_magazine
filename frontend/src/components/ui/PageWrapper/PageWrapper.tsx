import React from 'react'

interface IProps {
    children: React.ReactNode;
    classNames?: string;
    customStyles?: boolean;
}

const PageWrapper: React.FunctionComponent<IProps> = ({classNames, children, customStyles}) => {
    
    const addStyles = () => {
        if(classNames && !customStyles) {
            return classNames?.concat(" h-[100vh] flex justify-center items-center");
        }
       
        if(customStyles) {
            return classNames || "";
        }

        return "h-[100vh] flex justify-center items-center";
    }
  
    return (
    <div className={addStyles()}>
        {children}
    </div>
  )
}

export default PageWrapper