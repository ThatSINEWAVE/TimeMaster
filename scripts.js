document.addEventListener("DOMContentLoaded", function() {
    const description = document.getElementById("description");
    const inputForm = document.getElementById("inputForm");
    const result = document.getElementById("result");

    // Utility functions
    const fadeOut = (element, callback) => {
        element.style.opacity = 1;
        (function fade() {
            if ((element.style.opacity -= 0.1) < 0) {
                element.style.display = "none";
                if (callback) callback();
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    const fadeIn = (element) => {
        element.style.opacity = 0;
        element.style.display = "block";
        (function fade() {
            let val = parseFloat(element.style.opacity);
            if (!((val += 0.1) > 1)) {
                element.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };

    const updateDescription = (html) => {
        fadeOut(description, () => {
            description.innerHTML = html;
            fadeIn(description);
        });
    };

    const createForm = (inputs, endpoint) => {
        inputForm.innerHTML = inputs.map(input => `
            <div class="form-group">
                <label for="${input.id}">${input.label}</label>
                <input type="${input.type}" id="${input.id}" placeholder="${input.placeholder || ''}" ${input.required ? 'required' : ''}>
            </div>
        `).join('') + `<button onclick="handleSubmit('${endpoint}')" class="submit-btn">Calculate</button>`;
    };

    const handleError = (error) => {
        result.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    };

    // API call function
    window.handleSubmit = async (endpoint) => {
        result.innerHTML = 'Loading...';

        try {
            const inputs = Array.from(inputForm.querySelectorAll('input')).reduce((acc, input) => {
                acc[input.id] = input.value;
                return acc;
            }, {});

            const queryString = new URLSearchParams(inputs).toString();
            const response = await fetch(`https://digidates.de/api/v1/${endpoint}?${queryString}`);

            if (!response.ok) throw new Error('API request failed');

            const data = await response.json();
            result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } catch (error) {
            handleError(error);
        }
    };

    // Button configurations
    const buttonConfigs = {
        unixTimeBtn: {
            description: "Convert dates to Unix timestamp (seconds since January 1, 1970, 00:00:00 UTC)",
            inputs: [{
                id: "timestamp",
                label: "Date and Time (YYYY-MM-DD HH:mm:ss)",
                type: "datetime-local",
                required: true
            }],
            endpoint: "unixtime"
        },
        dateValidationBtn: {
            description: "Check if a date is valid",
            inputs: [{
                id: "date",
                label: "Date (YYYY-MM-DD)",
                type: "date",
                required: true
            }],
            endpoint: "checkdate"
        },
        calendarWeekBtn: {
            description: "Get the ISO calendar week number for a date",
            inputs: [{
                id: "date",
                label: "Date (YYYY-MM-DD)",
                type: "date",
                required: true
            }],
            endpoint: "week"
        },
        leapYearBtn: {
            description: "Check if a year is a leap year",
            inputs: [{
                id: "year",
                label: "Year",
                type: "number",
                placeholder: "YYYY",
                required: true
            }],
            endpoint: "leapyear"
        },
        countdownBtn: {
            description: "Calculate time remaining until a future date",
            inputs: [{
                id: "targetDate",
                label: "Target Date (YYYY-MM-DD)",
                type: "date",
                required: true
            }],
            endpoint: "countdown"
        },
        progressBtn: {
            description: "Calculate progress between two dates",
            inputs: [{
                id: "start",
                label: "Start Date (YYYY-MM-DD)",
                type: "date",
                required: true
            }, {
                id: "end",
                label: "End Date (YYYY-MM-DD)",
                type: "date",
                required: true
            }],
            endpoint: "progress"
        },
        co2YearBtn: {
            description: "Find the year when CO² concentration matched a specific value",
            inputs: [{
                id: "concentration",
                label: "CO² Concentration (ppm)",
                type: "number",
                placeholder: "325.5",
                required: true
            }],
            endpoint: "co2/reverse"
        }
    };

    // Add event listeners to all buttons
    Object.entries(buttonConfigs).forEach(([btnId, config]) => {
        document.getElementById(btnId).addEventListener("click", () => {
            updateDescription(`<p>${config.description}</p>`);
            createForm(config.inputs, config.endpoint);
            result.innerHTML = '';
        });
    });

    // Initialize with empty result
    result.innerHTML = '';
});