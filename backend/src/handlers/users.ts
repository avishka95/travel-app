import { Request, Response, NextFunction } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";
import {
  getUserById as getUserByIdDb,
  createUser as createUserDb,
} from "../db/usersModel";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import { callSearchNearby } from "../google-maps/places";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export async function getUserById(
  request: Request<{ id: number }>,
  response: Response
) {
  const user: User | null = await getUserByIdDb(request.params.id);
    if (user === null) {
        throw new EntityNotFoundError("User not found", 404, "ERR_NF");
    }
  response.send(user);
}

export async function createUser(
  request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) {
  console.log("request.body", request.body);
  const user = await createUserDb(request.body);
  response.status(201).send(user);
}
