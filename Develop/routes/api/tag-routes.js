const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // research find method
    ProductTag.findAll({
      attributes: ['product_tag', 'product_id'],
      include: [{
        model: Tag,
        attributes: ['id', 'tag_name']
      }]
    }).then(data => {
      res.json(data)
    })
});

router.get('/:id', async (req, res) => {
  try {
  const oneTag = await Tag.findOne({
    attributes: ['tag_name']
  })
  res.json(oneTag)
  } catch (err) {
    console.log(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
