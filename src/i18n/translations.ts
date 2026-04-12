export type Locale = "en" | "ru" | "id";

export type Translations = {
  ui: {
    explore: string;
    bookNow: string;
    viewLodges: string;
    discover: string;
    seeMenu: string;
    bookOnAirbnb: string;
    followForUpdates: string;
    more: string;
    less: string;
    faq: string;
    howToFindUs: string;
    nuanuCity: string;
    minutesFromCanggu: string;
    freeBus: string;
    openInMaps: string;
    openingHours: string;
    monday: string;
    tueSun: string;
    lastConnection: string;
    getInTouch: string;
    whatsapp: string;
    instagram: string;
    email: string;
    copyright: string;
    createdBy: string;
    home: string;
    alpacafe: string;
    lodges: string;
    privateDinner: string;
    reviewsOnGoogle: string;
    allPricesNote: string;
    language: string;
  };
  home: {
    hero: { headline: string; subtitle: string };
    hook: {
      headline: string;
      quote: string;
      stats: { experiences: string; alpacas: string; fromIdr: string };
    };
    entrance: { headline: string; subtitle: string; details: string[] };
    connection: { headline: string; subtitle: string; details: string[] };
    dinner: { headline: string; subtitle: string; details: string[] };
    lodge: { headline: string; subtitle: string; details: string[] };
    alpacafe: { headline: string; subtitle: string; details: string[] };
  };
  dinner: {
    hero: { headline: string; subtitle: string };
    experience: { headline: string; subtitle: string; details: string[] };
  };
  lodges: {
    hero: { headline: string; subtitle: string };
    alpacaLodge: { headline: string; subtitle: string; details: string[] };
    bambooNest: { headline: string; subtitle: string; details: string[] };
  };
  alpacafe: {
    hero: { headline: string; subtitle: string };
    breakfast: { headline: string; subtitle: string; menuNote: string };
    mains: { headline: string };
    crepes: { headline: string; menuNote: string };
    platters: { headline: string };
    drinks: { headline: string };
  };
  wooler: {
    hero: { headline: string; subtitle: string };
    event: { headline: string; subtitle: string };
  };
  faq: {
    home: Array<{ question: string; answer: string }>;
    lodges: Array<{ question: string; answer: string }>;
    dinner: Array<{ question: string; answer: string }>;
    alpacafe: Array<{ question: string; answer: string }>;
    wooler: Array<{ question: string; answer: string }>;
  };
};

