var db = require("../models");

var Op = db.Sequelize.Op;

module.exports = function(app) {

  // Get all blocks to populate the page
  app.get("/api/blocks", function(req, res) {
    db.Block.findAll({}).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  // Toggle availability of a block
  app.put("/api/redblock", function(req, res) {
    console.log("PUT Request received: ", req.body);
    db.Block.update({
      spotsAvailable: false
    },
    {
    where: {
      // eslint-disable-next-line undefined
      [Op.or]: [{lat1: req.body.lat1}, {lat2: req.body.lat1}]
    }
    }).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  app.put("/api/greenblock", function(req, res) {
    console.log("PUT Request received: ", req.body);
    db.Block.update({
      spotsAvailable: true
    },
    {
    where: {
      [Op.or]: [{lat1: req.body.lat1}, {lat2: req.body.lat1}]
    }
    }).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  // Post new block added to the zone
  app.get("/api/blocks/post", function(req, res) {
    db.Block.create({
      name: "blockZero",
      description: "S Juniper St - Pine > Lombard",
      zone: 4,
      lat1: 39.9454,
      lng1: -75.16396,
      lat2: 39.94457,
      lng2: -75.16414,
      spotsAvailable: false
    }).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

  // Delete a block if it was removed by the city
  app.delete("/api/blocks/:id", function(req, res) {
    db.Block.destroy({ where: { id: req.params.id } }).then(function(dbBlocks) {
      res.json(dbBlocks);
    });
  });

};
