# [utkarsh-human.vercel.app](https://utkarsh-human.vercel.app/)

i'm obsessed with re-creating apple products. this is a macos-inspired personal website featuring a full desktop environment with multiple apps.

## features

### desktop environment

a macos sierra 10.12 themed desktop with:
- **window management**: draggable, resizable windows with minimize, maximize, and close
- **dock**: app launcher with hover tooltips
- **menu bar**: functional apple menu, file menu, app menu, status menus (wifi, bluetooth, control center), and notification center with live widgets (calendar, messages, weather, photos)
- **system states**: lock screen, sleep mode, restart, and shutdown overlays

### apps

**notes** - apple notes clone for my personal website content
- public notes viewable by everyone, private notes per browser session
- github flavored markdown with interactive task lists
- image paste/upload support
- swipe gestures on mobile

**messages** - imessage clone with ai-powered conversations
- chat with ai contacts that have unique personalities (powered by gpt)
- message reactions and sound effects
- typing indicators and read/unread states
- group chats and one-on-one conversations
- pinned conversations and swipe gestures
- @mentions and contact management
- command menu (⌘K) with keyboard shortcuts
- focus mode integration (mutes notifications)

**iterm** - terminal emulator
- real file system navigation
- github integration (browse your repos)
- basic shell commands (ls, cd, cat, pwd, clear, etc.)

**textedit** - plain text editor
- opens existing text files in their own windows
- direct opens without a file use the same Finder picker flow
- launching from Finder focuses an open TextEdit document window first, otherwise opens a smaller Finder window at Documents

**preview** - image and pdf viewer
- opens images and pdfs in their own windows
- direct opens without a file use the same Finder picker flow
- launching from Finder focuses an open Preview document window first, otherwise opens a smaller Finder window at Desktop
- document-app launch behavior is documented in `docs/document-apps.md`

**finder** - file browser
- sidebar navigation (recents, applications, desktop, documents, downloads, projects)
- browse local files and github repositories
- multiple Finder windows on desktop
- launch apps from applications folder

**calendar** - apple calendar clone
- day, week, month, and year views with smooth navigation
- sample events: exercise, focus time, meetings, dinners
- date night saturdays cycling through sf restaurants
- create, edit, and delete your own events
- drag-to-create events in day/week views
- holidays automatically displayed
- data persisted in localstorage

**photos** - apple photos clone
- photo library with grid view and full-screen viewer
- collections: flowers, food, friends
- favorites (per-browser, stored in localstorage)
- set a library photo as the persistent desktop and lock-screen wallpaper
- time filters (today, this week, this month, this year, all)
- keyboard navigation (arrow keys, escape to close)
- upload via ios shortcut with ai auto-categorization

**games** - an Apple Games-inspired library with six playable games
- library layout with sorting, play history, and app-style game artwork
- snake, 2048, minesweeper, memory match, and breakout run entirely on-device
- local computer play with easy, medium, and hard opponents
- anonymous visitor matchmaking with temporary display names, reconnect, and expiry handling
- live waiting-player badge in the dock
- desktop integration with the dock, finder, and window system

**settings** - system preferences
- wi-fi and bluetooth panels
- appearance (light/dark/system theme)
- wallpaper picker with theme wallpapers and photos library support
- menu bar appearance and clock format options
- airdrop and focus mode toggles
- about this mac

**weather** - weather forecast app
- opens from notification center weather widget or `/weather`
- current conditions with hourly forecast
- non-dock app (appears in dock only while open)
- shared weather scene renderer and palettes documented in `docs/weather-scenes.md`

### mobile

mobile support is intentionally app-specific. supported apps render as
touch-optimized, full-screen experiences; every unsupported app route redirects
to `/notes` on mobile. Unsupported apps are desktop-only components and do not
retain separate mobile presenters.

| app | in Dock by default | mobile support | mobile route behavior |
|-----|--------------------|----------------|-----------------------|
| Finder | yes | no | redirects to `/notes` |
| Notes | yes | yes | opens Notes |
| Messages | yes | yes | opens Messages |
| Photos | yes | yes | opens Photos |
| Music | yes | yes | opens Music |
| Calendar | yes | yes | opens Calendar |
| Weather | no | no | redirects to `/notes` |
| iTerm | yes | no | redirects to `/notes` |
| Games | yes | no | redirects to `/notes` |
| Settings | yes | no | redirects to `/notes` |
| TextEdit | no | no | redirects to `/notes` |
| Preview | no | no | redirects to `/notes` |

