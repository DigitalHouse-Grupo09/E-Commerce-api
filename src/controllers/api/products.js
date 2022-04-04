//
// imports
//
const pagination = require('../../helpers/pagination');
const { sequelize, Product } = require('../../database');

//
// endpoints
//

// count
const count = async (req, res) => {
    const results = {
        count: (await Product.count())
    };

    res.send(results);
};

// count by category
const countByCategory = async (req, res) => {
    const results = await sequelize.query('SELECT c.*, (SELECT COUNT(p.id) FROM `products` AS p WHERE p.id_category = c.id AND p.deleted_at IS NULL) AS count FROM `categories` AS c', {
        type: sequelize.QueryTypes.SELECT
    });

    res.send(results);
};

// listing
const list = async (req, res) => {
    const results = {
        count: (await Product.count())
    };

    // Pagination
    pagination.resolveNextAndPrevious('/api/products', results, req.query);

    // Products
    results.products = await Product.scope('fully').findAll({ ...pagination.resolveQuery(req.query) });

    res.send(results);
};

// get by id
const getById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.scope('fully').findOne({ where: { id } });

    res.send(product);
};

// get last
const getLast = async (req, res) => {
    const product = await Product.scope('fully').findOne({ order: [['created_at', 'DESC']] });

    res.send(product);
};

//
// export
//
module.exports = { count, countByCategory, list, getById, getLast };
