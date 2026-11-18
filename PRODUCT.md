# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: press and content creators (games journalists, streamers, YouTubers) who arrive from a trailer, a Short, a Steam page or an email pitch. Their job is to understand quickly what each game is, judge whether it is worth covering, and leave with trailers, key art, screenshots, facts (release date, platforms, price, status) and a contact.

Secondary: players who land from the same trailers and Shorts and want to wishlist or buy. They are served, but the site is organized around what press and creators need.

## Product Purpose

esotericgames.dev is the studio site and press hub for Esoteric Games, a solo-developer indie studio (per the existing press kits). It exists to present the whole catalog accurately and give coverage-makers everything they need without emailing first. Success: a journalist or creator can find any game, grasp its hook in seconds, and grab assets and facts for a story or video.

## Positioning

A studio known for strange ideas: concepts specific enough that no neighboring studio would make them (a beekeeping simulator, mutant monster basketball with fatalities, a two-pilot mech satire, a typing fighting game, a body-grid auto-battler). Typing games are where the studio started and remain one thread, not the identity. The old tagline "Indie games where your keyboard is your weapon" no longer describes the catalog.

## Operating Context

- Most traffic is driven by the YouTube channel (https://www.youtube.com/channel/UCsA1kzsv3Z-x2M4e2IMPnbg): long trailers plus a steady stream of Shorts, each linking a Steam page.
- Steam is the primary store; Typers Combat is also on Epic and Google Play.
- The studio ships and announces at a high cadence; the catalog changes month to month, so adding a game must be cheap.
- Hosted on GitHub Pages from this repository, custom domain esotericgames.dev (CNAME). Static files only; folders starting with a dot are not published.

## Capabilities and Constraints

Catalog (source: YouTube channel descriptions as of 2026-11-17, plus the current site):

| Game | Status | Store | Trailer(s) on YouTube |
|---|---|---|---|
| Typers Combat | Out now. Released March 6, 2026. $5.99 on Steam/Epic, free on Android | Steam 4351960, Epic, Google Play (com.guyverphd.typerscombat) | IhHbE_3vkW4 (official), 5LAaaWLn0pw (update, free on Android) |
| Typomon Hunter | Out now on Steam; 2.0 update; 93 species with pixel art (ASCII option kept) | Steam 4429150 | mnfoTU5KpaA (2.0), A8PdDQKoWnQ (original) |
| Outbreak: Type Z | Coming soon. Zombie typing game, story campaign plus Last Stand mode | Steam 4468060 | 8oEMsCMf-yQ (Last Stand) |
| Typers Combat 2: Type Harder | Coming 2027. 3D typing fighting game: story mode, 10 bonus stages, custom fighter, 90+ executions | Steam 5431760 | VSwJLIRWDoU (official, gore off) |
| Splatterdunk | Coming Q2 2027. 90s-arcade mutant monster basketball, 2v2 or 3v3, trick dunks, fatalities, up to 6 local players | Steam 5535250 | G5AJTYUbXP0 |
| Graftlands | Coming to Early Access. Body-grid auto-battler: 400+ parts, 22 starting mutants | Steam 5551850 | GTLaHuImpvQ (gameplay) |
| Collateral Glory | 2-player online co-op mech satire ("two pilots, one mech") | OPEN: no store link found | BnDokx4N1RE (official), h-9aV_8XlKY (finishers) |
| Queenright | Beekeeping simulator | OPEN: no store link found | 7BS-K1jDF4w (announcement), PT_3qP_GjfI |
| Gacha Gacha Pon! | OPEN: no description, status, store link or trailer found | OPEN | none |

Non-game project, confirmed to appear on the site in its own area (not mixed into the games):

- Synthient: free, open-source music workstation (DAW) with Claude built in; https://github.com/guyverphd/Synthient. Has its own videos on the channel.

Constraints:
- Static HTML/CSS/JS on GitHub Pages; no build step today.
- Existing per-game press kits live at typerscombat.html and typomonhunter.html but are not linked from the current homepage, and the Typomon Hunter kit still says "Coming Soon".
- Privacy.html exists; the site footer links an external privacy policy instead.

Open decisions:
- Store links and status for Collateral Glory, Queenright and Gacha Gacha Pon!.
- Which Discord invite is canonical: the site uses discord.gg/M84GFkQEvN; channel descriptions use discord.gg/4w6Qth93Pk (Graftlands) and discord.gg/82p23Fguj2 (Synthient). Possibly one server per project.
- Whether every game gets a full press kit page or a shared kit format.

## Brand Commitments

- Studio name: Esoteric Games. Domain esotericgames.dev.
- Contact: guyverphd@esotericgames.dev.
- Each game has its own established key art and logo; game identities stay intact on the site.

## Evidence on Hand

- Trailers and Shorts on YouTube (IDs above).
- Key art and logos in assets/ for Typers Combat, Typomon Hunter and Outbreak: Type Z; capsules, screenshots and creature art in images/ (mostly Typers Combat and Typomon Hunter).
- No local art yet for Typers Combat 2, Splatterdunk, Graftlands, Collateral Glory, Queenright, Gacha Gacha Pon! or Synthient. Steam capsules and YouTube thumbnails exist publicly but must be supplied or approved by the user.
- Press kit facts in typerscombat.html and typomonhunter.html (solo dev, release date, pricing).
- No press quotes, review scores, awards, sales or player counts on record. Do not invent any.

## Product Principles

1. Coverage-ready first: every game shows its hook, status, platforms, trailer and assets without a click into a store.
2. The whole catalog, accurately: no game missing, no stale status. Status labels come from the developer, not guesswork.
3. Strange ideas lead: the studio's range is the story; no single genre speaks for it.
4. Each game keeps its own identity; the studio frame stays neutral enough to hold a beekeeping sim next to a gore-on fighting game.
5. Cheap to update: adding a game or changing a status should be one small edit.

## Accessibility & Inclusion

Some trailers have gore (Typers Combat 2 publishes a gore-off cut; Splatterdunk has fatalities). OPEN: whether the site should embed gore-off cuts by default.
