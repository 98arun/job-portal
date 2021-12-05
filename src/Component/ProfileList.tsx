import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetRequest } from "../Utilites/Network";

const ProfileList = () => {
  const [profile, setProfile] = useState([]);

  const _fetchProfile = async () => {
    const apiResponse = await GetRequest(
      "http://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    );
    if (!apiResponse) {
      return;
    }
    let selectedData = JSON.parse(localStorage.getItem("selectList") || "[]");
    let rejectedData = JSON.parse(localStorage.getItem("rejectList") || "[]");

    if (selectedData.length === 0 && rejectedData.length === 0) {
      setProfile(apiResponse);
      return;
    }
    console.log("LN23", profile);

    const removeElement = [...selectedData, ...rejectedData];
    const arrayList = apiResponse.filter((e: any) => {
      return !removeElement.find((element) => element.data.id === e.id);
    });

    setProfile(arrayList);
  };
  console.log("LN31", profile);

  useEffect(() => {
    _fetchProfile();
  }, []);

  return (
    <>
      <h1 style={{ margin: "40px" }}> Candidates List</h1>
      <div className="profileList">
        {profile.map((items: any) => {
          return (
            <div key={items.id} style={{ margin: "20px" }}>
              <Link
                to={`/${items.id}`}
                state={{ items: items }}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={items.Image}
                  alt={items.name}
                  className="profileList-img"
                />
                <h3 className="profileList-h3">{items.name} </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfileList;
