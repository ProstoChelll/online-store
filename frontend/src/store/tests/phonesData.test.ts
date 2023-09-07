import { setActivePinia, createPinia } from "pinia";
import { usePhones } from "../phonesData";

describe("", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("sent bag data is saved correctly", () => {
    const phones = usePhones();
    expect(phones.addBag("forExample")).toMatch(/forExample/);
  });

  it("sent bag data is deleted correctly", () => {
    const phones = usePhones();
    phones.addBag("forExample");
    expect(phones.deleteBag("forExample")).toBeUndefined();
  });

  it("function tooglebag, add data correctly", () => {
    const phones = usePhones();
    expect(phones.toogleBag("forExample")).toMatch(/forExample/);
  });

  it("function tooglebag, delete data correctly", () => {
    const phones = usePhones();
    phones.toogleBag("forExample");
    expect(phones.toogleBag("forExample")).toBeUndefined();
  });

  it("function addFavorites, add data correctly", () => {
    const phones = usePhones();
    expect(phones.addFavorites("forExample")).toMatch(/forExample/);
  });

  it("function addFavorites, delete data correctly", () => {
    const phones = usePhones();
    phones.addFavorites("forExample");
    expect(phones.addFavorites("forExample")).toBeUndefined();
  });
});
