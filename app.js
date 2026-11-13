const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const bodyInput = document.getElementById("note-body");
const list = document.getElementById("note-list");
const count = document.getElementById("note-count");

let notes = JSON.parse(localStorage.getItem("campusnotes") || "[]");

function save() {
  localStorage.setItem("campusnotes", JSON.stringify(notes));
}

function render() {
  list.innerHTML = "";
  count.textContent = notes.length + (notes.length === 1 ? " note" : " notes");
  notes.forEach((note, index) => {
    list.appendChild(createNoteElement(note, index));
  });
}

function createNoteElement(note, index) {
  const li = document.createElement("li");
  li.className = "note";

  const h3 = document.createElement("h3");
  h3.textContent = note.title;

  const p = document.createElement("p");
  p.textContent = note.body;

  const small = document.createElement("small");
  small.textContent = note.date;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", () => {
    notes.splice(index, 1);
    save();
    render();
  });

  li.append(h3, p, small, del);
  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title || !body) {
    alert("Title and note cannot be empty or only spaces.");
    return;
  }
  notes.unshift({ title, body, date: new Date().toLocaleString() });
  save();
  render();
  form.reset();
});

document.getElementById("clear-all").addEventListener("click", () => {
  if (notes.length && confirm("Delete all notes?")) {
    notes = [];
    save();
    render();
  }
});

// save the note with Ctrl+Enter (Cmd+Enter on Mac) while typing in the text box
bodyInput.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    form.requestSubmit();
  }
});

render();
