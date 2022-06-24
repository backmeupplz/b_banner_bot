# Telegram bot that bans users across all specified chats

Simply bans users across all Borodutch communities.

# Installation and local launch

1. Clone this repo: `git clone https://github.com/backmeupplz/b_banner_bot`
2. Create `.env` with the environment variables listed below
3. Run `yarn` in the root folder
4. Run `yarn start`

And you should be good to go! Feel free to fork and submit pull requests. Thanks!

# Environment variables

- `TOKEN` — Telegram bot token
- `CHATS` — List of chats to work in

Also, please, consider looking at `.env.sample`.

# Continuous integration

Any commit pushed to `main` gets deployed to [@b_banner_bot](https://t.me/b_banner_bot) via [CI Ninja](https://github.com/backmeupplz/ci-ninja).

# License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!
