# Project 2
#### By Eric Huberman

## Project Summary

What am I building? What tools am I using?

I am creating a Basketball team using liquid mongo and express

## Models

- Schema of the players
    - Name
    - image
    - Weight
    - Height
    - Dominant hand
    - Position
    - Jersey Number
    - And so on...

- Connection model
- A Schema model
## Route Table
| url            | method | Action                                              |
|----------------|--------|-----------------------------------------------------|
| /team          | get    | all players on team (index)                         |
| /team/:id      | get    | Player Profile (show)                               |
| /team/new      | get    | Add a New Player (new)                              |
| /team          | post   | Displays new player (create)                        |
| /team/:id/edit | get    | Edits a player (edit)                               |
| /team/:id      | put    | Updates the players info on the show route (update) |
| /team/:id      | delete | Deletes a player                                    |

## User Stories
- User can visit /team and see all players
- User can click on a player's photo and be taken to show page
- User can click a delete button to delete a player
- User can click on an edit button to edit a player

## Challenges

- detail roadblocks and anything done to overcome them

## List of Technologies

- HTML (Liquid)
- Express
- Mongoose
