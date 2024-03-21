function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }

    return greatMagicians;
}

const magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call makeGreat with a copy of the array
const greatMagicians = makeGreat([...magicianNames]);

// Show the original array
console.log("Original Magicians:");
showMagicians(magicianNames);

// Show the array with "the Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
