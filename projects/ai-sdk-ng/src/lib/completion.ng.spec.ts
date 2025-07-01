import { createTestServer } from "@ai-sdk/provider-utils/test";
import { Completion } from "./completion.ng";

createTestServer({});

describe("Completion", () => {
  it("starts", () => {
    expect(1).toBe(1);
  });

  it("initialises", () => {
    const completion = new Completion();
    expect(completion.api).toBe("/api/completion");
    expect(completion.completion).toBe("");
    expect(completion.input).toBe("");
    expect(completion.error).toBeUndefined();
    expect(completion.loading).toBe(false);
    expect(completion.id).toBeDefined();
  });

  it("sends queries", { timeout: 10_000 }, async () => {
    const completion = new Completion({
      api: "http://localhost:3010/api/completion",
    });
    await completion.complete("hi");
    console.log(completion.completion);
    console.log("Error", completion.error);

    expect(completion.completion).toBe("Hello, world.");
  });
});
