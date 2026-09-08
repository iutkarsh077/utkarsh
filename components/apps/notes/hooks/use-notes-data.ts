"use client";

import { useMemo } from "react";
import { Note as NoteType } from "@/lib/notes/types";
import { withDisplayCreatedAtForNotes } from "@/lib/notes/display-created-at";
import { getStaticPublicNotes } from "@/data/notes/public-notes";

export function useNotesData() {
  const notes = useMemo<NoteType[]>(
    () => withDisplayCreatedAtForNotes(getStaticPublicNotes()),
    []
  );

  return {
    loading: false,
    notes,
    notesForFallback: notes,
    sessionIdForSidebar: "",
    sessionNotesForSidebar: [] as NoteType[],
  };
}
