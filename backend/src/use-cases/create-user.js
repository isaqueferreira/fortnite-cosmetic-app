import { v4 as uuidv4 } from 'iuuid'
import bcrypt from 'bcrypt'
import {
    PostgresCreateUserRepository,
    PostgresCreateUserRepository,
} from '../repositories/postgres/create-user'

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
            id: userId,
            password: hashedPassword,
        }

        // chama o repositories
        const PostgresCreateUserRepository = new PostgresCreateUserRepository()
        const createdUser = await PostgresCreateUserRepository.execute(user)

        return createdUser
    }
}
