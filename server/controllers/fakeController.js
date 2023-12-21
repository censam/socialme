import { faker } from "@faker-js/faker";

import Post from "../models/Post.js";

import User from "../models/User.js";

export const createFakePost = async (count) => {
 const newPost = new Post({
  userId: faker.database.mongodbObjectId(),
  content: faker.word.words({ count: { min: 15, max: 20 } }),
  picture: faker.image.url(80, 150),
  likes: {},
  comments: {},
 });

 await newPost.save();
};

export const POSTS = faker.helpers.multiple(createFakePost, {
 count: 5,
});

export const createFakeUser = async (count) => {
 console.log("req.body USER");
 const newUser = new User({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  picture: faker.image.url(80, 150),
  email: faker.internet.email(),
  password: faker.internet.password(),
  friends: {},
  location: faker.location.streetAddress({ useFullAddress: true }),
  occupation: faker.person.bio(),
 });

 await newUser.save();
};

export const USERS = faker.helpers.multiple(createFakeUser, {
 count: 5,
});
