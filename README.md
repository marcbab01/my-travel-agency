# my-travel-agency

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Création du Projet
vue create my-traval-agency
❯ Manually select features
Choose:
Babel
Router
Linter

Then Choose:
Use history mode for router? → Yes
Pick a linter config? → ESLint + Prettier
Lint on save? → Yes
Place config in dedicated files? → Yes

### Ajout de TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### Configuration du fichier tailwind.config.js:
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

### lancement du serveur
npm run serve

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
