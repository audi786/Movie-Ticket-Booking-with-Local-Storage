import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ThorSeat from "./pages/All_Movie_Seat/thor_seat";
import AvatarSeat from "./pages/All_Movie_Seat/avataarseat";
import VedSeat from "./pages/All_Movie_Seat/ved_seat";
import KgfSeat from "./pages/All_Movie_Seat/kgf_seat"; 
import PathaanSeat from "./pages/All_Movie_Seat/pathaanseat";
import KaalaSeat from "./pages/All_Movie_Seat/kaalaseat";
import TigerSeat from "./pages/All_Movie_Seat/tigerseat";
import MasterSeat from "./pages/All_Movie_Seat/masterseat";
import AppreciationPage from "./components/TThak";
import Registration from "./components/Register";
import Andr from "./components/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>        
          <Route path="//THOR" element={<ThorSeat />}></Route>
          <Route path="//AVATAR" element={<AvatarSeat />}></Route>
          <Route path="//VED" element={<VedSeat />}></Route>
          <Route path="//KGF" element={<KgfSeat/>}></Route>
          <Route path="//PATHAAN" element={<PathaanSeat />}></Route>
          <Route path="//KAALA" element={<KaalaSeat />}></Route>
          <Route path="//TIGER" element={<TigerSeat />}></Route>
          <Route path="/cancel" element={<Homepage />}></Route>
          {/* <Route path="/login" element={<Andr />}></Route> */}
          <Route path="/login" element={<Andr />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/thanks" element={<AppreciationPage/>}></Route>
          
          
          <Route path="//MASTER" element={<MasterSeat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// import Store from "./components/People";

// function App() {
//   return (
//     <div className="App">
//     <Store></Store>
//     </div>
//   );
// }

// export default App;
