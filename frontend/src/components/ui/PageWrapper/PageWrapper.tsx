import React from 'react'

interface IProps {
    classNames: string;
    children: React.ReactNode;
}

const PageWrapper: React.FunctionComponent<IProps> = ({classNames, children}) => {
    
    const addStyles = () => {
        return classNames.concat(" h-[100vh] flex justify-center items-center");
    }
  
    return (
    <div className={addStyles()}>
        {children}
    </div>
  )
}

export default PageWrapper