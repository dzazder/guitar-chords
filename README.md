# 🎸 Guitar Chords

An interactive web application for visualizing guitar chord fingerings on a fretboard diagram.

## 🌐 Live Demo

**[View Live App →](https://chords-guitar.vercel.app)**

---

## 📖 About

Guitar Chords is a React-based application that provides an intuitive visual representation of guitar chord fingerings. Simply click on any chord button to see the finger positions displayed on an interactive guitar fretboard canvas.

## ✨ Features

- **Interactive Fretboard**: Real-time canvas visualization of chord positions
- **Extensive Chord Library**: Includes major, minor, seventh, suspended, and more variations
- **Multiple Keys**: Chords available in C, G, D, A, E, F, H (B), Fis (F#), Cis (C#), Gis (G#), Es (Eb), and B (Bb)
- **Visual Indicators**:
  - Colored dots show finger positions
  - Red X marks indicate strings not to play
  - Bar chords are displayed with proper barre notation
- **Responsive Design**: Works on desktop and mobile devices

## 🎵 Supported Chords

The app includes over 70+ chord variations across all major keys:
- Major (dur)
- Minor (moll)
- Seventh (dur7, moll7)
- Sixth (dur6, moll6)
- Suspended (sus2, sus4)
- Ninth (9)
- Diminished (dim)

## 🛠️ Technology Stack

- **React** 18.3.1 - Modern UI library
- **Sass** - Advanced CSS styling
- **HTML5 Canvas** - Dynamic fretboard rendering
- **Create React App** - Build tooling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/guitar-chords.git
cd guitar-chords
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm run build`
Builds the app for production to the `build` folder with optimized performance.

### `npm test`
Launches the test runner in interactive watch mode.

## 🎨 Customization

To add or modify chords, edit the chord definitions in `src/models/chords.js`. Each chord object contains:
- `id`: Unique identifier
- `name`: Display name
- `holds`: Array of fret positions for each string (0 = open string)
- `fullTresh`: (Optional) Fret number for barre chords
- `noTouch`: (Optional) Array of string numbers that shouldn't be played

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ for guitar enthusiasts
