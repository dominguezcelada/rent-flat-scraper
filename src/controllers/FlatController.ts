import { GET, Path } from "typescript-rest";

@Path("/flat/")
export class FlatController {

  @Path("hello")
  @GET
  public async helloWorld(): Promise<string> {
    return "Hello World!";
  }
}
