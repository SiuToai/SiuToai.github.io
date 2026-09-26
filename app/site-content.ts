export const siteContent = {
  brand: {
    name: 'SmallTap Studio',
    tagline: 'Small ideas. Delightful taps.',
    descriptor: 'Independent app studio',
    intro:
      'We create focused mobile experiences that are easy to enjoy, respectful of your device, and polished down to the smallest interaction.',
    about:
      'SmallTap Studio is an independent mobile studio creating playful apps with a clear purpose. We believe a good product does not need to be complicated — it needs to feel considered, honest, and satisfying every time you tap.',
    supportEmail: 'siutoai.st@gmail.com',
    telegramHandle: '@siutoai',
    telegramUrl: 'https://t.me/siutoai',
    lastUpdated: 'September 26, 2026',
  },
  developer: {
    name: 'SiuToai',
    role: 'Independent Android Developer',
    bio:
      'The developer behind SmallTap Studio. I design and build focused Android experiences, taking each product from an initial idea to a published release on Google Play.',
    focus: ['Android apps', 'Product design', 'Independent development'],
  },
  principles: [
    {
      number: '01',
      title: 'Focused by default',
      body: 'Each product starts with one clear idea and keeps the experience simple around it.',
    },
    {
      number: '02',
      title: 'Playful with purpose',
      body: 'We build moments of surprise and delight without hiding how the product works.',
    },
    {
      number: '03',
      title: 'Respectful technology',
      body: 'Permissions are explained, controls stay visible, and the user remains in charge.',
    },
  ],
  products: [
    {
      name: 'Prank Studio',
      slug: 'prank-studio',
      category: 'Visual entertainment',
      platform: 'Android',
      badge: 'Available now',
      tagline: 'Turn your screen into the perfect harmless surprise.',
      shortDescription:
        'A playful collection of realistic screen effects, transparent overlays, and harmless visual surprises for your Android device.',
      longDescription:
        'Prank Studio puts a library of screen-effect simulations at your fingertips. Choose an effect, set the timing, and display it in true fullscreen or as a transparent overlay while you continue using the device underneath.',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.stdev.prankstudio',
      detailPath: '/apps/prank-studio',
      packageName: 'com.stdev.prankstudio',
      effectCount: '23',
      features: [
        'Cracked glass, LCD damage, screen lines, insects, hair, and more',
        'True Fullscreen mode for an immersive visual simulation',
        'Transparent Overlay mode that leaves the device usable underneath',
        'Display duration from 5 seconds to 5 minutes',
        'Optional start delay, sound, and vibration controls',
        'Automatic stop timer and clear manual stop controls',
      ],
      safetyNotes: [
        'Every effect is started by the user.',
        'Effects are visual simulations and cannot damage, repair, or diagnose a screen.',
        'Overlay permission is used only to display the selected visual effect.',
        'The app does not read or capture content shown beneath an overlay.',
      ],
      screenshots: [
        {
          src: '/screenshots/prank-studio-home.jpg',
          alt: 'Prank Studio home screen showing the Fly on Glass effect',
        },
        {
          src: '/screenshots/prank-studio-effects.jpg',
          alt: 'Prank Studio visual effect library',
        },
        {
          src: '/screenshots/prank-studio-settings.jpg',
          alt: 'Prank Studio timing and feedback settings',
        },
        {
          src: '/screenshots/prank-studio-overlay.jpg',
          alt: 'Prank Studio LCD damage overlay on an Android home screen',
        },
      ],
    },
  ],
  faqs: [
    {
      question: 'Can the effects damage my screen?',
      answer:
        'No. Prank Studio only displays visual simulations. It does not change, repair, diagnose, or physically affect the screen.',
    },
    {
      question: 'Why does the app request “Display over other apps”?',
      answer:
        'That permission enables Transparent Overlay mode. It is used only to draw the chosen effect above other apps. Prank Studio does not read or capture the content underneath.',
    },
    {
      question: 'How do I stop an effect?',
      answer:
        'A fullscreen effect can be closed by tapping three times quickly. A transparent overlay can be stopped from the app, its persistent notification, or automatically when the timer ends.',
    },
    {
      question: 'Does the app contain advertising?',
      answer:
        'Yes. Prank Studio contains ads, and some optional effects may be permanently unlocked on the device by choosing to watch a rewarded ad.',
    },
    {
      question: 'I found a problem. How can I report it?',
      answer:
        'Email the support address below with your device model, Android version, and a short description of what happened. Screenshots are helpful when available.',
    },
  ],
} as const;

export const primaryProduct = siteContent.products[0];
