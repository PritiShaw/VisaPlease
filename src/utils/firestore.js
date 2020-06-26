import { firestore, auth } from "../firebaseConfig";

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

const storeRecoveryQuestionnaire = async (userid, data, timestamp) => {
  const userRef = firestore
    .collection(ANSWER_COLLECTION)
    .doc("abc")
    .collection(userid)
    .doc(timestamp);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      await userRef.set(data);
      alert("Saved");
      return true;
    } catch (error) {
      console.error("Error updating user document", error);
      alert("Failed to save");
      return false;
    }
  }
};

const getAllOverallScore = async (userid) => {
  firestore
    .collection(ANSWER_COLLECTION)
    .doc(`abc`)
    .collection(userid)
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      const overall_score = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const data2 = data.overall_score;
        overall_score.push(data2);
        console.log(overall_score);
      });
    });
};

export { generateUserDocument, storeRecoveryQuestionnaire, getAllOverallScore };
