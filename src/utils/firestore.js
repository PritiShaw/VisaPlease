import { firestore, auth } from "../firebaseConfig";
import firebase from "firebase/app";
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
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
};

const getUserDocument = async (userid) => {
  const userRef = firestore.doc(`users/${userid}`);
  await userRef
    .get()
    .then(function (doc) {
      return doc.data();
    })
    .catch(function (error) {
      console.log(error);
      return undefined;
    });
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

export {
  getUserDocument,
  generateUserDocument,
  storeRecoveryQuestionnaire,
  getAllOverallScore,
  getAllPartScore,
  getAnswersLatestAttempt,
};
