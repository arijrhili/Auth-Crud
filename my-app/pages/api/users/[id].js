import { connectToDatabase, updateDocument, getDocumentById,hashPassword } from "../../../lib/db";
export default async function handler(req, res) {
  const { method, query, body } = req;
  const userId = query.id;

  const client = await connectToDatabase();

  try {
    switch (method) {
      case "GET":
        const user = await getDocumentById(client, "users", userId);
        res.status(200).json(user);
        break;

        case "PUT":
          const existingUser = await getDocumentById(client, "users", userId);
  
          if (!existingUser) {
            res.status(404).json({ error: "User not found" });
            return;
          }
  
          // Hash the password
          const hashedPassword = await hashPassword(body.password);
  
          // Update user data with hashed password
          const updatedUser = { ...existingUser, ...body, password: hashedPassword };
  
          const result = await updateDocument(client, "users", userId, updatedUser);
  
          console.log("User updated:", result);
  
          res.status(200).json(updatedUser);
          break;
  
        default:
          res.status(405).json({ error: "Method Not Allowed" });
      }
    } catch (error) {
      console.error("Error in API route:", error);
  
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message || "An error occurred during the update.",
      });
    } finally {
      client.close();
    }
  }