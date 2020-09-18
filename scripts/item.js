function validateName(name) {
  if (name === "" || name === "undefined") {
    throw new TypeError("name must not be blank");
  }
}

function create(name) {
  return { id: cuid(), name: name, checked: false };
}

export default { validateName, create };
