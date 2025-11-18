import { PostgresHelper } from '../../db/postgres/helper'

export class PostgresCreateUserRepository {
    async execute(createUserParams) {
        // create user in postgres
        const results = await PostgresHelper.query(
            'INSERT INTO users (ID, username, email, password, vbucks_balance,  created_at) VALUES ($1, $2, $3, $4, $5, $6)',
            [
                createUserParams.ID,
                createUserParams.username,
                createUserParams.email,
                createUserParams.password,
                createUserParams.vbucks_balance,
                createUserParams.created_at,
            ],
        )

        return results[0]
    }
}
