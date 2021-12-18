const btn = document.querySelectorAll(".buy-btn")
let itemProducts = [];
btn.forEach(function(button, index){
    button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector(".prod-details").innerText
        var productPrice = product.querySelector(".root-price").innerText
        var productCutPrice = product.querySelector(".cut-price").innerText
          
        
        // localStorage.setItem("img", productImg)
        // localStorage.setItem("name", productName)
        // localStorage.setItem("price", productPrice)
        // localStorage.setItem("cutprice", productCutPrice)

        // const object = [
        //     {
        //     img: productImg,
        //     name: productName,
        //     price: productPrice,
        //     cutprice: productCutPrice
        //     },

        //     {
        //         img: productImg,
        //         name: productName,
        //         price: productPrice,
        //         cutprice: productCutPrice
        //     }
        // ]
        // localStorage.setItem('productItem', JSON.stringify(object))


        let item = {
            id: index,
            img: productImg,
            name: productName,
            price: productPrice,
            cutprice: productCutPrice,
        }

        itemProducts.push(item);
        localStorage.setItem('productItems', JSON.stringify(itemProducts))

        // return false;
    }})
})


