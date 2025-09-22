import ky from "ky";

export const fetcher = ky.create({
  hooks: {
    beforeRequest: [
      (request) => {
        const username = "user";
        const password = "Goldsho1!";

        request.headers.set(
          "Authorization",
          `Basic ${btoa(`${username}:${password}`)}`
        );
      },
    ],
  },
});
