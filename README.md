<h1 align="center" >Online-store</h1>

<p align="center">
Frontend:
<br>
<img src="https://img.shields.io/badge/typescript-5.2.2-blue.svg">
<img src="https://img.shields.io/badge/vue-3.2.47-blue.svg">
<img src="https://img.shields.io/badge/pinia-2.0.35-blue.svg">
<img src="https://img.shields.io/badge/vue router-4.2.4-blue.svg">
<img src="https://img.shields.io/badge/tailwind-3.3.2-blue.svg">
<img src="https://img.shields.io/badge/jest-29.6.4-blue.svg">
<br>
Backend:
<br>
<img src="https://img.shields.io/badge/express-4.18.2-blue.svg">
<img src="https://img.shields.io/badge/mongodb-6.0.0-blue.svg">
<img src="https://img.shields.io/badge/nodeJS-18.16.0-blue.svg">

</p>

<h2>Описание:</h2>
<p>Онлайн магазин реализован с нуля на vue 3 версии. В нем есть главная страница, страница товара, избранные товары и корзина. Так же для этого проекта был разработан backend и система аккаунтов данные которых шифруются и хранятся в MongoDB</p>

<h2>О проекте:</h2>

**Про страницы:**

- Главная страница - в ней находятся карточки товаров, при клике они перенаправляют на страницу товара, на самой карточке находится кнопка с помощью которой можно добавить товар в избранные
- Страница товара - в ней находится информация определенного товара, из этой страницы можно перенести товар в корзину
- Избранные товары - просто страница избранных товаров
- Корзина - она предстовляет собой список товар, можно регулировать их количество + динамично считается сумма всей корзины

**Про backend:**

- отправляет данные о товарах на frontend
- регистрирует новых пользователей
- осуществляет вход в аккаунт

<h2>Настройка проекта:</h2>

т.к. проект не большой и так более удобнее его скачивать я решил закинуть сюда сразу и frontend и backend

первый терминал:

```
cd frontend
npm i
npm run dev
```

второй терминал:

```
cd backend
npm i
npm run dev
```

<h2>Ошибка</h2>

если вы пытаетесь посмотреть мой проект на ubuntu, то при запуске backend у вас может вылезти ошибка связанная с bcrypt. Чтобы ее решить просто переустановите его через npm

```
npm uninstall bcrypt
npm i bcrypt
```

<a href="https://stackoverflow.com/questions/15809611/bcrypt-invalid-elf-header-when-running-node-app" >подробнее об этой ошибке</a>

<h2>Планы на будущее:</h2>

- подправить дизайн
- добавить анимации с помощью Gsap
