const { workingDay } = require("./workingDay");

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const PROJECT_FIRST_LETTERS = process.env.PROJECT_FIRST_LETTERS;
const ASSIGNAMENT_FIRST_LETTERS = process.env.ASSIGNAMENT_FIRST_LETTERS;
const FOCAL_POINT_FIRST_LETTERS = process.env.FOCAL_POINT_FIRST_LETTERS;

const getConfiguration = () => {
  return {
    userName: USER_NAME,
    passWord: PASSWORD,
    projectFirstLetters: PROJECT_FIRST_LETTERS,
    asignamentFirstLetters: ASSIGNAMENT_FIRST_LETTERS,
    focalPointFirstLetters: FOCAL_POINT_FIRST_LETTERS,
    workingDay
  };
};

module.exports.configuration = getConfiguration();
