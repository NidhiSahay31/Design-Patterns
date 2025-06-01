import { HomeTheaterFacade } from "./facade";
import { DVDPlayer, Projector, SurroundSoundSystem } from "./subsystem";

const dvd = new DVDPlayer();
const projector = new Projector();
const sound = new SurroundSoundSystem();

const homeTheater = new HomeTheaterFacade(dvd, projector, sound);

homeTheater.watchMovie("Inception");
homeTheater.endMovie();
