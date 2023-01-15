import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}
  // inject bookRepository
  create(createBookDto: CreateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.title = createBookDto.title;
    book.description = createBookDto.description;
    book.price = createBookDto.price;
    book.author = createBookDto.author;
    return this.bookRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: string) {
    return this.bookRepository.findOneById(id);
    // return `TODO`;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const book: Book = new Book();
    book.title = updateBookDto.title;
    book.description = updateBookDto.description;
    book.price = updateBookDto.price;
    book.author = updateBookDto.author;
    book.id = id;
    return this.bookRepository.update(id, book);
  }

  remove(id: string) {
    return this.bookRepository.delete(id);
  }
}
