import { Notes } from './notes.entity';
import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    private broker;
    private topicArray;
    private serviceName;
    constructor(notesService: NotesService);
    module_init(): Promise<void>;
    findAll(): Promise<Notes[]>;
}
