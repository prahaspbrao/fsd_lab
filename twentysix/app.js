import fs from "fs";
import { MongoClient } from "mongodb";

// MongoDB connection URL and database name
const url = "mongodb://127.0.0.1:27017";
const dbName = "CompanyDB";

async function exportEmployees() {
  try {
    /* 1. Read employee records from file */
    const fileData = fs.readFileSync("employees.json");
    const employees = JSON.parse(fileData);

    /* 2. Connect to MongoDB */
    const client = new MongoClient(url);
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("employees");

    /* Insert employee records */
    await collection.insertMany(employees);

    /* 3. Update employee with empId = 101 */
    await collection.updateOne(
      { empId: 101 },
      { $set: { designation: "Senior Developer" } }
    );

    /* 4. Retrieve all employee records */
    const updatedEmployees = await collection.find().toArray();

    /* Write updated records to file */
    fs.writeFileSync(
      "updated_employees.json",
      JSON.stringify(updatedEmployees, null, 2)
    );

    /* 5. Display success message */
    console.log(
      "Employee records exported successfully to updated_employees.json"
    );

    await client.close();
  } catch (error) {
    console.error("Error:", error.message);
  }
}

exportEmployees();
