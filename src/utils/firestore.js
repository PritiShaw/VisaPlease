import { firestore, auth } from "../firebaseConfig";
import firebase from "firebase/app";
import { apiDomain } from "../config.js";
const USER_COLLECTION = "users";
const ANSWER_COLLECTION = "questionnaire";

const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
};

const getUserDocument = async (userid) => {
  const userRef = firestore.doc(`users/${userid}`);
  userRef.get().then( async (doc) => {
    let response = await doc.data()
    console.log(response)
    return response
  }).catch(function (error) {
    console.log(error)
    return undefined
  });
};


const storeRecoveryQuestionnaire = async (userid, data) => {
  const time = new Date();
  const userRef = firestore.doc(`${ANSWER_COLLECTION}/responses/${userid}/${time.getYear() + 1900}/${time.getMonth() + 1}/${time.getDate()} ${time.toLocaleTimeString("en-US")}`);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      await userRef.set({ ...data, createdAt: timestamp() });
      alert("Saved");
      return true;
    } catch (error) {
      console.error("Error updating user document", error);
      alert("Failed to save, try again");
      return false;
    }
  }
};

//Returns a list of overall scores for all attempts

const getAllOverallScore = async (userid) => {
  firestore
    .collection(ANSWER_COLLECTION)
    .doc(`responses`)
    .collection(userid)
    .get()
    .then((snapshot) => {
      const overall_score = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const data2 = data.overall_score;
        overall_score.push(data2);

        return overall_score;
      });
    });
};

//Returns an array of arrays of parameter scores for all attempts
const getAllPartScore = async (userid) => {
  firestore
    .collection(ANSWER_COLLECTION)
    .doc(`responses`)
    .collection(userid)
    .get()
    .then((snapshot) => {
      // console.log(snapshot);
      const score = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const data2 = data.partscore;

        score.push(data2);
        console.log("hello");
        return score;
      });
    });
};

//Function to return the answers of the users most recent attempt. To be used to fetch the answers from the database and calculate the scores.
const getAnswersLatestAttempt = async (userid) => {
  var latestAnswers = [];
  var ref = firestore
    .collection(ANSWER_COLLECTION)
    .doc(`responses`)
    .collection(userid);
  const latestsnap = await ref.orderBy("createdAt", "desc").limit(1).get();
  console.log(latestsnap);
  latestsnap.forEach((doc) => {
    latestAnswers = doc.data();
    // latestAnswers.push(data);
    console.log(latestAnswers);
    return latestAnswers;
  });
};
// .get()
// .then((snapshot) => {
//   // console.log(snapshot);
//   const score = [];
//   snapshot.docChanges().forEach(function (change) {
//     if (change.type === "added") {
//       console.log(change.doc.data);
//     }
//   });
// });
//};

const merchantMeasurement = async (userid) => {
  const data = await getUserDocument(userid);
  console.log(data,1)
  if (data == undefined)
    return undefined

  const storeID = data["visaStoreId"];
  const categoryCode = data["categoryCode"];
  const companyName = data["companyName"];
  const countryCode = data["countryCode"];
  fetch(apiDomain + "/api/merchantMeasurement", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      merchantCountryCode: countryCode,
      merchantCategoryCode: categoryCode,
    }
    )
  }).then(response => {
    console.log(response.json())
    return response.json();
  })
    .then((data) => {
      console.log(JSON.stringify(data))

    })
};


export {
  getUserDocument,
  generateUserDocument,
  storeRecoveryQuestionnaire,
  getAllOverallScore,
  getAllPartScore,
  getAnswersLatestAttempt,
  merchantMeasurement
};
