function solution(new_id) {
  var answer = "";
  let id = new_id.toLowerCase();
  id = id.replace(/[^a-z0-9-_.]/g, "");
  id = id.replace(/\.{2,}/g, ".");
  id = id.replace(/^\.|\.$/g, "");

  if (id === "") id = "a";
  if (id.length >= 16) {
    id = id.slice(0, 15);
    id = id.replace(/\.$/, "");
  }

  while (id.length < 3) {
    id += id[id.length - 1];
  }
  return id;
}
