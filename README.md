This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy to Vercel (recommended)

Since you want to continue with the default Vercel domain for now, here are exact steps to connect and deploy the repository you shared (`https://github.com/Manas2k3/manas-portfolio.git`):

1. Push this repository to GitHub (if you haven't already):

```bash
# from your project root
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Manas2k3/manas-portfolio.git
git push -u origin main
```

2. Go to https://vercel.com and sign in (you can connect with GitHub).
3. Click "New Project" → import your `Manas2k3/manas-portfolio` repository.
4. Use the default build settings (Framework: Next.js). Vercel will detect the app and set the build command to `npm run build` and output to the proper location.
5. (Optional) Set an environment variable if you want canonical URLs to be correct immediately:

	- Key: `NEXT_PUBLIC_BASE_URL`
	- Value: `https://<your-vercel-project>.vercel.app` (replace with the domain Vercel assigns, or leave blank to use the default in code)

	The project already falls back to `https://manas-portfolio.vercel.app` if `NEXT_PUBLIC_BASE_URL` is not set.

6. Click Deploy. Vercel will build and give you a `.vercel.app` domain (e.g. `manas-portfolio.vercel.app`).

7. After deployment, if you want a custom domain later you can add it in the Vercel dashboard and follow the DNS instructions.

What I added in this repo to help:

- `.github/workflows/ci.yml` — runs lint + build on push/PR.
- `.gitignore` — standard Node/Next ignores.
- `src/app/layout.tsx` — uses `NEXT_PUBLIC_BASE_URL` for metadata/canonical generation and falls back to `https://manas-portfolio.vercel.app`.

If you'd like, I can:

- Create a PR with these changes on your GitHub repo (I will need push access or you can add me as a collaborator).
- Or, push the current local repo for you (I can show the exact git commands again and guide you through any errors).

Tell me whether you want me to try creating a PR (I will provide the commands you'll need to run locally), or if you want to handle the push and I'll continue with post-deploy steps (like updating `NEXT_PUBLIC_BASE_URL` to the real Vercel URL and enabling redirects/preview settings).

## Email (Contact form) configuration

The contact form uses Nodemailer in `src/app/api/contact/route.ts`. To send email from production you must set provider credentials as environment variables in Vercel (Project → Settings → Environment Variables). The API supports two modes:

- SMTP host mode (recommended for most providers): set `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE` (true/false), `EMAIL_USER`, `EMAIL_PASS`.
- Service mode (convenience): set `EMAIL_SERVICE` (e.g. `gmail`), and `EMAIL_USER`, `EMAIL_PASS`.

Required minimum environment variables:

- `EMAIL_USER` – the SMTP username or from-address (e.g. your email)
- `EMAIL_PASS` – the SMTP password or app password

Optional and recommended:

- `EMAIL_HOST` – SMTP host (e.g. `smtp.gmail.com` or your provider)
- `EMAIL_PORT` – SMTP port (587 or 465)
- `EMAIL_SECURE` – `true` if using TLS port 465, otherwise `false`
- `EMAIL_FROM` – optional From address (defaults to `EMAIL_USER`)
- `EMAIL_TO` – optional recipient (defaults to `EMAIL_USER`)

Notes for Gmail users
- Gmail no longer accepts regular account passwords for SMTP. Create an App Password and use it as `EMAIL_PASS`, or use OAuth2. See https://support.google.com/accounts/answer/185833 for App Passwords (you need 2-Step Verification enabled on the account).

Setting env vars in Vercel
1. Open your project on Vercel.
2. Settings → Environment Variables → Add each variable (set for Production and Preview).
3. Redeploy the project after adding variables.

If you prefer a transactional email provider (SendGrid, Mailgun, Postmark), use their SMTP credentials or provider-specific integration. These are more reliable and scalable than direct Gmail SMTP.
