// Function to find the height of a binary tree
function findTreeHeight() {
  const treeInput = document.getElementById("treeInput").value.trim();
  const values = treeInput.split(",");
  const root = buildTree(values);

  const height = calculateHeight(root);

  const treeHeightDiv = document.getElementById("treeHeight");
  treeHeightDiv.textContent = "Height of the binary tree: " + height;
}

// Function to build binary tree from array
function buildTree(values) {
  if (values.length === 0) return null;

  const root = { val: parseInt(values[0]), left: null, right: null };
  const queue = [root];

  for (let i = 1; i < values.length; i += 2) {
    const current = queue.shift();
    if (values[i] !== "null") {
      current.left = { val: parseInt(values[i]), left: null, right: null };
      queue.push(current.left);
    }
    if (i + 1 < values.length && values[i + 1] !== "null") {
      current.right = { val: parseInt(values[i + 1]), left: null, right: null };
      queue.push(current.right);
    }
  }

  return root;
}

// Function to calculate the height of a binary tree
function calculateHeight(root) {
  if (!root) return 0;

  const leftHeight = calculateHeight(root.left);
  const rightHeight = calculateHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}
