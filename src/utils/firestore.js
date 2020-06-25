import { firestore } from "../firebaseConfig"

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
}


const storeRecoveryQuestionnaire = async (userid, data) => {
  const userRef = firestore.doc(`questionnaire/${userid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      await userRef.set(data);
      alert("Saved");
      return true
    } catch (error) {
      console.error("Error updating user document", error);
      alert("Failed to save")
      return false
    }
  }
}
export { generateUserDocument, storeRecoveryQuestionnaire }