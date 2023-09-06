const checkboxForm = document.getElementById("checkboxForm");
const shuffleButton = document.getElementById("shuffleButton");
const changeButton = document.getElementById("changeButton");
const showSelectedButton = document.getElementById("showSelectedButton");
const selectedValuesDiv = document.getElementById("selectedValues");

shuffleButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const checkboxes = Array.from(checkboxForm.querySelectorAll("input[type='checkbox']"));
    const labels = Array.from(checkboxForm.querySelectorAll("label"));
    const checkboxLabelPairs = checkboxes.map((checkbox, index) => ({
        checkbox: checkbox,
        label: labels[index],
    }));

    for (let i = 0; i < checkboxLabelPairs.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [checkboxLabelPairs[i], checkboxLabelPairs[j]] = [checkboxLabelPairs[j], checkboxLabelPairs[i]];
    }

        checkboxLabelPairs.forEach((pair) => {
        checkboxForm.appendChild(pair.checkbox);
        checkboxForm.appendChild(pair.label);
    });
});


changeButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const checkboxes = checkboxForm.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox, index) => {
        checkbox.value = "New Value " + (index + 1);
    });
});

showSelectedButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const selectedCheckboxes = Array.from(checkboxForm.querySelectorAll("input[type='checkbox']:checked"));
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);
    selectedValuesDiv.innerHTML = `Selected Values: ${selectedValues.join(", ")}`;
});
