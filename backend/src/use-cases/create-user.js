import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js'

export class CreateUserUseCase {
    async execute(createUserParams) {
        // verifica se o email está em uso
        // gerar id do usuário
        const userId = uuidv4()
        // criptografa a senha
        const hashedPassword = await bcrypt.hash(createUserParams.password, 10)
        // inserir o usuário no banco de dados
        const user = {
            ...createUserParams,
            vbucks_balance: 10000,
            created_at: new Date(),
            id: userId,
            password: hashedPassword,
        }

        // chama o repositories
        const postgresCreateUserRepository = new PostgresCreateUserRepository()
        const createdUser = await postgresCreateUserRepository.execute(user)

        return createdUser
    }
}
