import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresCreateUserRepository {
    async execute(createUserParams) {
        // cria usuário no banco
        await PostgresHelper.query(
            'INSERT INTO users (id, username, email, password, vbucks_balance,  created_at) VALUES ($1, $2, $3, $4, $5, $6)',
            [
                createUserParams.id,
                createUserParams.username,
                createUserParams.email,
                createUserParams.password,
                createUserParams.vbucks_balance,
                createUserParams.created_at,
            ],
        )

        const createdUser = await PostgresHelper.query(
            'SELECT * FROM users WHERE id = $1',
            [createUserParams.id],
        )

        return createdUser[0]
    }
}
