// api/auth/signup.js

import { hashPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { email, password } = data;

    if (!email || !email.includes('@') || !password || password.trim().length < 7) {
      console.error('Invalid input:', data);
      res.status(422).json({ message: 'Invalid input - password should also be at least 7 characters long' });
      return;
    }

    const client = await connectToDatabase();

    try {
      const db = client.db();

      const existingUser = await db.collection('users').findOne({ email: email });
      if (existingUser) {
        console.error('User exists already:', email);
        res.status(422).json({ message: 'User exists already!' });
        return;
      }

      const hashedPassword = await hashPassword(password);
      console.log('Hashed Password:', hashedPassword);

      const result = await db.collection('users').insertOne({
        email: email,
        password: hashedPassword,
      });

      console.log('User created:', email);

      // Send a response indicating successful user creation
      res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      client.close();
    }
  }
}
