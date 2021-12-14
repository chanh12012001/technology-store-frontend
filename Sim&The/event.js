// lấy phần Modal
var modal_atm = document.getElementById('myModal');
  
var modal_visa = document.getElementById('myModal_2');

// Lấy phần span đóng Modal
var span = document.getElementsByClassName("close1")[0];


// Khi span được click thì đóng Modal
span.onclick = function() {
    modal_atm.style.display = "none";
    modal_visa.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal_atm) {
        modal_atm.style.display = "none";
    }
    if (event.target == modal_visa) {
        modal_visa.style.display = "none";
    }
}


document.querySelectorAll(".truck-button").forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        let box = button.querySelector(".box"),
            truck = button.querySelector(".truck");

        if (!button.classList.contains("done")) {
            if (!button.classList.contains("animation")) {
                button.classList.add("animation");

                gsap.to(button, {
                    "--box-s": 1,
                    "--box-o": 1,
                    duration: 0.3,
                    delay: 0.5
                });

                gsap.to(box, {
                    x: 0,
                    duration: 0.4,
                    delay: 0.7
                });

                gsap.to(button, {
                    "--hx": -5,
                    "--bx": 50,
                    duration: 0.18,
                    delay: 0.92
                });

                gsap.to(box, {
                    y: 0,
                    duration: 0.1,
                    delay: 1.15
                });

                gsap.set(button, {
                    "--truck-y": 0,
                    "--truck-y-n": -26
                });
                gsap.to(button, {
                    "--truck-y": 1,
                    "--truck-y-n": -25,
                    duration: 0.2,
                    delay: 1.25,
                    
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add("done");
                            }
                        })
                            .to(truck, {
                                x: 0,
                                duration: 0.4
                            })
                            .to(truck, {
                                x: 40,
                                duration: 1
                            })
                            .to(truck, {
                                x: 20,
                                duration: 0.6
                            })
                            .to(truck, {
                                x: 96,
                                duration: 0.4
                            });
                            setTimeout(Show_ATM, 4000);
                            setTimeout(Show_Visa, 4000);
                        gsap.to(button, {
                            "--progress": 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                        
                    }
                });
            }
            
        } else {
            button.classList.remove("animation", "done");
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                "--progress": 0,
                "--hx": 0,
                "--bx": 0,
                "--box-s": 0.5,
                "--box-o": 0,
                "--truck-y": 0,
                "--truck-y-n": -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }
    });
});
function Show_ATM() {
    modal_atm.style.display = "block";
}
function Show_Visa() {
    modal_visa.style.display = "block";
}