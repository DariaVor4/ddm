# Визовый центр ВолгГТУ

## Содержание

- [Описание](#Описание)
- [Стек технологий](#Стек-технологий)
  - [Общий стек технологий](#Общий-стек-технологий)
  - [Backend: стек технологий](#Backend-стек-технологий)
  - [Frontend: стек технологий](#Frontend-стек-технологий)
- [Разработка и запуск](#Разработка-и-запуск)
  - [Требования](#Требования)
  - [Запуск Backend-сервера](#Запуск-Backend-сервера)
  - [Запуск Frontend-приложения](#Запуск-Frontend-приложения)

## Описание

Сайт предназначен для сотрудников визового отдела и иностранных студентов.

Сервис облегчит и ускорит работу с такими документами, как паспорт, миграционная карта, виза и уведомление о прибытии, которые в конечном итоге будут использованы для заполнения визовой анкеты студента. Документы можно экспортировать в формате Word или Excel.

Сотрудники смогут принимать и редактировать персональные данные, а также поддерживать связь со студентами и уведомлять их, при необходимости, через электронную почту, СМС, VK и Telegram.

## Стек технологий

### Общий стек технологий

- [NodeJS](https://nodejs.org) - Среда выполнения JavaScript
- [TypeScript](https://www.typescriptlang.org) - Язык программирования
- [Docker](https://www.docker.com) - Контейнеризация приложения
- [GraphQL](https://graphql.org) - Язык запросов API
- [GraphQL WS](https://the-guild.dev/graphql/ws) - Реализация протокола WebSocket для GraphQL
- [JWT](https://jwt.io) - Токены доступа

### Backend: стек технологий
  
- [NestJS](https://nestjs.com) - Backend-фреймворк
- [Apollo Server](https://www.apollographql.com) - Сервер для работы с GraphQL API
- [Prisma ORM](https://www.prisma.io) - ORM для работы с БД
- [@paljs/plugins: PrismaSelect](https://paljs.com/plugins/select) - Выборка полей БД в зависимости от GraphQL запроса
- [PostgreSQL](https://www.postgresql.org) - СУБД
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Хеширование паролей
- [vk-io](https://npm.im/vk-io) - VK API
- [telegraf](https://telegraf.js.org/) - Telegram Bot API
- [nodemailer](https://nodemailer.com) - Отправка электронной писем

### Frontend: стек технологий

- [React](https://reactjs.org) - Frontend-фреймворк
- [Vite](https://vitejs.dev) - Сборщик Frontend-приложения
- [MUI](https://mui.com) - UI-фреймворк
- [Tailwind CSS](https://tailwindcss.com) - CSS-фреймворк
- [Apollo Client](https://www.apollographql.com) - Клиент для работы с GraphQL API
- [Formik](https://formik.org) - Создание форм в React без слёз
- [Zustand](https://zustand-demo.pmnd.rs) - Библиотека для работы с глобальным состоянием
- [Apollo Link Scalars](https://github.com/eturino/apollo-link-scalars) - Поддержка кастомных скалярных типов в Apollo Client
- [React Router](https://reactrouter.com) - Маршрутизация в React

## Разработка и запуск

### Требования

- NodeJS **>=16**: [nodejs.org](https://nodejs.org) _(Достаточно выбрать любую последнюю LTS-версию с данной страницы)_
- Docker: [www.docker.com](https://www.docker.com)

_Установите данное программное обеспечение, если оно еще не установлено, скачав установочные файлы с указанных официальных сайтов._

### Запуск Backend-сервера

1. Для начала нужно заполнить конфигурацию запуска. Для этого в директории `backend_nest` скопируйте файл [.env.example](backend_nest%2F.env.example) как [.env.dev](./backend_nest%2F.env.dev) и заполните необходимыми данными, проверьте логин и пароль к БД, укажите токены Telegram Bot API и VK API, укажите необходимые сроки истечения токенов авторизации, секретные ключи и т.д.

2. Распакуйте архив базы данных `db_data.7z` «в текущую папку». Таким образом в корне проекта должна появиться папка `pg_data`. Если не выполнить данный шаг, то при запуске сервер сообщит, что в БД нет таблиц. Если вы хотите инициализировать БД с нуля, то сделать это нужно через миграции Prisma ORM.
 
4. Запустите контейнер с БД:
```bash
docker-compose -f docker-compose.db.yml up -d --build --force-recreate
```
 
5. Перейдите в директорию `backend_nest` и установите зависимости командой:
```bash
npm install
```
 
6. Запустите сервер:
```bash
npm run start:dev:swc
```
 
7. Если всё прошло успешно, то в консоли появится сообщение примерно следующего содержания: `App is running in DEV mode on port %port%` и сервер готов, чтобы обрабатывать запросы.

### Запуск Frontend-приложения

0. Перед запуском frontend-приложения убедитесь, что backend-сервер запущен и работает.

1. Перейдите в директорию `frontend` и установите зависимости командой:
```bash
npm install
```

2. Запустите приложение:
```bash
npm run dev
```

3. Если всё прошло успешно, то в консоли появится сообщение примерно следующего содержания: `VITE ready on Local: http://localhost:5173`, данный адрес вы можете открыть в браузере и начать работу с приложением.
