const fs = require ('fs-extra');
const path = require ('path');

const students = require ("../models/students")
const booksPath = path.join(__dirname,"students.json");
const usersPath = path.join(__dirname,"users.json");

module.exports = {
    getStudents: async () =>{
        return await students.find({})
    //  const buffer = await fs.readFile(booksPath);
    //  const content = buffer.toString();
    //  return JSON.parse(content)
    },
    writeStudents: async (data) =>{
        await fs.writeFile(booksPath, JSON.stringify(data));
    }
} 