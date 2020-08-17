import { BookCategory } from './BookCategory';

export class BookInformation
{
bookId: number;
title:String;
author:String;
description:String;
rating:number;
isbnNumber:String;
publishDate:String;
lastUpdateTime:String;
price:number;
category :BookCategory=new BookCategory();
}