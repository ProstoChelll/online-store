import { ref } from "vue";
import useHttp from "./server";

export async function getHeadphonesData() {
  let respons;
  await useHttp("/headphonesData").then((data) => {
    respons = { error: data.error, loading: data.loading, respons: data.respons };
  });
  return await respons;
}
let coversList = ref();
let loading = ref();
let error = ref();
let wirelessHeadphonesList = ref();
useHttp("/coversList").then((data) => {
  coversList = data.respons;
});

useHttp("/wirelessHeadphonesList").then((data) => {
  (loading = data.loading), (error = data.error), (wirelessHeadphonesList = data.respons);
});
