# Event Scheduler Structure

```bash
Component01.jsx
├──
├──
└──

Page01.jsx
├──
├──
└──

Utils
├──
├──
└──

```

## Task Split

### Done.

| Request | Main                             | Description                                                                                                              | Done by         |
| :------ | :------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | --------------- |
| FR001   | Public GitHub Repository         | Keep all code in a single public repo; do not add instructors as collaborators.                                          | Ciro & Cornelia |
| FR002   | Incremental Development with PRs | Merge every change into main exclusively via Pull Requests.                                                              | Team            |
| FR003   | React + Vite Front-End           | Scaffold and run the app with Vite using React.                                                                          | Team            |
| FR004   | TailwindCSS Styling              | Style the UI with TailwindCSS (may augment with DaisyUI)                                                                 | Team            |
| FR005   | React Router Setup               | Configure routing with React Router, including protected routes                                                          | Team            |
| FR006   | State & Effects Management       | Use React hooks (useState, useEffect, etc.) to manage UI state and side-effects.                                         | Team            |
| FR007   | Run Local Events API             | Clone, install and run the provided Events API locally for development.                                                  | Team            |
| FR008   | Home Page – Event List           | Fetch events (GET /api/events) and render them as cards sorted chronologically.                                          | Martha          |
| FR009   | Event Card Navigation            | Clicking an event card navigates to /events/:id with React Router.                                                       | Martha          |
| FR010   | Event Details Page               | Fetch and display full event data by ID (GET /api/events/:id).                                                           | Cornelia        |
| FR011   | Sign-Up Page                     | Render registration form; send POST /api/users; on success redirect to Sign-In.                                          | Cornelia        |
| FR012   | Sign-In Page                     | Render login form; send POST /api/auth/login; on success store API token and redirect to Home.                           | Ciro            |
| FR013   | API Key Persistence              | Store/retrieve the user’s API token in localStorage.                                                                     | Ciro            |
| FR014   | Protected Route Layout           | Wrap routes that require authentication (e.g., Create Event) in a guard that redirects unauthenticated users to Sign-In. | Ciro            |
| FR015   | Create Event Page                | Provide a form that sends POST /api/events with the token; block access and submission if no valid token.                | Ciro            |
| FR016   | Token Injection in Requests      | Automatically attach the stored token to request headers                                                                 | Team            |

## Pending

| Request | Main                      | Description                                                                     | Done by |
| :------ | :------------------------ | :------------------------------------------------------------------------------ | ------- |
| FR017   | Error Handling & Feedback | Gracefully display API or network errors (e.g., auth failure, 404) to the user. | Team    |
| FR018   | Responsive Design         | Ensure the UI remains usable across mobile and desktop break-points.            | Team    |
| FR019   | Static-Site Deployment    | Build the React app and deploy the static output to Render.                     | Team    |

### Things that wanna improve in the future

| Tasks                                  | Description                                                                                                                                      | aspect | Status |
| :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----- | ------ |
| DarkTheme                              | Add a Darktheme, make the visual more appealling                                                                                                 | UI     | To-do  |
| More Toast notification                | When important action happened, for instance, create event and so on, show toast notification                                                    | UX     | To-do  |
| Responsiveness                         | How the interfaces look on mobile, still need further improvements                                                                               | UX/UI  | To-do  |
| Show/hide tabs based on Auth condition | Would be nice to show/hide certain pages based on Auth condition, for instance, the "show event page " can be hidden, when user is not logged in | UX/UI  | To-do  |
