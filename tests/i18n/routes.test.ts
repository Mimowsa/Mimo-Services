import { describe, expect, it } from "vitest";
import { getAlternatePathname, getRoute } from "@/app/i18n/routes";

describe("i18n routes", () => {
  it("returns localized routes", () => {
    expect(getRoute("home", "fr")).toBe("/");
    expect(getRoute("home", "en")).toBe("/en");
    expect(getRoute("projects", "fr")).toBe("/mes-projets");
    expect(getRoute("projects", "en")).toBe("/en/projects");
  });

  it("maps alternate pathnames", () => {
    expect(getAlternatePathname("/", "fr")).toBe("/en");
    expect(getAlternatePathname("/en", "en")).toBe("/");
    expect(getAlternatePathname("/mes-projets", "fr")).toBe("/en/projects");
    expect(getAlternatePathname("/en/projects", "en")).toBe("/mes-projets");
  });

  it("normalizes trailing slashes", () => {
    expect(getAlternatePathname("/en/", "en")).toBe("/");
    expect(getAlternatePathname("/contact/", "fr")).toBe("/en/contact");
  });
});
