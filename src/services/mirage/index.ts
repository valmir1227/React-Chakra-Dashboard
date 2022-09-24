import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      aplication: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `Usuário${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },

        created_at() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 12);
    },

    routes() {
      this.namespace = "api";

      this.timing = 2000;

      this.get("/users", function (squema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = squema.all("user").length;

        const pageStart = Number(page - 1) * Number(per_page);

        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(squema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          { users }
        );
      });

      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}
