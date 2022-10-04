import "./App.css";
import Header from "./component/header";

function App() {
  const menuHeader = [
    { title: "Trang chủ", link: "#" },
    { title: "Sản Phẩm", link: "#" },
    { title: "Giới thiệu", link: "#" },
    { title: "Tin tức", link: "#" },
  ];
  const cardItem = [
    {name:'Đọc để trưởng thành',
    src:''}
  ]
  return (
    <>
      <div className="header">
        <Header menu={menuHeader} />
      </div>
    </>
  );
}

export default App;
