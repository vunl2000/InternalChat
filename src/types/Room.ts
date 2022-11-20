export interface Room {
  _id: string;
  name: string;
  createdAt: string;
  image: string;
  admin_id: string;
  latest_message: {
    text: string;
    createdAt: string;
  };
  member: [string];
  public: boolean;
}
