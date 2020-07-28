const Item = require("../models/item");
module.exports.home = function (req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      return res.send(err);
    }
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    for (let i = 0; i < items.length; i++) {
      let date = new Date(items[i].due_date);
      if (date < new Date()) items[i].due = true;
      else items[i].due = false;
      // console.log(items[i].due);
      items[i].dueDate =
        month[date.getMonth()] +
        " " +
        date.getDate().toString() +
        ", " +
        date.getFullYear().toString().substr(2, 2);
      // console.log(items[i].ram);
    }
    // console.error(__filename, items[0].ram);
    return res.render("home", {
      item: items,
    });
  });
};
module.exports.createItem = function (req, res) {
  console.error(__filename, req.body);
  if (!req.body.due_date) req.body.due_date = Date.now();
  Item.create({ name: req.body.item, due_date: req.body.due_date }, function (
    err,
    item
  ) {
    if (err) {
      return res.send(err);
    }
    return res.redirect("/");
  });
};

module.exports.deleteItem = function (req, res) {
  Item.findByIdAndDelete(req.query.id, function (err) {
    if (err) {
      return res.send(err);
    }
    return res.redirect("/");
  });
};

module.exports.completeItem = function (req, res) {
  Item.findById(req.query.id, function (err, item) {
    if (err) {
      return res.send(err);
    }
    item.completed = !item.completed;
    item.save(function (err, updated) {
      if (err) {
        return res.send(err);
      }
    });
    return res.redirect("/");
  });
};
