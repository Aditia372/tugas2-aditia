import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MyList } from "./components/MyList";

function App() {
  return (
    <div className="body">
      <Header/> 
      <MyList />
      <Footer/> 
    </div>
  );
}

export default App;
