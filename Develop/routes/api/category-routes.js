const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // research find method
    Category.findAll({
      attributes:['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price','stock']
        }]
    }).then(data => {
      res.json(data)
    })
});


router.get('/:id', async (req, res) => {
  try {
  const oneCategory = await Category.findOne()
  res.json(oneCategory)
  } catch (err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.findOrCreate()
    res.json(newCategory)
    } catch (err) {
      console.log(err)
    }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
