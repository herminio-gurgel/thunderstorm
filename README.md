# Thunderstorm

Thunderstorm tem como objetivo ser um ponto de partida para projetos pessoais, usando um Starter kit do [Laravel v12.x](https://laravel.com/docs/12.x) com [Vue.js 3](https://vuejs.org/)

Além de aprofundar os conhecimentos no desenvolvimento Fullstack quero usar ele para focar em processos CI/CD, proteção de branches, Actions de github e uso de pull request.

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

```bash
cp .env.example .env
```

Clique no ícone do devcontainer → Reopen in Container

```bash
npm install
```

```bash
npm run build
```

```bash
php artisan migrate
```

```bash
php artisan key:generate
```

```bash
npm run dev
```
