import Footer from "./component/footer";
import Header from "./component/header";
import Main from "./component/main";
function App() {
  const name = 'FrontEnd 24';
  const arrImg = [
    {
      select:'header',
      link:'../assets/images/cach-tao-banner-xoay-vong.png'
    },
    {
      select:'main',
      link:'../assets/images/ed8b651755358377c3999c2abef61196.jpg_720x720q80.jpg_.webp'
    }
    
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* Render nội dung trong này ra*/}
        <Header name={name} images={arrImg}/>
        <Main />
        <Footer  name={name}/>
      </header> 
    </div>
  );
}

export default App;
