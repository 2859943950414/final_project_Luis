document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu ul li a");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            const targetPage = item.getAttribute("href");
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});
