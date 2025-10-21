# Netflix GPT

---

- create React App
- Install tailwindCSS

# Feactures

- Login/SignUp
  -SignIn/SignUp form
  -Redirect to Browse Page

-Browse(Comes after Authentication)
-Header
-Main Movie
-Trailer in BAckground
-Title & Description
-Movie Suggestions => MovieLists \* N

- NetflixGPT
  -SearchBar
  -MovieSuggestions

# css used:

absolute=> merge
bg-gradient-to-b from-black
absolute
relative
z-10

==========================================================================
Create React App
configured Tailwind Css
Header
Login
Routing of App
Sign Up form
Form Validation

# UseRef Hook

Firebase setup in Google chrome(Authentication)
Install firebase in local system(npm install -g firebase-tools)
Step 2: Verify Where It Was Installed(npm config get prefix)
Step 3: Add Global npm Folder to PATH(“Environment Variable=>PATH-C:\Users\Kitu\AppData\Roaming\npm)
firebase login
firebase init
firebase deploy
◉ Hosting: Set up deployments for static web apps
Firestore / Auth / Functions if needed
? What do you want to use as your public directory? build
npm run build
firebase deploy

- Create signup user Account in firebase(copy code for createEmailAccount from Web=>Authentication)(signInWithEmailAndPassword)
- create signin user Account in firebase (copy code for SigninEmailAccount from Web=>Authentication)(createUserWithEmailAndPassword)
  Credential: Kitu@gmail.com
  Login.js:19 Credential: Kitu@2025

- Created ReduxStore with USerSlice
  -onAuthStateChanged
- Implemented signout(signOut(auth) from Firebase)
- Update Profile(updateProfile from firebase)
- Fetch from TMDB Movies
  x
