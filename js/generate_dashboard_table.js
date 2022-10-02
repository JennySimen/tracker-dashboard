const generate_table = (data) => {
    let tr = "";
    data.forEach(user => {
        tr += "<tr>";
        tr += "<td>" + user["NID"] + "</td>";
        tr += "<td>" + capitalize(user["name"]) + "</td>";
        tr += "<td>" + capitalize(user["gender"]) + "</td>";
        tr += "<td>" + capitalize(user["type"]) + "</td>";
        tr += "</tr>";
    });

    return tr;
}

const generate_top_users = (data) => {
    let li = "";
    data.forEach(user => {
        li += "<li>";
        li += "<span class='product'>" + user["name"] + "</span>";
        li += "<span class='price'>" + user["count"] + "</span>";
        li += "</li>";
    });

    return li;
}

const generate_barcode = (data) => {
    let tr = "";
    if (data.length === 0) {
        tr += "<tr class='print'><td colspan='5'  class='no-data-text'>There are no barcodes yet!</td></tr>";
    } else {
        data.forEach(barcode => {
            tr += "<tr>";
            tr += "<td class='print'>" + barcode["code"] + "</td>";
            tr += "<td class='print'>" + barcode["checked_in"] + "</td>";
            tr += "<td class='print'>" + barcode["checked_out"] + "</td>";
            tr += "<td>" +
                `<img id='barcode' src='https://api.qrserver.com/v1/create-qr-code/?data=${barcode["code"]}&amp;size=100x100' alt='' title='HELLO' width='50' height='50' />`
                + "</td>";
            tr += "</tr>";
        });
    }
    return tr;
}

const generate_employee_table = (data) => {
    let tr = "";

    if (data.length === 0) {
        tr += "<tr><td colspan='6'  class='no-data-text'>There are no employees yet!</td></tr>";
    } else {
        data.forEach((employee, index) => {
            tr += "<tr>";
            tr += "<td>" + (index + 1) + "</td>";
            tr += "<td>" + employee["NID"] + "</td>";
            tr += "<td>" + employee["name"] + "</td>";
            tr += "<td>" + employee["type"] + "</td>";
            tr += "<td>" + employee["gender"] + "</td>";
            tr += "<td class='text-right'>" +
                "<i class='bx bx-edit green edit-btn' data-nid=" + employee["id"] + "></i>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<i class='bx bx-trash red del-btn' data-nid=" + employee["id"] + "></i>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<i class='bx bxs-user-badge badge-btn' data-nid=" + employee["id"] + "></td>";

            tr += "</tr>";
        });
    }
    return tr;
}


// const badgeBtns = document.querySelectorAll(".badge-btn");

// //generate badge function
// badgeBtns.forEach(badgeBtn => {
//     const badgeModal = document.querySelector(".badge-modal");
//     const badgeCloseButton = document.querySelector(".badge-close-button");

//     const toggleModal2 = () => {
//         badgeModal.classList.toggle("show-modal");
//     }

//     function windowOnClick(event) {
//         if (event.target === badgeModal) {
//             toggleModal2(badgeModal);
//         }
//     }
//     badgeBtn.addEventListener('click', toggleModal2);
//     badgeCloseButton.addEventListener("click", toggleModal2);
//     window.addEventListener("click", windowOnClick);
// });