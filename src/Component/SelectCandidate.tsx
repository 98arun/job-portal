import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SelectedCandidate = () => {
  const [selectProfile, setSelectProfile] = useState([]);

  const _getSelectedCandidateProfile = () => {
    const getSelectData = localStorage.getItem("selectList");
    if (!getSelectData) {
      return;
    }
    const selectList = JSON.parse(getSelectData || "[]");
    setSelectProfile(selectList);
  };
  const _handleRemoveProfile = () => {
    localStorage.removeItem("selectList");
  };

  useEffect(() => {
    _getSelectedCandidateProfile();
  }, []);
  return (
    <>
      <div>
        <h2 style={{ margin: "40px" }}>Selected Candidate List</h2>
        <Link to={`/`}>
          <button className="candidates-btn" onClick={_handleRemoveProfile}>
            Remove Profiles
          </button>
        </Link>
      </div>
      <div className="profileList">
        {selectProfile.map((items: any, index: any) => {
          return (
            <div key={index} style={{ margin: "20px" }}>
              <img
                src={items.data.Image}
                alt={items.name}
                className="profileList-img"
              />
              <h3 className="profileList-h3">{items.data.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectedCandidate;
