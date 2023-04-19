class App {
  constructor() {
    this.menu = new MenuScreen();
    this.music = new MusicScreen();

    this.showMusicScreen = this.showMusicScreen.bind(this);
    document.addEventListener('open-music-screen', this.showMusicScreen);
  }

    showMusicScreen(event) {
      this.music.show(event.detail); 
  }

}
