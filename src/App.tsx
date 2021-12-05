import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import ProfileList from "./Component/ProfileList";
import RejectCandidate from "./Component/RejectCandidate";
import SelectCandidate from "./Component/SelectCandidate";
import UsersProfile from "./Component/UsersProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/shortlisted" element={<SelectCandidate />} />
          <Route path="/rejected" element={<RejectCandidate />} />
          <Route path="/:id" element={<UsersProfile />} />
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
