const inputTag = document.getElementsByClassName("form-control")[0];//HTMLCollection []
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    // parentDiv.addEventListener("click",()=>{
    //     const classExist = parentDiv.classList.contains("purchased");
    //     if (classExist){
    //         parentDiv.classList.remove("purchased");
    //     }else {
    //         parentDiv.classList.add("purchased");
    //     }
    // });
    parentDiv.addEventListener("click",(event) => {
        parentDiv.classList.toggle("purchased");
    });

    const spanTag = document.createElement("span");
    const trasnIcon = document.createElement("i");
    trasnIcon.classList.add("fas","fa-trash")
    trasnIcon.addEventListener("click",(event) => {
        console.log(productContainer.remove());
    });
    spanTag.id = productId;
    const product = productId.toString() +". "+ inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trasnIcon);
    shoppingListTag.append(productContainer);
    inputTag.value = "";
    productId += 1;
};

inputTag.addEventListener("change", handleChange);