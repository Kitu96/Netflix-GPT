API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDkzZGM3YzdiMDBjODE5ZTViMmZkYjYzNDc1NmRkOSIsIm5iZiI6MTc2MTA1ODg3Mi43NjksInN1YiI6IjY4ZjdhMDM4NmNjOWY2NGZhNTY5MWFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lU30vlaHiM3ZqfXuPz3NO3xsBds3zM-5gDb0pIIVQ0E

API Key:
7093dc7c7b00c819e5b2fdb634756dd9

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
  BugFix:SignUp userdisplayName and profile picture update
  BugFix:if user not logged in Redirect/Browse to LoginPage / vice versa(Put onAuthStateChanged in Header component and navigate from here )
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constatnt files
- Register TMDB API and create an APP and get access token
- Get data from TMDB now playing movies list API
- Separate Hook folder ==>useNowplayingMovies hook

# MainConatiner

    - NowPlaying Movies
    - Title

# Secondary container

- List of Movies \* N
- Cards \* N

- custom Hook for Now Playing Movies
- Create MovieSlice
- Update Store with Movie Data
- Planning MainContiner(Video Title, Video overview , Play Button, MoreInfo Button)
- Planning SeconadryContainer
- Fetch Data for getTrailerVideo
- Update Store with Trailer Video Data
- Embeded YouTube Video and Make it autoPlay and mute
-
