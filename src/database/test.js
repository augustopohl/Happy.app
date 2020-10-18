const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // insert data in table
    /*await saveOrphanage(db, {
        lat: "-30.0278785",
        lng: "-51.1377163",
        name: "Lar Fabiano de Cristo",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "5198155088",
        images: [
            "https://images.unsplash.com/photo-1573924436910-447d0d2176c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.", 
        opening_hours:"Horários de visitas das 8h até as 18h",
        open_on_weekends: "0" 
    })*/

    // select data from table
    const selelctedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selelctedOrphanages)

    // select only 1 orphanage from id
    
    //console.log(orphanage)

     //delete data from table
     //await db.run("DELETE FROM orphanages WHERE id = '3'")

})