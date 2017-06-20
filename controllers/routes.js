var db = require ("../models");

module.exports = function(app) {
app.get("/", function(req, res) {
    db.Burgers.findAll({})
    .then(function(dbBurgers) {
        var burger_data = dbBurgers;
        res.render("best", {burger_data});

    });
});

app.put("/burgers/update", function(req, res) {
    db.Burgers.update({
    devoured : true,
},
    {
        where: {
            id: req.body.burger_id
        }
    }).then(function(booksDb) {
        res.redirect("/");

    });
  });

app.post("/burgers/create", function(req, res) {

    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name
    }).then(function (dbBurgers) {
        res.redirect("/");
    });
  });

};

