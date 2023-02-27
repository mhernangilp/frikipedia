/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// ANIMATIONS ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// DINAMIC ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Initialize elements when document loaded
$(document).ready(function (){
    initializeElement("https://assets.reedpopcdn.com/eurogamer-1ygxrw.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/eurogamer-1ygxrw.jpg", "Grand Theft Auto V", "Rockstar Games", "Grand Theft Auto V es un videojuego de acción-aventura desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​", "2013", "Action-Adventure");
    initializeElement("https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png", "Minecraft", "Mojang Studios", "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por Mojang Studios.", "2011", "Sandbox-Survival");
    initializeElement("https://media.vandal.net/m/78531/valorant-202052910331074_1.jpg", "Valorant", "Riot Games", "Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el Developer en clave Project A en octubre de 2019.", "2020", "Tactical Shooter");
    initializeElement("https://specials-images.forbesimg.com/imageserve/5cfbf6b24c687b000859138a/960x0.jpg?fit=scale", "Elden Ring", "FromSoftware", "Elden Ring es un videojuego de rol de acción en tercera persona, con una jugabilidad centrada en el combate y la exploración. Presenta características similares de otros juegos desarrollados por FromSoftware, tales como la saga Dark Souls, Bloodborne y Sekiro: Shadows Die Twice. Localizado en un mundo abierto, el jugador puede explorar libremente las Tierras Intermedias y sus seis áreas principales.", "2022", "Action role-playing");
    initializeElement("https://meups.com.br/wp-content/uploads/2020/04/GOd-of-War-p%C3%B4ster.jpg", "God of War: Ragnarök", "SIE Santa Monica Studio", "Basado libremente en la mitología nórdica, el juego se desarrolla en la antigua Escandinavia y presenta al protagonista de la serie Kratos y su hijo adolescente Atreus. Concluyendo la era nórdica de la serie, el juego cubre el Ragnarök, el evento escatológico que es central en la mitología nórdica y se predijo que sucedería en el juego anterior después de que Kratos matara al dios Æsir Baldur.", "2022", "Action-Adventure");
    initializeElement("https://www.newgamesbox.net/wp-content/uploads/2017/04/Hearts-Of-Iron-IV-Download-600x856.jpg", "Hearts of Iron IV", "Paradox Development Studio", "Hearts of Iron IV, tal como los demás juegos de la serie Hearts of Iron, es un juego de estrategia en tiempo real que se desarrolla en torno a la Segunda Guerra Mundial. El jugador puede controlar cualquier nación del mundo en este periodo de la historia, iniciando el escenario en 1936 o 1939 en un solo jugador (contra jugadores controlados por una IA) o multijugador (contra jugadores reales en línea).", "2016", "Grand-Strategy");
    showElements();
})

// Create a new element (map)
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

// Set a new element to de main map mapElements
function initializeElement(Url, Title, Developer, Description, ReleaseDate, Genre) {
    mapElements.set(i++, createElement(Url, Title, Developer, Description, ReleaseDate, Genre));
}

