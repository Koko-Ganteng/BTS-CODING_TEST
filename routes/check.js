const express = require("express");
const router = express.Router();
const inService = require("../config/service");

/**
 * @swagger
 * /check/checklist:
 *   get:
 *     summary: showing all checklist.
 *     description: showing all checklist.
 *     tags:
 *       - Check
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

router.get("/checklist", function (req, res, next) {
  inService.getAllCheck(res, next, function (resp) {
    res.status(200).send({
      code: 201,
      message: "success get all checklist",
      data: resp,
    });
  });
});

/**
 * @swagger
 * /check/checklist:
 *   post:
 *     summary: Create Check Data.
 *     tags:
 *       - Check
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Create Check Data.
 *               name:
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
router.post("/checklist", function (req, res, next) {
  const reqBody = {
    data: {
      code: req.body.code,
      name: req.body.name
    },
  };
  inService.addCheckData(reqBody, res, next, function (resp) {
    res.status(200).send({
      status: 201,
      message: "OK, Success Created Data",
      data: reqBody.data,
    });
  });
});


/**
 * @swagger
 * /check/checklist/{id}:
 *   delete:
 *     tags:
 *      - Check
 *     summary: Delete Check Data
 *     description:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Node Id.
 *         schema:
 *           type: integer
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

router.delete('/checklist/:id', (req, res, next) => {
  inService.deleteCheckById(req.params.id, res, next, () => {
    res.status(200).send({
      status: 201,
      message: "OK, Success Deleted Data",
      data: [],
    });
  })
})


module.exports = router 