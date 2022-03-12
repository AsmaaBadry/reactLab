import { useState, useEffect } from "react";
import UserData from "./../components/UserData/UserData";

export default function FunctionalComponentExample() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "Marina",
    title: "Frontend Developer",
    tools: ["Angular", "React"],
  });
  const [name, setName] = useState("Ahmed");

  const changeName = () => {
    setUserDetails({
      ...userDetails,
      name: "Ahmed",
    });
  };

  useEffect(() => {
    console.log("DID MOUNT");
    return () => {
      console.log("DESTROY");
    };
  }, []);

  useEffect(() => {
    console.log("DID UPDATE");
  }, [userDetails]);

  return (
    <>
      <h1>Hello From Functional Component</h1>
      <h2>Username : {userDetails.name}</h2>
      <h2 className={`${isAdmin ? "text-danger" : "text-success"}`}>
        Title : {userDetails.title}
      </h2>
      <h3>Candidate : {name}</h3>
      <UserData
        username={userDetails.name}
        userJobTitle={userDetails.title}
        tools={userDetails.tools}
      />
      {/* {isAdmin ? (
        <button className="btn btn-primary" onClick={() => changeName()}>
          Change username
        </button>
      ) : (
        <h6 className="text-danger">You don't have permission</h6>
      )} */}

      {isAdmin && (
        <button className="btn btn-primary" onClick={() => changeName()}>
          Change username
        </button>
      )}
    </>
  );
}
