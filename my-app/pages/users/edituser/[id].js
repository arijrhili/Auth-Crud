// pages/users/edituser/[id].js
import EditUserForm from "@/components/users/EditUserForm";
import { getDocumentById, connectToDatabase } from "../../../lib/db";

export default function EditUser({ user }) {
  return (
    <>
      <EditUserForm user={user} onUpdate={() => {}} />
    </>
  );
}

export async function getServerSideProps(context) {
  const userId = context.params.id;
  const client = await connectToDatabase(); // Use your actual connection method
  const user = await getDocumentById(client, "users", userId);

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)), // Ensure it's serializable
    },
  };
}
