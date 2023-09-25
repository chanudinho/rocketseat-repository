import { getRepository, getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const categoryRepository = getRepository(Category);

    if (type === 'outcome') {
      const { total } = await transactionRepository.getBalance();
      if (total - value < 0) {
        throw new AppError('The balance is not enough', 400);
      }
    }

    let categoryExists;

    if (category) {
      categoryExists = await categoryRepository.findOne({
        where: { title: category },
      });

      if (!categoryExists) {
        categoryExists = categoryRepository.create({
          title: category,
        });

        await categoryRepository.save(categoryExists);
      }
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category: categoryExists,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
