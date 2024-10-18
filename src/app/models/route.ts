import { Subject } from "./subject";
export interface Route {
    id: string,
    name: string,
    thumbnail: string,
    subjects: Subject[],
    description: string
}
