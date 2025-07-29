import { query } from ".";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const result = await query("SELECT id, email, username FROM users");
  return result.rows;
}

export async function getUserById(id: number): Promise<User | null> {
  const result = await query(
    "SELECT id, email, username FROM users WHERE id = $1",
    [id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  return <User>result.rows[0];
}

export async function createUser({ email, username }: CreateUserDto): Promise<User> {
  const result = await query(
    "INSERT INTO users (email, username) VALUES ($1, $2)",
    [email, username]
  );

  return result.rows[0];
}
