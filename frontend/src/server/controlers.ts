import useHttp from "./server";

export async function getHeadphonesData() {
  let respons;

  await useHttp("/unWirelessHeadphonesData").then((data) => {
    respons = { error: data.error, loading: data.loading, respons: data.respons };
  });
  return await respons;
}
