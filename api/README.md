# Awesome Project Build with TypeORM

Steps to run this project:

1. docker compose -f docker-compose.podeli-obrok.yaml up --build web

Deploy with PM2:

1. Install Node.js 16.11.1
2. Install PM2 service
3. Populate .env
4. Use `tsc --project tsconfig.json --module commonjs` to get JavaScript (If you get any problem, update ts-node -> `npm i ts-node@latest`)
5. Copy .env file in build folder `cp .env build/.env`
6. Start server with `pm2 start build/index.js`