supported mobile apps include:
- swipe gestures for navigation
- touch-optimized controls
- app-specific full-screen layouts

## how it works

### architecture

the app uses next.js app router with a route group for the desktop environment. on desktop screens, all apps render in windows on a shared desktop. on mobile, apps display fullscreen with navigation.

**notes** use a session-based architecture:
- **public notes**: managed by the site owner, visible to everyone
- **private notes**: each browser session gets a unique id (stored in localstorage) linking to notes you create

**messages** are client-side only:
- conversations stored in localstorage
- ai responses generated via braintrust proxy (openai-compatible)
- no server-side message storage

**photos**:
- favorites are per-browser (stored in localstorage)
- embedded camera and exposure metadata is read from each image on demand in the desktop Info panel and mobile swipe-up details

**games**:
- chess rules and computer play use `chess.js`; the computer search runs in a web worker for Solo Chess against AI

the app is built with:
- **next.js** with app router
- **typescript** for type safety
- **braintrust** for ai chat responses (openai-compatible proxy)
- **react-markdown** with github flavored markdown
- **tailwind css** for styling

### backend & data

notes content is statically defined and served from `data/notes/public-notes.ts`. the website runs completely self-contained without requiring an external database.

## clone the repo

`git clone https://github.com/alanagoyal/alanagoyal`

## configuration

create a `.env.local` file in the root directory:

```env
# site config (optional)
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# braintrust (optional - for messages ai)
# BRAINTRUST_API_KEY="<your-braintrust-api-key>"

# github (optional - helps avoid rate limits for iterm/finder)
# GITHUB_TOKEN="<your-github-token>"
```

## install dependencies

`npm install`

## run the app

run the application in the command line and it will be available at http://localhost:3000.

`npm run dev`

## run the messages eval

with `BRAINTRUST_API_KEY` configured in `.env.local`, run the Messages group-chat behavior eval:

`npm run eval:chat`

the eval exercises response routing, waiting for the human, conversation wrap-up, schema validity, repetition, and texting brevity against the same prompt, tools, and model used by the production chat route.

## deploy

deploy using [vercel](https://vercel.com)

## markdown syntax for notes

notes support github flavored markdown (gfm) with interactive features. here's what you can use:

### headings

```markdown
# heading 1
## heading 2
### heading 3
```

### text formatting

```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### lists

**unordered lists**:
```markdown
- item one
- item two
  - nested item
  - another nested item
```

**ordered lists**:
```markdown
1. first item
2. second item
3. third item
```

### task lists (interactive)

task lists are interactive - click checkboxes to toggle completion:

```markdown
- [ ] task to do
- [x] completed task
- [ ] another task
```

the app automatically updates the markdown when you click checkboxes, so your progress is saved.

### tables

create tables using standard markdown table syntax. tables render with a styled dark theme:

```markdown
| book | author | year read |
|------|--------|-----------|
| the great gatsby | f. scott fitzgerald | 2023 |
| 1984 | george orwell | 2024 |
```

this renders as:

| book | author | year read |
|------|--------|-----------|
| the great gatsby | f. scott fitzgerald | 2023 |
| 1984 | george orwell | 2024 |

**table features**:
- white borders on dark background
- properly padded cells
- header row styling
- responsive layout
- supports links in cells

### links

```markdown
[link text](https://example.com)
```

all links automatically open in new tabs for better navigation.

### code blocks

**inline code**: use backticks for `inline code`

**code blocks**: use triple backticks for multi-line code
````markdown
```javascript
function hello() {
  console.log("hello world");
}
```
````

### blockquotes

```markdown
> this is a blockquote
> it can span multiple lines
```

### images

paste images directly into notes by copying any image (screenshot, file, etc.) and pressing `ctrl+v` (or `cmd+v` on mac). images are converted and inserted as markdown.

you can also manually add images:
```markdown
![alt text](image-url.jpg)
```

**supported formats**: jpeg, png, gif, webp (including animated gifs)
**file size limit**: 5mb
**images are automatically resized** to fit the note width while maintaining aspect ratio

### horizontal rules

```markdown
---
```

## license

licensed under the [mit license](https://github.com/alanagoyal/alanagoyal/blob/main/LICENSE.md).
