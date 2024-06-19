This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

-----------------------------------------------------------------------------------------------------------------

Lapā localhost:3000/upload ievades laukā ievieto JSON tekstu, kurš ir ņemts no citas konkrētas lietotnes.
JSON teksta piemērs, kuru var ievietot:
[
    {
        "Business Name": "Fresh Group SIA",
        "Website": "http://www.freshgroup.lv/",
        "Address": "House cleaning service",
        "Phone": "\u00b726542636",
        "Email": "info@freshair.lv",
        "Email 2": "8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com",
        "Email 3": "605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com",
        "Facebook": "https://www.facebook.com/freshair.lv",
        "Linkedin": "",
        "Notes": "Data miner google maps",
        "Contacted": ""
    },
    {
        "Business Name": "Cleaning R\u012bga",
        "Website": "http://cleaningriga.lv/",
        "Address": "\u00b7 \u0122ertr\u016bdes iela 129",
        "Phone": "\u00b725298298",
        "Email": "info@CleaningRiga.Lv",
        "Email 2": "",
        "Email 3": "",
        "Facebook": "https://www.facebook.com/CleaningRiga",
        "Linkedin": "",
        "Notes": "Data miner google maps",
        "Contacted": ""
    },
    {
        "Business Name": "Professional Cleaning Service Center",
        "Website": "http://uzkopsim.lv/",
        "Address": "\u00b7 Mat\u012bsa iela 45-59",
        "Phone": "\u00b729346564",
        "Email": "maija@uzkopsim.lv",
        "Email 2": "",
        "Email 3": "",
        "Facebook": "https://www.facebook.com/PCSCSIA/",
        "Linkedin": "",
        "Notes": "Data miner google maps",
        "Contacted": ""
    },
    {
        "Business Name": "CleanLiving.lv",
        "Website": "https://www.cleanliving.lv/",
        "Address": "\u00b7 Pirts iela 4",
        "Phone": "\u00b727017197",
        "Email": "",
        "Email 2": "",
        "Email 3": "",
        "Facebook": "https://www.facebook.com/cleanliving.lv/",
        "Linkedin": "https://www.linkedin.com/company/cleanliving-group",
        "Notes": "Data miner google maps",
        "Contacted": ""
    }
]


Nospiežot "OK", dati tiek ievietotu datu bāzē.

Lapā localhost:3000 var redzēt visus ievietotos datus - informāciju par uzņēmumiem.
Pie katra uzņēmuma ir piecas pogas. 1. atzīmē, ka uzņēmumam ir piezvanīts. 2. atzīmē, ka zvans tika arī pacelts. 3. atzīmē, ka uzņēmuma pārstāvis piektrīt uzklausīt produkta piedāvājumu. 4. atzīmē, ka uzņēmuma pārstāvis piekrīt uz attālinātu tikšanos. 5. dzēš uzņēmumu no saraksta.

Lapas augšējā labajā stūrī ir poga, kas ļauj lietotājam doties uz lapu localhost:3000/upload, kurā, kā minēts iepriekš, var ievietot jaunus datus datu bāzē.
