const addLinks = (material) => {
    let links = 
        [{
            "rel": "get all",
            "method": "GET",
            "href": "http://localhost:1111/materials/" 
        },
        {
            "rel": "self",
            "method": "GET",
            "href": "http://localhost:1111/materials/"+material.id
        },
        {
            "rel": "update",
            "method": "POST",
            "href": "http://localhost:1111/materials/"
        },
        {
            "rel": "update",
            "method": "PUT",
            "href": "http://localhost:1111/materials/" + material.id
        }, 
        {
            "rel": "delete",
            "method": "DELETE",
            "href": "http://localhost:1111/materials/" + material.id
        },
    ]

    material._links = links; 
    return material
}

module.exports = addLinks;
