# Component Hierarchy

### App
**AppContainer**
 - App
  * HeaderContainer
  * HomeContainer
  * SessionFormContainer
  * RaceContainer
  * UserProfileContainer

### Header
**HeaderContainer**
 - Header
  * Logo
  * UserMenuContainer

**UserMenuContainer**
 - UserMenu

### Home
**HomeContainer**
 - Home
  * Scores

### Session
**SessionFormContainer**
 - SessionForm

### Race
**RaceContainer**
 - Race
  * Standings
  * RaceTrack
  * RaceText
  * RaceInput
  * RaceResults

### User Profile
**UserProfileContainer**
 - UserProfile
  * UserStats

## Routes

| Path        | Component              |
|-------------|------------------------|
| "/"         | "HomeContainer"        |
| "/sign-up"  | "SessionFormContainer" |
| "/login"    | "SessionFormContainer" |
| "/race"     | "RaceContainer"        |
| "/user/:id" | "UserProfileContainer" |
