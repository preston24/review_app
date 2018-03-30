module.exports = {
  get: (req, res) => {
    const db = req.app.get('db');
    const user_id = req.user.id;
    db.get_locations({ user_id }).then(locations => {
      res.send(locations);
    });
  },

  create: (req, res) => {
    const db = req.app.get('db');
    const user_id = req.user.id;

    let locationObj = { ...req.body, user_id };

    db.creat_location(locationObj).then(results => {
      res.send(results[0]);
    });
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const user_id = req.user.id;

    const { id: location_id } = req.params

    db.delete_location({ location_id, user_id }).then(locations => {
      res.send(locations);
    });
  }
};