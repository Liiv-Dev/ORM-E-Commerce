const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({ // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, { // be sure to include its associated Products
      include: [{ model: Product }],
    });

    if (!categoryData) { // If there is no category with that id, return an error
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);  
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(req.body, { // update category data
      where: {
        id: req.params.id, // based on the id given in the route
      },
    });
    if (!categoryData[0]) { // If there is no category with that id, return an error
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    } else {
      res.status(200).json(categoryData);
    }
  } catch {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({ // delete category data
      where: {
        id: req.params.id, // based on the id given in the route
      },
    });
    if (!categoryData) { // If there is no category with that id, return an error
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    } else {
      res.status(200).json(categoryData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
