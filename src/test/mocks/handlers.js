import { rest } from "msw";

const urlApi = process.env.REACT_APP_API_URL_USER;
const urlApiPostLogin = `${urlApi}login`;
const urlApiGetMembers = `${urlApi}members`;
const urlApiPostregister = `${urlApi}register`;

const user = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGZhZTg4YTliZjBmZTc3NzQxOTAxNSIsInVzZXJOYW1lIjoiU2VyZ2lvX2dsIiwiaWF0IjoxNjM2ODM1MTA1LCJleHAiOjE2MzY5MjE1MDV9.ejIxn2l8wYgGsn1BW-nhHRilfmD09tRaGJhtf8jVP1I",
};

const members = [
  {
    username: "Calimero",
    age: 33,
    bio: "Me gusta hacer rimas, soy el más grande, y pa cosas grandes aquí tengo mi fiambre",
    image: "url",
    imageLocal: "url",
    name: "Carlos Pajares",
    id: "618ec7799712904c2b990e81",
  },
  {
    username: "loling",
    name: "Lola",
    age: 25,
    bio: "Vue is my passion",
    image: "url",
    imageLocal: "url",
    id: "618f8beafddb96a60f98db55",
  },
];

const handlers = [
  rest.get(urlApiGetMembers, (req, res, ctx) => {
    return res(ctx.json(members));
  }),
  rest.post(urlApiPostLogin, (req, res, ctx) => {
    return res(ctx.json(user));
  }),
  rest.post(urlApiPostregister, (req, res, ctx) => {
    return res(ctx.json(user));
  }),
];

export default handlers;
