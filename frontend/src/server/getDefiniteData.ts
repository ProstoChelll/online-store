import { ref } from "vue";

async function getDefiniteData(Product: any, url: string) {
  const loading = ref(false);
  const error = ref("");
  const respons = ref();

  loading.value = true;
  const res = await fetch("http://localhost:5174" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(Product),
  });

  if (!res.ok) {
    error.value = `запрос не удался ${res.status}`;
    loading.value = false;
  }

  if ((res.status == 204, 401)) {
    loading.value = false;
    respons.value = "";
  }

  if (res.ok) {
    loading.value = false;
    respons.value = await res.json();
  }

  return { loading, error, respons };
}

export default getDefiniteData;
// http://localhost:5174
// http://62.217.177.70:5174
