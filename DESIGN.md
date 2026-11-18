---
name: Esoteric Games
description: A midnight sky of gold four-point stars; the studio speaks in one gold voice and every game brings its own color.
colors:
  ink: "#07091b"
  ink-2: "#0c0f27"
  ink-3: "#131736"
  gold: "#f8b018"
  gold-hi: "#ffca4d"
  gold-soft: "#d9a43a"
  frame: "rgba(248, 176, 24, 0.55)"
  rule: "rgba(248, 176, 24, 0.18)"
  text: "#ece8f4"
  muted: "#a9aec9"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "4rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  display-home:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "0.05em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.05em"
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.04em"
  title-sm:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.04em"
  body-lg:
    fontFamily: "Barlow, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Barlow, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Barlow, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  nav:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
  label-sm:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  label-xs:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.12em"
rounded:
  focus: "2px"
  control: "4px"
  frame: "5px"
  star: "6px"
  mark: "8px"
  disc: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "28px"
  gutter: "40px"
  section: "112px"
  wrap: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "46px"
  button-ghost-hover:
    backgroundColor: "color-mix(in srgb, #f8b018 12%, #07091b)"
    textColor: "{colors.gold-hi}"
  nav-link:
    textColor: "{colors.text}"
    typography: "{typography.nav}"
    padding: "10px 0"
  nav-link-hover:
    textColor: "{colors.gold}"
  menu-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "44px"
  art-frame:
    backgroundColor: "{colors.ink-2}"
    rounded: "{rounded.frame}"
  star:
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.star}"
    padding: "6px 8px"
    width: "88px"
  star-selected:
    textColor: "{colors.gold-hi}"
  star-out:
    size: "46px"
  star-soon:
    size: "34px"
  star-next:
    size: "28px"
  star-works:
    size: "22px"
  fact-label:
    textColor: "{colors.gold-soft}"
    typography: "{typography.label-xs}"
  band-label:
    textColor: "{colors.gold-soft}"
    typography: "{typography.label-sm}"
  chip:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  chip-hover:
    textColor: "{colors.gold-hi}"
  note:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.muted}"
    rounded: "{rounded.frame}"
    padding: "14px 16px"
  trailer-play-icon:
    backgroundColor: "rgba(7, 9, 27, 0.72)"
    textColor: "{colors.gold}"
    rounded: "{rounded.disc}"
    size: "68px"
---

# Design System: Esoteric Games

## Overview

**Creative North Star: "The Night Sky of Strange Ideas"**

The studio is a midnight sky and its games are the stars in it. The world comes straight from the brand banner and the cat-and-keyboard logo: a deep blue-black ground, a warm amber haze behind the mark, hand-placed four-point gold sparkles at many sizes, and thin gold hairlines framing each game's capsule art. Gold is the studio speaking. Everything else that carries color (a beekeeping sim's honey, a fighting game's blood red, an auto-battler's acid green) arrives inside a game's own art, held in a gold frame, so a cozy sim and a gore-on fighter can share a page without either one taking over.

