import React from 'react'

interface IProps {
    children: React.ReactNode;
    classNames?: string;
}

const PageWrapper: React.FunctionComponent<IProps> = ({classNames, children}) => {
    
    const addStyles = () => {
        if(classNames) {
            return classNames?.concat(" h-[100vh] flex justify-center items-center");
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