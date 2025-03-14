# Bank App Test
This is a test for potential candidates for a backend position. The test is intended for positions with some basic understanding of how the backend works. The test involves connecting several routes to a frontend application. All connections to the APIs have already been made in the application, the candidate's task is to create APIs that would return appropriate results. The application consists of a dashboard where data is loaded and a right-hand tasks panel, where candidates can see whether the API is connected or not.

The first task involves loading data such as, average deposit, average withdrawal, and current account balance. For all three things, an API will have to be created that will return only a number. So for the balance, the API must return the correct number (e.g. Api response: 1500), and the same for the remaining items.

The second task is similar to the first but this time the data is loaded from the transactions table based on the user_id, the API should return a list of transactions that is limited to a total of 7 transactions.

The third task is to load the profile from the bank user. The API needs to return the data from the user in the following format:

{

  id: 1, 
  
  firstName: "John", 
  
  lastName: "Doe", 
  
  accountNumber: "123456789", 
  
  email: "john.doe@email.com"
  
}

# This is what it looks like when the data is not loaded

![Screenshot 2025-03-07 at 16 35 05](https://github.com/user-attachments/assets/836c4051-75ba-40e0-82e4-70b079528a99)


# This is what it looks like when the data is successfully loaded

![Screenshot 2025-03-07 at 16 35 49](https://github.com/user-attachments/assets/bae53a5f-cb46-481a-a3e8-331620dea17d)

# We will provide db in the email

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
