import { v4 as uuidv4 } from "uuid";
import { Note } from "@/lib/notes/types";

interface NotesRouter {
  push: (href: string) => void;
  refresh: () => void;
}

export async function createNote(
  sessionId: string | null,
  router: NotesRouter,
  addNewPinnedNote: (slug: string) => void,
  refreshSessionNotes: () => Promise<void>,
  setSelectedNoteSlug: (slug: string | null) => void,
  useCallbackNavigation: boolean = false,
  onNoteCreated?: (note: Note) => void
) {
  const noteId = uuidv4();
  const slug = `new-note-${noteId}`;

  const note: Note = {
    id: noteId,
    slug: slug,
    title: "",
    content: "",
    public: false,
    created_at: new Date().toISOString(),
    session_id: sessionId,
    category: "today",
    emoji: "👋🏼",
  };

  try {
    if (useCallbackNavigation) {
      addNewPinnedNote(slug);
      await refreshSessionNotes();
      setSelectedNoteSlug(slug);
      if (onNoteCreated) {
        onNoteCreated(note);
      }
    } else {
      addNewPinnedNote(slug);
      refreshSessionNotes().then(() => {
        setSelectedNoteSlug(slug);
        router.push(`/notes/${slug}`);
        router.refresh();
      });
    }
  } catch (error) {
    console.error("Error creating note:", error);
  }
}
