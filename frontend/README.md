# FrontendApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## 📦 How to Use It Anywhere

import { environment } from '../../environments/environment'; // adjust path as needed

const apiUrl = environment.apiBaseUrl;

## 🔐 Angular 19+ Full Project Structure

📁 src/
│
├── 📁 app/ 🧩 Main application folder
│ │
│ ├── 📁 models/ 📦 Stores data models used in auth
│ │ ├── authentication-request.ts 🧾 Model for login request (email/password)
│ │ ├── authentication-response.ts 📥 Model for login response (token, user info)
│ │ └── registration-request.ts 📝 Model for signup request
│ │
│ ├── 📁 pages/ 📄 Contains page-specific standalone components
│ │ ├── 📁 login/
│ │ │ ├── login.component.ts 🧑‍💻 Login logic + form submit
│ │ │ └── login.component.html 🖼️ Login form UI
│ │ │
│ │ ├── 📁 register/
│ │ │ ├── register.component.ts 🧑‍💻 Signup logic
│ │ │ └── register.component.html 🖼️ Signup form UI
│ │ │
│ │ └── 📁 dashboard/
│ │ ├── dashboard.component.ts 📊 Dashboard logic (after login)
│ │ └── dashboard.component.html 🖼️ Dashboard UI
│ │
│ ├── 📁 services/
│ │ ├── 📁 auth/
│ │ │ ├── auth.service.ts 🔐 Handles login/signup API calls, stores token
│ │ │ └── auth.service.spec.ts 🧪 Unit tests (optional)
│ │ │
│ │ ├── 📁 guard/
│ │ │ ├── auth.guard.ts 🛡️ Protects routes, checks token before access
│ │ │ └── auth.guard.spec.ts 🧪 Guard unit test
│ │ │
│ │ └── 📁 interceptors/
│ │ ├── auth.interceptor.ts 🧼 Attaches JWT token to every HTTP request
│ │ └── token.interceptor.ts 🚫 Handles auth errors (401, 403) (optional)
│ │
│ ├── app.routes.ts 🗺️ Defines routes using Angular 15+ standalone routing
│ ├── app.config.ts ⚙️ Central config for providers, HttpClient, etc.
│ ├── app.component.ts 💠 Root component (router outlet mostly)
│ ├── app.component.html 📃 Shell layout, can include <router-outlet>
│ ├── app.component.css 🎨 Global styles for app component (optional)
│
├── 📁 environments/ 🌐 API base URLs for different environments
│ ├── environment.ts 🧪 Development environment (e.g. localhost:8080)
│ └── environment.prod.ts 🚀 Production environment config
│
├── index.html 🧾 Root HTML loaded in browser (contains <app-root>)
│
├── main.ts 🚀 Entry point of Angular app (bootstraps AppComponent)
│
├── main.server.ts 🌐 (optional) SSR-related file
├── app.routes.server.ts 🌐 (optional) SSR routing
├── app.config.server.ts 🌐 (optional) SSR config
├── server.ts 🌐 (optional) Express server for SSR
│
├── styles.css 🎨 Global styles for the entire application
