document.addEventListener("DOMContentLoaded", e => {
    let xml, xmlhttp, xmlDoc, vliste, myStock;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "president.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    
    vliste = String("");
    myStock = [];

    xml = xmlDoc.getElementsByTagName("president");

    for (let i = 0; i < xml.length; i++) {
        // Variables pour les noeuds
        const image = xml[i].getElementsByTagName("image")[0].getAttribute("path");
        const nom = xml[i].getElementsByTagName("nom")[0].textContent;
        const mandat = xml[i].getElementsByTagName("Mandat")[0].textContent;
        const naissance = xml[i].getElementsByTagName("Naissance")[0].textContent;
        const status = xml[i].getElementsByTagName("Status")[0].textContent;

        // Ajout de chaque propriété dans la liste
        vliste += `<li>
                       <figure>
                           <img src="${image}" alt="${nom}">
                               <figcaption>
                               <ul>
                                  <li>Nom : ${nom} </li>
                                  <li>Mandat : ${mandat} </li>
                                  <li>Naissance : ${naissance} </li>
                                  <li>Status : ${status} </li>
                             
                               </ul>
                               </figcaption>
                                 



                        </figure>
                    </li>`
    

        // Stockage dans le tableau
        myStock.push({ image,nom, mandat, naissance, status });
    }

    // Affichage de la liste
    document.querySelector("ul").innerHTML = vliste;

    // Stockage du tableau dans le stockage local
    localStorage.setItem("stock", JSON.stringify(myStock));
});