import { collection } from "firebase/firestore";
import { db } from "src/firebase";

export default function () {
  return {
    todoGroupsList: [],
    collectionRef: collection(db, "groupsTodos"),
  };
}
