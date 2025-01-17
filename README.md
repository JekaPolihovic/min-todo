# ToDo-приложение (Frontend Junior Test Task for Mindbox)

## Описание

Это тестовое задание для позиции Frontend Junior в компании Mindbox. Целью задания является создание простого ToDo-приложения с использованием **TypeScript**, **React** и **React Hooks**.

Приложение должно позволять пользователю управлять текущим списком дел, добавлять задачи, помечать их как выполненные, а также фильтровать задачи по их состоянию.

---

## Требования к функционалу

- **Поле для ввода новой задачи**: Позволяет пользователю ввести текст задачи.
- **Списки задач**: Приложение должно отображать:
  - Все задачи.
  - Невыполненные задачи.
  - Выполненные задачи.
- **Фильтрация задач**:
  - Пользователь может фильтровать задачи по их состоянию (все, выполненные, невыполненные).
  - Кнопка "Clear Completed" для удаления выполненных задач.
- Приложение должно обновляться в реальном времени, когда пользователь добавляет, выполняет или удаляет задачи.

---

## Требования к коду

- **TypeScript**: Приложение должно быть написано с использованием TypeScript для обеспечения строгой типизации.
- **React & React Hooks**: Использование React и его Hooks для управления состоянием и логикой.
- **Тестирование**: Важнейшая функциональность приложения должна быть покрыта тестами (например, добавление задач, фильтрация, удаление выполненных задач).
- **Установка и запуск**:
  - Для установки зависимостей необходимо выполнить команду:
    ```bash
    npm i
    ```
  - Для запуска приложения:
    ```bash
    npm run start
    ```
---

## Как запустить проект

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/your-github-username/todo-app.git
    cd todo-app
    ```

2. Установите все зависимости:

    ```bash
    npm i
    ```

3. Запустите приложение:

    ```bash
    npm run start
    ```

4. Откройте браузер и перейдите по адресу:

    ```
    http://localhost:3000
    ```

---

## Тестирование

Приложение включает в себя тесты с использованием библиотеки **React Testing Library** для проверки ключевых функций:

- Проверка отсутствия задач, если кнопка не нажата.
- Проверка добавления задач в список после ввода текста и отправки формы.
- Проверка удаления выполненных задач при нажатии кнопки "Clear Completed".

Для запуска тестов выполните команду:

```bash
npm run test

## Демонстрация 
Приложение развернуто на GitHub Pages.






