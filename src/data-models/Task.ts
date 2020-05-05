export interface Task {
    id: string;
    projectId: string;
    text: string;
    created: Date;
    due?: Date;
}