# Component Hierarchy

### Main
**MainContainer**
 - Main
  * NavbarContainer
  * HomeContainer
  * RaceContainer
  * ProfileContainer

**NavContainer**
 - Navbar
  * Logo
  * UserMenu

### Home
**HomeContainer**
 - Home
  * RaceButton
  * LeaderBoardContainer

**LeaderBoardContainer**
 - LeaderBoard

**LeaderBoardContainer**
 - LeaderBoard

### Auth
**AuthFormContainer**
 - AuthForm

### Race
**RaceContainer**
 - Race
  * RaceTrackContainer
  * RaceInputContainer
  * RaceResultsContainer
  * LeaderBoardContainer

**RaceTrackContainer**
 - RaceTrack
  * ShipContainer

**ShipContainer**
 - Ship
 - Ship
 - Ship

**RaceInputContainer**
 - RaceInput

**RaceResultsContainer**
 - QuoteContainer
 - UserResultsContainer

**QuoteContainer**
 - Quote

**UserResultsContainer**
 - UserResults

### Profile
**UserProfileContainer**
 - UserProfile

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/race" | "RaceContainer" |
| "/race/results" | "RaceResultsContainer" |
| "/race/results" | "LeaderBoardContainer" |
| "/user/:id" | "UserProfileContainer" |
