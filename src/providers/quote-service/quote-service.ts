import {Injectable} from '@angular/core';
import {Quote} from "../../data/quote.interface";

/*
  Generated class for the QuoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuoteServiceProvider {

  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
      return quoteElement.id == quote.id;
    });

    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteElement: Quote) => {
      return quoteElement.id == quote.id;
    });
  }
}
