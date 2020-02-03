var noteData = require("../data/noteData");



module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(noteData)
    });

    app.post("/api/notes", function(req, res){
        if (noteData){
            noteData.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    });
};