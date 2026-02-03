# v0 Prompt to Production Attendance Page - San Diego

[Live Event Page](https://v0sdprompttoprod.vercel.app/)


Event page for the v0 Prompt to Production hackathon in San Diego (February 7, 2026). Features a live event schedule with real-time status tracking and an interactive 3D lanyard generator.

Built on top of project by @juandadev https://github.com/juandadev

## Features

- **Live Event Schedule** — Real-time status tracking with automatic highlighting
- **Interactive 3D Lanyard** — Physics-based badge with React Three Fiber + Rapier
- **Personalized Badge Generator** — Enter name, choose dark/light variant, export PNG
- **Shareable URLs** — Encrypted lanyard data
- **Dynamic OG Images** — Auto-generated social media previews
- **Demo Mode** — `?demo=HH:MM` query param to simulate event times

## Quick Start

```bash
bun install
bun run dev
```

## Customization

### Event Schedule

Edit `components/hero-section.tsx` (lines 47-53):

```tsx
const scheduleTimes = [
    { start: 10 * 60, end: 10 * 60 + 10, title: "Kickoff" },
    { start: 10 * 60 + 10, end: 10 * 60 + 30, title: "Track selection" },
    // ...more items
];
```

### Event Date

Update `components/hero-section.tsx` (lines 28-30):

```tsx
let isEventDay = currentTime.getFullYear() === 2026 &&
    currentTime.getMonth() === 1 &&    // February = 1
    currentTime.getDate() === 7;        // Day of month
```

### Lanyard City/Date

Edit `components/lanyard-with-controls.tsx` (lines 189-190):

```tsx
<CardTemplate
    city='san diego'
    date='02.07.2026'
/>


```

### OG Images

Update `app/api/og/route.tsx` (lines 57-58):

```tsx
const EVENT_CITY = "san diego";
const EVENT_DATE = "february 7th, 2026";
```

## Creating Custom Lanyard Textures
The lanyard uses base texture images located in the public folder:
- `/card.glb` - Lanyard 3D model, it includes the default card texture (dark) without customization
- `/card-base-dark.png` - Dark variant card texture
- `/card-base-light.png` - Light variant card texture
### Using the Existing Textures
The current textures include the "Prompt to Production" branding. To customize for your event while keeping this aesthetic:
1. Update city and date via the `city` and `date` props in `lanyard-with-controls.tsx` (lines 189-190)
2. The text is rendered dynamically on the canvas
### Creating Your Own Textures
Follow these steps if you want to create your own textures:
1. Create your template using any design tool (Figma, Photoshop, etc)
2. The layout has to be 1:1 aspect ratio (square)
3. Consider safe zones for dynamic text placement (see attached figma file as an example of safe zones)
4. Color considerations for dark/light variants (or more if you decide to extend the initial template)
5. You need to modify the 3D texture (`card.blg`) as well so it renders the default texture on the initial load
### How to edit `card.glb` (3D model) file
1. Go to [this page](https://modelviewer.dev/editor/), drag and drop the `card.glb` file to preview the model
2. Click on the palette icon tab, and under the **texture** option, load your texture image
![Modify texture example](/public/modify-texture.png)
3. Go back to the initial tab, and click **Download scene**
![Export texture example](/public/export-texture.png)
4. It'll download a zip file with all your model files. You just need to drag and drop the `card.glb` file and replace it into your `/public` folder.
![Exported folder with texture file](/public/folder-texture.png)
### Texture Specifications
- **Dimensions:** 1376 x 1376 pixels (any 1:1 ratio works, the larger the better resolution will have)
- **Format:** PNG with transparency support
- **Files to replace:**
  - `/public/card-base-dark.png`
  - `/public/card-base-light.png`
### Design Guidelines
1. Keep the bottom ~400px area clear for the user's name
2. Keep the top ~150px area clear for city/date text
3. Ensure good contrast for text readability
4. Test both dark and light variants

