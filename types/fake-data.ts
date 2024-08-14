import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    name: undefined,
    password: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: undefined,
    password: undefined,
    role: 'user',
  };
}
export function fakePost() {
  return {
    title: faker.lorem.words(5),
    content: undefined,
    description: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakePostComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    content: undefined,
    description: undefined,
    published: 0,
    authorId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
