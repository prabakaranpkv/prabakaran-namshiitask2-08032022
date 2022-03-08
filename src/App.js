import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";

import Content from "./components/Content";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Topbar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
