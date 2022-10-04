import React from "react";

const Header = ({ name, images }) => {
  console.log(images);
  return (
    <React.Fragment>
      {/* toán tử 3 ngôi a ? b: c;
      nếu a mà đúng trả về b, sai trả về c
       */}
      {/* {images ? "tồn tại" : "không tồn tại"} */}
      {images &&
        images.map((item, index) => {
          // console.log(item, index);
          return (
            <div key={index} className="box-img">
              {item.select === "header" && (
                <>
                  <img src={item.link} />
                </>
              )}
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default Header;
