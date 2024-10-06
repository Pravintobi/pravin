// Target the display element in the HTML
let display = document.getElementById('display');

// Begin the countdown using a series of nested callbacks
setTimeout(function() {
    display.innerText = "9"; // Show 9
    setTimeout(function() {
        display.innerText = "8"; // Show 8
        setTimeout(function() {
            display.innerText = "7"; // Show 7
            setTimeout(function() {
                display.innerText = "6"; // Show 6
                setTimeout(function() {
                    display.innerText = "5"; // Show 5
                    setTimeout(function() {
                        display.innerText = "4"; // Show 4
                        setTimeout(function() {
                            display.innerText = "3"; // Show 3
                            setTimeout(function() {
                                display.innerText = "2"; // Show 2
                                setTimeout(function() {
                                    display.innerText = "1"; // Show 1
                                    setTimeout(function() {
                                        display.innerText = "0"; // Show 0
                                        setTimeout(function() {
                                            display.innerText = "Happy Independence Day!"; // Final message
                                        }, 1000); // Pause before final message
                                    }, 1000); // Pause before showing 0
                                }, 1000); // Pause before showing 1
                            }, 1000); // Pause before showing 2
                        }, 1000); // Pause before showing 3
                    }, 1000); // Pause before showing 4
                }, 1000); // Pause before showing 5
            }, 1000); // Pause before showing 6
        }, 1000); // Pause before showing 7
    }, 1000); // Pause before showing 8
}, 1000); // Initial delay before starting countdown
