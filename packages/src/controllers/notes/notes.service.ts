import logging from "logging";
import { type Connection, Types as MongooseTypes } from "mongoose";

export async function getAllNotes(db: Connection) {
  try {
    return await db.models.Note.find({}).exec();
  } catch (error) {}
}

export async function getNote(db: Connection, noteId: MongooseTypes.ObjectId) {
  try {
    const newNote = await db.models.Note.findOne({ _id: noteId }).exec();
    if (!newNote) {
    }
    return newNote;
  } catch (error) {}
}

export async function createNote(
  db: Connection,
  noteBody: { title: string; content: String }
) {
  try {
    const newNote = await db.models.Note.create({ ...noteBody });
    return newNote;
  } catch (error) {}
}

export async function updateNote(
  db: Connection,
  noteId: MongooseTypes.ObjectId,
  noteBody: { title: string; content: String }
) {
  try {
    const updatedNote = await db.models.Note.findOneAndUpdate(
      { _id: noteId },
      { ...noteBody }
    ).exec();
    if (!updatedNote) {
    }
    return updatedNote;
  } catch (error) {}
}

export async function deleteNote(
  db: Connection,
  noteId: MongooseTypes.ObjectId
) {
  try {
    await db.models.Note.deleteOne({ _id: noteId }).exec();
  } catch (error) {}
}
