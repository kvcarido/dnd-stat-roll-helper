# 🎲 DnD Stat Roll Helper

Okay so, the crazy thing is I don't even play DnD. However, a lot of my close friends and family do play, and every once in a while I'll be interested enough to spectate a campaign session.

## Description

Although I barely know anything about the world of DnD, I do know that at the beginning of a campaign you must roll a 6-sided die to determine certain attributes for your character. This side project serves as a personal quest for learning in public, a fun and productive way to apply my knowledge of front-end technologies into a tool that can be useful for DnD enthusiasts who can't be bothered with the repetitious act of rolling for stats. Unless you're into that process, then don't let me stop you!

## 💭 Takeaways

> Work in progress...

### Resources
- [The DND 5E Guide: How to Roll Stats](https://5eguide.com/how-to-roll-stats-in-dd-5e)

## 🚧 Roadmap

#### Layout & Styling
- [x] Build out basic layout for attributes
- [x] Apply CSS reset
- [x] Utilize flexbox to make working with data a decent experience
- [x] Disable button once clicked
- [x] Set styles for `.dropped-roll`

#### Functionality
- [x] Create 6-sided dice roll
- [x] Select attribute buttons in the DOM
- [x] Select all attribute lists in the DOM
- [x] Add event listeners to all `stat-roll` buttons
	- [x] Add roll functionality for each attribute
- [x] Work on `roll-total`
	- Drop lowest roll value
	- Add remaining 3 values for total
- [ ] Find the lowest roll in the DOM
	- [ ] use `indexToDrop` to target `li`
- [x] Update the DOM to show `roll-total` 
	- target `#attrTotal`
	- append `total`
- [ ] Add functionality for `roll-all-stats` button
- [ ] Refactor all functionality using OOP