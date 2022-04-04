//
// imports
//
const pagination = require('../../helpers/pagination');
const { User } = require('../../database');
const { ROLE_CLIENT } = require('../../constants/users');

//
// endpoints
//

// count
const count = async (req, res) => {
    const results = {
        count: (await User.count())
    };

    res.send(results);
};

// listing
const list = async (req, res) => {
    const options = {
        where: {
            id_role: ROLE_CLIENT
        }
    };
    const results = {
        count: (await User.count(options))
    };

    // Pagination
    pagination.resolveNextAndPrevious('/api/users', results, req.query);

    // Users
    results.users = await User.scope('fully').findAll({ ...pagination.resolveQuery(req.query), ...options });

    res.send(results);
};

// get by id
const getById = async (req, res) => {
    const id = req.params.id;
    const user = await User.scope('fully').findOne({
        where: {
            id_role: ROLE_CLIENT,
            id
        }
    });

    res.send(user);
};

// get last
const getLast = async (req, res) => {
    const product = await User.scope('fully').findOne({
        order: [['created_at', 'DESC']],
        where: {
            id_role: ROLE_CLIENT
        }
    });

    res.send(product);
};

//
// export
//
module.exports = { count, list, getById, getLast };
