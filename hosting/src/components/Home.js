import React, { useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, firestore } from "../firebaseConfig";

const Home = ({ location }) => {
  const userid = location.state.userid
  const [firstName, setFirstName] = useState();

  useEffect(() => {
    async function fetchInfo() {
      const userRef = firestore.doc(`users/${userid}`);
      const snapshot = await userRef.get();
      const userData = snapshot.data();
      setFirstName(userData.firstName)
    }
    fetchInfo()
  });
  return (
    <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background: `url(${null || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300"
        ></div>
        <div className="md:pl-4">
          {}
          <h3 className="italic">{firstName}</h3>
        </div>
      </div>
      <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { auth.signOut() }}>Sign out</button>
    </div>
  )
};
export default Home;