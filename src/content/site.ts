import type { SiteContent } from './types'

export const siteContent: SiteContent = {
  profile: {
    name: 'Dmitry Vaniuk',
    role: { en: 'C# Unity Developer', ru: 'C# Unity-разработчик' },
    location: { en: 'Belarus · Remote', ru: 'Беларусь · Удалённо' },
    timezone: 'UTC+3',
    footer: 'C# · Unity · Engineering',
  },
  nav: {
    work: { en: 'Work', ru: 'Проекты' },
    experience: { en: 'Experience', ru: 'Опыт' },
    expertise: { en: 'Expertise', ru: 'Компетенции' },
    contact: { en: 'Contact', ru: 'Контакты' },
  },
  hero: {
    eyebrow: { en: 'C# / Unity Developer · Belarus · Open to remote', ru: 'C# / Unity-разработчик · Беларусь · Открыт к удалённой работе' },
    title: { en: 'I build reliable game systems that ship.', ru: 'Создаю игровые системы, готовые к релизу.' },
    summary: {
      en: 'Unity developer with 4+ years on mobile, PC Steam, and WebGL. I build games and live products from scratch—solo or in a team—covering gameplay systems, live services, profiling, and platform integrations.',
      ru: 'Unity-разработчик с опытом более 4 лет: мобильные, PC Steam и WebGL. Собираю игры и live-продукты с нуля — один или в команде: геймплейные системы, live-сервисы, профилирование и платформенные интеграции.',
    },
    availability: { en: 'Available for Unity opportunities', ru: 'Рассматриваю предложения по Unity-разработке' },
  },
  metrics: [
    { value: '4+', label: { en: 'years in Unity', ru: 'года в Unity' } },
    { value: '5', label: { en: 'selected products', ru: 'избранных проектов' } },
    { value: '20+', label: { en: 'gameplay videos on YouTube', ru: 'геймплей-видео на YouTube' } },
    { value: 'Solo+Team', label: { en: 'delivery modes', ru: 'форматы работы' } },
  ],
  sectionTitles: {
    work: { en: 'Selected work', ru: 'Избранные проекты' },
    workIntro: {
      en: 'Commercial titles built from scratch or taken through release—solo and in a team.',
      ru: 'Коммерческие проекты: с нуля или до релиза — один и в команде.',
    },
    experience: { en: 'Experience', ru: 'Опыт работы' },
    expertise: { en: 'Engineering expertise', ru: 'Инженерные компетенции' },
    education: { en: 'Education & languages', ru: 'Образование и языки' },
  },
  sectionKickers: {
    work: { en: '01 / Work', ru: '01 / Проекты' },
    experience: { en: '02 / Experience', ru: '02 / Опыт' },
    expertise: { en: '03 / Expertise', ru: '03 / Компетенции' },
    education: { en: '04 / Education', ru: '04 / Образование' },
    contact: { en: '05 / Contact', ru: '05 / Контакты' },
  },
  heroPanel: {
    stack: 'C# · Unity',
    focus: { en: 'Systems that ship', ru: 'Системы для релиза' },
    mode: { en: 'Remote', ru: 'Удалённо' },
  },
  experience: [
    {
      company: { en: 'Celadon Wolves · Contract', ru: 'Celadon Wolves · Контракт' },
      role: { en: 'Unity Developer', ru: 'Unity-разработчик' },
      period: { en: 'Feb 2025 — Mar 2026', ru: 'Фев 2025 — Мар 2026' },
      description: {
        en: 'Team role on a live card game. Owned client and backend-facing features: FTUE, authentication, social systems, progression, and realtime data.',
        ru: 'Командная работа над live-карточной игрой. Отвечал за клиентские и backend-связанные функции: FTUE, авторизацию, социальные системы, прогрессию и realtime-данные.',
      },
      website: { kind: 'website', label: { en: 'Celadon Wolves', ru: 'Celadon Wolves' }, url: 'https://celadonwolves.com/' },
    },
    {
      company: { en: 'UMD Persum', ru: 'UMD Persum' },
      role: { en: 'Unity Developer', ru: 'Unity-разработчик' },
      period: { en: 'Jul 2022 — Feb 2025', ru: 'Июл 2022 — Фев 2025' },
      description: {
        en: 'Team development of commercial Unity products for Android, iOS, PC Steam, and WebGL—from new features to performance work.',
        ru: 'Командная разработка коммерческих Unity-продуктов для Android, iOS, PC Steam и WebGL — от новых функций до оптимизации.',
      },
      website: { kind: 'website', label: { en: 'UMD Persum', ru: 'UMD Persum' }, url: 'https://umdpersum.co.il/' },
    },
    {
      company: { en: 'School of Programming & Robotics', ru: 'Школа программирования и робототехники' },
      role: { en: 'Lecturer → Senior Lecturer', ru: 'Преподаватель → Старший преподаватель' },
      period: { en: 'Aug 2021 — Jul 2022', ru: 'Авг 2021 — Июл 2022' },
      description: {
        en: 'Taught C#, C++, HTML/CSS, Unity, and robotics to students aged 8–15. Promoted after six months for teaching quality and student results.',
        ru: 'Преподавал C#, C++, HTML/CSS, Unity и робототехнику ученикам 8–15 лет. Через полгода повышен за качество преподавания и результаты учеников.',
      },
    },
  ],
  expertise: [
    {
      icon: 'gameplay',
      title: { en: 'Gameplay & architecture', ru: 'Геймплей и архитектура' },
      description: {
        en: 'Clear, maintainable gameplay systems: progression, UI flows, inventory, scene management, and event-driven structure.',
        ru: 'Понятные и поддерживаемые геймплейные системы: прогрессия, UI-потоки, инвентарь, управление сценами и событийная структура.',
      },
      tags: ['C#', 'Unity', 'SOLID', 'Async', 'Coroutines', 'Spine 2D', 'A*', 'Inventory', 'Scene management', 'Localization'],
    },
    {
      icon: 'live',
      title: { en: 'Live services', ru: 'Live-сервисы' },
      description: {
        en: 'Auth, realtime state, messaging, analytics, push notifications, remote data, and stable API integration.',
        ru: 'Авторизация, realtime-состояние, сообщения, аналитика, push-уведомления, удалённые данные и стабильная API-интеграция.',
      },
      tags: ['Firebase', 'Nakama', 'REST', 'Sentry', 'OneSignal', 'Auth', 'Push deep links', 'Analytics', 'Season Pass'],
    },
    {
      icon: 'performance',
      title: { en: 'Performance & platforms', ru: 'Производительность и платформы' },
      description: {
        en: 'Profiling, memory leaks, LOD, low-end mobile tuning, and release constraints across Android, iOS, Steam, and WebGL.',
        ru: 'Профилирование, утечки памяти, LOD, оптимизация слабых устройств и ограничения релиза на Android, iOS, Steam и WebGL.',
      },
      tags: ['Memory Profiler', 'LOD', 'Android', 'iOS', 'Steam', 'WebGL', 'AdMob', 'Thirdweb'],
    },
  ],
  education: {
    degree: { en: 'Bachelor of Engineering — Automation Engineer', ru: 'Бакалавр инженерных наук — Инженер по автоматизации' },
    university: { en: 'Vitebsk State Technological University', ru: 'Витебский государственный технологический университет' },
    period: '2015 — 2020',
  },
  languages: [
    { name: { en: 'English', ru: 'Английский' } },
    { name: { en: 'Russian', ru: 'Русский' } },
    { name: { en: 'Belarusian', ru: 'Белорусский' } },
  ],
  contact: {
    title: { en: 'Let’s build something dependable.', ru: 'Давайте сделаем надёжный продукт.' },
    description: {
      en: 'For Unity roles, contract work, or a technical talk, Telegram is the fastest way to reach me.',
      ru: 'По Unity-ролям, контракту или техническому разговору быстрее всего писать в Telegram.',
    },
    primary: { label: { en: 'Telegram', ru: 'Telegram' }, value: '@DorniParser', url: 'https://t.me/DorniParser', responseNote: { en: 'Fastest response', ru: 'Самый быстрый ответ' } },
    socials: [
      { kind: 'email', label: { en: 'Email', ru: 'Email' }, value: 'the.somnium.project.games@gmail.com', url: 'mailto:the.somnium.project.games@gmail.com' },
      { kind: 'linkedin', label: { en: 'LinkedIn', ru: 'LinkedIn' }, value: 'linkedin.com/in/dorniparser', url: 'https://www.linkedin.com/in/dorniparser/' },
      { kind: 'github', label: { en: 'GitHub', ru: 'GitHub' }, value: 'github.com/Norni-Far', url: 'https://github.com/Norni-Far' },
    ],
  },
  youtube: {
    title: { en: 'Development playlist', ru: 'Плейлист разработки' },
    description: {
      en: 'Selected gameplay and development clips from recent work.',
      ru: 'Избранные геймплей- и dev-ролики из недавних проектов.',
    },
    embedUrl: 'https://www.youtube-nocookie.com/embed/67yIC8vQZfk?list=PLjwWjcNak-vADGGtZnLkeD9Goow8hOl4s&rel=0',
    url: 'https://www.youtube.com/watch?v=67yIC8vQZfk&list=PLjwWjcNak-vADGGtZnLkeD9Goow8hOl4s',
    fallbackLabel: { en: 'Open playlist on YouTube', ru: 'Открыть плейлист на YouTube' },
  },
  labels: {
    viewProject: { en: 'View project', ru: 'Открыть проект' },
    caseStudy: { en: 'Contribution', ru: 'Вклад в проект' },
    downloadCv: { en: 'Download CV', ru: 'Скачать CV' },
    footerRights: { en: 'All rights reserved.', ru: 'Все права защищены.' },
    backToTop: { en: 'Back to top', ru: 'Наверх' },
    menu: { en: 'Menu', ru: 'Меню' },
    close: { en: 'Close', ru: 'Закрыть' },
    language: { en: 'Switch to Russian', ru: 'Переключить на английский' },
    languages: { en: 'Languages', ru: 'Языки' },
    present: { en: 'Present', ru: 'Сейчас' },
  },
  cv: './assets/cv/Dmitry-Vaniuk-CV-2026.pdf',
}
