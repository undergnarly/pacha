# Настройка аналитики для Pacha Alpaca

## Что отслеживается

### События пользователя:
1. **slide_view** — просмотр каждого слайда (индекс, ID, тип, название)
2. **slide_timing** — время проведенное на слайде в секундах
3. **booking_click** — клик на кнопку "Book Now" (продукт, цена, URL)
4. **session_end** — выход с сайта (последний слайд, общее количество просмотренных слайдов)

### Метрики для анализа:
- Воронка конверсии: Hero → Hook → Продукты → Клик на бронирование
- Время на каждом слайде (где пользователи задерживаются дольше)
- На каком слайде чаще всего уходят
- Какие продукты получают больше кликов

## Настройка Google Analytics 4

### 1. Создай GA4 property

1. Зайди на https://analytics.google.com
2. Создай новый аккаунт или используй существующий
3. Создай новое property (название: "Pacha Alpaca")
4. Выбери часовой пояс: **Asia/Jakarta** (Bali)
5. Скопируй **Measurement ID** (формат: `G-XXXXXXXXXX`)

### 2. Добавь ID в переменные окружения

**Локально (для разработки):**
```bash
# Создай файл .env.local в корне проекта
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**На Netlify (для продакшена):**
1. Зайди в настройки проекта на Netlify
2. **Site settings → Environment variables**
3. Добавь переменную:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX` (твой Measurement ID)
4. Redeploy сайт

### 3. Проверь что работает

1. Открой сайт в браузере
2. В GA4 зайди в **Reports → Realtime**
3. Прокрутись по слайдам, кликни на "Book Now"
4. В течение нескольких секунд увидишь активность в реальном времени

### 4. Настрой кастомные отчёты

#### Воронка конверсии:
1. **Explore → Funnel exploration**
2. Добавь шаги:
   - Step 1: `slide_view` (slide_id = "hero")
   - Step 2: `slide_view` (slide_id = "entrance")
   - Step 3: `booking_click`

#### Время на слайдах:
1. **Explore → Free form**
2. Dimensions: `slide_id`
3. Metrics: Custom metric from `slide_timing` event (`time_seconds`)

## Настройка Microsoft Clarity (опционально)

Clarity дает **session recordings** и **heatmaps** — визуально видишь как пользователи взаимодействуют со слайдами.

### 1. Создай проект

1. Зайди на https://clarity.microsoft.com
2. Создай новый проект (название: "Pacha Alpaca")
3. Добавь домен: `pacha-alpaca.com`
4. Скопируй **Project ID** (короткий код вида `abcdefghij`)

### 2. Добавь в переменные окружения

**Локально:**
```bash
# В .env.local
NEXT_PUBLIC_CLARITY_ID=abcdefghij
```

**На Netlify:**
- Key: `NEXT_PUBLIC_CLARITY_ID`
- Value: `abcdefghij`

### 3. Что увидишь в Clarity:

- **Recordings** — видео сессий пользователей (как они листают слайды)
- **Heatmaps** — где кликают на каждом слайде
- **Dead clicks** — где пользователи пытаются кликнуть но ничего не происходит
- **Rage clicks** — где кликают много раз подряд (фрустрация)

## UTM-трекинг конверсий

Все ссылки на Megatix содержат UTM-параметры для отслеживания источника:

```
?utm_source=pacha&utm_medium=website&utm_campaign=entrance
```

### Как проверить атрибуцию:
1. В GA4: **Acquisition → Traffic acquisition** → фильтр `utm_source = pacha`
2. Coordinated with Megatix: они должны видеть откуда пришли бронирования

## Что делать если трекинг не работает

### Ad blockers
~30-40% пользователей используют uBlock Origin / Brave — они блокируют GA4 и Clarity.

**Решение:** Это норма. Принять потерю данных ИЛИ добавить Netlify Analytics ($9/mo) для server-side трекинга.

### CSP блокирует скрипты
Если в консоли браузера ошибки `Content Security Policy`, нужно добавить GA4 и Clarity в whitelist.

### События не появляются в GA4
1. Проверь что переменная `NEXT_PUBLIC_GA_ID` установлена
2. Открой DevTools → Network → проверь есть ли запросы на `google-analytics.com`
3. Включи GA4 DebugView: добавь `?debug_mode=true` в URL

## Анализ данных

### Вопросы на которые ответит аналитика:

1. **Сколько пользователей доходят до слайда с бронированием?**
   - Воронка `slide_view` events

2. **На каком слайде теряем пользователей?**
   - Compare `slide_view` counts по `slide_id`
   - Где падение = проблемный слайд

3. **Какой продукт популярнее?**
   - `booking_click` event, group by `item_name`

4. **Сколько времени в среднем проводят на сайте?**
   - Average session duration (auto-tracked)

5. **Откуда приходят посетители?**
   - Acquisition reports (Instagram, Google, direct)

6. **Conversion rate?**
   - `booking_click` / unique visitors

## Дополнительно

### Netlify Analytics ($9/mo)
Если нужны точные цифры без потерь от ad blockers:
1. Netlify Dashboard → Analytics → Enable
2. Server-side трекинг — видит всех пользователей
3. Минус: нет кастомных событий (только pageviews, sources)

### Рекомендация
Начать с **GA4 бесплатно** → если увидишь что данных недостаточно, добавить Clarity или Netlify Analytics.
