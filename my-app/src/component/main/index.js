const Main = () => {
    // trường hợp ko có tham số
    const onOpen = (message) => {
        alert(message)
    }
    const onSubmit = (e) => {
        console.log(e)
        console.log(this)
        console.log(e.target);
    }
  return (
    <>
      <button onClick={()=>onOpen('Here We Go')} type="">
        Có tham số
      </button>
      <button onClick={onSubmit} type="">Có tham số là Event</button>
      {/* <button onClick = {() => alert('Welcome)}> Click me</button> */}
    </>
  );
};
export default Main;
