import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RejectedCandidate = () => {
  const [rejectProfile, setRejectProfile] = useState([]);

  const _getRejectedCandidateProfile = () => {
    const getRejectData = localStorage.getItem("rejectList");
    const rejectList = JSON.parse(getRejectData || "[]");
    if (!getRejectData) {
      return;
    }
    setRejectProfile(rejectList);
  };
  const _handleRemoveProfile = () => {
    localStorage.removeItem("rejectList");
  };

  useEffect(() => {
    _getRejectedCandidateProfile();
  }, []);

  return (
    <>
      <div>
        <h2 style={{ margin: "40px" }}>Rejected Candidate List</h2>
        <Link to={`/`}>
          <button className="candidates-btn" onClick={_handleRemoveProfile}>
            Remove Profiles
          </button>
        </Link>
      </div>
      <div className="profileList">
        {rejectProfile.map((items: any, index: any) => {
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

export default RejectedCandidate;
