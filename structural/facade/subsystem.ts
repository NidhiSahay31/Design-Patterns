/**
 * complex system
 */
export class DVDPlayer {
  on() { console.log("DVD Player on"); }
  play(movie: string) { console.log(`Playing movie: ${movie}`); }
  off() { console.log("DVD Player off"); }
}

export class Projector {
  on() { console.log("Projector on"); }
  setInput(source: string) { console.log(`Projector input set to: ${source}`); }
  off() { console.log("Projector off"); }
}

export class SurroundSoundSystem {
  on() { console.log("Sound System on"); }
  setVolume(level: number) { console.log(`Volume set to: ${level}`); }
  off() { console.log("Sound System off"); }
}
