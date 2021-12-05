import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UsersProfile = () => {
  const location = useLocation();
  const { items } = location.state;

  const _handleSelectProfile = (data: any) => {
    if (localStorage.getItem("selectList") == null) {
      localStorage.setItem("selectList", "[]");
    }
    let selectProfileData = JSON.parse(
      localStorage.getItem("selectList") || "[]"
    );

    const selectProfile = {
      data,
    };
    selectProfileData.push(selectProfile);
    localStorage.setItem("selectList", JSON.stringify(selectProfileData));
  };

  const _handleRejectProfile = (data: any) => {
    if (localStorage.getItem("rejectList") == null) {
      localStorage.setItem("rejectList", "[]");
    }
    let rejectProfileData = JSON.parse(
      localStorage.getItem("rejectList") || "[]"
    );

    const rejectProfile = {
      data,
    };
    rejectProfileData.push(rejectProfile);
    localStorage.setItem("rejectList", JSON.stringify(rejectProfileData));
  };
  return (
    <>
      <div className="user-container">
        <img
          src={items.Image}
          alt={items.name}
          style={{ width: "400px", height: "400px" }}
        />
        <h2 style={{ fontSize: 30, marginBottom: 10 }}>{items.name} </h2>
        <div>
          <Link to={`/`}>
            <button
              className="user-btn"
              onClick={(e) => _handleSelectProfile(items)}
            >
              Select
            </button>
          </Link>
          <Link to={`/`}>
            <button
              className="user-btn"
              style={{ backgroundColor: "red" }}
              onClick={() => _handleRejectProfile(items)}
            >
              Reject
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UsersProfile;
