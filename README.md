# Section #9 - Data fetching

### Goal
Gathering all our previous experience we will connect our project to Cloud Database. We will learn REST API patterns, understand the difference between request methods, how to debug our API calls, and how to arrange our API services into scalable architecture.

### Tech plan
- Introduction to Supabase - cloud SQL database
- Work with axios / instances / fetching data
- Authentication JWT example: login, guard, onResponse, onRequest.
- **Home Work**: implement register new user with Supabse and CRUD for contacts page.

### Materials for the section
- **Read**: [What is Supabase?](https://supabase.com/)
- **Read**: [Axios vs Fetch](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/)
- **Read**: [Axios interceptors example](https://blog.bitsrc.io/setting-up-axios-interceptors-for-all-http-calls-in-an-application-71bc2c636e4e)
- **Read**: [What is JWT](https://jwt.io/introduction)

### Video Material
[Youtube link](https://youtu.be/gixlqBBdHr4)

### Section Playground
- Branch name: [`section-9-data-fetching`](https://github.com/Softonix/softonix-incubator/tree/section-9-data-fetching)
- Tag1: `#section-9-data-fetching-start`
  - Applicate state after section #8
  - Installed Axios package into the project
  - Setup default http service example with Axios
  - Setup base auth.store & auth.service for login endpoint and storing token
- Tag2: `#section-9-data-fetching-end`
  - Explain how login endpoint works with Supabase and what JWT token means
  - Connect login page to login store action
  - Add getContacts method into contact.service and pass token via headers
  - Create Axios request & response interceptors

### Homework
This section includes homework. You need to fork this repo, finish homework in your repo, push your changes to origin and send URL with your forked repo and completed task to related person.

- Task #1. Implement register new user functionality. Create method in `auth.service` and via store, conntect it to the `views/auth/Register.vue` view. Route name: `/register`.
- Task #2. Implement basic CRUD for contacts. Create, Update, Delete functionality which should reuse current `contacts.store.ts` methods but execute them only successful API calls inside `contacts.service.ts`
- Task #3*. Since login endpoint, return refresh token and time when accessToken will be expired, implement refresh token mechansim inside axios request interceptor. Check if token valid, if not refresh it and make original API call.
