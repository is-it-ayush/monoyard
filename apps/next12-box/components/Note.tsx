import {useState} from "react";

export interface NoteType {
    createdAt: Date;
    id: number;
    title: string;
    text: string;
}

export function Note({note}: {note: NoteType}) {
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);

    return (
        <div className="flex flex-col p-5 m-3 bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg w-full h-full">
    
        </div>
    );
}
