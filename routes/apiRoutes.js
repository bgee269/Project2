var db = require("../models");

module.exports = function(app) {

  // Get all blocks to populate the page
  app.get("/api/blocks", function(req, res) {
    db.Blocks.findAll({}).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  // Toggle availability of a block
  app.put("/api/blocks", function(req, res) {
    db.Blocks.update({
      spotsAvailable: "??????"
    }, {
      where: {
        lat1: "???"
      }
    }).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  // Post new block added to the zone
  app.post("/api/blocks", function(req, res) {
    db.Blocks.create(req.body).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  // Delete a block if it was removed by the city
  app.delete("/api/blocks/:id", function(req, res) {
    db.Blocks.destroy({ where: { id: req.params.id } }).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

};
