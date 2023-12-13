import { MongoClient, ObjectId } from 'mongodb';
import { hash } from 'bcryptjs';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://ZB2N9G2ZlVdWc9XY:WVwGhusRZ5Xrg580@cluster0.h0ddnbq.mongodb.net/auth-demo?retryWrites=true&w=majority');
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(
    client,
    collection,
    filter = {},
    sort = {},
    skip = 0,
    limit = 0
  ) {
    const db = client.db();
    const documents = await db
      .collection(collection)
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .toArray();
    return documents;
  }
export async function deleteDocument(client, collection, filter) {
    const db = client.db();
    const result = await db.collection(collection).deleteOne({ _id: new ObjectId(filter._id) });
    return result;
}

export async function updateDocument(client, collection, documentId, updatedDocument) {
    const db = client.db();

    // Ensure the password is hashed before updating the document
    if (updatedDocument.password) {
        updatedDocument.password = await hashPassword(updatedDocument.password);
    }

    const result = await db.collection(collection).updateOne(
        { _id: new ObjectId(documentId) },
        { $set: updatedDocument }
    );
    return result;
}
export async function getDocumentById(client, collection, documentId) {
    const db = client.db();
    const document = await db.collection(collection).findOne({ _id: new ObjectId(documentId) });
    return document;
}
export async function hashPassword(password) {
    console.log('Calling hashPassword function'); // Add this log
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
  }