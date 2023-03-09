import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "src/firebase";

export async function FETCH_TODOS({ commit }) {
  const collectionQuery = query(collection(db, "groupsTodos"));
  try {
    await onSnapshot(collectionQuery, (querySnapshot) => {
      const fbGroups = [];

      querySnapshot.forEach((doc) => {
        const group = {
          id: doc.id,
          title: doc.data().title,
          childrens: doc.data().childrens,
        };

        fbGroups.push(group);
      });

      commit("UPDATE_GROUPS_TODOS", fbGroups);
    });
  } catch (e) {}
}
