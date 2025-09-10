import express from "express";
import asyncHandler from "express-async-handler";
import {
  getNote,
  getNotes,
  patchNote,
  postNotes,
  deleteNote,
} from "../controllers/notes/notes.controller.ts";

const router = express.Router();

router.route("/").get(asyncHandler(getNotes)).post(asyncHandler(postNotes));

router
  .route("/:noteId")
  .get(asyncHandler(getNote))
  .patch(asyncHandler(patchNote))
  .delete(asyncHandler(deleteNote));

export default router;
