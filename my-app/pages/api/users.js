import {
  connectToDatabase,
  insertDocument,
  getAllDocuments,
  deleteDocument,
} from "../../lib/db";

export default async function handler(req, res) {
  const { method, query } = req;
  const client = await connectToDatabase();
  const { search, sortBy, sortOrder, page, pageSize } = req.query;

  switch (method) {
    case "GET":
      try {
        const filter = search ? { email: { $regex: search, $options: "i" } } : {};
        const sort = sortBy ? { [sortBy]: sortOrder === "asc" ? 1 : -1 } : {};
        const skip = page ? (parseInt(page) - 1) * parseInt(pageSize || 10) : 0;
        const limit = pageSize ? parseInt(pageSize) : 0;

        const users = await getAllDocuments(client, "users", filter, sort, skip, limit);
        res.status(200).json(users);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
      break;

    case "POST":
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(422).json({ error: "Invalid input. Email and password are required." });
        client.close();
        return;
      }


      const newUser = { email, password }; 
      const result = await insertDocument(client, "users", newUser);
      res.status(201).json(result.ops[0]);
      break;

      case "DELETE":
        const userId = query.userId;
        const filter = { _id: userId };
  
        try {
          const result = await deleteDocument(client, "users", filter);
  
          if (result.deletedCount === 1) {
            res.status(204).end(); 
          } else {
            res.status(404).json({ error: "User not found" });
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
        break;


    default:
      res.status(405).end();
  }

  client.close();
}