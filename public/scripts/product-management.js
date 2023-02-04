const deleteProductButtonElements=document.querySelectorAll('.product-item button');

async function deleteProduct(event){
    const buttonElement= event.target;
    const productId=buttonElement.dataset.productid;
    const csrfToken=buttonElement.dataset.csrf;

    const response=fetch('/admin/products/'+productId+'?_csrf='+csrfToken,{
        method:'delete',
    });
    response.then((response)=>console.log(response.ok));
    // if(!response.ok){
    //     alert('Something went wrong');
    //     return;
    // }
    buttonElement.parentElement.parentElement.parentElement.parentElement.remove();
}

for(const deleteProductButtonElement of deleteProductButtonElements){
    deleteProductButtonElement.addEventListener('click',deleteProduct);
}