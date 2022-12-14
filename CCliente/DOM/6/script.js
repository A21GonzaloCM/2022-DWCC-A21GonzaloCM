let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTreeData() {
  for (const [key, value] of Object.entries(arbore)) {
    let li1 = document.createElement("li");
    let ul1 = document.createElement("ul");
    li1.textContent = key;
    document.body.append(ul1);
    ul1.append(li1);

    if (Object.entries(value) != null) {
      for (const [chave, valor] of Object.entries(value)) {
        let li2 = document.createElement("li");
        let ul2 = document.createElement("ul");
        li2.textContent = chave;
        ul1.append(ul2);
        ul2.append(li2);
        if (Object.entries(valor) != null) {
          for (const [llave, val] of Object.entries(valor)) {
            let li3 = document.createElement("li");
            let ul3 = document.createElement("ul");

            li3.textContent = llave;
            ul2.append(ul3);
            ul3.append(li3);
          }
        }
      }
    }
  }
}

createTreeData();
