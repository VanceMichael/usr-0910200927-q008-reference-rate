import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("健康检查", () => {
  it("返回稳定的 JSON", async () => {
    const response = await app.request("/health");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok" });
  });
});
