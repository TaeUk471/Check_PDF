import { Catch, ExceptionFilter } from "@nestjs/common";
import { GraphQLError } from "graphql";

@Catch(GraphQLError)
export class GraphQLErrorFilter implements ExceptionFilter {
  catch(exception: GraphQLError) {
    // const gqlHost = GqlArgumentsHost.create(host);
    // const ctx = gqlHost.getContext();

    console.error("GraphQL Error:", exception);

    return {
      message: exception.message || "Internal server error",
      path: exception.path || "Unknown",
      locations: exception.locations || [],
      extensions: exception.extensions || {},
    };
  }
}
