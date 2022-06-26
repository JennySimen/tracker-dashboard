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
