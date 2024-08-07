import {} from "@prisma/client";
import { faker } from "@faker-js/faker";
import Decimal from "decimal.js";

export function fakeUser() {
  return {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: undefined,
    role: "user",
  };
}
export function fakePost() {
  return {
    title: faker.lorem.words(2),
    content: "<p>" + faker.lorem.words(20) + "</p>",
    description: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePostComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(2),
    content: "<p>" + faker.lorem.words(20) + "</p>",
    description: faker.lorem.words(5),
    published: 1,
    authorId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
