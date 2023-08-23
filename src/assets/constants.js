import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";

export const IMAGES = {
  user1,
  user2,
};

export const userPosts = [
  {
    imageSrc: IMAGES.user1,
    name: "Theresa Webb",
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emojiReaction: "👋",
    postedTime: "5mins ago",
    isEdited: "false",
  },
  {
    imageSrc: IMAGES.user2,
    name: "Marvin McKinney",
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emojiReaction: "😞",
    postedTime: "8mins ago",
    isEdited: "true",
  },
];
