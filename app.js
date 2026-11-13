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
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  notes.unshift({
    title: titleInput.value.trim(),
    body: bodyInput.value.trim(),
    date: new Date().toLocaleString(),
  });
  save();
  render();
  form.reset();
});

render();
