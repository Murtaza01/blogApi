import { buildSchema } from "graphql";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("graphql-import-node/register");

const gqlSchema = require("./schema.gql");
const schema = buildSchema(gqlSchema.loc.source);

export default schema;
