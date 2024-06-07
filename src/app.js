document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
       item: [
        { id: 1, name: 'Lemon tea', img: '4.jpg', price: 20000 },
        { id: 2, name: 'Kawa platte', img: '2.jpg', price: 35000 },
        { id: 3, name: 'Croissant plain', img: '3.jpg', price: 18000 },
        { id: 4, name: 'Butterscotch Latte', img: '5.jpg', price: 28000 },
        { id: 5, name: 'Holiday berry', img: '6.jpg', price: 25000 },
        { id: 6, name: 'Lemon Nasi goreng kawa', img: '7.jpg', price: 23000 },
       ],
    }));

    Alpine.store('cart',{
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            this.items.push(newItem);
            this.quantity++;
            this.total += newItem.price;
            console.log(this.total);
        },
        });

    // form validation
    // const checkoutButton = document.querySelector('.checkout-button');
    // checkoutButton.disable = true;
    
    // const form = document.querySelector('#checkoutForm')

    // form.addEventListener('keyup', function(){
    //     for(let i = 0; i < form.nextElementSibling.clientHeight; i++) {
    //         if(form.elements[i].value.lenght !== 0){
    //             checkoutButton.classList.remove('disable');
    //             checkoutButton.classList.add('disable');
    //         } else{
    //             return false;
    //         }
    //     }
    //     checkoutButton.disable = false;
    //     checkoutButton.classList.remove('disable');
    // });

    // // kirim data chechkout
    // checkoutButton.addEventListener('click', async function(e){
    //     e.preventDefault();
    //     const formData= new FormData(form);
    //     const data = new URLSearchParams(formData);
    //     const objData = Object.fromEntries(data.items);
    //     console.log(objData);

    //     // trasaksi token
    //     try {
    //         const response = await fetch('payment/payment.php',{
    //             method: 'POST',
    //             body: data,
    //         });
    //         const token = await response.text();
    //         window.snap.pay('');
    //     } catch (err){
    //         console.log(err.mesage);
    //     }
        
    // });
    document.getElementById('checkoutForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (name && email && phone) {
            // Generate the payment information string
            const paymentInfo = `Name: ${name}, Email: ${email}, Phone: ${phone}`;

            // Clear previous QR code if any
            document.getElementById('qrcode').innerHTML = '';

            // Generate the QR code
            new QRCode(document.getElementById('qrcode'), paymentInfo);
        } else {
            alert('Please fill out all fields.');
        }
    });
});
    
