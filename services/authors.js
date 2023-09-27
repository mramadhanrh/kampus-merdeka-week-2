import Authors from "../models/authors.js";

export const findById = async (id) => {
  return await Authors.findOne({
    where: { id },
    attributes: ["firstName", "lastName"],
  });
};

export const createAuthor = async (
  firstName,
  lastName,
  birthDate,
  nationality
) => {
  return await Authors.create({
    firstName,
    lastName,
    birthDate,
    nationality,
  });
};
