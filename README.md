# 🎲 DnD Stat Roll Helper

Okay so, the crazy thing is I don't even play DnD. However, a lot of my close friends and family do play, and every once in a while I'll be interested enough to spectate a campaign session.

## Description

Although I barely know anything about the world of DnD, I do know that at the beginning of a campaign you must roll a 6-sided die to determine certain attributes for your character. This side project serves as a personal quest for learning in public, a fun and productive way to apply my knowledge of front-end technologies into a tool that can be useful for DnD enthusiasts who can't be bothered with the repetitious act of rolling for stats. Unless you're into that process, then don't let me stop you!

## 💭 Takeaways

> Work in progress...

### Resources
- [The DND 5E Guide: How to Roll Stats](https://5eguide.com/how-to-roll-stats-in-dd-5e)
- [NES.css](https://github.com/nostalgic-css/NES.css)

## 🚧 Roadmap

### Layout & Styling
- [x] Build out basic layout for attributes
- [x] Apply CSS reset
- [x] Utilize flexbox to make working with data a decent experience
- [x] Disable button once clicked
- [x] Set styles for `.dropped-roll`
- [ ] Create style guide
	- [x] decide on NES.css to make life easier
- [x] Refactor layout to be mobile-first
- [x] Create credentials
	- Add copyright
	- Add links: Github, Twitter
- [ ] Figure out why _Strength_ attribute has extra padding under Total on tablet/desktop view 😵‍💫


### Functionality
#### v1
- [x] Create 6-sided dice roll
- [x] Select attribute buttons in the DOM
- [x] Select all attribute lists in the DOM
- [x] Add event listeners to all `stat-roll` buttons
	- [x] Add roll functionality for each attribute
- [x] Work on `roll-total`
	- Drop lowest roll value
	- Add remaining 3 values for total
- [x] Find the lowest roll in the DOM
	- use `indexToDrop` to target `li`
- [x] Update the DOM to show `roll-total` 
	- target `#attrTotal`
	- append `total`

#### v2 – started 7/22
- [ ] Create reset button
- [x] Create a new branch `make-oop`
	- [ ] Start working on refactoring functionality