---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: studio homepage (index.html) and per-game press kits

Scope: esotericgames.dev homepage plus generated press kit pages under /games/. Mode: Persuade.
Audience: press and creators first (find any game, grab facts and assets, contact), players second (wishlist/buy).
Action: open a game's spotlight, watch its trailer, go to Steam or its press kit.
Proof/content: real catalog of 9 games and Synthient, Steam art, YouTube trailers, Steam facts.
Constraints: GitHub Pages + Jekyll (collection _games, one file per game). New studio logo and YouTube banner are binding brand assets. No invented quotes, sales, awards.
Memorable moment: the night sky of strange ideas, one gold star per game, grouped by how close it is to release.
Unresolved: canonical Discord; studio boilerplate beyond "solo dev". Unannounced games never go in this repo.

## Direction contract

THESIS: The studio is a night sky of strange ideas. The homepage refuses the category default (logo hero over a row of equal game tiles); instead every game is a gold four-point star in a constellation, banded by release distance (Out now / Coming soon / In the works). Picking a star brings that game into a spotlight with its own art, trailer and press facts.

OWN-WORLD: From the brand banner and logo: deep midnight ground (#0a0c1d family), warm amber haze behind the mark, a field of hand-placed four-point gold sparkles at several sizes, gold (#f6b21a family) as the studio's only voice, thin gold-hairline frames around game capsules exactly like the banner. Type: a DIN-lineage semi-condensed sans for headings and labels in wide-tracked caps (the banner tagline), a plain humanist sans for reading. Each game's own art supplies all other color.

STORY: In one viewport a visitor learns this is one studio making very different games, sees all of them at once, and knows where each stands. Press leave with facts and a kit; players leave with a wishlist.

FIRST VIEWPORT: Top bar with the EG logo mark and Games / Press / Synthient / Contact. Left third: logo lockup and the line "Indie games and other strange ideas", one sentence, and two actions (Watch the newest trailer, Press kits). Right two thirds: the constellation, three labeled bands of named stars joined by faint gold lines; the selected star's spotlight card (gold-framed capsule, status, hook, Steam + Press kit) sits at the bottom of the viewport.

FORM: Constellation (dealt structure 4 of my seven, chosen by the user). seed:cecd8321df6c7183

SIGNATURE INTERACTION: stars are real buttons; hover/focus brightens and names; select (click, Enter, arrow keys across the sky) swaps the spotlight with a short cross-fade and the star's sparkle turns. Without JS each star links to the game's press kit.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
