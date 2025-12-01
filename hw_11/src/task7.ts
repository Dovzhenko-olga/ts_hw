// 🧩 Фасад для мультимедійного плеєра:
// Реалізуй систему з кількох компонентів (AudioPlayer, VideoPlayer, Equalizer, PlaylistManager).
// Створи клас MediaFacade, який спрощує взаємодію з усією системою - наприклад, надає метод playMovie(filename: string),
// що всередині виконує всі потрібні кроки (ініціалізація, налаштування звуку, запуск відео).

class AudioPlayer{
  start() {
    console.log('Аудіо плеєр запущено')
  }
}

class VideoPlayer{
  start() {
    console.log('Відео плеєр запущено')
  }
}

class Equalizer{
  setup() {
    console.log('Параметри звуку налаштовані')
  }
}

class PlaylistManager{
  load(filename: string) {
    console.log(`Плейліст ${filename} завантажено`)
  }
}

class MediaFacade{
  private audio = new AudioPlayer()
  private video = new VideoPlayer()
  private equalizer = new Equalizer()
  private playlist = new PlaylistManager()

  playMovie(filename: string) {
    this.audio.start()
    this.video.start()
    this.equalizer.setup()
    this.playlist.load(filename)
    console.log('Ваша медіа система готова для використання! ♫')
  }
}

const media = new MediaFacade()

media.playMovie('Favorite')