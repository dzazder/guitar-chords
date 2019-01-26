var CHORDS = [
    {
        "id": 11,
        "name": "C-dur",
        "holds": [ 0, 1, 0, 2, 3, 3]
    },
    {
        "id": 12,
        "name": "C-moll",
        "holds": [ 0, 4, 5, 5, 0, 0],
        "fullTresh": 3
    },
    {
        "id": 13,
        "name": "C-dur7",
        "holds": [ 0, 1, 3, 2, 3, 0]
    },
    {
        "id": 14,
        "name": "C-moll7",
        "holds": [ 0, 4, 0, 5, 0, 0],
        "fullTresh": 3
    },
    {
        "id": 15,
        "name": "C-dur6",
        "holds": [ 0, 1, 2, 2, 3, 0]
    },
    {
        "id": 16,
        "name": "C-sus2",
        "holds": [ 0, 0, 5, 5, 0, 0],
        "fullTresh": 3
    },
    {
        "id": 17,
        "name": "C-sus4",
        "holds": [ 0, 6, 5, 5, 0, 0],
        "fullTresh": 3
    },
    {
        "id": 18,
        "name": "C-9",
        "holds": [ 3, 3, 0, 2, 3, 0]
    },

    {
        "id": 21,
        "name": "G-dur",
        "holds": [ 3, 0, 0, 0, 2, 3]
    },
    {
        "id": 22,
        "name": "G-moll",
        "holds": [ 0, 0, 0, 5, 5, 0],
        "fullTresh": 3
    },
    {
        "id": 23,
        "name": "G-dur7",
        "holds": [ 1, 0, 0, 0, 2, 3]
    },
    {
        "id": 24,
        "name": "G-moll7",
        "holds": [ 0, 0, 0, 0, 5, 0],
        "fullTresh": 3
    },
    {
        "id": 25,
        "name": "G-dur6",
        "holds": [ 0, 3, 0, 0, 2, 3]
    },
    {
        "id": 26,
        "name": "G-moll6",
        "holds": [ 0, 5, 0, 5, 5, 0],
        "fullTresh": 3
    },
    {
        "id": 27,
        "name": "G-sus4",
        "holds": [ 0, 0, 5, 5, 5, 0],
        "fullTresh": 3
    },

    {
        "id": 31,
        "name": "D-dur",
        "holds": [ 2, 3, 2, 0, 0, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 32,
        "name": "D-moll",
        "holds": [ 1, 3, 2, 0, 0, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 33,
        "name": "D-dur7",
        "holds": [ 2, 1, 2, 0, 0, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 34,
        "name": "D-moll7",
        "holds": [ 1, 1, 2, 0, 0, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 35,
        "name": "D-dur6",
        "holds": [ 1, 0, 1, 0, 0, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 36,
        "name": "D-moll",
        "holds": [ 1, 0, 2, 0, 0, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 37,
        "name": "D-sus2",
        "holds": [ 0, 3, 2, 0, 0, 0],
        "noTouch": [ 5, 6 ]
    },
    {
        "id": 38,
        "name": "D-sus4",
        "holds": [ 3, 3, 2, 0, 0, 0],
        "noTouch": [ 5, 6 ]
    },
    {
        "id": 39,
        "name": "D-9",
        "holds": [ 0, 1, 2, 0, 0, 0]
    },

    {
        "id": 41,
        "name": "A-dur",
        "holds": [ 0, 2, 2, 2, 0, 0]
    },
    {
        "id": 42,
        "name": "A-moll",
        "holds": [ 0, 1, 2, 2, 0, 0]
    },
    {
        "id": 43,
        "name": "A-dur7",
        "holds": [ 0, 2, 0, 2, 0, 0]
    },
    {
        "id": 44,
        "name": "A-moll7",
        "holds": [ 0, 1, 0, 2, 0, 0]
    },
    {
        "id": 45,
        "name": "A-moll6",
        "holds": [ 2, 1, 2, 2, 0, 0]
    },
    {
        "id": 46,
        "name": "A-sus2",
        "holds": [ 0, 0, 2, 2, 0, 0]
    },
    {
        "id": 47,
        "name": "A-sus4",
        "holds": [ 0, 3, 2, 2, 0, 0]
    },
    {
        "id": 48,
        "name": "A-dim",
        "holds": [ 0, 1, 2, 1, 0, 0],
        "noTouch": [ 1, 6 ]
    },

    {
        "id": 51,
        "name": "A-dur",
        "holds": [ 0, 0, 1, 2, 2, 0]
    },
    {
        "id": 52,
        "name": "A-moll",
        "holds": [ 0, 0, 0, 2, 2, 0]
    },
    {
        "id": 53,
        "name": "A-dur7",
        "holds": [ 0, 0, 1, 0, 2, 0]
    },
    {
        "id": 54,
        "name": "A-moll7",
        "holds": [ 0, 0, 0, 0, 2, 0]
    },
    {
        "id": 55,
        "name": "A-dur6",
        "holds": [ 0, 2, 1, 2, 2, 0]
    },
    {
        "id": 56,
        "name": "A-moll6",
        "holds": [ 0, 2, 0, 2, 2, 0]
    },
    {
        "id": 57,
        "name": "A-sus4",
        "holds": [ 0, 0, 2, 2, 2, 0]
    },
    {
        "id": 57,
        "name": "A-9",
        "holds": [ 2, 0, 1, 0, 2, 0]
    },
    {
        "id": 59,
        "name": "A-dim",
        "holds": [ 0, 0, 0, 2, 1, 0],
        "noTouch": [ 1, 2 ]
    },

    {
        "id": 61,
        "name": "F-dur",
        "holds": [ 0, 0, 2, 3, 3, 0],
        "fullTresh": 1
    },
    {
        "id": 62,
        "name": "F-moll",
        "holds": [ 0, 0, 0, 3, 3, 0],
        "fullTresh": 1
    },
    {
        "id": 63,
        "name": "F-dur7",
        "holds": [ 0, 0, 2, 0, 3, 0],
        "fullTresh": 1
    },
    {
        "id": 64,
        "name": "F-moll7",
        "holds": [ 0, 0, 0, 0, 3, 0],
        "fullTresh": 1
    },
    {
        "id": 65,
        "name": "F-dur6",
        "holds": [ 1, 3, 2, 3, 0, 0],
        "noTouch": [ 5, 6 ]
    },
    {
        "id": 66,
        "name": "F-moll6",
        "holds": [ 0, 3, 1, 3, 3, 0],
        "noTouch": [ 1, 6 ]
    },
    {
        "id": 67,
        "name": "F-sus4",
        "holds": [ 0, 0, 3, 3, 3, 0],
        "fullTresh": 1,
        "noTouch": [ 1 ]
    },

    {
        "id": 71,
        "name": "H-dur",
        "holds": [ 0, 4, 4, 4, 0, 0],
        "fullTresh": 2
    },
    {
        "id": 72,
        "name": "H-moll",
        "holds": [ 0, 3, 4, 4, 0, 0],
        "fullTresh": 2
    },
    {
        "id": 73,
        "name": "H-dur7",
        "holds": [ 2, 0, 2, 1, 2, 0],
        "noTouch": [ 6 ]
    },
    {
        "id": 74,
        "name": "H-moll7",
        "holds": [ 0, 3, 0, 4, 0, 0],
        "fullTresh": 2
    },

    {
        "id": 81,
        "name": "Fis-dur",
        "holds": [ 0, 0, 3, 4, 4, 0],
        "fullTresh": 2
    },
    {
        "id": 82,
        "name": "Fis-moll",
        "holds": [ 0, 0, 0, 4, 4, 0],
        "fullTresh": 2
    },
    {
        "id": 83,
        "name": "Fis-dur7",
        "holds": [ 0, 0, 3, 0, 4, 0],
        "fullTresh": 2
    },
    {
        "id": 84,
        "name": "Fis-moll7",
        "holds": [ 0, 0, 0, 0, 4, 0],
        "fullTresh": 2
    },

    {
        "id": 91,
        "name": "Cis-dur",
        "holds": [ 0, 6, 6, 6, 0, 0],
        "fullTresh": 4
    },
    {
        "id": 92,
        "name": "Cis-moll",
        "holds": [ 0, 5, 6, 6, 0, 0],
        "fullTresh": 4
    },
    {
        "id": 93,
        "name": "Cis-dur7",
        "holds": [ 0, 6, 0, 6, 0, 0],
        "fullTresh": 4
    },
    {
        "id": 94,
        "name": "Cis-moll7",
        "holds": [ 0, 6, 5, 6, 0, 0],
        "fullTresh": 4
    },
    {
        "id": 95,
        "name": "Cis-sus4",
        "holds": [ 0, 7, 6, 0, 0, 0],
        "fullTresh": 4
    },

    {
        "id": 101,
        "name": "Gis-dur",
        "holds": [ 0, 0, 5, 6, 6, 0],
        "fullTresh": 4
    },
    {
        "id": 102,
        "name": "Gis-moll",
        "holds": [ 0, 0, 0, 6, 6, 0],
        "fullTresh": 4
    },
    {
        "id": 103,
        "name": "Gis-dur7",
        "holds": [ 0, 0, 5, 0, 6, 0],
        "fullTresh": 4
    },
    {
        "id": 104,
        "name": "Gis-moll7",
        "holds": [ 3, 4, 5, 6, 0, 0],
        "noTouch": [ 5, 6]
    },

    {
        "id": 111,
        "name": "Es-dur",
        "holds": [ 0, 8, 8, 8, 0, 0],
        "fullTresh": 6
    },
    {
        "id": 112,
        "name": "Es-moll",
        "holds": [ 0, 7, 8, 8, 0, 0],
        "fullTresh": 6
    },
    {
        "id": 113,
        "name": "Es-dur7",
        "holds": [ 0, 8, 0, 8, 0, 0],
        "fullTresh": 6
    },
    {
        "id": 114,
        "name": "Es-moll7",
        "holds": [ 0, 8, 7, 8, 0, 0],
        "fullTresh": 6,
        "noTouch": [ 6]
    },

    {
        "id": 121,
        "name": "B-dur",
        "holds": [ 0, 3, 3, 3, 0, 0],
        "fullTresh": 1
    },
    {
        "id": 122,
        "name": "B-moll",
        "holds": [ 0, 2, 3, 3, 0, 0],
        "fullTresh": 1
    },
    {
        "id": 123,
        "name": "B-dur7",
        "holds": [ 0, 3, 0, 3, 0, 0],
        "fullTresh": 1
    },
    {
        "id": 124,
        "name": "B-moll7",
        "holds": [ 0, 2, 0, 3, 0, 0],
        "fullTresh": 1
    }
    
];

export default CHORDS;