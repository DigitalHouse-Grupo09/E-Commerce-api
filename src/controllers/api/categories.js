//
// imports
//
const pagination = require('../../helpers/pagination');
const { Category } = require('../../database');

//
// endpoints
//

// count
const count = async (req, res) => {
    const results = {
        count: (await Category.count())
    };

    res.send(results);
};

// listing
const list = async (req, res) => {
    const results = {
        count: (await Category.count())
    };

    // Pagination
    pagination.resolveNextAndPrevious('/api/categories', results, req.query);

    // Categories
    results.categories = await Category.findAll({ ...pagination.resolveQuery(req.query) });

    res.send(results);
};

// get by id
const getById = async (req, res) => {
    const id = req.params.id;
    const product = await Category.findOne({ where: { id } });

    res.send(product);
};

//
// export
//
module.exports = { count, list, getById };
