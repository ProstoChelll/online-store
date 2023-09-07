import { ref } from "vue";

let check1 = ref(false);
let check2 = ref(false);
let check3 = ref(false);

export function validationNick(text: string) {
  const correctValidate = /[A-Za-z0-9]+/.test(text);
  const rusValidate = /[А-Яа-я0-9]+/.test(text);
  if (correctValidate) {
    check1.value = true;
  } else if (rusValidate) {
    check1.value = false;
    return "на русском нельзя";
  }
}
export function validationPassword(text: string) {
  const correctValidate = /[A-Za-z0-9]+/.test(text);
  const res1 = ref("");
  const res2 = ref("");
  if (text.length >= 5 && correctValidate) {
    check2.value = true;
  } else if (!correctValidate) {
    check2.value = false;
    res1.value = "запрешенные символы ";
  } else if (!(text.length >= 5)) {
    check2.value = false;
    res2.value = "слишком коротко";
  }
  return res1.value + res2.value;
}
export function checkSamePasswords(text: string, text1: string) {
  if (text == text1) {
    check3.value = true;
  } else {
    check3.value = false;
    return "пароли не совподают";
  }
}
export const fullCheck = () => {
  if (check1.value == false && check2.value == false && check3.value == false) {
    return false;
  } else {
    return !check1.value || !check2.value || !check3.value;
  }
};
