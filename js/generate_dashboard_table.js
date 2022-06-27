const generate_table = (data) => {
    let tr = "";
    data.forEach(user => {
        tr += "<tr>";
        tr += "<td>" + user["NID"] + "</td>";
        tr += "<td>" + user["name"] + "</td>";
        tr += "<td>" + user["gender"] + "</td>";
        tr += "<td class=''>See more</td>";
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
    data.forEach(barcode => {
        tr += "<tr>";
        tr += "<td>" + barcode["code"] + "</td>";
        tr += "<td>" + barcode["checked_in"] + "</td>";
        tr += "<td>" + barcode["checked_out"] + "</td>";
        tr += "</tr>";
    });

    return tr;
}
