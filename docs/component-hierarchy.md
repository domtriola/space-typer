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
 - LeaderBoardContainer

**QuoteContainer**
 - Quote

**UserResultsContainer**
 - UserResults

### Profile
**UserProfileContainer**
 - UserProfile
  * UserStatsContainer

**UserStatsContainer**
 - UserStats

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/race" | "RaceContainer" |
| "/race/results" | "RaceResultsContainer" |
| "/user/:id" | "UserProfileContainer" |
