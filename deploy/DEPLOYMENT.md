# Deploying Valley College to cPanel (production)

Your hosting has a **fixed document root at `public_html`**, so the Laravel
app itself has to live *outside* `public_html`, with only the built
front-end assets and `index.php` copied in. The database is **MySQL**.

## 1. Server-side folder layout

```
/home/<cpuser>/
├── public_html/            ← domain document root (only public assets go here)
│   ├── index.php           ← modified copy, see step 5
│   ├── .htaccess
│   ├── build/
│   ├── favicon.ico, favicon.svg, apple-touch-icon.png, logo.svg, robots.txt
│   └── storage/            ← symlink created in step 7, NOT uploaded
│
└── valleycollege_app/       ← the whole Laravel app (this repo, minus node_modules)
    ├── app/ bootstrap/ config/ database/ resources/ routes/ storage/ vendor/
    ├── artisan
    ├── .env
    └── public/              ← kept for reference, not served directly
```

You can name `valleycollege_app` anything — just keep it consistent with
step 5.

## 2. Create the MySQL database (cPanel)

In **cPanel → MySQL® Databases**:
1. Create a database (e.g. `valleycollege`) — cPanel will prefix it, e.g. `cpuser_valleycollege`.
2. Create a database user + strong password.
3. Add the user to the database with **All Privileges**.
4. Note the full prefixed database name, username, and password — you'll need them in step 4.

## 3. Upload the app

Use `valleycollege-production.zip` (already built at the repo root) — it's
the whole app minus `node_modules/`, `vendor/`, `.env`, the local
`database.sqlite`, and the broken `public/storage` symlink (that target is
your dev machine's path and is meaningless on the server). Front-end assets
are already built into `public/build`.

Upload it via cPanel File Manager and extract into `~/valleycollege_app`.

Then copy everything from `valleycollege_app/public/` into `public_html/`
(File Manager → select all inside `public/` → Copy → paste into `public_html`).

## 4. Configure `.env`

Copy `deploy/../.env.production.example` to `valleycollege_app/.env` and fill in:
- `APP_URL` — your real domain, with `https://`
- `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` — from step 2
- Leave `APP_KEY` blank; you'll generate it in step 6.

## 5. Point `public_html/index.php` at the app folder

Replace `public_html/index.php` with `deploy/public_html-index.php` from
this repo, and edit the `APP_FOLDER_NAME` constant near the top if you
named the app folder something other than `valleycollege_app`.

## 6. Install dependencies & initialize (cPanel Terminal / SSH)

Most cPanel accounts have a **Terminal** icon (under Advanced). If yours
doesn't, ask your host to enable SSH, or run the one-off commands via a
temporary Cron Job (`Cron Jobs` → run once → delete the cron entry after).

```bash
cd ~/valleycollege_app

composer install --no-dev --optimize-autoloader

php artisan key:generate --force
php artisan migrate --force          # creates tables, no dummy data
php artisan db:seed --force          # SystemInformation row + test@example.com admin

php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 7. Link storage (uploaded images/files)

The app writes uploaded files (faculty photos, gallery images, downloads,
etc.) to `valleycollege_app/storage/app/public`. Make that visible at
`public_html/storage`:

```bash
ln -s ~/valleycollege_app/storage/app/public ~/public_html/storage
```

If your host disables symlinks entirely (rare, but some do), ask their
support to create this one for you — it's a single command on their end.

## 8. Permissions

```bash
chmod -R 755 ~/valleycollege_app/storage ~/valleycollege_app/bootstrap/cache
```

## 9. Go-live checklist

- [ ] Visit the homepage — should load with **no dummy content** (empty
      hero slider, course list, gallery, etc. — everything is added via
      the dashboard from here).
- [ ] Log in at `/login` with `test@example.com` / `password`, then
      **immediately** go to the admin profile/password settings and change
      both the email and password — this default account is public
      knowledge from development and must not stay active as-is.
- [ ] Fill in the real college details under **System Information** in the
      dashboard (logo, contact info, social links, address) — currently
      seeded with `Valley College` placeholder values.
- [ ] Add real content through the dashboard: hero slides, courses &
      curricula, faculty, departments, board members, events, notices/news/
      blogs, gallery, downloads, careers.
- [ ] Confirm file uploads (e.g. a faculty photo) appear correctly, which
      verifies the storage symlink from step 7 is working.

## Notes

- Re-run `php artisan config:cache` after any future `.env` change — cached
  config does not pick up new env values automatically.
- No mail/queue/scheduled-task setup is required — this app doesn't send
  email or use queued jobs.
