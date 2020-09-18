/* eslint-disable no-undef */
import item from "./item.js";

const store = {
  items: [],
  hideCheckedItems: false,
};
const { items, hideCheckedItems } = store;

const findById = (id) => {
  return store.items.find((item) => item.id === id);
};

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (e) {
    console.log(`couldn't add item: ${e.message}`);
  }
}

function findAndToggleChecked(id) {
  let item = this.findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    findById(id).name = newName;
  } catch (e) {
    console.log(`cannot update name: ${e.message}`);
  }
}

function findAndDelete(id) {
  let index = this.items.indexOf(findById(id));
  this.items.splice(index, 1);
}

function toggleCheckedFilter(){
  this.hideCheckedItems= !this.hideCheckedItems
}



export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
