# Project Structure

This document describes the organization of the portfolio project.

## Directory Structure

```
my-portfolio/
├── public/                     # Static files served directly
│   ├── assets/                # Public assets
│   │   └── cvs/              # CV files (accessible via URL)
│   │       ├── FRCVMOHAMEDJAMALELMELLAHI.pdf
│   │       └── ENCVMOHAMEDJAMALELMELLAHI.pdf
│   ├── index.html
│   └── ...
│
├── src/                       # Source code
│   ├── components/           # React components (for future use)
│   ├── data/                 # Data files
│   │   └── portfolioData.js # All portfolio content
│   ├── assets/              # Source assets (images, etc.)
│   │   └── logo.svg
│   ├── styles/              # CSS files (for future use)
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   └── index.js             # Entry point
│
├── CVs/                      # Original CV files (source)
│   ├── FRCVMOHAMEDJAMALELMELLAHI.pdf
│   └── ENCVMOHAMEDJAMALELMELLAHI.pdf
│
├── node_modules/            # Dependencies (auto-generated)
├── package.json             # Project configuration
└── README.md               # Project documentation
```

## Key Files

### `/src/data/portfolioData.js`
Contains all portfolio content including:
- Skills (languages, frontend, backend, databases, tools)
- Professional experience
- Education history
- Projects
- Certifications
- Personal information and contact details

**Why?** Separating data from components makes it easier to update content without touching the UI code.

### `/public/assets/cvs/`
Contains downloadable CV files in French and English.

**Access URLs:**
- French CV: `/assets/cvs/FRCVMOHAMEDJAMALELMELLAHI.pdf`
- English CV: `/assets/cvs/ENCVMOHAMEDJAMALELMELLAHI.pdf`

## Organization Benefits

1. **Maintainability**: Content is separated from presentation logic
2. **Scalability**: Easy to add new sections or components
3. **Accessibility**: CVs are publicly accessible via direct URLs
4. **Clarity**: Clear folder structure makes navigation easier

## Future Enhancements

Consider creating separate components for:
- `src/components/Hero.jsx`
- `src/components/Skills.jsx`
- `src/components/Experience.jsx`
- `src/components/Education.jsx`
- `src/components/Projects.jsx`
- `src/components/Certifications.jsx`
- `src/components/Contact.jsx`

This would make the codebase even more modular and maintainable.

## Updating Content

To update portfolio content:
1. Edit `/src/data/portfolioData.js`
2. No need to touch component files
3. Changes will automatically reflect in the UI

To update CVs:
1. Replace files in `/CVs/` (source)
2. Copy to `/public/assets/cvs/` (or run build process)
