# Portfolio Data

This folder contains all the structured data for the portfolio website, organized into separate JSON files for better maintainability.

## Structure

- `navigation.json` - Navigation menu items
- `education.json` - Educational background and achievements
- `technologies.json` - Technical skills and tools
- `certifications.json` - Professional certifications
- `projects.json` - Portfolio projects (currently empty)
- `types.ts` - TypeScript type definitions
- `index.ts` - Main export file that combines JSON data with assets

## Usage

```typescript
// Import all data
import { navLinks, education, technologies, certifications, projects } from "../data";

// Import specific data
import { navLinks } from "../data";
import navigationData from "../data/navigation.json"; // Raw JSON without assets
```

## Adding New Data

1. Update the relevant JSON file
2. If new assets are needed, add them to `assets/index.js` and `data/index.ts`
3. Update `types.ts` if new data structures are introduced

## Benefits

- ✅ Better organization
- ✅ Easier maintenance
- ✅ Type safety with TypeScript
- ✅ Reusable JSON data
- ✅ Clear separation of concerns
