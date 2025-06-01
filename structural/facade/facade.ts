import { DVDPlayer, Projector, SurroundSoundSystem } from "./subsystem";

export class HomeTheaterFacade {
  constructor(
    private dvd: DVDPlayer,
    private projector: Projector,
    private sound: SurroundSoundSystem
  ) {}

  watchMovie(movie: string) {
    console.log("Get ready to watch a movie...");
    this.dvd.on();
    this.projector.on();
    this.projector.setInput("DVD");
    this.sound.on();
    this.sound.setVolume(10);
    this.dvd.play(movie);
  }

  endMovie() {
    console.log("Shutting movie theater down...");
    this.dvd.off();
    this.projector.off();
    this.sound.off();
  }
}
