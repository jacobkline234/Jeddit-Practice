export const users = [
  { userId: 1, username: "yiddyYaddy" },
  { userId: 2, username: "yiddiggyyadaggy" },
  { userId: 3, username: "yayaya" },
  { userId: 23, username: "simi" },
];
const subCommentsP1C1 = [
  {
    userId: 3,
    id: 1,
    content: "I agree!!!!",
  },
];
const post1Comments = [
  {
    userId: 2,
    id: 1,
    content: "wow, this is a cool website",
    subComments: subCommentsP1C1,
  },
  {
    userId: 3,
    id: 2,
    content: "wow, this is a cool website",
    subComments: [],
  },
  {
    userId: 23,
    id: 3,
    content: "wow, this is a cool website",
    subComments: [],
  },
];

const posts = [
  {
    userId: 1,
    id: 2,
    title: "Hello",
    body: "Hi My name is Jacob Kline and this is my website!!!",
    // comments: { post1Comments },
  },
];
export const database = {
  users: [
    {
      id: "1",
      username: "JOHNYBOBANNY",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "2",
      username: "SallyBOBALLY",
      name: "Sally",
      email: "sally@gmail.com",
      password: "bananas",
      entries: 0,
      joined: new Date(),
    },
  ],
  posts: posts,
};
