import { options } from "@/options";
import { prisma } from "@/prisma";
import schema from "@/prisma/json-schema/json-schema.json";
import { createHandler } from "@sse-ui/neadmin/dist/appHandler";

const { run } = createHandler({
  apiBasePath: "/api/admin",
  options,
  prisma,
  schema,
});

export { run as DELETE, run as GET, run as POST };