# App Academy Adventure

Welcome to App Academy Adventure! For this project, you will add different
item types to a text adventure using OOP principles.

## Running the code

Type `node game.js` to run the project.

Type `npm install` to install the tests.

Type `mocha` to run the tests.

## Tasks

Your task is to add different items to this simple adventure world.

1. Fill out the `Item` class in `item.js`
2. Implement instance methods to pick up and drop items
  * `room.getItemByName` - Retrieves an item from a room by name
  * `player.getItemByName` - Retrieves an item from a player's inventory by
    name
  * `player.takeItem` - Drops an item the player is holding into their current
    room
  * `player.dropItem` - Picks up an item from a room into the player's
    inventory
3. Create an edible `Food` class that inherits from `Item`
4. Modify the `loadWorld` function in `world.js` to create food from `world-data.js`
5. Implement `player.eatFood` to allow the player to eat food items, but not non-food items
6. Bonus: Add new types of enemies, items and rooms
