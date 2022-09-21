import { Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Notes } from './notes.entity';
export declare class NotesService {
    private readonly NotesRepository;
    constructor(NotesRepository: Repository<Notes>);
    findAll(): Promise<Notes[]>;
    create(e: any): Observable<Notes>;
    update(id: number, note: Notes): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
