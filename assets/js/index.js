const templates = [{
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
    {
        id: "cod 1100111",
        template_link: "projects/id-103.html",
        image: "assets/img/templates/project-3.jpg",
        category: "Nome do produto",
        title: "Detalhes do produto",
        price: "Pedido"
    },
];
document.getElementById("getTemplate").innerHTML = `\n    ${templates.map(function (e) { 
    return `\n<a class="template-links" href="${e.template_link}">
    \n<div class="p-4 md:w-1/3">\n
    <div class="card h-full  border-gray rounded-lg overflow-hidden">\n
    <img class="w-full object-center"\nsrc="${e.image}"alt="blog">\n
    <div class="card-content p-6">\n
    <div class="cat-id">\n
    <h2 class="tracking-widest text-lg  font-medium text-gray-700 mb-1">${e.category}</h2>
    <span class="text-red-600 font-bold temp-id"> ${e.id}</span>\n</div>\n
    <h1 class="tracking-widest text-xs  font-medium text-gray-700 mb-1">${e.title}</h1>\n
    <h1 class="tracking-widest text-xs  font-medium text-gray-700 mb-1">${e.title}</h1>\n
    <div class="prev-price flex items-center flex-wrap">\n\n


    <a class="text-blue-700 hover:text-blue-900" href="${e.template_link}"><span>UNICAMP</span>\n </a>\n
    <span\n
    class="price-tag mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">${e.price}\n
    </span>\n\n</div>\n</div>\n</div>\n</div>\n</a>\n` }).join("")}\n`;
     const username = document.getElementById("name"), email = document.getElementById("email"), 
     contact = document.getElementById("contact"), message = document.getElementById("message"); 
     let validName = !1, validEmail = !1, validContact = !1; $("#success").hide(), $("#fail").hide(), 
     username.addEventListener("blur", () => { let e = username.value; /^[a-zA-Z ]{2,30}$/.test(e) ? ($("#name-valid").show(), 
     $("#name-invalid").hide(), username.classList.remove("is-invalid"), username.classList.add("is-valid"), 
     validName = !0) : ($("#name-valid").hide(), $("#name-invalid").show(), username.classList.add("is-invalid"), 
     validName = !1) }), email.addEventListener("blur", () => { 
         let e = email.value; /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/.test(e) ? ($("#email-valid").show(), $("#email-invalid").hide(), 
         email.classList.remove("is-invalid"), email.classList.add("is-valid"), validEmail = !0) : ($("#email-valid").hide(), $("#email-invalid").show(), 
         email.classList.add("is-invalid"), validEmail = !1) }), 
         contact.addEventListener("blur", () => { let e = contact.value; /^([0-9]){10,15}$/.test(e) ? ($("#contact-invalid").hide(), 
         $("#contact-valid").show(), contact.classList.remove("is-invalid"), contact.classList.add("is-valid"), 
         validContact = !0) : ($("#contact-invalid").show(), $("#contact-valid").hide(), contact.classList.add("is-invalid"), 
         validContact = !1) }); let submit = document.getElementById("submit"); submit.addEventListener("click", 
         e => { if (validContact && validEmail && validName) { document.getElementById("fail"); document.getElementById("success").classList.add("show"), 
         $("#fail").hide(), $("#success").show(), alert("Message has been sent successfully!!") } else { e.preventDefault(); let t = document.getElementById("fail"); 
         document.getElementById("success"); t.classList.add("show"), $("#success").hide(), $("#fail").show() } });