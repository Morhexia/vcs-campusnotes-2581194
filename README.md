# vcs-campusnotes-2581194

**CampusNotes** – a small browser app for writing and organising notes for lectures, labs and assignments.
Made for the Version Control System (CSE25303) course, Assignment 2.

**Student:** Kanishk Jain (2581194)

## Features
- Add notes with a subject/title and text
- Delete notes
- Notes are saved in the browser using `localStorage`
- Note counter and a "Clear all notes" button
- Empty or space-only notes are rejected

## How to run
Open `index.html` in any web browser. No installation needed.

## Branches
- `main` – stable version
- `feature/note-search` – search box to filter notes
- `feature/dark-mode` – dark mode toggle

## Workflow notes
This repository was cloned into a second folder, changed there, pushed,
and then pulled back into the original local repository to test the
clone → commit → push → pull cycle.

## Commit message convention
This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix      | Use for                                  |
|-------------|------------------------------------------|
| `feat:`     | a new feature                            |
| `fix:`      | a bug fix                                |
| `docs:`     | documentation only                       |
| `refactor:` | code change that is not a feature or fix |
| `chore:`    | maintenance (config, ignore files, etc.) |

## Versions
- `v0.1.0` – first working version (lightweight tag)
- `v1.0.0` – first stable release (annotated tag, published as a GitHub Release)

## Git hooks
The hooks are kept in the tracked `.githooks/` folder so everyone gets them with `git clone`:
- `pre-commit` – rejects a commit if a staged file still has a to-do or fix-me marker comment
- `commit-msg` – rejects messages shorter than 10 characters or without a `feat:`, `fix:`, `docs:`, `refactor:` or `chore:` prefix

Turn them on once after cloning:
```bash
git config core.hooksPath .githooks
```
