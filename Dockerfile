FROM node:15 as builder
WORKDIR /code/
COPY package.json package-lock.json /code/
RUN npm ci
COPY tsconfig.json /code/
COPY ./src/ /code/src/
RUN npm run build

FROM node:15
WORKDIR /code/
COPY --from=builder /code/package.json /code/package-lock.json /code/
RUN npm ci --only=prod
COPY --from=builder /code/build/ /code/build/
CMD ["node", "/code/build/index.js"]

