import { sum } from "./index.js";
import { assertEquals } from "testing/assert_equals.ts";

Deno.test("sum", () => {
  const result = sum(1, 2);
  assertEquals(result, 3);
});
