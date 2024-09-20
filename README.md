# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


------ how to set up and run the project ----
               ***** SETUP *****

* npm create vite@latest healthcare-services-app --template react
* cd my-vite-react-app
* npm install
* npm run dev

➜  Local:   http://localhost:5173/


PROJECT STRUCTURE

healthcare-services-app/
│
├── public/              # Static assets
├── src/                 # Application source code
│   ├── components/      # React components (ServiceList, AddServiceForm, etc.)
│   ├── App.js           # Main component
│   ├── index.js         # Entry point
│   └── ...              # Other files
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation


## Deployment
To deploy the app using Netlify, follow these steps:

1. **Build the Application**
   Run the following command to create a production build of your application:
   ```bash
   npm run build
