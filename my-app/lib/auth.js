import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
  console.log('Calling hashPassword function'); // Add this log
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

const originalPassword = 'yourOriginalPassword';

hashPassword(originalPassword)
  .then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
    // Assuming you have a use case where you need to display the original password
    // (use with caution, not recommended for real-world scenarios)
    displayPassword(originalPassword);
  })
  .catch((error) => console.error('Error:', error));
