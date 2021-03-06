package com.ncu.bookstore.dao;

import com.ncu.bookstore.entity.BookType;

import java.util.List;

/**
 * Created by Tomorrow on 2019/4/28/028
 */
public interface BookTypeMapper {
    int insertBookType(BookType bookType);
    List<BookType> selectAllType();
    List<BookType> selectBookType(BookType bookType);
    int deleteBookType(BookType bookType);
    int updateBookType(BookType bookType);
}
