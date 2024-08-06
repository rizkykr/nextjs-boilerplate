import { faker } from "@faker-js/faker";

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
  };
}
export function fakePost() {
  return {
    title: faker.lorem.words(2),
    content: faker.lorem.words(20),
    description: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePostComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(2),
    content: faker.lorem.words(20),
    description: faker.lorem.words(5),
    published: 0,
    authorId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
