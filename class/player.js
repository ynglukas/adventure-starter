const Room = require('./room')

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        const item = this.currentRoom.getItemByName(itemName);
        if(item) {
            this.currentRoom.removeItem(item);
            this.items.push(item);
            return `${this.name} picked up ${itemName}.`
        }
        return `${itemName} not found in the room`
    }

    dropItem(itemName) {
        const item = this.getItemByName(itemName);
        if (item) {
            this.items = this.items.filter(i => i !== item);
            this.currentRoom.addItem(item);
            return `${this.name} dropped ${itemName}`;
        }
        return `${itemName} not found in inventory`
    }

    eatItem(itemName) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            if(item.name === itemName) {
                if(item.isFood) {
                    this.items.splice(i, 1);
                    return `${this.name} ate ${itemName}.`;
                }else {
                    return `${itemName} is not edible.`
                }
            }
        }
    }

    getItemByName(name) {
        for(const item of this.items) {
            if(item.name === name) {
                return item;
            }
        }
        return null;
    }
}

module.exports = {
  Player,
};
