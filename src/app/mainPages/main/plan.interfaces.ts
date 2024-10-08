export 
interface CourseDetails {
  Modo: string[];
  students: string[];
  price: string[];
  characteristics: Characteristic[];
}

export
interface Characteristic {
  Include: string[];
  NoInclude: string[];
}