export const translations: Record<Locale, Translations> = {
  // ---------------------------------------------------------------------------
  // ENGLISH
  // ---------------------------------------------------------------------------
  en: {
    ui: {
      explore: "Explore",
      bookNow: "Book Now",
      viewLodges: "View Lodges",
      discover: "Discover",
      seeMenu: "See Menu",
      bookOnAirbnb: "Book on Airbnb",
      followForUpdates: "Follow for Updates",
      more: "More",
      less: "Less",
      faq: "Frequently Asked",
      howToFindUs: "How to Find Us",
      nuanuCity: "Nuanu City, Bali, Indonesia",
      minutesFromCanggu: "20 minutes from Canggu",
      freeBus: "Take the free bus at Nuanu Gate to bus station #4",
      openInMaps: "Open in Maps",
      openingHours: "Opening Hours",
      monday: "Monday: 2 pm — 9 pm",
      tueSun: "Tuesday — Sunday: 10 am — 9 pm",
      lastConnection: "Last Alpaca Connection at 6 pm",
      getInTouch: "Get in Touch",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      email: "Email",
      copyright: "Pacha Alpaca. All rights reserved.",
      createdBy: "Created by",
      home: "Home",
      alpacafe: "AlpaCafe",
      lodges: "Lodges",
      privateDinner: "Private Dinner",
      reviewsOnGoogle: "reviews on Google",
      allPricesNote: "All prices subject to 10% tax & 5% service",
      language: "Language",
    },

    home: {
      hero: {
        headline: "Immersive alpaca park in the heart of Nuanu, Bali",
        subtitle:
          "Discover five ways to meet our friendly alpacas — from a simple visit to a private candle-lit dinner & overnight stay.",
      },
      hook: {
        headline: "The only alpaca park in Bali",
        quote:
          "One of the most unique experiences in Bali. The alpacas are so friendly and the setting is magical!",
        stats: {
          experiences: "Experiences",
          alpacas: "Alpacas",
          fromIdr: "From IDR",
        },
      },
      entrance: {
        headline: "Meet the Alpacas",
        subtitle:
          "Nuanu access, alpaca park entry, alpaca café, and alpaca snacks included.",
        details: [
          "Includes Nuanu and Pacha Alpaca entrance",
          "Alpaca snacks — veggie treats for hand-feeding",
          "AlpaCafe access for drinks & light bites",
          "Mon 2–6 PM, Tue–Sun 10 AM–6 PM",
        ],
      },
      connection: {
        headline: "Alpaca Connection",
        subtitle:
          "30-minute guided tour through the jungle park. Feed, walk, and connect with our alpacas.",
        details: [
          "Child (under 12) — 200K IDR",
          "Adult — 300K IDR",
          "Family 2+2 — 700K IDR",
          "30-min guided tour, feeding, and photo ops",
          "Includes Nuanu and Pacha Alpaca entrance",
          "Children under 12 must be with a guardian",
        ],
      },
      dinner: {
        headline: "Private Alpaca Dinner",
        subtitle:
          "Private sunset dining with full setup included. Up to 4 guests. Please reserve at least one day in advance.",
        details: [
          "Table setup inside the alpaca enclosure",
          "Nuanu entry + Alpaca entry included",
          "Fresh flower bouquet",
          "Meat platter, cheese platter, fruit platter",
          "2 glasses of wine",
          "Alpaca snack for feeding",
          "Up to 4 guests per table",
          "Reserve at least 1 day in advance",
        ],
      },
      lodge: {
        headline: "Stay Overnight",
        subtitle:
          "Wake up with alpacas in a charming bamboo lodge nestled on the alpaca farm.",
        details: [
          "Overnight stay in a bamboo lodge on the alpaca farm",
          "Check-in 2 PM, check-out 11 AM",
          "Alpaca Lodge — up to 3 guests",
          "Bamboo Alpaca Nest — up to 2 guests",
        ],
      },
      alpacafe: {
        headline: "AlpaCafe",
        subtitle:
          "Specialty coffee, fresh juices, and alpaca-themed treats — with the fluffiest company in Bali.",
        details: [
          "Vietnamese coffee, fresh juices, and smoothies",
          "All-day breakfast, mains, and crepes",
          "Sharing platters and desserts",
          "Craft beer, wine, and prosecco",
          "Alpacas roam freely around the cafe",
        ],
      },
    },

    dinner: {
      hero: {
        headline: "A Date You'll Never Forget",
        subtitle:
          "An intimate private dining setup inside the alpaca enclosure under the Bali sky.",
      },
      experience: {
        headline: "Private Alpaca Dinner",
        subtitle:
          "Private sunset dining with full setup included. Up to 4 guests. Please reserve at least one day in advance.",
        details: [
          "Table setup inside the alpaca enclosure",
          "Nuanu entry + Alpaca entry included",
          "Fresh flower bouquet",
          "Meat platter, cheese platter, fruit platter",
          "2 glasses of wine",
          "Alpaca snack for feeding",
          "Up to 4 guests per table",
          "Reserve at least 1 day in advance",
          "Perfect for proposals, celebrations, or special occasions",
          "Dietary needs accommodated — message us via WhatsApp",
        ],
      },
    },

    lodges: {
      hero: {
        headline: "Wake Up with Alpacas",
        subtitle:
          "Spend the night in a bamboo lodge on the alpaca farm. Fall asleep to nature and wake up to friendly faces.",
      },
      alpacaLodge: {
        headline: "Alpaca Lodge",
        subtitle: "Charming bamboo haven on the alpaca farm. Up to 3 guests.",
        details: [
          "Spacious bamboo lodge — up to 3 guests",
          "Check-in 2 PM / Check-out 11 AM",
          "Air conditioning",
          "Wi-Fi available",
          "Surrounded by nature — alpacas nearby",
        ],
      },
      bambooNest: {
        headline: "Bamboo Alpaca Nest",
        subtitle: "A cozy bamboo retreat for two.",
        details: [
          "Intimate bamboo nest — up to 2 guests",
          "Check-in 2 PM / Check-out 11 AM",
          "Air conditioning",
          "Wi-Fi available",
          "Perfect for couples seeking a unique stay",
        ],
      },
    },

    alpacafe: {
      hero: {
        headline: "AlpaCafe",
        subtitle:
          "Sip your coffee surrounded by alpacas. Fresh drinks, light bites, and the fluffiest company in Bali.",
      },
      breakfast: {
        headline: "All-Day Breakfast",
        subtitle: "Eggs & Toast — 50K",
        menuNote:
          "Choose your style: Sunny side, Poached, Scrambled, Boiled, Classic or Shursh omelette",
      },
      mains: { headline: "Main Dishes" },
      crepes: {
        headline: "Home-Crafted Crepes",
        menuNote:
          "A time-honored, traditional recipe passed down through generations",
      },
      platters: { headline: "Sharing Platters & Desserts" },
      drinks: { headline: "Drinks" },
    },

    wooler: {
      hero: {
        headline: "Music, Sunsets & Alpacas",
        subtitle:
          "Welcome to the fluffiest show on Earth. Live DJ sets, golden hour glow, and curious alpacas.",
      },
      event: {
        headline: "Next Event",
        subtitle:
          "Once-a-month live music session streamed from the alpaca field. Warm vibes, good people, and curious alpacas. Wool up. Tune in. Fluff out.",
      },
    },

    faq: {
      home: [
        {
          question: "Where is Pacha Alpaca located?",
          answer:
            "We are located inside Nuanu City, Bali, Indonesia — about 20 minutes from Canggu. Take the free bus at Nuanu Gate to bus station #4.",
        },
        {
          question: "Do I need to book in advance?",
          answer:
            "We highly recommend booking online to secure your preferred time slot. Walk-ins are welcome but subject to availability.",
        },
        {
          question: "What are the opening hours?",
          answer:
            "Monday: 2 pm — 9 pm. Tuesday — Sunday: 10 am — 9 pm. Last Alpaca Connection at 6 pm.",
        },
        {
          question: "Is Pacha Alpaca suitable for children?",
          answer:
            "Absolutely! Children love meeting our friendly alpacas. The park entrance and Alpaca Connection experiences are great for families.",
        },
        {
          question: "What should I wear?",
          answer:
            "Comfortable clothes and closed-toe shoes are recommended. The park is outdoors, so bring sunscreen and a hat during the day.",
        },
        {
          question: "Can I bring my own food?",
          answer:
            "Outside food is not allowed in the alpaca areas, but our Alpaca Café offers drinks and snacks. Special dietary needs for the Private Dinner can be arranged in advance.",
        },
      ],
      lodges: [
        {
          question: "What time is check-in and check-out?",
          answer: "Check-in is at 2:00 PM, and check-out is at 11:00 AM.",
        },
        {
          question: "What is included in the stay?",
          answer:
            "Each lodge booking includes an overnight stay in a bamboo lodge on the alpaca farm.",
        },
        {
          question: "How many guests can stay?",
          answer:
            "The Alpaca Lodge accommodates up to 3 persons. The Bamboo Alpaca Nest accommodates up to 2 persons.",
        },
        {
          question: "Is there Wi-Fi and air conditioning?",
          answer: "Yes, all lodges have air conditioning and Wi-Fi.",
        },
        {
          question: "How do I book?",
          answer:
            "Lodges are booked through Airbnb. Click the Book button on the lodge you prefer to go directly to the listing.",
        },
      ],
      dinner: [
        {
          question: "How many people can attend the dinner?",
          answer:
            "The Private Alpaca Dinner is for up to 4 guests per table.",
        },
        {
          question: "What is included in the dinner?",
          answer:
            "The dinner (1.9M IDR) includes a table setup inside the alpaca enclosure, Nuanu and Alpaca park entry, a fresh flower bouquet, meat/cheese/fruit platters, 2 glasses of wine, and an alpaca snack for feeding.",
        },
        {
          question: "How far in advance should I book?",
          answer: "Please reserve at least 1 day in advance.",
        },
        {
          question: "Can I request special dietary options?",
          answer:
            "Yes! Please let us know about dietary requirements via WhatsApp at least 48 hours before your booking.",
        },
      ],
      alpacafe: [
        {
          question: "Is the cafe included with entrance?",
          answer:
            "Yes! The AlpaCafe is accessible to all park visitors with an entrance ticket.",
        },
        {
          question: "What do you serve?",
          answer:
            "Vietnamese coffee, fresh juices, all-day breakfast, mains, home-crafted crepes, sharing platters, desserts, craft beer, wine, and prosecco.",
        },
        {
          question: "Can alpacas come to my table?",
          answer:
            "Our friendly alpacas roam freely around the cafe area, so yes — expect fluffy visitors!",
        },
      ],
      wooler: [
        {
          question: "What is the Wooler Room?",
          answer:
            "The Wooler Room is our once-a-month live music event held in the alpaca field — featuring DJ sets, golden hour vibes, and curious alpacas.",
        },
        {
          question: "How often does it happen?",
          answer:
            "Events are held once a month. Follow us on Instagram @pacha_alpaca for upcoming dates and themes.",
        },
        {
          question: "Do I need a ticket?",
          answer:
            "Yes, entry requires an RSVP or ticket. Details are announced on Instagram before each event.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // RUSSIAN
  // ---------------------------------------------------------------------------
  ru: {
    ui: {
      explore: "Узнать больше",
      bookNow: "Забронировать",
      viewLodges: "Смотреть домики",
      discover: "Подробнее",
      seeMenu: "Смотреть меню",
      bookOnAirbnb: "Забронировать на Airbnb",
      followForUpdates: "Следите за новостями",
      more: "Ещё",
      less: "Свернуть",
      faq: "Частые вопросы",
      howToFindUs: "Как нас найти",
      nuanuCity: "Nuanu City, Бали, Индонезия",
      minutesFromCanggu: "20 минут от Чангу",
      freeBus: "Сядьте на бесплатный автобус у ворот Nuanu до остановки #4",
      openInMaps: "Открыть на карте",
      openingHours: "Часы работы",
      monday: "Понедельник: 14:00 — 21:00",
      tueSun: "Вторник — воскресенье: 10:00 — 21:00",
      lastConnection: "Последний Alpaca Connection в 18:00",
      getInTouch: "Связаться с нами",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      email: "Email",
      copyright: "Pacha Alpaca. Все права защищены.",
      createdBy: "Создано",
      home: "Главная",
      alpacafe: "AlpaCafe",
      lodges: "Домики",
      privateDinner: "Ужин с альпаками",
      reviewsOnGoogle: "отзывов в Google",
      allPricesNote: "Ко всем ценам добавляется налог 10% и сервис 5%",
      language: "Язык",
    },

    home: {
      hero: {
        headline: "Парк альпак в самом сердце Nuanu, Бали",
        subtitle:
          "Пять способов познакомиться с нашими дружелюбными альпаками — от прогулки по парку до романтического ужина при свечах и ночёвки на ферме.",
      },
      hook: {
        headline: "Единственный парк альпак на Бали",
        quote:
          "Одно из самых необычных впечатлений на Бали. Альпаки невероятно дружелюбные, а атмосфера — волшебная!",
        stats: {
          experiences: "Впечатления",
          alpacas: "Альпаки",
          fromIdr: "От IDR",
        },
      },
      entrance: {
        headline: "Знакомство с альпаками",
        subtitle:
          "Вход в Nuanu, парк альпак, кафе и угощения для альпак включены.",
        details: [
          "Вход в Nuanu и Pacha Alpaca включён",
          "Угощения для альпак — овощные лакомства для кормления с рук",
          "Доступ в AlpaCafe: напитки и лёгкие закуски",
          "Пн 14:00–18:00, Вт–Вс 10:00–18:00",
        ],
      },
      connection: {
        headline: "Alpaca Connection",
        subtitle:
          "30-минутная экскурсия по джунглевому парку. Покормите, погуляйте и подружитесь с альпаками.",
        details: [
          "Ребёнок (до 12 лет) — 200K IDR",
          "Взрослый — 300K IDR",
          "Семейный 2+2 — 700K IDR",
          "30-минутная экскурсия, кормление и фотосессия",
          "Вход в Nuanu и Pacha Alpaca включён",
          "Дети до 12 лет — в сопровождении взрослого",
        ],
      },
      dinner: {
        headline: "Ужин с альпаками",
        subtitle:
          "Приватный ужин на закате с полной сервировкой. До 4 гостей. Бронируйте минимум за день.",
        details: [
          "Столик внутри вольера с альпаками",
          "Вход в Nuanu и парк альпак включён",
          "Букет живых цветов",
          "Мясная, сырная и фруктовая тарелки",
          "2 бокала вина",
          "Угощение для кормления альпак",
          "До 4 гостей за столиком",
          "Бронирование минимум за 1 день",
        ],
      },
      lodge: {
        headline: "Ночёвка на ферме",
        subtitle:
          "Просыпайтесь рядом с альпаками в уютном бамбуковом домике на ферме.",
        details: [
          "Ночь в бамбуковом домике на ферме альпак",
          "Заезд в 14:00, выезд в 11:00",
          "Alpaca Lodge — до 3 гостей",
          "Bamboo Alpaca Nest — до 2 гостей",
        ],
      },
      alpacafe: {
        headline: "AlpaCafe",
        subtitle:
          "Авторский кофе, свежие соки и угощения в компании самых пушистых обитателей Бали.",
        details: [
          "Вьетнамский кофе, свежие соки и смузи",
          "Завтраки весь день, основные блюда и крепы",
          "Тарелки для компании и десерты",
          "Крафтовое пиво, вино и просекко",
          "Альпаки свободно гуляют вокруг кафе",
        ],
      },
    },

    dinner: {
      hero: {
        headline: "Свидание, которое вы не забудете",
        subtitle:
          "Камерный ужин внутри вольера с альпаками под балийским небом.",
      },
      experience: {
        headline: "Ужин с альпаками",
        subtitle:
          "Приватный ужин на закате с полной сервировкой. До 4 гостей. Бронируйте минимум за день.",
        details: [
          "Столик внутри вольера с альпаками",
          "Вход в Nuanu и парк альпак включён",
          "Букет живых цветов",
          "Мясная, сырная и фруктовая тарелки",
          "2 бокала вина",
          "Угощение для кормления альпак",
          "До 4 гостей за столиком",
          "Бронирование минимум за 1 день",
          "Идеально для предложений, праздников и особых случаев",
          "Учитываем пожелания по питанию — напишите нам в WhatsApp",
        ],
      },
    },

    lodges: {
      hero: {
        headline: "Просыпайтесь с альпаками",
        subtitle:
          "Проведите ночь в бамбуковом домике на ферме альпак. Засыпайте под звуки природы и просыпайтесь среди друзей.",
      },
      alpacaLodge: {
        headline: "Alpaca Lodge",
        subtitle:
          "Уютный бамбуковый домик на ферме альпак. До 3 гостей.",
        details: [
          "Просторный бамбуковый домик — до 3 гостей",
          "Заезд 14:00 / Выезд 11:00",
          "Кондиционер",
          "Wi-Fi",
          "В окружении природы — альпаки рядом",
        ],
      },
      bambooNest: {
        headline: "Bamboo Alpaca Nest",
        subtitle: "Уютное бамбуковое гнёздышко для двоих.",
        details: [
          "Камерный бамбуковый домик — до 2 гостей",
          "Заезд 14:00 / Выезд 11:00",
          "Кондиционер",
          "Wi-Fi",
          "Идеально для пар, ищущих необычный отдых",
        ],
      },
    },

    alpacafe: {
      hero: {
        headline: "AlpaCafe",
        subtitle:
          "Пейте кофе в окружении альпак. Свежие напитки, лёгкие закуски и самая пушистая компания на Бали.",
      },
      breakfast: {
        headline: "Завтрак весь день",
        subtitle: "Eggs & Toast — 50K",
        menuNote:
          "Выберите способ приготовления: глазунья, пашот, скрамбл, варёные, классический или Shursh омлет",
      },
      mains: { headline: "Основные блюда" },
      crepes: {
        headline: "Домашние крепы",
        menuNote: "Традиционный рецепт, передающийся из поколения в поколение",
      },
      platters: { headline: "Тарелки для компании и десерты" },
      drinks: { headline: "Напитки" },
    },

    wooler: {
      hero: {
        headline: "Музыка, закаты и альпаки",
        subtitle:
          "Добро пожаловать на самое пушистое шоу на Земле. Живые DJ-сеты, золотой час и любопытные альпаки.",
      },
      event: {
        headline: "Следующее событие",
        subtitle:
          "Ежемесячный живой музыкальный сеанс с альпачьего поля. Тёплая атмосфера, хорошие люди и любопытные альпаки. Wool up. Tune in. Fluff out.",
      },
    },

    faq: {
      home: [
        {
          question: "Где находится Pacha Alpaca?",
          answer:
            "Мы находимся в Nuanu City, Бали, Индонезия — примерно в 20 минутах от Чангу. Сядьте на бесплатный автобус у ворот Nuanu до остановки #4.",
        },
        {
          question: "Нужно ли бронировать заранее?",
          answer:
            "Мы настоятельно рекомендуем бронировать онлайн, чтобы гарантировать удобное время. Можно прийти без брони, но места ограничены.",
        },
        {
          question: "Какие часы работы?",
          answer:
            "Понедельник: 14:00 — 21:00. Вторник — воскресенье: 10:00 — 21:00. Последний Alpaca Connection в 18:00.",
        },
        {
          question: "Подходит ли Pacha Alpaca для детей?",
          answer:
            "Конечно! Дети обожают наших дружелюбных альпак. Вход в парк и Alpaca Connection отлично подходят для семей.",
        },
        {
          question: "Что надеть?",
          answer:
            "Рекомендуем удобную одежду и закрытую обувь. Парк находится на открытом воздухе, поэтому днём возьмите солнцезащитный крем и шляпу.",
        },
        {
          question: "Можно ли принести свою еду?",
          answer:
            "Своя еда не допускается в зоне альпак, но в AlpaCafe есть напитки и закуски. Особые пожелания по питанию для ужина можно согласовать заранее.",
        },
      ],
      lodges: [
        {
          question: "Во сколько заезд и выезд?",
          answer: "Заезд в 14:00, выезд в 11:00.",
        },
        {
          question: "Что входит в проживание?",
          answer:
            "Бронирование включает ночь в бамбуковом домике на ферме альпак.",
        },
        {
          question: "Сколько гостей может разместиться?",
          answer:
            "Alpaca Lodge вмещает до 3 человек. Bamboo Alpaca Nest — до 2 человек.",
        },
        {
          question: "Есть ли Wi-Fi и кондиционер?",
          answer: "Да, во всех домиках есть кондиционер и Wi-Fi.",
        },
        {
          question: "Как забронировать?",
          answer:
            "Домики бронируются через Airbnb. Нажмите кнопку бронирования у понравившегося домика, чтобы перейти к объявлению.",
        },
      ],
      dinner: [
        {
          question: "Сколько человек может быть на ужине?",
          answer:
            "Приватный ужин рассчитан на 4 гостей за одним столиком.",
        },
        {
          question: "Что входит в ужин?",
          answer:
            "Ужин (1.9M IDR) включает сервировку столика в вольере с альпаками, вход в Nuanu и парк, букет живых цветов, мясную/сырную/фруктовую тарелки, 2 бокала вина и угощение для альпак.",
        },
        {
          question: "За сколько бронировать?",
          answer: "Пожалуйста, бронируйте минимум за 1 день.",
        },
        {
          question: "Можно ли запросить особое меню?",
          answer:
            "Да! Сообщите нам о пожеланиях по питанию в WhatsApp минимум за 48 часов до визита.",
        },
      ],
      alpacafe: [
        {
          question: "Кафе входит во входной билет?",
          answer:
            "Да! AlpaCafe доступно всем посетителям парка с входным билетом.",
        },
        {
          question: "Что у вас в меню?",
          answer:
            "Вьетнамский кофе, свежие соки, завтраки весь день, основные блюда, домашние крепы, тарелки для компании, десерты, крафтовое пиво, вино и просекко.",
        },
        {
          question: "Могут ли альпаки подойти к моему столику?",
          answer:
            "Наши дружелюбные альпаки свободно гуляют вокруг кафе, так что да — ждите пушистых гостей!",
        },
      ],
      wooler: [
        {
          question: "Что такое Wooler Room?",
          answer:
            "Wooler Room — это наше ежемесячное музыкальное событие на поле с альпаками: DJ-сеты, закатная атмосфера и любопытные альпаки.",
        },
        {
          question: "Как часто проходят мероприятия?",
          answer:
            "Раз в месяц. Следите за датами и темами в Instagram @pacha_alpaca.",
        },
        {
          question: "Нужен ли билет?",
          answer:
            "Да, вход по предварительной записи или билету. Подробности объявляются в Instagram перед каждым мероприятием.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // INDONESIAN (Bahasa Indonesia)
  // ---------------------------------------------------------------------------
  id: {
    ui: {
      explore: "Jelajahi",
      bookNow: "Pesan Sekarang",
      viewLodges: "Lihat Penginapan",
      discover: "Selengkapnya",
      seeMenu: "Lihat Menu",
      bookOnAirbnb: "Pesan di Airbnb",
      followForUpdates: "Ikuti untuk Info Terbaru",
      more: "Selengkapnya",
      less: "Lebih sedikit",
      faq: "Pertanyaan Umum",
      howToFindUs: "Cara Menemukan Kami",
      nuanuCity: "Nuanu City, Bali, Indonesia",
      minutesFromCanggu: "20 menit dari Canggu",
      freeBus: "Naik bus gratis di Nuanu Gate menuju halte bus #4",
      openInMaps: "Buka di Maps",
      openingHours: "Jam Operasional",
      monday: "Senin: 14.00 — 21.00",
      tueSun: "Selasa — Minggu: 10.00 — 21.00",
      lastConnection: "Alpaca Connection terakhir pukul 18.00",
      getInTouch: "Hubungi Kami",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      email: "Email",
      copyright: "Pacha Alpaca. Hak cipta dilindungi.",
      createdBy: "Dibuat oleh",
      home: "Beranda",
      alpacafe: "AlpaCafe",
      lodges: "Penginapan",
      privateDinner: "Makan Malam Privat",
      reviewsOnGoogle: "ulasan di Google",
      allPricesNote: "Semua harga belum termasuk pajak 10% & layanan 5%",
      language: "Bahasa",
    },

    home: {
      hero: {
        headline: "Taman alpaka imersif di jantung Nuanu, Bali",
        subtitle:
          "Temukan lima cara untuk bertemu alpaka kami yang ramah — mulai dari kunjungan singkat hingga makan malam privat dengan lilin & menginap.",
      },
      hook: {
        headline: "Satu-satunya taman alpaka di Bali",
        quote:
          "Salah satu pengalaman paling unik di Bali. Alpakanya sangat ramah dan suasananya sangat memukau!",
        stats: {
          experiences: "Pengalaman",
          alpacas: "Alpaka",
          fromIdr: "Mulai IDR",
        },
      },
      entrance: {
        headline: "Bertemu Alpaka",
        subtitle:
          "Akses Nuanu, tiket masuk taman alpaka, kafe, dan camilan alpaka sudah termasuk.",
        details: [
          "Termasuk tiket masuk Nuanu dan Pacha Alpaca",
          "Camilan alpaka — sayuran untuk memberi makan langsung",
          "Akses AlpaCafe untuk minuman & camilan ringan",
          "Sen 14.00–18.00, Sel–Min 10.00–18.00",
        ],
      },
      connection: {
        headline: "Alpaca Connection",
        subtitle:
          "Tur berpemandu 30 menit melalui taman hutan. Beri makan, jalan-jalan, dan berinteraksi dengan alpaka kami.",
        details: [
          "Anak-anak (di bawah 12 tahun) — 200K IDR",
          "Dewasa — 300K IDR",
          "Keluarga 2+2 — 700K IDR",
          "Tur berpemandu 30 menit, memberi makan, dan sesi foto",
          "Termasuk tiket masuk Nuanu dan Pacha Alpaca",
          "Anak di bawah 12 tahun harus didampingi orang tua",
        ],
      },
      dinner: {
        headline: "Makan Malam Privat dengan Alpaka",
        subtitle:
          "Makan malam saat matahari terbenam dengan penyajian lengkap. Hingga 4 tamu. Harap reservasi minimal satu hari sebelumnya.",
        details: [
          "Penyajian meja di dalam kandang alpaka",
          "Tiket masuk Nuanu + taman alpaka termasuk",
          "Buket bunga segar",
          "Platter daging, keju, dan buah",
          "2 gelas wine",
          "Camilan untuk memberi makan alpaka",
          "Hingga 4 tamu per meja",
          "Reservasi minimal 1 hari sebelumnya",
        ],
      },
      lodge: {
        headline: "Menginap Semalam",
        subtitle:
          "Bangun bersama alpaka di penginapan bambu yang nyaman di peternakan alpaka.",
        details: [
          "Menginap semalam di penginapan bambu di peternakan alpaka",
          "Check-in 14.00, check-out 11.00",
          "Alpaca Lodge — hingga 3 tamu",
          "Bamboo Alpaca Nest — hingga 2 tamu",
        ],
      },
      alpacafe: {
        headline: "AlpaCafe",
        subtitle:
          "Kopi spesial, jus segar, dan hidangan bertema alpaka — bersama teman berbulu paling lucu di Bali.",
        details: [
          "Kopi Vietnam, jus segar, dan smoothie",
          "Sarapan sepanjang hari, menu utama, dan crepes",
          "Platter berbagi dan makanan penutup",
          "Bir craft, wine, dan prosecco",
          "Alpaka berkeliaran bebas di sekitar kafe",
        ],
      },
    },

    dinner: {
      hero: {
        headline: "Kencan yang Tak Terlupakan",
        subtitle:
          "Penyajian makan malam privat yang intim di dalam kandang alpaka di bawah langit Bali.",
      },
      experience: {
        headline: "Makan Malam Privat dengan Alpaka",
        subtitle:
          "Makan malam saat matahari terbenam dengan penyajian lengkap. Hingga 4 tamu. Harap reservasi minimal satu hari sebelumnya.",
        details: [
          "Penyajian meja di dalam kandang alpaka",
          "Tiket masuk Nuanu + taman alpaka termasuk",
          "Buket bunga segar",
          "Platter daging, keju, dan buah",
          "2 gelas wine",
          "Camilan untuk memberi makan alpaka",
          "Hingga 4 tamu per meja",
          "Reservasi minimal 1 hari sebelumnya",
          "Sempurna untuk lamaran, perayaan, atau acara spesial",
          "Kebutuhan diet bisa disesuaikan — hubungi kami via WhatsApp",
        ],
      },
    },

    lodges: {
      hero: {
        headline: "Bangun Bersama Alpaka",
        subtitle:
          "Habiskan malam di penginapan bambu di peternakan alpaka. Tidur diiringi suara alam dan bangun disambut wajah-wajah ramah.",
      },
      alpacaLodge: {
        headline: "Alpaca Lodge",
        subtitle:
          "Penginapan bambu yang menawan di peternakan alpaka. Hingga 3 tamu.",
        details: [
          "Penginapan bambu yang luas — hingga 3 tamu",
          "Check-in 14.00 / Check-out 11.00",
          "AC",
          "Wi-Fi tersedia",
          "Dikelilingi alam — alpaka di sekitar",
        ],
      },
      bambooNest: {
        headline: "Bamboo Alpaca Nest",
        subtitle: "Tempat peristirahatan bambu yang nyaman untuk berdua.",
        details: [
          "Sarang bambu yang intim — hingga 2 tamu",
          "Check-in 14.00 / Check-out 11.00",
          "AC",
          "Wi-Fi tersedia",
          "Sempurna untuk pasangan yang mencari pengalaman unik",
        ],
      },
    },

    alpacafe: {
      hero: {
        headline: "AlpaCafe",
        subtitle:
          "Nikmati kopi dikelilingi alpaka. Minuman segar, camilan ringan, dan teman berbulu paling lucu di Bali.",
      },
      breakfast: {
        headline: "Sarapan Sepanjang Hari",
        subtitle: "Eggs & Toast — 50K",
        menuNote:
          "Pilih gaya Anda: Sunny side, Poached, Scrambled, Boiled, Classic atau Shursh omelette",
      },
      mains: { headline: "Menu Utama" },
      crepes: {
        headline: "Crepes Buatan Rumah",
        menuNote:
          "Resep tradisional yang diwariskan turun-temurun",
      },
      platters: { headline: "Platter Berbagi & Makanan Penutup" },
      drinks: { headline: "Minuman" },
    },

    wooler: {
      hero: {
        headline: "Musik, Matahari Terbenam & Alpaka",
        subtitle:
          "Selamat datang di pertunjukan paling fluffy di dunia. DJ set live, cahaya golden hour, dan alpaka yang penasaran.",
      },
      event: {
        headline: "Acara Berikutnya",
        subtitle:
          "Sesi musik live bulanan yang disiarkan dari padang alpaka. Suasana hangat, orang-orang baik, dan alpaka yang penasaran. Wool up. Tune in. Fluff out.",
      },
    },

    faq: {
      home: [
        {
          question: "Di mana lokasi Pacha Alpaca?",
          answer:
            "Kami berlokasi di dalam Nuanu City, Bali, Indonesia — sekitar 20 menit dari Canggu. Naik bus gratis di Nuanu Gate menuju halte bus #4.",
        },
        {
          question: "Apakah perlu reservasi terlebih dahulu?",
          answer:
            "Kami sangat menyarankan untuk memesan secara online agar mendapatkan waktu yang diinginkan. Walk-in dipersilakan namun tergantung ketersediaan.",
        },
        {
          question: "Berapa jam operasionalnya?",
          answer:
            "Senin: 14.00 — 21.00. Selasa — Minggu: 10.00 — 21.00. Alpaca Connection terakhir pukul 18.00.",
        },
        {
          question: "Apakah Pacha Alpaca cocok untuk anak-anak?",
          answer:
            "Tentu saja! Anak-anak senang bertemu alpaka kami yang ramah. Tiket masuk taman dan Alpaca Connection sangat cocok untuk keluarga.",
        },
        {
          question: "Sebaiknya memakai apa?",
          answer:
            "Disarankan pakaian nyaman dan sepatu tertutup. Taman berada di luar ruangan, jadi bawa tabir surya dan topi saat siang hari.",
        },
        {
          question: "Bolehkah membawa makanan sendiri?",
          answer:
            "Makanan dari luar tidak diperbolehkan di area alpaka, namun AlpaCafe kami menyediakan minuman dan camilan. Kebutuhan diet khusus untuk makan malam privat bisa diatur terlebih dahulu.",
        },
      ],
      lodges: [
        {
          question: "Jam berapa check-in dan check-out?",
          answer: "Check-in pukul 14.00 dan check-out pukul 11.00.",
        },
        {
          question: "Apa saja yang termasuk dalam penginapan?",
          answer:
            "Setiap pemesanan penginapan termasuk menginap semalam di penginapan bambu di peternakan alpaka.",
        },
        {
          question: "Berapa tamu yang bisa menginap?",
          answer:
            "Alpaca Lodge menampung hingga 3 orang. Bamboo Alpaca Nest menampung hingga 2 orang.",
        },
        {
          question: "Apakah ada Wi-Fi dan AC?",
          answer: "Ya, semua penginapan dilengkapi AC dan Wi-Fi.",
        },
        {
          question: "Bagaimana cara memesan?",
          answer:
            "Penginapan dipesan melalui Airbnb. Klik tombol Pesan pada penginapan yang Anda sukai untuk langsung ke halaman listing.",
        },
      ],
      dinner: [
        {
          question: "Berapa orang yang bisa mengikuti makan malam?",
          answer:
            "Makan malam privat untuk hingga 4 tamu per meja.",
        },
        {
          question: "Apa saja yang termasuk dalam makan malam?",
          answer:
            "Makan malam (1.9M IDR) termasuk penyajian meja di dalam kandang alpaka, tiket masuk Nuanu dan taman alpaka, buket bunga segar, platter daging/keju/buah, 2 gelas wine, dan camilan untuk memberi makan alpaka.",
        },
        {
          question: "Berapa lama sebelumnya harus memesan?",
          answer: "Harap reservasi minimal 1 hari sebelumnya.",
        },
        {
          question: "Bisakah meminta menu diet khusus?",
          answer:
            "Bisa! Silakan beri tahu kami kebutuhan diet Anda via WhatsApp minimal 48 jam sebelum kunjungan.",
        },
      ],
      alpacafe: [
        {
          question: "Apakah kafe sudah termasuk tiket masuk?",
          answer:
            "Ya! AlpaCafe bisa diakses oleh semua pengunjung taman dengan tiket masuk.",
        },
        {
          question: "Apa saja yang disajikan?",
          answer:
            "Kopi Vietnam, jus segar, sarapan sepanjang hari, menu utama, crepes buatan rumah, platter berbagi, makanan penutup, bir craft, wine, dan prosecco.",
        },
        {
          question: "Bisakah alpaka datang ke meja saya?",
          answer:
            "Alpaka kami yang ramah berkeliaran bebas di area kafe, jadi ya — bersiaplah untuk tamu berbulu!",
        },
      ],
      wooler: [
        {
          question: "Apa itu Wooler Room?",
          answer:
            "Wooler Room adalah acara musik live bulanan kami yang diadakan di padang alpaka — menampilkan DJ set, suasana golden hour, dan alpaka yang penasaran.",
        },
        {
          question: "Seberapa sering acaranya diadakan?",
          answer:
            "Acara diadakan sebulan sekali. Ikuti kami di Instagram @pacha_alpaca untuk tanggal dan tema mendatang.",
        },
        {
          question: "Apakah perlu tiket?",
          answer:
            "Ya, masuk memerlukan RSVP atau tiket. Detail diumumkan di Instagram sebelum setiap acara.",
        },
      ],
    },
  },
};
