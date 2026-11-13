const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const bodyInput = document.getElementById("note-body");
const list = document.getElementById("note-list");
const search = document.getElementById("search");

let notes = JSON.parse(localStorage.getItem("campusnotes") || "[]");

function save() {
  localStorage.setItem("campusnotes", JSON.stringify(notes));
}

function render() {
  list.innerHTML = "";
  const q = search.value.toLowerCase();
  notes.forEach((note, index) => {
    if (q && !(note.title + " " + note.body).toLowerCase().includes(q)) return;
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
      search.addEventListener("input", render);

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
  search.addEventListener("input", render);

render();
  form.reset();
});

search.addEventListener("input", render);

render();
