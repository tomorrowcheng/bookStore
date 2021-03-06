package com.ncu.bookstore.dao;

import com.ncu.bookstore.entity.BookInfo;

import java.util.List;

/**
 * Created by Tomorrow on 2019/4/29/029
 */
public interface BookInfoMapper {
    int insertBookInfo(BookInfo bookInfo);
    int deleteBookInfo(BookInfo bookInfo);
    int updateBookInfo(BookInfo bookInfo);
    List<BookInfo> selectAllBookInfo();
    List<BookInfo> selectBookInfo(BookInfo bookInfo);
}