// Show all elements that are in the map mapElements
function showElements() {
    if (mapElements.size === 0) {
        $("#row").append(`
        <h4 class="col-lg-4 col-sm-6 mb-4" style="margin: auto;text-align: center;color:red;">
        <br><br>
            Whitout elements
            <br><br>
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
 
    <div class="new">   <br>
        <a class="con btn btn-success btn-xl text-uppercase" onclick="addNewElement()">Add new element</a>
    </div>`);
}

// Shows only one element, when more info button is pressed
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
                    <div class="container bg-light">
                        <div class="justify-content-center" >
                            <div class="col-lg-12" styles="margin-bottom: 20px;">
                                <div class="showelement" styles="text-align: center;">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase" style="margin: auto; margin-top: 20px; text-align: center">${element.get("Title")}</h2>
                                    <p class="item-intro text-muted" style="margin: auto;  text-align: center">${element.get("Developer")}</p>
                                    <div style="text-align: center">
                                    <img class="img-fluid" style="margin-top: 0px;" src="${element.get("Url")}" alt="..." />
                                    
                                    <p style="margin: auto; margin-top: 30px; text-align: center">${element.get("Description")}</p>
                                    <ul class="list-inline" id="sub_elements" style="margin-top: 20px">
                                   </ul></div>
                                </div>
                            </div>
                            <div class="row">
                                <button class="btn btn-secondary try col-lg-3" data-bs-dismiss="modal" type="button" onclick="back()">
                                    <i class="fas fa-xmark me-1"></i>
                                    Back
                                </button>
                                <button class="btn-success btn try col-lg-4" data-bs-dismiss="modal" type="button" onclick="modifyElement(${x})">
                                    Modify Element
                                </button>
                                <button class="btn btn-danger try col-lg-4" style="margin-bottom: 20px;" data-bs-dismiss="modal" type="button" onclick="deleteElement(${x})">
                                    Delete Element
                                </button>
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

// The form to add a new element, when New Element button is pressed
function addNewElement() {
    $("#row").empty();
    $(".masthead").toggle();
    $("#services").toggle();
    $("#portfolio").toggle();
    $("#team").toggle();
    $("#contact").toggle();
    $("#aux").append(` 
       

<div class="formulario container modal-content" style="text-align: center;background-color: rgb(210, 210, 210);" id="formulario"> <br>
    <h2  style="text-align: center; font: normal 40px Montserrat, sans-serif;color:black">Add a new game</h2>
    <form role="form">           
        <div class="form-group">
            <input style="width:300px" type="text" id="Url" placeholder="Enter image url" required />
        </div>
        <br>
        <div class="form-group">
            <input style="width:300px" type=" text" id="Title" placeholder="Enter the title" maxlength="60" required />
        </div>
        <br>
        <div class="form-group">
            <input style="width:300px" type=" text" id="Developer" placeholder="Enter developer name" maxlength="45" required />
        </div>
        <br>
        <div class="form-group">
            <input style="width:300px" type="text" id="Description" placeholder="Enter game description" maxlength="300" required />
        </div>
        <br>
        <div class="form-group">
            <input style="width:300px" type=" text" id="ReleaseDate" placeholder="Enter game release date" maxlength="10">
        </div>
        <br>
        <div class="form-group">
            <input style="width:300px" type=" text" id="Genre" placeholder="Enter game genre" maxlength="50">
        </div>
        <br><br>
        <div style="text-align:center; ">
            <button style="margin-right:15px; width: 100px;" type="sumbit" class="btn btn-success" onclick="saveNewElement()">Save</button> 
            <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="back()">Cancel</button>
        </div>  
        <br><br>
    </form>
</div>
<br><br>`
    );
}

// Save the new element entered in the New Element form
function saveNewElement() {
    let Url = $("#Url").val();
    if (Url === "") {
        Url = "https://vectorified.com/images/no-data-icon-24.png";
    }
    let Title = $("#Title").val();
    if (Title === ""){
        Title = "No data";
    }
    let Developer = $("#Developer").val();
    if (Developer === ""){
        Developer = "No data";
    }
    let Description = $("#Description").val();
    if (Description === ""){
        Description = "No data";
    }
    let ReleaseDate = $("#ReleaseDate").val();
    if (ReleaseDate === ""){
        ReleaseDate = "No data";
    }
    let Genre = $("#DescriGenrepcion").val();
    if (Genre === ""){
        Genre = "No data";
    }
    mapElements.set(i++, createElement(Url, Title, Developer, Description, ReleaseDate, Genre));
    back();
}

// Form to modify an existing element
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
                <div class="col-md-12" style="text-align:center"   >
                <button class="btn btn-danger button" onclick="deleteSubelement(${x}, '${key}')">Delete subelement</button>
                </div>
                </div>
            <br>`);
        }
    })
    $("#formulario").append(`
    <div class="col-md-12" style="text-align:center;">
        <br>
        <button style="margin-right:13px;margin-left:27px; width: 100px;" type="sumbit" class="btn btn-success" onclick="modifyElementMap(${x})">Save</button>
        <button style="margin-left: 5px; width: 150px" class="btn btn-success" onclick="addSubelement(${x})">Add subelement</button>
        <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="back()">Cancel</button>
    </div>`);
}

// Function to delete a subelement from a element
function deleteSubelement(x, key) {
    var temporalElement = mapElements.get(x);
    let response = window.confirm("¿Are you sure you want to delete this subelement permanently?");
    if (response === true) {
        temporalElement.delete(key);
        mapElements.set(x, temporalElement);
        back();
    }
}

// Function to add a subelement in an element
function addSubelementMap(x){
    var element = mapElements.get(x);
    let key = $("#key").val();
    let value = $("#value").val();
    element.set(key, value);
    back();
}

// Form to add a new sub element, when add subelement button is pressed
function addSubelement(x){
    $("#aux").empty();
    $("#aux").append(` 

       <div class="subelement modal-content">
        <div class="col-md-12 formulario" id="formulario" styles="text-align= center">
            <h2 style="text-align: center;width: auto; font: normal 40px Montserrat, sans-serif;color:wheat">Add Sub-Element
            </h2>
        </div>
        <form role="form">
            <br>
                <div class="form-group" style="text-align:center; width: auto;">
                    <input id="key"for="key" style="width:350px" placeholder="New subelement nameo">
                    <input style="width:350px; margin-left: 20px;" type="text" id="value" placeholder="Enter the value of the new sub-element">
                </div>
                <br>
                <div style="text-align:center; width: auto;">
                    <button style="margin-right:15px; width: 100px" type="sumbit"
                        class="btn btn-success" onclick="addSubelementMap(${x})">Save</button> 
                    <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="back()">Cancel</button>
                </div>  
            </form>
        </div> </div>`
   
        );
}

// Function to modify an existing element
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

// Function to delete an exisiting element
function deleteElement(key) {
    let response = window.confirm("¿Are you sure you want to delete this element permanently?");
    if (response === true){
        mapElements.delete(key);
        back();
    }
}

// Function used to go back to the main page
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

// Creation of the main map where all the elements are stored and an int variable to name new elements key-maps
var mapElements = new Map();
var i = 0;