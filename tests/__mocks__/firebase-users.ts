import { UserInfo as FirebaseUserInfo } from "firebase/auth";

export const mockFirebaseUsers: readonly FirebaseUserInfo[] = [
  {
    displayName: "Jane Doe",
    email: "jane.doe@test.com",
    phoneNumber: null,
    photoURL: null,
    providerId: "test",
    uid: "100",
  },
  {
    displayName: "John Doe",
    email: "john.doe@test.com",
    phoneNumber: null,
    photoURL: null,
    providerId: "test",
    uid: "200",
  },
];