Density is calm and press-ready. Type is either a wide-tracked semi-condensed capital that names and labels things (the banner's tagline voice) or a plain humanist sans that is read. Surfaces are flat midnight planes separated by faint gold rules, never by shadow. Motion is small and celestial: stars twinkle in the background, a hovered star swells, a chosen star turns a quarter-step and brightens while its game cross-fades into the spotlight.

The system replaces the studio's earlier neon terminal look (glowing type, grid backgrounds, blinking cursors, typing-game chrome). That look described one game; this one holds the whole catalog. It is dark only, by brand.

**Key Characteristics:**
- Midnight ground in three tonal steps; no light theme.
- Gold as the single studio voice: headings, actions, links, stars, frames.
- Per-game color lives only in art, art frames and atmospheric haze.
- The four-point sparkle is the one ornament, icon and bullet.
- Wide-tracked uppercase Barlow Semi Condensed for every name and label; Barlow for reading.
- Hairline gold frames (1.5px, 5px radius) around all game art, exactly like the banner.
- Flat, shadowless depth built from tone, haze and rules.

## Colors

A night palette: three midnight blues, one gold in three intensities, two cool lavender-greys for text, and gold at low alpha for every line.

### Primary
- **Studio Gold** (gold): the studio's only voice. Section headings, the hero line, primary buttons, link text, ghost button text and borders, every star and sparkle, focus rings (via Lit Gold), selection highlight, caret and form accents. 10.5:1 on the midnight ground.
- **Lit Gold** (gold-hi): the hovered, focused or selected state of anything gold. The selected star, hovered titles and links, the focus outline, and the name text on placeholder art.
- **Banked Gold** (gold-soft): the quiet gold for small labels. Band labels in the constellation, fact-list terms, the scrollbar thumb. 8.8:1 on midnight, so it stays legible at label sizes.

### Neutral
- **Midnight** (ink): the page ground, the top bar (at 80 to 92% opacity with a 6px backdrop blur), the footer, and the ghost button fill.
- **Deep Indigo** (ink-2): the one raised plane. The Synthient band, the fill behind framed art while it loads, placeholder art, and content notes.
- **Dusk Indigo** (ink-3): the poster fill behind trailer facades before the image arrives.
- **Starlight** (text): body copy, game titles in rows and spotlights, nav links, star names. 16.4:1 on midnight.
- **Haze Lavender** (muted): secondary copy. Ledes, hooks in the ledger, meta lines, figcaptions, section intros. 9:1 on midnight.
- **Gold Hairline** (frame): the 1.5px border on every piece of game art, the trailer facades in kits, the menu toggle, and the hovered chip.
- **Gold Rule** (rule): every divider. Top bar and hero bottom edges, ledger and fact-list row lines, dashed band separators in the constellation, footer top, note borders, resting chip borders.

### Per-game accent (data, not palette)
Each game declares one accent hex in its data file (for example a crimson, an acid green, a honey yellow). It is set as the local accent property on that game's star, spotlight, ledger row and kit page, and it is used in exactly three places: the art frame border (mixed 65 to 70% with Studio Gold), the radial haze at the top of its press kit (20% into transparent) and on its spotlight, and the glow inside placeholder art (22% into Deep Indigo). Atmospheric haze behind the homepage logo is a fixed warm amber (rgba(248, 150, 8, 0.17)) taken from the banner.

### Named Rules
**The One Voice Rule.** Gold is the only color the studio itself speaks in. If a piece of UI chrome is not midnight, starlight, lavender or gold, it is wrong.

**The Accent Stays in the Frame Rule.** A game's accent tints its art frame and its haze, never text, buttons, labels, links or stars. The studio frame stays neutral enough to hold every game.

**The Midnight Only Rule.** The site declares a dark color scheme and has no light mode. Do not add one; the night sky is the brand.

## Typography

**Display Font:** Barlow Semi Condensed (with Arial Narrow, sans-serif), self-hosted at 500, 600 and 700
**Body Font:** Barlow (with Segoe UI, sans-serif), self-hosted at 400, 500 and 600

**Character:** A DIN-lineage semi-condensed sans set in wide-tracked capitals, the voice of the banner tagline, does all the naming and labeling. Its humanist sibling Barlow reads quietly underneath in sentence case. One family, two widths, two jobs.

### Hierarchy
- **Display** (600, clamp(2.25rem, 5vw, 4rem), line-height 1, 0.04em, uppercase, Studio Gold): the game name at the top of a press kit. A game subtitle sits under it at 0.42em in Starlight with 0.1em tracking.
- **Display Home** (600, clamp(2rem, 3.1vw, 3rem), line-height 1.04, 0.05em, uppercase, Studio Gold): the homepage line beside the logo. The Synthient heading uses the same voice larger, clamp(2rem, 4vw, 3.25rem).
- **Headline** (600, clamp(1.75rem, 3vw, 2.5rem), line-height 1.1, 0.05em, uppercase, Studio Gold): section headings ("Every game", "Press and creators", "Trailers").
- **Title** (600, clamp(1.5rem, 2.2vw, 2rem), 0.04em, uppercase, Starlight): the game name in the spotlight. Kit sub-headings ("Fact sheet", "About the game") step down to 1.5rem at 0.06em in gold, and press-kit list entries to 1.125rem at 0.05em.
- **Title Small** (600, 1.375rem, 0.04em, uppercase, Starlight): game names in the ledger rows.
- **Body Large** (400, 1.25rem, line-height 1.6): kit hook (max 40ch) and kit summary (1.1875rem, max 62ch). The Synthient lede is Barlow 500 at 1.375rem, line-height 1.35.
- **Body** (400, 1.0625rem, line-height 1.6; 1rem under 720px): all reading text. Measures held at 52 to 64ch.
- **Body Small** (400, 0.9375rem, line-height 1.4): meta lines, fact values, figcaptions, footer notes. The game's status inside a meta line is set 600 in Starlight.
- **Label** (600, 0.9375rem, line-height 1, 0.08em, uppercase): buttons, text actions ("Press kit"), chips (0.06em), ledger links (0.875rem).
- **Nav** (500, 0.9375rem, 0.1em, uppercase, Starlight): top-bar links. The studio name beside the mark is 600 at 1.05rem, 0.14em, in gold.
- **Label Small** (600, 0.8125rem, 0.14em, uppercase, Banked Gold): constellation band labels and footer column heads (0.875rem).
- **Label XS** (600, 0.75rem, line-height 1.3, 0.12em, uppercase, Banked Gold): fact-list terms. This is the floor; nothing in the system is set smaller.

### Named Rules
**The Two Voices Rule.** Anything that names or labels (headings, nav, buttons, star names, fact terms, band labels) is Barlow Semi Condensed in uppercase with positive tracking. Anything that is read is Barlow in sentence case with no tracking. Never mix the two in one element.

**The Tracking Ladder Rule.** Tracking widens as type shrinks: 0.04em at display and titles, 0.05em at headlines, 0.06 to 0.08em at buttons and chips, 0.1em at nav, 0.12 to 0.14em at the smallest labels.

## Layout

Content sits in a centered 1240px wrap with a fluid side gutter of clamp(16px, 4vw, 40px). Sections breathe with clamp(64px, 9vw, 112px) of vertical padding; kit sections use clamp(56px, 7vw, 88px). Inner rhythm is built from 4, 8, 12, 16, 20 and 28px steps (gaps of 12 to 20px inside blocks, 28px between grid tracks, clamp(28px, 5vw, 72px) between major columns).

- **Homepage hero:** a two-column grid (minmax(280px, 0.8fr) and 2fr) filling the first viewport (min(100svh minus the bar, 900px)). Left: logo, line, lede, two stacked actions. Right: the constellation and its spotlight. A background field of 32 hand-placed sparkles (5 to 26px) covers the hero, masked clear around the intro column so it never sits under text.
- **Constellation:** bands are rows with a 112px label column and a spaced star field; each star is nudged up or down a few pixels for an irregular, hand-placed line. Faint gold lines (1px, 22% opacity) are drawn through each band's stars.
- **Ledger:** the full catalog is an ordered list of rows, not a card grid: framed art (200px), title and hook, a four-column fact list, and stacked text links, divided by gold rules.
- **Press kit pages:** a hero of framed art beside the title and actions, then a two-column body (fact sheet beside about), then full-width trailer and screenshot grids, then a wrap of chips to the other games.
- **Breakpoints:** at 1080px everything collapses to one column (hero intro becomes logo-beside-text, ledger becomes art-plus-text with facts below). At 720px the type steps down, the constellation drops its lines and wraps stars three across (two in the "Coming soon" band), facts go two-up, and stacked fact lists stack term over value. At 440px, with JavaScript, the nav folds behind a "Menu" toggle into a full-width drop-down; without JavaScript it wraps.
- The page never scrolls horizontally; the sticky top bar reserves 80px of scroll padding for anchors.

## Elevation & Depth

The system has no shadows. Depth is tonal and atmospheric: Midnight is the ground, Deep Indigo is the single raised plane, Dusk Indigo fills media before it loads. Light comes from soft radial hazes (warm amber behind the homepage logo, each game's accent behind its kit hero) and from the sparkles themselves. The sticky top bar separates by translucency, a 6px backdrop blur and a Gold Rule along its bottom edge. The logo images use lighten blending so their own glow merges into the ground.

### Named Rules
**The No-Shadow Rule.** No box-shadow or text-shadow anywhere, at rest or on hover. If something needs to stand forward, give it a gold hairline, a Deep Indigo plane or a haze behind it.

## Shapes

Corners are barely softened, like the frames in the banner: 4px on buttons, the menu toggle and chips; 5px on art frames, trailer facades and notes; 6px on the star hit area; 8px on the small logo mark in the top bar; 2px on focus outlines. The one round form is the translucent disc behind the trailer play glyph.

Borders are hairlines. Art frames and gold-outlined controls use 1.5px; every divider and resting chip uses 1px; the bands of the constellation are separated by a 1px dashed rule.

The four-point sparkle (a single SVG symbol, concave-sided, drawn in a -1 to 1 viewBox) is the system's only ornament. It appears as the background star field, the constellation stars, the bullets in kit highlight lists, the marker in "more games" chips, the menu toggle glyph and the decoration on placeholder art. The trailer play glyph (a ring with a triangle) is the only other drawn icon, and it is functional.

### Named Rules
**The Banner Frame Rule.** Every piece of game art (spotlight, ledger, kit hero, screenshots, trailer facades, the Synthient video) sits inside a 1.5px gold hairline at 5px radius on a Deep Indigo fill, with the image clipped to it.

**The One Star Rule.** The four-point sparkle is the only ornament and the only bullet. Do not introduce other icon sets, emoji or decorative glyphs.

## Components

### Logo
The official studio logo (a cat over the letters EG and a keyboard, with the ESOTERIC GAMES lockup) is the only studio mark. It appears full in the homepage hero (clamp(150px, 15vw, 210px), 128px on phones) and the footer (130px), lighten-blended into the midnight ground. The top bar carries the 40px nav mark (8px radius). The favicon (32px), apple touch icon (180px) and the downloadable press files (1254px and 512px PNG) all come from the same official artwork. Never redraw, recolor or substitute a wordmark for it.

### Buttons
Confident gold slabs, set in caps.
- **Shape:** gently squared (4px), 1.5px border, minimum height 46px, 20px side padding.
- **Primary:** Studio Gold fill and border, Midnight text in Label type. Used for the one main action per block ("Wishlist on Steam", "Buy on Steam", "Watch the newest trailer", "Get it on GitHub").
- **Hover:** fill and border move to Lit Gold over 0.2s.
- **Ghost:** Midnight fill, Studio Gold border and text; on hover the fill warms to a 12% gold wash and the text goes Lit Gold. Used for secondary actions ("Watch trailer", "Press kits", "Download assets").
- **Text action:** a gold underlined link in Label type with 14px vertical padding ("Press kit"), the third tier beside the two buttons.
- **Focus:** the global focus ring, a 2px Lit Gold outline offset 3px.

### Chips
- **Style:** used only for the "More strange ideas" list on press kits. Transparent fill, 1px Gold Rule border, 4px radius, 10px by 14px padding, Starlight caps at 0.06em, led by a 13px gold sparkle.
- **State:** hover lifts the border to Gold Hairline and the text to Lit Gold.

### Cards / Containers
- **Corner Style:** 5px on framed art and notes; containers otherwise have no box at all.
- **Background:** Deep Indigo behind art and in notes; everything else sits on Midnight.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** Gold Hairline around art, tinted toward the game's accent in the spotlight and kit hero; Gold Rule around notes.
- **Internal Padding:** notes 14px by 16px; framed media has none, captions inside a frame get 10px by 14px.

### Navigation
- **Top bar:** sticky, translucent Midnight with blur, Gold Rule below. Left: the 40px nav mark (8px radius) and the studio name in gold caps. Right: four links (Games, Press, Synthient, Contact) in Nav type, Starlight, turning gold on hover.
- **Mobile:** under 440px with JavaScript, a ghost-style "Menu" toggle (1.5px Gold Hairline, 4px radius, 44px tall, gold caps led by a sparkle) opens a full-width Midnight panel of links divided by Gold Rules; the toggle's sparkle turns 45 degrees when open. Escape closes it.
- **Skip link:** a gold slab with Midnight text that drops in at the top-left on focus.

### Constellation Star (signature)
Every game is a real link that behaves as a button: a gold sparkle over its short name in Starlight caps (0.875rem, 0.06em, max 13ch). Size and brightness encode release distance: 46px at full brightness for "Out now", 34px for "Coming soon", 28px at 80% for "Coming 2027", 22px at 62% for "In the works". Hover or focus scales the sparkle to 1.18 at full opacity and lights the name. The selected star turns 45 degrees, scales to 1.3 and goes Lit Gold, with its name. Arrow keys, Home and End move across the whole sky and select as they go. Without JavaScript each star is a link to the game's press kit.

### Spotlight (signature)
The selected game's panel under the constellation, separated by a Gold Rule: framed capsule art (220 to 300px, accent-tinted frame) beside the title, a meta line (status in Starlight 600, a slash, platforms in lavender), the one-line hook (max 52ch), and the three-tier action row. Switching games cross-fades the new panel in from 8px below over 0.5s. Choosing a trailer swaps the art for the embedded video inside the same frame.

### Ledger Row
The catalog as a scannable press ledger. Each row: framed art, the title (with an optional subtitle in lavender caps below), the hook in lavender, a fact list (Status, Release, Platforms, Price), and gold text links (Steam, Trailer, Press kit) in Label type. Rows are divided by Gold Rules top and bottom, 22px vertical padding.

### Fact List
Terms in Label XS Banked Gold caps above values in Body Small. Inline it runs four across (two across on phones). Stacked (studio facts, kit fact sheet) it becomes a two-column table with a 9.5em term column, each pair on its own Gold Rule; on phones the term sits over its value.

### Trailer Facade
A 16:9 poster on Dusk Indigo with a 68px play glyph (gold ring and triangle on a 72% Midnight disc) centered. Hover scales the poster to 1.03 over 0.6s and the disc to 1.08 in Lit Gold. Click replaces the facade with a privacy-enhanced YouTube embed; without JavaScript it is a plain YouTube link. A caption below carries the title in lavender and "Open on YouTube". In kits the facade is framed with Gold Hairline.

### Placeholder Art
For a game without store art yet: the same 616:353 frame filled with a radial glow of the game's accent into Deep Indigo, the title in Lit Gold condensed caps (700) centered, and two sparkles placed off-center.

### Motion
- One easing curve for every movement: cubic-bezier(0.16, 1, 0.3, 1).
- Color changes 0.2 to 0.3s; star transforms 0.6s; spotlight cross-fade 0.5s; menu sparkle turn 0.4s.
- Background sparkles twinkle between 42% and 12% opacity on a 5s loop, staggered.
- Under reduced motion every animation and transition is switched off and scrolling to the spotlight jumps instead of gliding.

## Do's and Don'ts

### Do:
- **Do** keep the ground Midnight (#07091b) and raise only to Deep Indigo (#0c0f27); the site is dark only.
- **Do** speak in Studio Gold (#f8b018) for headings, actions, links and stars, and move to Lit Gold (#ffca4d) for hover, focus and selection.
- **Do** put every piece of game art in a 1.5px Gold Hairline frame at 5px radius on Deep Indigo.
- **Do** let a game's accent tint only its art frame and its haze.
- **Do** set every name and label in uppercase Barlow Semi Condensed with tracking from 0.04em (large) to 0.14em (smallest), and every reading line in Barlow sentence case.
- **Do** use the four-point sparkle as the only ornament, bullet and decorative icon.
- **Do** divide content with 1px Gold Rules (rgba(248, 176, 24, 0.18)) rather than boxes.
- **Do** list the catalog as ledger rows with art, hook, facts and links.
- **Do** animate with cubic-bezier(0.16, 1, 0.3, 1) and disable all motion under prefers-reduced-motion.
- **Do** keep stars, trailers and the menu working as plain links without JavaScript.

### Don't:
- **Don't** add a light theme.
- **Don't** use box-shadow or text-shadow glows; the earlier neon terminal look is retired.
- **Don't** bring back terminal chrome: grid backgrounds, blinking cursors, monospace "code" styling or typing-game motifs as studio identity.
- **Don't** use a game's accent for text, buttons, labels, links or stars.
- **Don't** introduce a second brand color, gradients on buttons, or colored section backgrounds beyond Deep Indigo.
- **Don't** add other icon sets or emoji; the sparkle and the functional play glyph are the whole vocabulary.
- **Don't** lay the catalog out as a row of equal tiles or cards.
- **Don't** set a small uppercase label above a heading as a kicker or eyebrow.
- **Don't** set any text below 0.75rem.
