const express = require("express");
const router = express.Router();

const classController = require("../controllers/classControllers.js");
const checkToken = require("../middlewares/checkToken.js");
const checkUser = require("../middlewares/checkUser.js");

router.post(
  "/create/:userId",
  [checkToken, checkUser],
  classController.createClassroomController
);
router.post(
  "/join/:userId",
  [checkToken, checkUser],
  classController.joinClassroomController
);

router.post(
  "/sendMessage/:userId",
  [checkToken, checkUser],
  classController.sendMessageController
);

router.post(
  "/createAssignment/:userId",
  [checkToken, checkUser],
  classController.createAssignmentController
);

router.post(
  "/submitAssignment/:userId/:roomId/:assignmentId",
  [checkToken, checkUser],
  classController.submitAssignmentController
);

router.get(
  "/joinedChannels/:userId",
  [checkToken, checkUser],
  classController.getJoinedClassroomsController
);

router.get(
  "/createdChannels/:userId",
  [checkToken, checkUser],
  classController.getCreatedClassroomsController
);

router.get(
  "/getChannelInfo/:userId/:roomId",
  [checkToken, checkUser],
  classController.getChannelInfoController
);

router.get(
  "/getAssignment/:userId/:roomId/:assignmentId",
  [checkToken, checkUser],
  classController.getAssignmentController
);

router.get(
  "/getAssignmentFile/:userId/:roomId/:assignmentId",
  [checkToken, checkUser],
  classController.getAssignmentFileController
);

router.get(
  "/getResponseFile/:userId/:roomId/:responseId",
  [checkToken, checkUser],
  classController.getResponseFileController
);

router.delete(
  "/deleteResponseFile/:userId/:roomId/:assignmentId/:responseId",
  [checkToken, checkUser],
  classController.deleteResponseFileController
);

module.exports = router;
