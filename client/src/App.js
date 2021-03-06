import "./App.css";
import { Route, Routes } from "react-router-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { CreateForm } from "./components/Form/CreateForm";
import { LandingPage } from "./components/Landing/LandingPage";
import { Home } from "./components/Home/Home";
import { SearchScreen } from "./components/SearchScreen/SearchScreen";
import { PokemonScreen } from "./components/PokemonScreen/PokemonScreen";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/pokemon" element={<PokemonScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<CreateForm />} />
          <Route path="search" element={<SearchScreen />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
