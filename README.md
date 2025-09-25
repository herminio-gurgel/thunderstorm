# Thunderstorm

Thunderstorm tem como objetivo ser um ponto de partida para projetos pessoais, usando um Starter kit do [Laravel v12.x](https://laravel.com/docs/12.x) com [Vue.js 3](https://vuejs.org/), mas com o principal diferencial de usar o [Vuetify](https://vuetifyjs.com/en/) como biblioteca de componentes e estilos, removendo todo o tailwind e shadcn-vue que vem por padrão no kit.

Além disso, vou usa-lo aprofundar os conhecimentos no desenvolvimento Fullstack quero usar ele para focar em processos CI/CD, proteção de branches, Actions de github e uso de pull request.

## Ambiente de desenvolvimento

O ambiente de desenvolvimento já vem pronto com o [Laravel Sail](https://laravel.com/docs/12.x/sail), então bastar ter o [Docker](https://www.docker.com/) instalado e seguir as instruções abaixo.

Além disso o ambiente está configurado para usar [devcontainer](https://containers.dev/) e já com algumas extensões do vscode.

Alternativamente, qualquer ambiente que execute o Laravel v12.x e Vue.js 3 deve ser o suficiente para executar o projeto.

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
composer run dev
```

### Ferramentas de lint e qualidade de código

O ambiente vem configurado com [Husky](https://typicode.github.io/husky/) para monitorar os principais hooks do [git](https://git-scm.com/downloads) e executar os scripts de lint e testes

- commit-msg
    - [commitlint](https://commitlint.js.org/guides/getting-started.html) configurado com [gitmoji](https://www.npmjs.com/package/commitlint-config-gitmoji/v/2.1.1)
- pre-commit
    - Executa o [lint-staged](https://www.npmjs.com/package/lint-staged) com:
        - [Prettier](https://prettier.io/)
        - [Eslint](https://eslint.org/) + [vue-typescript](https://github.com/vuejs/eslint-config-typescript)
        - [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/)
