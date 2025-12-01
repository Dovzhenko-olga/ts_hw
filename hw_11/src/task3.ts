// 🧠 Інтерфейси навчальної платформи (веб / мобільна / десктопна):
// Завдання: Створи LearningUIFactory, яка створює: LessonView, QuizComponent, ProgressTracker.
// Реалізуй фабрики: WebLearningUIFactory, MobileLearningUIFactory, DesktopLearningUIFactory.
// Мета: моделювання кросплатформного інтерфейсу, де для кожної платформи створюються свої реалізації компонентів.

interface ILessonViewer{
  show(lesson: string): void
}

interface IQuizGenerator{
  generate(question: string): void
}

interface IProgressTracker{
  getProgress(progress: number): void
}

class WebLessonView implements ILessonViewer{
  show(lesson: string): void {
    console.log(`Web заняття ${lesson}`)
  }
}

class MobLessonView implements ILessonViewer{
  show(lesson: string): void {
    console.log(`Заняття на мобільному ${lesson}`)
  }
}

class DesktopLessonView implements ILessonViewer{
  show(lesson: string): void {
    console.log(`Desktop заняття ${lesson}`)
  }
}

class WebQuizComponent implements IQuizGenerator{
  generate(question: string): void {
    console.log(`Відповідайте: ${question}`)
  }
}

class MobQuizComponent implements IQuizGenerator{
  generate(question: string): void {
    console.log(`Відповідайте: ${question}`)
  }
}

class DesktopQuizComponent implements IQuizGenerator{
  generate(question: string): void {
    console.log(`Відповідайте: ${question}`)
  }
}

class WebProgressTracker implements IProgressTracker{
  getProgress(progress: number): void {
    console.log(`Ваш прогрес ${progress} з 10`)
  }
}

class MobProgressTracker implements IProgressTracker{
  getProgress(progress: number): void {
    console.log(`Ваш прогрес ${progress} з 10`)
  }
}

class DesktopProgressTracker implements IProgressTracker{
  getProgress(progress: number): void {
    console.log(`Ваш прогрес ${progress} з 10`)
  }
}

interface ILearningUIFactory{
  createViewer(): ILessonViewer
  createQuizGenerator(): IQuizGenerator
  createProgressBar(): IProgressTracker
}

class WebLearningUIFactory implements ILearningUIFactory{
  createViewer(): ILessonViewer {
    return new WebLessonView()
  }
  createQuizGenerator(): IQuizGenerator {
    return new WebQuizComponent()
  }
  createProgressBar(): IProgressTracker {
    return new WebProgressTracker()
  }
}

class MobileLearningUIFactory implements ILearningUIFactory{
  createViewer(): ILessonViewer {
    return new MobLessonView()
  }
  createQuizGenerator(): IQuizGenerator {
    return new MobQuizComponent()
  }
  createProgressBar(): IProgressTracker {
    return new MobProgressTracker()
  }
}

class DesktopLearningUIFactory implements ILearningUIFactory{
  createViewer(): ILessonViewer {
    return new DesktopLessonView()
  }
  createQuizGenerator(): IQuizGenerator {
    return new DesktopQuizComponent()
  }
  createProgressBar(): IProgressTracker {
    return new DesktopProgressTracker()
  }
}

function getLearning(learningPlatform: ILearningUIFactory, lesson: string, question: string, progress: number) {
  const viewer = learningPlatform.createViewer()
  const quiz = learningPlatform.createQuizGenerator()
  const progressBar = learningPlatform.createProgressBar()

  viewer.show(lesson),
  quiz.generate(question),
  progressBar.getProgress(progress)
}

const learningPlatform1 = new WebLearningUIFactory()
const learningPlatform2 = new MobileLearningUIFactory()
const learningPlatform3 = new DesktopLearningUIFactory()

console.log('Web')
getLearning(learningPlatform1, 'Math', 'Circle area', 7)
console.log('Mob')
getLearning(learningPlatform2, 'English', 'Past perfect', 9)
console.log('Desktop')
getLearning(learningPlatform3, 'Physics', "Newton's law", 8)