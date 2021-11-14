import { rest } from "msw";

const urlApi = process.env.REACT_APP_API_URL_USER;
const urlApiPostLogin = `${urlApi}login`;

const user = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGZhZTg4YTliZjBmZTc3NzQxOTAxNSIsInVzZXJOYW1lIjoiU2VyZ2lvX2dsIiwiaWF0IjoxNjM2ODM1MTA1LCJleHAiOjE2MzY5MjE1MDV9.ejIxn2l8wYgGsn1BW-nhHRilfmD09tRaGJhtf8jVP1I",
};

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(user));
  }),
  rest.post(urlApiPostLogin, (req, res, ctx) => {
    return res(ctx.json(user));
  }),
];

export default handlers;
