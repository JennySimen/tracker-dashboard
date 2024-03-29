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
                "<i class='bx bx-edit green edit-btn'" +
                "' data-id='" + employee["id"] +
                "' data-gender='" + employee["gender"] +
                "' data-type='" + employee["type"] +
                "' data-name='" + employee["name"] +
                "' data-nid='" + employee["NID"] +
                "' ></i>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<i class='bx bx-trash red del-btn' data-nid=" + employee["id"] + "></i>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<i class='bx bxs-user-badge badge-btn'" +
                "' data-nid='" + employee["NID"] +
                "' data-name='" + employee["name"] +
                "' data-type='" + employee["type"] +
                "' ></i>" +
                "</td>";

            tr += "</tr>";
        });
    }
    return tr;
}

const generate_weight_table = (data) => {
    let tr = "";
    data.forEach(weight => {
        tr += "<tr>";
        tr += "<td>" + weight["mon"] + "</td>";
        tr += "<td>" + weight["val"] + "</td>";
        if (weight["percentage"]>0) {
            tr += "<td class='green' >" + weight["percentage" ] + "%" + "<i class='bx bx-up-arrow-alt green'></i>" + "</td>";
        } else if(weight["percentage"]<0) {
            tr += "<td class='red' >" + Math.abs(weight["percentage" ]) + "%" + "<i class='bx bx-down-arrow-alt red'></i>" + "</td>";
        }
        else {
            tr += "<td class='gray'>" + weight["percentage" ] + "%" + "<i class='bx bx-right-arrow-alt'></i>" + "</td>";
        }
        tr += "</tr>";
    });

    return tr;
}