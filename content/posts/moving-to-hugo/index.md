---
title: "Moving to Hugo"
date: 2024-12-06
tags: ["site", "hugo"]
---

I've decided to ditch the previous framework of this site and onboard onto Hugo.

The hope with this move is that it will reduce the friction associated with creating 'content'.

'Content' is a weird word with a lot of odd connotations.
Does attempting to focus on creating 'content' mean that I am now a 'Content Creator'?
That's not really the goal.
**The goal is to give myself a place to jot down my thoughts.**

I do not have delusions that someone will actually be reading this.


### Previous site

I was previously using [Nuxt](https://nuxt.com), which is a wrapper of sorts for Vue.
At least I think it's something like that.

Honestly, I don't know much about it.
I decided to use it because it was being used in freelancing project I was working on and it seemed like it would be a decent framework for a small static site.

I came across the idea of 'Atomic Design', which you can read more here: https://atomicdesign.bradfrost.com.
The idea is that you break down web components into their smallest pieces (atoms), and use those atoms to build larger components (molecules), and use those to build organisms, etc.

So in November of 2020 I pushed the initial commit ([7e8143](https://github.com/michaeljosephpurdy/michaeljosephpurdy.github.io/commit/7e8143c676c59ed690d6e94173d4e0a03fbc87a7)) of the Nuxt-powered site.

The site has served me well, giving me a place to host my games, resume, and links to other sites (mainly itch).

### Future plans

I want to try to write more, which is why I've shifted away from my custom-built solutions and onto something that is markdown-aware.
I chose Hugo because I've used it previously ([Child Inclusion Fund](https://childinclusionfund.com)) and like some of the themes that I come across on [themes.gohugo.io](https://themes.gohugo.io).
Currently I am using [Slick](https://themes.gohugo.io/themes/slick/), though I think I'll eventually build my own to give me what I am fully looking for.

#### Games
Previously I was building web versions of each of my games and adding them into my website repo directly.
This was a bit of a pain, but it did lead to my site actually hosting all of my web games instead of pointing to elsewhere; which was helpful for my son and his friends to play my games at their school.
Unfortunately, the school went and blocked [mikepurdy.dev](https://mikepurdy.dev), so the ROI of adding everything onto this site decreased.
Instead, I plan on using itch.io's widgets to link to individual games:

<iframe frameborder="0" src="https://itch.io/embed/2830406" class="itch-wrapper"><a href="https://purdy.itch.io/2024-summer-game-jam">A Prime Summer by mikepurdy</a></iframe>


#### Writings

A lot of the games that I've made were for game jams internal to Amazon that myself and a few other folks setup.
The jam structure is usually:
* Friday @ 3pm ET: A kickoff meeting where we announce the theme
* Next Friday @ 3pm ET: Closing of submissions
* Next Next Friday @ 3pm ET: A showcase meeting where each person/team talk about their game, answer questions, and we announce the winners.

I find that in each showcase meeting I am **eager** to talk about the brainstorming phase, the end result, and everything in between.
I'm hoping to channel that enthusiasm into this site, and jot down a bit about each game or maybe even low level technical decisions or implementations that I feel would would be good to talk about.

I'd like to blog about game development a bit.

