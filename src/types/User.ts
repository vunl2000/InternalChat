export interface User {
  uid: string;
  createdAt: string;
  email: string;
  friendList: [string];
  fullName: string;
  gender: string;
  invatedBy: string;
  pendingFriends: [string];
  photoUrl: string;
  provider: any;
  username: string;
  sentFriendRequests: [string];
  code: string;
}
