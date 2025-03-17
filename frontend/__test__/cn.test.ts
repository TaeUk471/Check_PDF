import { cn } from "@utils/cn";

describe("cn utility function", () => {
  it("should handle single class name", () => {
    expect(cn("class1")).toBe("class1");
  });

  it("should merge multiple class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should ignore undefined or null inputs", () => {
    expect(cn("class1", undefined, null, "class2")).toBe("class1 class2");
  });

  it("should handle empty input gracefully", () => {
    expect(cn()).toBe("");
  });

  it("should handle conflicting Tailwind classes", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});
