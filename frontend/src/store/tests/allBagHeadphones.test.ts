import { setActivePinia, createPinia } from "pinia";
import { useAllBagHeadphones } from "../allBagHeadphones";

const data = {
  img: "forExample",
  name: "forExample",
  rating: 0,
  cost: 0,
  oldCost: 0,
  id: "forExample",
  isOnBag: false,
  quantity: 0,
  class: "forExample",
  allCost: 0,
};

describe("", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("sent data is saved correctly", () => {
    const AllBagHeadphones = useAllBagHeadphones();
    expect(AllBagHeadphones.addHeadphones(data)).toMatch(/forExample/);
  });
  it("sent data is deleted correctly", () => {
    const AllBagHeadphones = useAllBagHeadphones();
    AllBagHeadphones.addHeadphones(data);
    expect(AllBagHeadphones.deleteHeadphones(0)).toBeUndefined();
  });
});
