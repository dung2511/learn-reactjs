import React from "react";


const Header = ({menu}) => {
    return(
        <>
        {menu && menu.map((item, index)=> {
            // console.log(item);
            return (
                
                <div key={index} className='header-item'>
                    <a href={item.link}>{item.title}</a>
                </div>
            )
        })}
        </>
    )
}

export default Header