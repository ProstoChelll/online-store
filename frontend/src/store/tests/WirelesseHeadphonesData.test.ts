import { setActivePinia, createPinia } from "pinia";
import { useWirelessHeadphones } from "../WirelesseHeadphonesData";

describe("", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("sent bag data is saved correctly", () => {
    const WirelessHeadphones = useWirelessHeadphones();
    expect(WirelessHeadphones.addBag("forExample")).toMatch(/forExample/);
  });

  it("sent bag data is deleted correctly", () => {
    const WirelessHeadphones = useWirelessHeadphones();
    WirelessHeadphones.addBag("forExample");
    expect(WirelessHeadphones.deleteBag("forExample")).toBeUndefined();
  });

  it("function tooglebag, add data correctly", () => {
    const WirelessHeadphones = useWirelessHeadphones();
    expect(WirelessHeadphones.toogleBag("forExample")).toMatch(/forExample/);
  });

  it("function tooglebag, delete data correctly", () => {
    const WirelessHeadphones = useWirelessHeadphones();
    WirelessHeadphones.toogleBag("forExample");
    expect(WirelessHeadphones.toogleBag("forExample")).toBeUndefined();
  });

  it("function addFavorites, add data correctly", () => {
    const WirelessHeadphones = useWirelessHeadphones();
    expect(WirelessHeadphones.addFavorites("forExample")).toMatch(/forExample/);
  });

  it("function addFavorites, delete data correctly", () => {
    const WirelessHeadphones = useWirelessHeadphones();
    WirelessHeadphones.addFavorites("forExample");
    expect(WirelessHeadphones.addFavorites("forExample")).toBeUndefined();
  });
});
