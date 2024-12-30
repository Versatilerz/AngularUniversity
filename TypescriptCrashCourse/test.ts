// import * as uuid from "uuid";

// console.log(uuid.v4());
import * as rp from "request-promise";

interface Lesson {
  id: number;
  description: string;
}

function getLesson(lessonId: number): Promise<Lesson> {
  return rp
    .get(`lessons/${lessonId}`)
    .then((lesson: any) => Promise.resolve(lesson.description));
}
