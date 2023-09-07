import { setActivePinia, createPinia } from "pinia";
import { useHeadphones } from "../HeadphonesData";

describe("", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("sent bag data is saved correctly", () => {
    const Headphones = useHeadphones();
    expect(Headphones.addBag("forExample")).toMatch(/forExample/);
  });

  it("sent bag data is deleted correctly", () => {
    const Headphones = useHeadphones();
    Headphones.addBag("forExample");
    expect(Headphones.deleteBag("forExample")).toBeUndefined();
  });

  it("function tooglebag, add data correctly", () => {
    const Headphones = useHeadphones();
    expect(Headphones.toogleBag("forExample")).toMatch(/forExample/);
  });

  it("function tooglebag, delete data correctly", () => {
    const Headphones = useHeadphones();
    Headphones.toogleBag("forExample");
    expect(Headphones.toogleBag("forExample")).toBeUndefined();
  });

  it("function addFavorites, add data correctly", () => {
    const Headphones = useHeadphones();
    expect(Headphones.addFavorites("forExample")).toMatch(/forExample/);
  });

  it("function addFavorites, delete data correctly", () => {
    const Headphones = useHeadphones();
    Headphones.addFavorites("forExample");
    expect(Headphones.addFavorites("forExample")).toBeUndefined();
  });
});
