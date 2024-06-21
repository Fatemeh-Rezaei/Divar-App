import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";

const style = { display: "flex" };

function HomePage() {
  return (
    <div style={style}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default HomePage;
