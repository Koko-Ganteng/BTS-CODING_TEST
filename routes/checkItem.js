const express = require("express");
const router = express.Router();
const inService = require("../config/service");

/**
 * @swagger
 * /checkItem/checklist/item:
 *   get:
 *     summary: showing all check item.
 *     description: showing all check item.
 *     tags:
 *       - Item
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */

router.get("/checklist/item", function (req, res, next) {
  inService.getCheckItem(res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success get item with checkId",
      data: resp,
    });
  });
});

/**
 * @swagger
 * /checkItem/checklist/{id}/item:
 *   get:
 *     summary: showing all check item.
 *     description: showing all check item.
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */

router.get("/checklist/:id/item", function (req, res, next) {
  inService.getCheckItemById(parseInt(req.params.id), res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success get item with checkId",
      data: resp,
    });
  });
});

/**
 * @swagger
 * /checkItem/checklist/{checkId}/item/{itemId}:
 *   get:
 *     summary: showing all check Item.
 *     description: showing all check Item.
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: checkId
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: item id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */

router.get("/checklist/:checkId/item/:itemId", function (req, res, next) {
  inService.getRelationItem(parseInt(req.params.checkId), parseInt(req.params.itemId), res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success get item with checkId",
      data: resp,
    });
  });
});

/**
 * @swagger
 * /checkItem/checklist/{checkId}/item/{itemId}:
 *   put:
 *     summary: showing all checkItem.
 *     description: showing all checkItem.
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: checkId
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: item id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */

router.put("/checklist/:checkId/item/:itemId", function (req, res, next) {
  inService.updateStatus(parseInt(req.params.checkId), parseInt(req.params.itemId), res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success get item with checkId",
      data: resp,
    });
  });
});

/**
 * @swagger
 * /checkItem/checklist/{checkId}/item/{itemName}/{itemId}:
 *   put:
 *     summary: rename item
 *     description: rename item
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: checkId
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *       - in: path
 *         name: itemName
 *         required: true
 *         description: item name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */

router.put("/checklist/:checkId/item/:itemName/:itemId", function (req, res, next) {
  console.log(req.params)
  inService.renameItem(parseInt(req.params.checkId), req.params.itemName, parseInt(req.params.itemId), res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success get item with checkId",
      data: resp,
    });
  });
});

/**
 * @swagger
 * /checkItem/checklist/item:
 *   post:
 *     summary: Create Check Data.
 *     tags:
 *       - Item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               checkId:
 *                 type: integer
 *                 description: check Id
 *               itemName:
 *                 type: string
 *                 description: Create name Check Data.
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */
router.post("/checklist/item", function (req, res, next) {
  const reqBody = {
    data: {
      idCheck: parseInt(req.body.checkId),
      itemName: req.body.itemName
    },
  };
  inService.addCheckItemData(reqBody, res, next, function (resp) {
    res.status(200).send({
      status: 201,
      message: "OK, Success Created Data",
      data: reqBody.data,
    });
  });
});


/**
 * @swagger
 * /checkItem/checklist/{checkId}/item/{itemId}:
 *   delete:
 *     summary: delete check item list.
 *     description: delete check item list.
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: checkId
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: id.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       202:
 *         description: No Action Performed
 *       400:
 *         description: Error
 *       500:
 *         description: Internal Application Domain Error
 *       404:
 *         description: Data Not Found
 */

router.delete("/checklist/:checkId/item/:itemId", function (req, res, next) {
  inService.deleteItem(parseInt(req.params.checkId), parseInt(req.params.itemId), res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success Deleted Item",
      data: resp,
    });
  });
});


module.exports = router 