document.addEventListener("DOMContentLoaded", () => {
    const countdowns = document.querySelectorAll(".countdown");

    countdowns.forEach(el => {
        const dateEndString = el.dataset.count

        const digitElement = el.querySelectorAll(".countdown__digit");

        // Adding of span element to the each digit
        digitElement.forEach(el => {
            const digitWrapper = document.createElement("span");
            digitWrapper.classList.add("countdown__digit-num");
            for (let x = 0; x <= 9; x++) {
                const digitItem = document.createElement("span");
                digitItem.innerText = x + "";
                digitWrapper.appendChild(digitItem);
            }
            el.innerHTML = "";
            el.appendChild(digitWrapper);
        });

        // main function to run the countdown
        // endTime - Date with time
        function makeCountdown(endTime, hideDaysIfEmpty = false) {
            let endTimeParse = Date.parse(endTime) / 1000;
            let now = new Date();
            let nowParse = Date.parse(now) / 1000;
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400);
            let hours = Math.floor((timeLeft - days * 86400) / 3600);
            let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
            let seconds = Math.floor(
                timeLeft - days * 86400 - hours * 3600 - minutes * 60
            );
            if (timeLeft < 0) {
                days = 0;
                hours = 0;
                seconds = 0;
                minutes = 0;
            }
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            if (days <= 0 && hideDaysIfEmpty) {
                const dayElement = el.querySelector(`.countdown #timer-day`);
                if (dayElement) {
                    dayElement.style.display = "none";
                }
            } else {
                updateCountdown(days, "timer-day");
            }
            updateCountdown(hours, "timer-hour");
            updateCountdown(minutes, "timer-minute");
            updateCountdown(seconds, "timer-second");
        }

        // updating the display
        function updateCountdown(value, elementId) {
            const element = el.querySelector(`.countdown #${elementId}`);
            const firstDigitElement = element.querySelector(
                `.countdown__digit-first > span`
            );
            const secondDigitElement = element.querySelector(
                `.countdown__digit-second > span`
            );

            if (elementId === "timer-day") {
                const elementSecond = element.querySelector(
                    `.countdown__digit-first`
                );
                const elementHundred = element.querySelector(
                    `.countdown__digit-hundred`
                );
                if (value < 10) {
                    value = "0" + value;
                }
                if (value >= 10) {
                    if (elementSecond) {
                        elementSecond.style.display = "inline-block";
                    }
                }
                if (value >= 100) {
                    if (elementHundred) {
                        elementHundred.style.display = "inline-block";
                    }
                }
            }

            const digitHeight = secondDigitElement.offsetHeight / 10;
            let [firstDigit, secondDigit, hundredDigit] = [0, 0];
            if (elementId === "timer-day") {
                if (parseInt(value) >= 100) {
                    [hundredDigit, firstDigit, secondDigit] = value
                        .toString()
                        .split("")
                        .map(Number);
                    const hundredDigitElement = element.querySelector(
                        `.countdown__digit-hundred > span`
                    );
                    hundredDigitElement.style.transform =
                        "translateY(-" + hundredDigit * digitHeight + "px)";
                } else {
                    [firstDigit, secondDigit] = value.toString().split("").map(Number);
                }
            } else {
                [firstDigit, secondDigit] = value.toString().split("").map(Number);
            }

            firstDigitElement.style.transform =
                "translateY(-" + firstDigit * digitHeight + "px)";
            secondDigitElement.style.transform =
                "translateY(-" + secondDigit * digitHeight + "px)";
        }

        let countdownInterval = setInterval(function () {
            // Pass the date here
            makeCountdown(new Date(dateEndString), false);
        }, 100);
    });
});