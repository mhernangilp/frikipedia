window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);




    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(document).ready(function (){
    inicializarElemento("https://gta-real.com/_ph/43/168793458.jpg?1628548823", "Grand Theft Auto V", "Rockstar Games", "Grand Theft Auto V es un videojuego de acción-aventura desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​", "2013", "Action-Adventure");
    inicializarElemento("https://unblockedgames7766.com/wp-content/uploads/2021/03/minecraft-unblocked.jpg", "Minecraft", "Mojang Studios", "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por Mojang Studios.", "2011", "Sandbox-Survival");
    inicializarElemento("https://kabekin.com/uploads/converted/15/03/12/1618540411-kabekin_valorant22-jq0B-1280x720-MM-100.jpg", "Valorant", "Riot Games", "Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el Developer en clave Project A en octubre de 2019.", "2020", "Tactical Shooter");
    showElements();
})

function createElement(Url, Title, Developer, Description, ReleaseDate, Genre) {
    let element = new Map();
    element.set("Url", Url);
    element.set("Title", Title);
    element.set("Developer", Developer);
    element.set("Description", Description);
    element.set("Release date", ReleaseDate);
    element.set("Genre", Genre);
    return element;
}

function inicializarElemento(Url, Title, Developer, Description, ReleaseDate, Genre) {
    mapElements.set(i++, createElement(Url, Title, Developer, Description, ReleaseDate, Genre));
}

function showElements() {
    if (mapElements.size === 0) {
        $("#row").append(`
        <h4 class="col-lg-4 col-sm-6 mb-4" style="margin: auto;text-align: center;">
            Whitout elements
        </h4>`);
    }
    else for (let x of mapElements.keys()) {
        var element = mapElements.get(x);
        $("#row").append(`
        <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
                <a class="portfolio-link" data-bs-toggle="modal" onclick="moreInfo(${x})">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="${element.get("Url")}" alt="..." width="450" height="200" />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">${element.get("Title")}</div>
                    <div class="portfolio-caption-subheading text-muted">${element.get("Developer")}</div>
                </div>
            </div>
        </div>`);
    }
    $("#row").append(`
    <a class="btn btn-primary btn-xl text-uppercase" onclick="addNewElement()">Add new element</a>`);
}

