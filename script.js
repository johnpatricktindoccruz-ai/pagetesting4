javascript
function showTab(tabName) {

    const sections = document.querySelectorAll(".tab-section");
    const buttons = document.querySelectorAll("#navigation button");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    const selectedSection = document.getElementById(tabName);

    if (!selectedSection) {
        console.error("Tab not found: " + tabName);
        return;
    }

    selectedSection.classList.add("active");

    buttons.forEach(function(button) {
        button.classList.remove("active");

        const onclickValue = button.getAttribute("onclick");

        if (
            onclickValue &&
            onclickValue.indexOf("'" + tabName + "'") !== -1
        ) {
            button.classList.add("active");
        }
    });

    const navigation = document.getElementById("navigation");

    if (navigation) {
        navigation.classList.remove("show");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function toggleMenu() {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }

    navigation.classList.toggle("show");
}


function changeProfilePicture(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {

        alert("Please select a valid image file.");

        event.target.value = "";

        return;
    }

    if (file.size > 5 * 1024 * 1024) {

        alert("Please select an image smaller than 5 MB.");

        event.target.value = "";

        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        const profileImage =
            document.getElementById("profileImage");

        if (profileImage) {
            profileImage.src = e.target.result;
        }
    };

    reader.onerror = function() {
        alert("Unable to load the selected image.");
    };

    reader.readAsDataURL(file);
}


document.addEventListener("DOMContentLoaded", function() {

    console.log("SYSTEM ONLINE");

    console.log(
        "Welcome to John Patrick Cruz's IT Portfolio."
    );

    const navigationButtons =
        document.querySelectorAll("#navigation button");

    navigationButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            navigationButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

        });

    });

    showTab("home");

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const navigation =
            document.getElementById("navigation");

        if (navigation) {
            navigation.classList.remove("show");
        }
    }

});


document.addEventListener("click", function(event) {

    const navigation =
        document.getElementById("navigation");

    const menuButton =
        document.querySelector(".menu-button");

    if (!navigation || !menuButton) {
        return;
    }

    const clickedInsideMenu =
        navigation.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {
        navigation.classList.remove("show");
    }

});
