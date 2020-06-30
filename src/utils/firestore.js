import { firestore, auth } from "../firebaseConfig";
import firebase from "firebase/app";
import { apiDomain } from "../config.js";
const USER_COLLECTION = "users";
const ANSWER_COLLECTION = "questionnaire";

const generateUserDocument = async (user, firstName, lastName, companyName, countryCode, visaStoreId, categoryCode, postalCode, merchantLat, merchantLong) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        email : email,
        latitude: merchantLat,
        longitude: merchantLong,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        countryCode: countryCode,
        visaStoreId: visaStoreId,
        categoryCode: categoryCode,
        postalCode: postalCode
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
};

const getUserDocument = async (userid) => {
  const userRef = firestore.doc(`users/${userid}`);
  let ref = await userRef.get();
  try {
    return ref.data();
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
};

const storeRecoveryQuestionnaire = async (userid, data) => {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getFullYear();
  console.log(datetime);
  const userRef = firestore.doc(
    `${ANSWER_COLLECTION}/responses/${userid}/${datetime}`
  );
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const snapshot = await userRef.get();

  try {
    await userRef.set({ ...data, createdAt: timestamp() });
    alert("Saved");
    return true;
  } catch (error) {
    console.error("Error updating user document", error);
    alert("Failed to save, try again");
    return false;
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
        const data2 = data.Overall_Recovery_Score;
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
        const data2 = data.SubScores_list;

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

// Get salesVolumeGrowthMoM of merchant
const merchantMeasurement = async (userid) => {
  var result;
  let data = await getUserDocument(userid);
  if (data == undefined) return undefined;

  const categoryCode = data["categoryCode"];
  const countryCode = data["countryCode"];
  await fetch(apiDomain + "/api/merchantMeasurement", {
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
    return response.json();
  })
    .then((data) => {
      if ("response" in data) {
        result = data["response"]["responseData"][0]["salesVolumeGrowthMoM"];
      }
      else {
        result = undefined;
      }
    })
  return result;
};

const merchantLocatorRegister = async (c_code, m_name, m_postalCode) => {

  const countryCode = c_code;
  const merchantName = m_name;
  const postalCode = m_postalCode;
  const radius = "100";
  const radiusUnit = "M";

  let response = await fetch(apiDomain + "/api/merchantLocatorRegister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      merchantCountryCode: countryCode,
      merchantName: merchantName,
      merchantPostalCode: postalCode,
      distance: radius,
      distanceUnit: radiusUnit

    }
    )
  })
  if (response != undefined)
    return response.json();
  else
    return undefined
};


export {
  getUserDocument,
  generateUserDocument,
  storeRecoveryQuestionnaire,
  getAllOverallScore,
  getAllPartScore,
  getAnswersLatestAttempt,
  merchantMeasurement,
  merchantLocatorRegister
};
