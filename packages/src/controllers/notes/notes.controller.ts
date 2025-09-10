import * as noteService from "./notes.service.ts";
import { Types as MongooseTypes } from "mongoose";

export async function getNotes(req, res) {
  const { db } = req;
  const notes = await noteService.getAllNotes(db);
  res.status(200).send(notes);
}

export async function postNotes(req, res) {
  const { db, body } = req;
  const newNote = await noteService.createNote(db, body);
  res.status(200).send(newNote);
}

export async function getNote(req, res) {
  const {
    db,
    params: { noteId },
  } = req;
  const noteObjectId = new MongooseTypes.ObjectId(noteId);
  const updatedNote = await noteService.getNote(db, noteObjectId);
  res.status(200).send(updatedNote);
}

export async function patchNote(req, res) {
  const {
    db,
    body,
    params: { noteId },
  } = req;
  const noteObjectId = new MongooseTypes.ObjectId(noteId);
  const updatedNote = await noteService.updateNote(db, noteObjectId, body);
  res.status(200).send(updatedNote);
}

export async function deleteNote(req, res) {
  const {
    db,
    params: { noteId },
  } = req;
  const noteObjectId = new MongooseTypes.ObjectId(noteId);
  await noteService.deleteNote(db, noteObjectId);
  res.status(200).send({ message: "Note deleted" });
}
