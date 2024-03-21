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

const magicianNames = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

showMagicians(makeGreat(magicianNames));
