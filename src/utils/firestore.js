import { firestore, auth } from "../firebaseConfig";
import firebase from "firebase/app";
import { apiDomain } from "../config.js";
const USER_COLLECTION = "users";
const ANSWER_COLLECTION = "questionnaire";

const generateUserDocument = async (user, firstName, lastName, companyName, countryCode, visaStoreId, categoryCode, postalCode, merchantLat, merchantLong, merchantTerminalType, merchantLastTranDateRange) => {
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
        postalCode: postalCode,
        merchantTerminalType: merchantTerminalType,
        LastTranDateRange:merchantLastTranDateRange
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
  var overall_score = [];
  await firestore
    .collection("questionnaire")
    .doc(`responses`)
    .collection(userid)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const data2 = data.Overall_Recovery_Score;
        overall_score.push(data2);
      });
    });
  return overall_score;
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

const dynamicPredictor = async (userid) => {
  var overall_score = [];
  var param1 = [];
  var param2 = [];
  var param3 = [];
  var param4 = [];
  var param5 = [];
  var res = {
    overall: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    count: 0
  }
  var ref =  firestore
    .collection(ANSWER_COLLECTION)
    .doc(`responses`)
    .collection(userid);
  const latestsnap = await ref.orderBy("createdAt", "desc").limit(3).get();
  console.log(latestsnap);
  latestsnap.forEach((doc) => {
    const data = doc.data();
    const data1 = data.Overall_Recovery_Score;
    overall_score.push(data1);
    const data2 = data.SubScores_list[0];
    param1.push(data2);
    const data3 = data.SubScores_list[1];
    param2.push(data3);
    const data4 = data.SubScores_list[2];
    param3.push(data4);
    const data5 = data.SubScores_list[3];
    param4.push(data5);
    const data6 = data.SubScores_list[4];
    param5.push(data6);
  });
  if (
    overall_score[0] < overall_score[1] &&
    overall_score[1] < overall_score[2]
  ) {
    res["overall"]="yes"; res["count"] = res["count"] +1;
  }

  if (param1[0] < param1[1] && param1[1] < param1[2]) {
    res["one"]="yes"; res["count"] = res["count"] +1;
  }
  if (param2[0] < param2[1] && param2[1] < param2[2]) {
    res["two"]="yes"; res["count"] = res["count"] +1;
  }

  if (param3[0] < param3[1] && param3[1] < param3[2]) {
    res["three"]="yes"; res["count"] = res["count"] +1;
  }

  if (param4[0] < param4[1] && param4[1] < param4[2]) {
    res["four"]="yes"; res["count"] = res["count"] +1;
  }
  if (param5[0] < param5[1] && param5[1] < param5[2]) {
    res["five"]="yes"; res["count"] = res["count"] +1;
  }
  return res;
};

const averageCalculator = async (userid) => {
  var scores = [];
  var users = [];
  await firestore
    .collection("users")
    .get()
    .then((snapshot) => {
      var catCode = null;
      snapshot.forEach((doc) => {
        if (doc.id == userid) {
          const data = doc.data();
          catCode = data.categoryCode;
        }
      });
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.categoryCode == catCode) users.push(doc.id);
      });
    });
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getFullYear();
  for (var i = 0; i < users.length; i++) {
    await firestore
      .collection(ANSWER_COLLECTION)
      .doc(`responses`)
      .collection(users[i])
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.id == datetime) {
            const data = doc.data().Overall_Recovery_Score;
            scores.push(data);
          }
        });
      })
  }
  var avg = 0;
  for (var j = 0; j < scores.length; j++) {
    avg = avg + scores[j];
  }
  avg = avg / scores.length;
  return avg;
};

export {
  getUserDocument,
  generateUserDocument,
  storeRecoveryQuestionnaire,
  getAllOverallScore,
  getAllPartScore,
  getAnswersLatestAttempt,
  merchantMeasurement,
  merchantLocatorRegister,
  dynamicPredictor,
  averageCalculator
};
