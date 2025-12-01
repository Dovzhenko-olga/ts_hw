"use strict";
// 🧠 Інтерфейси навчальної платформи (веб / мобільна / десктопна):
// Завдання: Створи LearningUIFactory, яка створює: LessonView, QuizComponent, ProgressTracker.
// Реалізуй фабрики: WebLearningUIFactory, MobileLearningUIFactory, DesktopLearningUIFactory.
// Мета: моделювання кросплатформного інтерфейсу, де для кожної платформи створюються свої реалізації компонентів.
class WebLessonView {
    show(lesson) {
        console.log(`Web заняття ${lesson}`);
    }
}
class MobLessonView {
    show(lesson) {
        console.log(`Заняття на мобільному ${lesson}`);
    }
}
class DesktopLessonView {
    show(lesson) {
        console.log(`Desktop заняття ${lesson}`);
    }
}
class WebQuizComponent {
    generate(question) {
        console.log(`Відповідайте: ${question}`);
    }
}
class MobQuizComponent {
    generate(question) {
        console.log(`Відповідайте: ${question}`);
    }
}
class DesktopQuizComponent {
    generate(question) {
        console.log(`Відповідайте: ${question}`);
    }
}
class WebProgressTracker {
    getProgress(progress) {
        console.log(`Ваш прогрес ${progress} з 10`);
    }
}
class MobProgressTracker {
    getProgress(progress) {
        console.log(`Ваш прогрес ${progress} з 10`);
    }
}
class DesktopProgressTracker {
    getProgress(progress) {
        console.log(`Ваш прогрес ${progress} з 10`);
    }
}
class WebLearningUIFactory {
    createViewer() {
        return new WebLessonView();
    }
    createQuizGenerator() {
        return new WebQuizComponent();
    }
    createProgressBar() {
        return new WebProgressTracker();
    }
}
class MobileLearningUIFactory {
    createViewer() {
        return new MobLessonView();
    }
    createQuizGenerator() {
        return new MobQuizComponent();
    }
    createProgressBar() {
        return new MobProgressTracker();
    }
}
class DesktopLearningUIFactory {
    createViewer() {
        return new DesktopLessonView();
    }
    createQuizGenerator() {
        return new DesktopQuizComponent();
    }
    createProgressBar() {
        return new DesktopProgressTracker();
    }
}
function getLearning(learningPlatform, lesson, question, progress) {
    const viewer = learningPlatform.createViewer();
    const quiz = learningPlatform.createQuizGenerator();
    const progressBar = learningPlatform.createProgressBar();
    viewer.show(lesson),
        quiz.generate(question),
        progressBar.getProgress(progress);
}
const learningPlatform1 = new WebLearningUIFactory();
const learningPlatform2 = new MobileLearningUIFactory();
const learningPlatform3 = new DesktopLearningUIFactory();
console.log('Web');
getLearning(learningPlatform1, 'Math', 'Circle area', 7);
console.log('Mob');
getLearning(learningPlatform2, 'English', 'Past perfect', 9);
console.log('Desktop');
getLearning(learningPlatform3, 'Physics', "Newton's law", 8);
