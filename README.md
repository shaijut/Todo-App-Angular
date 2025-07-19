
# ✅ Angular 18 TODO App — Real API + Modern Angular

> Built using Angular 18.2.20, this project teaches core Angular concepts **with real API integration**, clean architecture, and all modern best practices.

---

## 🔥 Live Version
Runs at `http://localhost:4200` after starting the dev server with:

```bash
ng serve
```

---

## 📘 What You’ll Learn — Angular TODO App Tutorial Summary

This project is a **complete Angular learning path** using a real-world TODO app example, with working **CRUD operations connected to an actual backend API**.

### ✅ Core Angular Skills Covered

- ✅ **Project Setup** using Angular CLI (v18.2+)
- ✅ **Modular Architecture** with `AppModule`, `TodoModule`, `SharedModule`
- ✅ **Component Fundamentals**:
  - `selector`, `templateUrl`, `styleUrls`, and TypeScript `class`
- ✅ **Template & Data Binding**:
  - One-way: `{{ title }}`
  - Two-way: `[(ngModel)]`
  - Event binding: `(click)`, `(ngSubmit)`
- ✅ **Directives**:
  - Structural: `*ngFor`, `*ngIf`
  - Attribute: `[class.completed]`, `[disabled]`
- ✅ **Services & Dependency Injection**:
  - Central `TodoService` handles API logic
  - `FeedbackService` manages UI messages
- ✅ **HTTP Integration**:
  - API calls with `HttpClient`: `GET`, `POST`, `PUT`, `DELETE`
  - RxJS: `subscribe()`, `BehaviorSubject`, and streams
- ✅ **Form Handling**:
  - Template-driven forms for creating and editing TODOs
- ✅ **UX & Feedback**:
  - Inline feedback messages on add, delete, update
  - Completion toggle with checkboxes
  - Edit mode with cancel/save buttons
- ✅ **Error Handling**:
  - All network errors are gracefully handled with toast-like UI feedback
- ✅ **Best Practices**:
  - Clean folder structure
  - Component logic separated into services
  - Immutability & state updates via `map`, `filter`, and `spread (...)`

---

## 🧠 Architecture Highlights

| Layer | Responsibility |
|-------|----------------|
| `AppModule` | Root module, sets up routing and feature modules |
| `TodoModule` | Manages TODO-related components and services |
| `TodoListComponent` | Handles user interface and UI logic |
| `TodoService` | Central point for API interactions |
| `FeedbackService` | Emits success/error messages to the UI |
| `environment.ts` | Stores the base API URL for easy config |

---

## 🚀 API-Powered (No More Local State!)

> Unlike earlier versions in branch: `todo-no-api`, this app **no longer uses static data**.  
All TODOs are managed through an actual backend API using Angular's `HttpClient`.

---

## ✅ Helpful Comments Throughout Code

Inline comments in:
- Components
- Services
- Module setup
- HTML templates

These help you **read and understand** the Angular concepts **step by step**.

---

## 📦 Technologies Used

- Angular 18.2+
- RxJS
- SCSS
- Template-driven forms
- REST API integration
- Optional modules & routing
- BehaviorSubject for UI feedback

---

## 📂 Folder Structure

```
src/
│
├── app/
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── todo/
│   │   ├── todo.module.ts
│   │   ├── todo-list/
│   │   │   ├── todo-list.component.ts
│   │   │   ├── todo-list.component.html
│   │   ├── todo.service.ts
│   └── shared/
│       └── feedback.service.ts
│
├── assets/
├── environments/
└── main.ts
```

---

## 👋 Happy Coding

> This app is built to learn  **Angular Basics** the clean and scalable way.  
Feel free to fork, clone, or build upon this starter!
