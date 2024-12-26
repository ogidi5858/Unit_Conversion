 // Get elements
 const input = document.getElementById("input-value");
 const output = document.getElementById("output");
 const convertBtn = document.getElementById("convert-btn");
 const clearBtn = document.getElementById("clear-btn");
 const select = document.getElementById("unit-select");

 // Conversion logic
 convertBtn.addEventListener("click", function () {
     const value = parseFloat(input.value);
     const unit = select.value;

     if (isNaN(value) || value < 0) {
         output.textContent = "Please enter a positive valid number.";
         return;
     }

        // Conversion logic using if...else if
        // meters and kilometers
        if (unit === "metersToKilometers") {
         output.textContent = `${value} meters = ${value / 1000} kilometers`;
     } else if (unit === "kilometersToMeters") {
         output.textContent = `${value} kilometers = ${value * 1000} meters`;
         // grams and kilograms
     } else if (unit === "gramsToKilograms") {
         output.textContent = `${value} grams = ${value / 1000} kilograms`;
     } else if (unit === "kilogramsToGrams") {
         output.textContent = `${value} kilograms = ${value * 1000} grams`;
         // minutes and seconds
     } else if (unit === "secondsToMinutes") {
         output.textContent = `${value} seconds = ${(value / 60).toFixed(2)} minutes`;
     } else if (unit === "minutesToSeconds") {
         output.textContent = `${value} minutes = ${value * 60} seconds`;
         //temperature
     } else if (unit === "celsiusToFahrenheit") {
         output.textContent = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
     } else if (unit === "fahrenheitToCelsius") {
         output.textContent = `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
         // data units
     } else if (unit === "bytesToKilobytes") {
         output.textContent = `${value} bytes = ${(value / 1024).toFixed(2)} kilobytes`;
     } else if (unit === "kilobytesToBytes") {
         output.textContent = `${value} kilobytes = ${value * 1024} bytes`;         
     }
 });

     
 // Clear inputs and output
 clearBtn.addEventListener("click", function () {
     input.value = "";
     output.textContent = "";
     select.value = "Select Conversion Type";
 });

 // Highlight select when changed
 select.addEventListener("change", function () {
     select.classList.add("highlight");
     setTimeout(() => select.classList.remove("highlight"), 500);
 });