function moreInfo(x) {
    var element = mapElements.get(x);
    $("#row").empty();
    $(".masthead").toggle();
    $("#services").toggle();
    $("#portfolio").toggle();
    $("#team").toggle();
    $("#contact").toggle();
    $("#aux").append(`
    <div id="portfolioModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase" style="margin: auto; text-align: center">${element.get("Title")}</h2>
                                <p class="item-intro text-muted" style="margin: auto; margin-top: 20px; text-align: center">${element.get("Developer")}</p>
                                <img class="img-fluid d-block mx-auto" style="margin-top: 20px" src="${element.get("Url")}" alt="..." />
                                <p style="margin: auto; margin-top: 20px; text-align: center">${element.get("Description")}</p>
                                <ul class="list-inline" id="sub_elements" style="margin-top: 20px">
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button" onclick="back()">
                                    <i class="fas fa-xmark me-1"></i>
                                    Back
                                </button>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button" onclick="modifyElement(${x})">
                                    <i class="fas fa-xmark me-1"></i>
                                    Modify Element
                                </button>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button" onclick="deleteElement(${x})">
                                    <i class="fas fa-xmark me-1"></i>
                                    Delete Element
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    let notFirst4 = 0;
    element.forEach (function(value, key) {
        if (notFirst4++ > 3) {
            $("#sub_elements").append(`
            <li>
                <strong>${key}:</strong>
                ${value}
            </li>`);
        }
    })
}

function addNewElement() {
    $("#row").empty();
    $(".masthead").toggle();
    $("#services").toggle();
    $("#portfolio").toggle();
    $("#team").toggle();
    $("#contact").toggle();
    $("#aux").append(` 
        <div class="col-md-12 formulario" id="formulario">
            <h2 style="text-align: center;width: 400px; font: normal 40px Montserrat, sans-serif;color:wheat">Add a new game</h2>
            <form role="form">           
                <br>
                <div class="form-group">
                    <label for="Url" style="color:white;width:400px;">Image url:</label>
                    <input style="width:400px" type="text" id="Url" placeholder="Enter image url" required>
                </div>
                <br>
                <div class="form-group">
                    <label for="Title" style="color:white;width:400px;">Title:</label>
                    <input style="width:400px" type=" text" id="Title" placeholder="Enter the title" maxlength="60" required>
                </div>
                <br>
                <div class="form-group">
                    <label for="Developer" style="color:white;width:400px;">Developer:</label>
                    <input style="width:400px" type=" text" id="Developer" placeholder="Enter developer name" maxlength="45" required>
                </div>
                <br>
                <div class="form-group">
                    <label type="Description" style="color:white; width: 400px;" ;>Description:</label>
                    <input style="width:400px" type="text" class="form-control" id="Description" placeholder="Enter game description" maxlength="300" required>
                </div>
                <br>
                <div class="form-group">
                    <label for="ReleaseDate" style="color:white;">Release date:</label>
                    <input style="width:400px" type=" text" id="ReleaseDate" placeholder="Enter game release date" maxlength="10">
                </div>
                <div class="form-group">
                    <label for="Genre" style="color:white;">Genre:</label>
                    <input style="width:400px" type=" text" id="Genre" placeholder="Enter game genre" maxlength="50">
                </div>
                <div style="text-align:center; width: 400px;">
                    <button style="margin-right:15px; width: 100px;" type="sumbit"
                        class="btn btn-success" onclick="saveNewElement()">Save</button> 
                    <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="back()">Cancel</button>
                </div>  
            </form>
        </div>`
    );
}

function saveNewElement() {
    let Url = $("#Url").val();
    let Title = $("#Title").val();
    let Developer = $("#Developer").val();
    let Description = $("#Description").val();
    let ReleaseDate = $("#ReleaseDate").val();
    let Genre = $("#DescriGenrepcion").val();
    mapElements.set(i++, createElement(Url, Title, Developer, Description, ReleaseDate, Genre));
    back();
}

function modifyElement(x) {

    var element = mapElements.get(x);
    $("#aux").empty();
    $("#aux").append(`
    <div class="col-md-12 formulario" id="formulario">
            <h2 style="text-align: center;width: 400px;margin: auto; font: normal 40px Montserrat, sans-serif;color:grey">Modify Element
            </h2>
            <form id="form_sub" role="form" style="margin-left: 40%;">         
                  
            </form>
        </div>`);
    let notFirst4 = 0;
    element.forEach (function(value, key) {
        if (notFirst4++ < 4) {
            $("#form_sub").append(`
            <br>
            <div class="form-group>
                <label for="${key}" style="color:black;width:400px;">${key}:</label>
                <textarea style="width:400px" type="text" id="${key}">${value}</textarea>
            </div>
            <br>`);
        }
        else {
            $("#form_sub").append(`
            <br>
            <div class="form-group>
                <label for="${key}" style="color:black;width:400px;">${key}:</label>
                <textarea style="width:400px" type="text" id="${key}">${value}</textarea>
                <button class="btn btn-warning button" onclick="deleteSubelement(${x}, '${key}')">Delete subelement</button>
            </div>
            <br>`);
        }
    })
    $("#form_sub").append(`
    <div style="text-align:center; width: 450px;">
        <button style="margin-right:15px; width: 100px;" type="sumbit" class="btn btn-success" onclick="modifyElementMap(${x})">Save</button>
        <button style="margin-left: 15px; width: 150px" class="btn btn-success" onclick="addSubelement(${x})">Add subelement</button>
        <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="back()">Cancel</button>
    </div>`);
}

function deleteSubelement(x, key) {
    var temporalElement = mapElements.get(x);
    let response = window.confirm("¿Are you sure you want to delete this subelement permanently?");
    if (response === true) {
        temporalElement.delete(key);
        mapElements.set(x, temporalElement);
        back();
    }
}

function addSubelementMap(x){
    var element = mapElements.get(x);
    let key = $("#key").val();
    let value = $("#value").val();
    element.set(key, value);
    back();
}

function addSubelement(x){
    $("#aux").empty();
    $("#aux").append(` 
        <div class="col-md-12 formulario" id="formulario">
            <h2 style="text-align: center;width: 400px; font: normal 40px Montserrat, sans-serif;color:wheat">Añadir subelemento
            </h2>
            <form role="form">
                            
                <br>
                <div class="form-group">
                    <input id="key"for="key" style="width:400px;" placeholder="Nombre nuevo subelemento">
                    <input style="width:400px" type="text" id="value" placeholder="Introduce el valor del nuevo subelemento">
                </div>
                <br>
                <div style="text-align:center; width: 400px;">
                    <button style="margin-right:15px; width: 100px;" type="sumbit"
                        class="btn btn-success" onclick="addSubelementMap(${x})">Guardar</button> 
                    <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="atras()">Cancelar</button>
                </div>  
            </form>
        </div>`
    );
}

function modifyElementMap(x) {
    var modifiedElement = new Map();
    var oForm = document.forms["form_sub"];
    var elemento = mapElements.get(x);
    for (const key of elemento.keys()) {
        var oUrlList = oForm.elements[key];
        var value = oUrlList.value;
        modifiedElement.set(key, value);
    }
    mapElements.set(x, modifiedElement);
    back();
}

function deleteElement(key) {
    let response = window.confirm("¿Are you sure you want to delete this element permanently?");
    if (response === true){
        mapElements.delete(key);
        back();
    }
}

function back() {
    $("#aux").empty();
    $(".masthead").toggle();
    $("#services").toggle();
    $("#portfolio").toggle();
    $("#team").toggle();
    $("#contact").toggle();
    showElements();
    $("html,body").scrollTop(0);
}

var mapElements = new Map();
var i = 0;