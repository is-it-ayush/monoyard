import { useState } from "react";

export interface NoteType {
  createdAt: Date;
  id: number;
  title: string;
  text: string;
}

export function Note({ note }: { note: NoteType }) {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  return (
    <div className="m-3 flex h-full w-full flex-col rounded bg-white bg-opacity-10 p-5 drop-shadow-lg backdrop-blur-lg"></div>
  );
}
