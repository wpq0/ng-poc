import { Question } from './question.model';

export interface FormData {
    id: number;
    names: { [lang: string]: string };
    labels: { [lang: string]: string },
    descriptions: { [lang: string]: string };
}
